"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultAdaptiveIconSources = exports.getDefaultSources = exports.parseSource = exports.parseSourceFromArgs = exports.parseAdaptiveIconSourceFromArgs = exports.parseSimpleResourceOptions = exports.parseAdaptiveIconBackgroundOptions = exports.parseAdaptiveIconForegroundOptions = exports.parseAdaptiveIconResourceOptions = exports.parseSkipConfigOption = exports.parseCopyOption = exports.generateNativeProjectConfig = exports.generateRunOptions = exports.generatePlatformProjectOptions = exports.generatePlatformOptions = exports.parsePlatformOption = exports.parseResizeOptions = exports.parseResourcesDirectoryOption = exports.parseOptions = exports.resolveOptions = exports.getDirectory = exports.DEFAULT_POSITION = exports.DEFAULT_FIT = exports.DEFAULT_RESOURCES_DIRECTORY = void 0;
const config_1 = require("./cordova/config");
const error_1 = require("./error");
const image_1 = require("./image");
const platform_1 = require("./platform");
const resources_1 = require("./resources");
const cli_1 = require("./utils/cli");
exports.DEFAULT_RESOURCES_DIRECTORY = 'resources';
exports.DEFAULT_FIT = 'cover';
exports.DEFAULT_POSITION = 'center';
function getDirectory() {
    return process.cwd();
}
exports.getDirectory = getDirectory;
async function resolveOptions(args, config) {
    const doc = config ? config.getroot() : undefined;
    const platform = parsePlatformOption(args);
    const platformList = platform_1.validatePlatforms(platform
        ? [platform]
        : platform_1.filterSupportedPlatforms(doc ? config_1.getPlatforms(doc) : []));
    const parsedOptions = parseOptions(args);
    const { resourcesDirectory } = parsedOptions;
    return {
        ...parsedOptions,
        ...(platformList.length > 0
            ? {
                platforms: generatePlatformOptions(platformList, resourcesDirectory, args),
            }
            : {}),
    };
}
exports.resolveOptions = resolveOptions;
function parseOptions(args) {
    const json = args.includes('--json');
    const platform = parsePlatformOption(args);
    const platformList = platform_1.validatePlatforms(platform ? [platform] : platform_1.PLATFORMS);
    const resourcesDirectory = parseResourcesDirectoryOption(args);
    return {
        directory: getDirectory(),
        resourcesDirectory,
        logstream: json ? process.stderr : process.stdout,
        errstream: process.stderr,
        platforms: generatePlatformOptions(platformList, resourcesDirectory, args),
        projectConfig: generatePlatformProjectOptions(platformList, args),
        skipConfig: parseSkipConfigOption(args),
        copy: parseCopyOption(args),
        operations: parseResizeOptions(args),
    };
}
exports.parseOptions = parseOptions;
function parseResourcesDirectoryOption(args) {
    return cli_1.getOptionValue(args, '--resources', exports.DEFAULT_RESOURCES_DIRECTORY);
}
exports.parseResourcesDirectoryOption = parseResourcesDirectoryOption;
function parseResizeOptions(args) {
    const fit = image_1.validateFit(cli_1.getOptionValue(args, '--fit', exports.DEFAULT_FIT));
    const position = image_1.validatePosition(fit, cli_1.getOptionValue(args, '--position', exports.DEFAULT_POSITION));
    return { fit, position };
}
exports.parseResizeOptions = parseResizeOptions;
function parsePlatformOption(args) {
    const [platform] = args;
    if (!platform || platform.startsWith('-')) {
        return;
    }
    return platform;
}
exports.parsePlatformOption = parsePlatformOption;
function generatePlatformOptions(platforms, resourcesDirectory, args) {
    return platforms.reduce((acc, platform) => {
        acc[platform] = generateRunOptions(platform, resourcesDirectory, args);
        return acc;
    }, {});
}
exports.generatePlatformOptions = generatePlatformOptions;
function generatePlatformProjectOptions(platforms, args) {
    return platforms.reduce((acc, platform) => {
        acc[platform] = generateNativeProjectConfig(platform, args);
        return acc;
    }, {});
}
exports.generatePlatformProjectOptions = generatePlatformProjectOptions;
function generateRunOptions(platform, resourcesDirectory, args) {
    const typeOption = cli_1.getOptionValue(args, '--type');
    const types = resources_1.validateResourceTypes(typeOption ? [typeOption] : resources_1.RESOURCE_TYPES);
    return {
        ["adaptive-icon" /* ADAPTIVE_ICON */]: types.includes("adaptive-icon" /* ADAPTIVE_ICON */)
            ? parseAdaptiveIconResourceOptions(platform, resourcesDirectory, args)
            : undefined,
        ["icon" /* ICON */]: types.includes("icon" /* ICON */)
            ? parseSimpleResourceOptions(platform, "icon" /* ICON */, resourcesDirectory, args)
            : undefined,
        ["splash" /* SPLASH */]: types.includes("splash" /* SPLASH */)
            ? parseSimpleResourceOptions(platform, "splash" /* SPLASH */, resourcesDirectory, args)
            : undefined,
    };
}
exports.generateRunOptions = generateRunOptions;
function generateNativeProjectConfig(platform, args) {
    const directory = cli_1.getOptionValue(args, `--${platform}-project`, platform);
    return { directory };
}
exports.generateNativeProjectConfig = generateNativeProjectConfig;
function parseCopyOption(args) {
    return args.includes('--copy');
}
exports.parseCopyOption = parseCopyOption;
function parseSkipConfigOption(args) {
    return args.includes('--skip-config');
}
exports.parseSkipConfigOption = parseSkipConfigOption;
function parseAdaptiveIconResourceOptions(platform, resourcesDirectory, args) {
    if (platform !== "android" /* ANDROID */) {
        return;
    }
    return {
        icon: parseSimpleResourceOptions(platform, "icon" /* ICON */, resourcesDirectory, args),
        foreground: parseAdaptiveIconForegroundOptions(resourcesDirectory, args),
        background: parseAdaptiveIconBackgroundOptions(resourcesDirectory, args),
    };
}
exports.parseAdaptiveIconResourceOptions = parseAdaptiveIconResourceOptions;
function parseAdaptiveIconForegroundOptions(resourcesDirectory, args) {
    const source = parseAdaptiveIconSourceFromArgs("foreground" /* FOREGROUND */, args);
    if (source && source.type !== "raster" /* RASTER */) {
        throw new error_1.BadInputError('Adaptive icon foreground must be an image.');
    }
    return {
        sources: source
            ? [source]
            : getDefaultAdaptiveIconSources("foreground" /* FOREGROUND */, resourcesDirectory),
    };
}
exports.parseAdaptiveIconForegroundOptions = parseAdaptiveIconForegroundOptions;
function parseAdaptiveIconBackgroundOptions(resourcesDirectory, args) {
    const source = parseAdaptiveIconSourceFromArgs("background" /* BACKGROUND */, args);
    return {
        sources: source
            ? [source]
            : getDefaultAdaptiveIconSources("background" /* BACKGROUND */, resourcesDirectory),
    };
}
exports.parseAdaptiveIconBackgroundOptions = parseAdaptiveIconBackgroundOptions;
function parseSimpleResourceOptions(platform, type, resourcesDirectory, args) {
    const source = parseSourceFromArgs(type, args);
    return {
        sources: source
            ? [source]
            : getDefaultSources(platform, type, resourcesDirectory),
    };
}
exports.parseSimpleResourceOptions = parseSimpleResourceOptions;
function parseAdaptiveIconSourceFromArgs(type, args) {
    const sourceOption = cli_1.getOptionValue(args, `--icon-${type}-source`);
    if (!sourceOption) {
        return;
    }
    return parseSource(sourceOption);
}
exports.parseAdaptiveIconSourceFromArgs = parseAdaptiveIconSourceFromArgs;
function parseSourceFromArgs(type, args) {
    const sourceOption = cli_1.getOptionValue(args, `--${type}-source`);
    if (sourceOption) {
        return sourceOption;
    }
}
exports.parseSourceFromArgs = parseSourceFromArgs;
function parseSource(sourceOption) {
    return sourceOption.startsWith('#')
        ? { type: "color" /* COLOR */, color: sourceOption }
        : { type: "raster" /* RASTER */, src: sourceOption };
}
exports.parseSource = parseSource;
function getDefaultSources(platform, type, resourcesDirectory) {
    return [
        `${resourcesDirectory}/${platform}/${type}.png`,
        `${resourcesDirectory}/${platform}/${type}.jpg`,
        `${resourcesDirectory}/${platform}/${type}.jpeg`,
        `${resourcesDirectory}/${type}.png`,
        `${resourcesDirectory}/${type}.jpg`,
        `${resourcesDirectory}/${type}.jpeg`,
    ];
}
exports.getDefaultSources = getDefaultSources;
function getDefaultAdaptiveIconSources(type, resourcesDirectory) {
    return [
        `${resourcesDirectory}/android/icon-${type}.png`,
        `${resourcesDirectory}/android/icon-${type}.jpg`,
        `${resourcesDirectory}/android/icon-${type}.jpeg`,
    ];
}
exports.getDefaultAdaptiveIconSources = getDefaultAdaptiveIconSources;
