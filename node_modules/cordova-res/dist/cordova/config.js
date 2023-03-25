"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceConfigXmlRules = exports.getPlatformConfigXmlRules = exports.sortResources = exports.RESOURCE_WEIGHTS = exports.pathValues = exports.getIndexAttributeXPathParts = exports.getResourceXPaths = exports.getAttributeType = exports.getPreference = exports.getPlatforms = exports.write = exports.read = exports.groupImages = exports.resolveAttribute = exports.resolveAttributeValue = exports.conformPath = exports.resolveElement = exports.resolvePlatformElement = exports.runResource = exports.runConfig = exports.runColorsConfig = exports.resolveColorsDocument = exports.run = exports.getConfigPath = void 0;
const tslib_1 = require("tslib");
const utils_fs_1 = require("@ionic/utils-fs");
const debug_1 = tslib_1.__importDefault(require("debug"));
const elementtree_1 = tslib_1.__importDefault(require("elementtree"));
const path_1 = tslib_1.__importDefault(require("path"));
const util_1 = tslib_1.__importDefault(require("util"));
const array_1 = require("../utils/array");
const fn_1 = require("../utils/fn");
const debug = debug_1.default('cordova-res:cordova:config');
function getConfigPath(directory) {
    return path_1.default.resolve(directory, 'config.xml');
}
exports.getConfigPath = getConfigPath;
async function run(resourcesDirectory, doc, sources, resources, errstream) {
    const colors = sources.filter((source) => source.type === "color" /* COLOR */);
    if (colors.length > 0) {
        debug('Color sources found--generating colors document.');
        const androidPlatformElement = resolvePlatformElement(doc.getroot(), "android" /* ANDROID */);
        const colorsPath = path_1.default.join(resourcesDirectory, 'values', 'colors.xml');
        await runColorsConfig(colorsPath, colors);
        const resourceFileElement = resolveElement(androidPlatformElement, 'resource-file', [`resource-file[@src='${colorsPath}']`]);
        resourceFileElement.set('src', colorsPath);
        resourceFileElement.set('target', '/app/src/main/res/values/colors.xml');
    }
    runConfig(doc, resources, errstream);
}
exports.run = run;
async function resolveColorsDocument(colorsPath) {
    try {
        return await read(colorsPath);
    }
    catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }
        const element = elementtree_1.default.Element('resources');
        return new elementtree_1.default.ElementTree(element);
    }
}
exports.resolveColorsDocument = resolveColorsDocument;
async function runColorsConfig(colorsPath, colors) {
    await utils_fs_1.ensureDir(path_1.default.dirname(colorsPath));
    const colorsDocument = await resolveColorsDocument(colorsPath);
    const root = colorsDocument.getroot();
    for (const color of colors) {
        let colorElement = root.find(`color[@name='${color.name}']`);
        if (!colorElement) {
            debug('Creating node for %o', color.name);
            colorElement = elementtree_1.default.SubElement(root, 'color');
        }
        colorElement.set('name', color.name);
        colorElement.text = color.color;
    }
    await write(colorsPath, colorsDocument);
}
exports.runColorsConfig = runColorsConfig;
function runConfig(doc, resources, errstream) {
    const root = doc.getroot();
    const orientationPreference = getPreference(root, 'Orientation');
    debug('Orientation preference: %O', orientationPreference);
    const orientation = orientationPreference || 'default';
    if (orientation !== 'default') {
        errstream === null || errstream === void 0 ? void 0 : errstream.write(util_1.default.format(`WARN:\tOrientation preference set to '%s'. Only configuring %s resources.`, orientation, orientation) + '\n');
    }
    const platforms = groupImages(resources);
    for (const [platform, platformResources] of platforms) {
        const rules = getPlatformConfigXmlRules(platform);
        const platformElement = resolvePlatformElement(root, platform);
        const filteredResources = platformResources
            .sort(rules.sort)
            .filter((img) => orientation === 'default' ||
            typeof img.orientation === 'undefined' ||
            img.orientation === orientation);
        for (const resource of filteredResources) {
            runResource(platformElement, resource);
        }
    }
}
exports.runConfig = runConfig;
function runResource(container, resource) {
    const rules = getResourceConfigXmlRules(resource);
    if (!rules || !rules.included(resource)) {
        return;
    }
    const { nodeName, nodeAttributes } = rules;
    const xpaths = getResourceXPaths(rules, resource);
    const imgElement = resolveElement(container, nodeName, xpaths);
    for (const attr of nodeAttributes) {
        const v = resolveAttribute(resource, attr);
        if (v) {
            imgElement.set(attr, v);
        }
    }
}
exports.runResource = runResource;
function resolvePlatformElement(container, platform) {
    const platformElement = resolveElement(container, 'platform', [
        `platform[@name='${platform}']`,
    ]);
    platformElement.set('name', platform);
    return platformElement;
}
exports.resolvePlatformElement = resolvePlatformElement;
/**
 * Query a container for a subelement and create it if it doesn't exist
 */
function resolveElement(container, nodeName, xpaths) {
    for (const xpath of xpaths) {
        const imgElement = container.find(xpath);
        if (imgElement) {
            return imgElement;
        }
    }
    debug('Creating %O node (not found by xpaths: %O)', nodeName, xpaths);
    return elementtree_1.default.SubElement(container, nodeName);
}
exports.resolveElement = resolveElement;
function conformPath(value) {
    return value.toString().replace(/\\/g, '/');
}
exports.conformPath = conformPath;
function resolveAttributeValue(attr, value) {
    const type = getAttributeType(attr);
    return type === "path" /* PATH */ ? conformPath(value) : value.toString();
}
exports.resolveAttributeValue = resolveAttributeValue;
function resolveAttribute(resource, attr) {
    const v = resource[attr];
    if (v) {
        return resolveAttributeValue(attr, v);
    }
}
exports.resolveAttribute = resolveAttribute;
function groupImages(images) {
    const platforms = new Map();
    for (const image of images) {
        let platformImages = platforms.get(image.platform);
        if (!platformImages) {
            platformImages = [];
        }
        platformImages.push(image);
        platforms.set(image.platform, platformImages);
    }
    return platforms;
}
exports.groupImages = groupImages;
async function read(path) {
    const contents = await utils_fs_1.readFile(path, 'utf8');
    const doc = elementtree_1.default.parse(contents);
    return doc;
}
exports.read = read;
async function write(path, doc) {
    // Cordova hard codes an indentation of 4 spaces, so we'll follow.
    const contents = doc.write({ indent: 4 });
    await utils_fs_1.writeFile(path, contents, 'utf8');
}
exports.write = write;
function getPlatforms(container) {
    const platformElements = container.findall('platform');
    const platforms = platformElements.map(el => el.get('name'));
    return platforms.filter((p) => typeof p === 'string');
}
exports.getPlatforms = getPlatforms;
function getPreference(container, name) {
    const preferenceElement = container.find(`preference[@name='${name}']`);
    if (!preferenceElement) {
        return undefined;
    }
    const value = preferenceElement.get('value');
    if (!value) {
        return undefined;
    }
    return value;
}
exports.getPreference = getPreference;
function getAttributeType(attr) {
    if (["foreground" /* FOREGROUND */, "background" /* BACKGROUND */, "src" /* SRC */].includes(attr)) {
        return "path" /* PATH */;
    }
}
exports.getAttributeType = getAttributeType;
function getResourceXPaths(rules, resource) {
    const { nodeName } = rules;
    const indexes = array_1.combinationJoiner(rules.indexAttributes
        .map(indexAttribute => getIndexAttributeXPathParts(rules, indexAttribute, resource[indexAttribute.key]))
        .filter(index => index.length > 0), parts => parts.join(''));
    return indexes.map(index => `${nodeName}${index}`);
}
exports.getResourceXPaths = getResourceXPaths;
function getIndexAttributeXPathParts(rules, indexAttribute, value) {
    const { nodeAttributes } = rules;
    const { key, values } = indexAttribute;
    // If we aren't aware of this key's existence in the XML, we don't want to
    // generate any XPaths for it.
    if (!nodeAttributes.includes(key)) {
        return [];
    }
    if (values) {
        if (typeof value === 'undefined') {
            return [];
        }
        const result = values(value);
        if (Array.isArray(result)) {
            return result.map(v => `[@${key}='${v}']`);
        }
        else {
            return [`[@${key}='${result}']`];
        }
    }
    return [`[@${key}]`];
}
exports.getIndexAttributeXPathParts = getIndexAttributeXPathParts;
function pathValues(inputValue) {
    if (typeof inputValue !== 'string') {
        return [];
    }
    return [inputValue, inputValue.replace(/\//g, '\\')];
}
exports.pathValues = pathValues;
exports.RESOURCE_WEIGHTS = {
    ["adaptive-icon" /* ADAPTIVE_ICON */]: 1,
    ["icon" /* ICON */]: 2,
    ["splash" /* SPLASH */]: 3,
};
exports.sortResources = (a, b) => {
    if (a.type === b.type) {
        return 0;
    }
    return exports.RESOURCE_WEIGHTS[a.type] > exports.RESOURCE_WEIGHTS[b.type] ? 1 : -1;
};
function getPlatformConfigXmlRules(platform) {
    switch (platform) {
        case "android" /* ANDROID */:
            return { sort: exports.sortResources };
        case "ios" /* IOS */:
            return { sort: exports.sortResources };
        case "windows" /* WINDOWS */:
            return { sort: exports.sortResources };
    }
}
exports.getPlatformConfigXmlRules = getPlatformConfigXmlRules;
function getResourceConfigXmlRules(resource) {
    switch (resource.platform) {
        case "android" /* ANDROID */:
            switch (resource.type) {
                case "adaptive-icon" /* ADAPTIVE_ICON */:
                    return {
                        nodeName: 'icon',
                        nodeAttributes: [
                            "foreground" /* FOREGROUND */,
                            "density" /* DENSITY */,
                            "background" /* BACKGROUND */,
                        ],
                        indexAttributes: [
                            { key: "foreground" /* FOREGROUND */ },
                            { key: "background" /* BACKGROUND */ },
                            { key: "density" /* DENSITY */, values: fn_1.identity },
                        ],
                        included: () => true,
                    };
                case "icon" /* ICON */:
                    return {
                        nodeName: 'icon',
                        nodeAttributes: ["src" /* SRC */, "density" /* DENSITY */],
                        indexAttributes: [
                            { key: "src" /* SRC */ },
                            { key: "density" /* DENSITY */, values: fn_1.identity },
                        ],
                        included: () => true,
                    };
                case "splash" /* SPLASH */:
                    return {
                        nodeName: 'splash',
                        nodeAttributes: ["src" /* SRC */, "density" /* DENSITY */],
                        indexAttributes: [{ key: "density" /* DENSITY */, values: fn_1.identity }],
                        included: () => true,
                    };
            }
        case "ios" /* IOS */:
            switch (resource.type) {
                case "icon" /* ICON */:
                    return {
                        nodeName: 'icon',
                        nodeAttributes: [
                            "src" /* SRC */,
                            "width" /* WIDTH */,
                            "height" /* HEIGHT */,
                        ],
                        indexAttributes: [{ key: "src" /* SRC */, values: pathValues }],
                        included: () => true,
                    };
                case "splash" /* SPLASH */:
                    return {
                        nodeName: 'splash',
                        nodeAttributes: [
                            "src" /* SRC */,
                            "width" /* WIDTH */,
                            "height" /* HEIGHT */,
                        ],
                        indexAttributes: [{ key: "src" /* SRC */, values: pathValues }],
                        included: () => true,
                    };
            }
        case "windows" /* WINDOWS */:
            switch (resource.type) {
                case "icon" /* ICON */:
                    return {
                        nodeName: 'icon',
                        nodeAttributes: ["src" /* SRC */, "target" /* TARGET */],
                        indexAttributes: [{ key: "src" /* SRC */, values: pathValues }],
                        included: resource => !!resource.target,
                    };
                case "splash" /* SPLASH */:
                    return {
                        nodeName: 'splash',
                        nodeAttributes: ["src" /* SRC */, "target" /* TARGET */],
                        indexAttributes: [{ key: "src" /* SRC */, values: pathValues }],
                        included: resource => !!resource.target,
                    };
            }
    }
}
exports.getResourceConfigXmlRules = getResourceConfigXmlRules;
