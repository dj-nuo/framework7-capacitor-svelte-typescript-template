"use strict";
const tslib_1 = require("tslib");
const utils_fs_1 = require("@ionic/utils-fs");
const debug_1 = tslib_1.__importDefault(require("debug"));
const path_1 = tslib_1.__importDefault(require("path"));
const util_1 = tslib_1.__importDefault(require("util"));
const cli_1 = require("./cli");
const config_1 = require("./cordova/config");
const error_1 = require("./error");
const native_1 = require("./native");
const platform_1 = require("./platform");
const fn_1 = require("./utils/fn");
const debug = debug_1.default('cordova-res');
async function CordovaRes(options = {}) {
    const defaultOptions = cli_1.parseOptions([]);
    const { directory, resourcesDirectory, logstream, errstream, platforms, projectConfig, skipConfig, copy, operations: { fit = 'cover', position = 'center', transform = (image, pipeline) => pipeline, }, } = { ...defaultOptions, ...options };
    const configPath = config_1.getConfigPath(directory);
    debug('Paths: (config: %O) (resources dir: %O)', configPath, resourcesDirectory);
    let config;
    const resources = [];
    const sources = [];
    if (!skipConfig) {
        if (await utils_fs_1.pathWritable(configPath)) {
            config = await config_1.read(configPath);
        }
        else {
            errstream === null || errstream === void 0 ? void 0 : errstream.write(`WARN:\tNo config.xml file in directory. Skipping config.\n`);
            debug('File missing/not writable: %O', configPath);
        }
    }
    for (const platform of platform_1.PLATFORMS) {
        const platformOptions = platforms[platform];
        const nativeProject = projectConfig[platform];
        if (platformOptions) {
            const platformResult = await platform_1.run(platform, resourcesDirectory, platformOptions, { fit, position, transform }, errstream);
            logstream === null || logstream === void 0 ? void 0 : logstream.write(util_1.default.format(`Generated %s resources for %s`, platformResult.resources.length, platform_1.prettyPlatform(platform)) + '\n');
            resources.push(...platformResult.resources);
            sources.push(...platformResult.sources);
            if (copy && nativeProject) {
                const shouldCopyIcons = resources.findIndex(res => res.type === "icon" /* ICON */ ||
                    res.type === "adaptive-icon" /* ADAPTIVE_ICON */) !== -1;
                const shouldCopySplash = resources.findIndex(res => res.type === "splash" /* SPLASH */) !== -1;
                await native_1.copyToNativeProject(platform, resourcesDirectory, nativeProject, shouldCopyIcons, shouldCopySplash, logstream, errstream);
            }
        }
    }
    if (config) {
        await config_1.run(resourcesDirectory, config, sources, resources, errstream);
        await config_1.write(configPath, config);
        logstream === null || logstream === void 0 ? void 0 : logstream.write(`Wrote to config.xml\n`);
    }
    return {
        resources,
        sources: sources.map(source => {
            switch (source.type) {
                case "raster" /* RASTER */:
                    return {
                        platform: source.platform,
                        resource: source.resource,
                        type: "raster" /* RASTER */,
                        value: source.src,
                    };
                case "color" /* COLOR */:
                    return {
                        platform: source.platform,
                        resource: source.resource,
                        type: "color" /* COLOR */,
                        value: source.color,
                        name: source.name,
                    };
            }
        }),
    };
}
// eslint-disable-next-line @typescript-eslint/no-namespace
(function (CordovaRes) {
    CordovaRes.run = CordovaRes;
    async function runCommandLine(args) {
        if (args.includes('--version') || args.includes('-v')) {
            const pkg = await Promise.resolve().then(() => tslib_1.__importStar(require(path_1.default.resolve(__dirname, '../package.json'))));
            process.stdout.write(pkg.version + '\n');
            return;
        }
        if (args[0] === 'help' || args.includes('--help') || args.includes('-h')) {
            const help = await Promise.resolve().then(() => tslib_1.__importStar(require('./help')));
            return help.run();
        }
        try {
            const directory = cli_1.getDirectory();
            const configPath = config_1.getConfigPath(directory);
            const config = await fn_1.tryFn(() => config_1.read(configPath));
            const options = await cli_1.resolveOptions(args, config);
            const result = await CordovaRes.run(options);
            if (args.includes('--json')) {
                process.stdout.write(JSON.stringify(result, undefined, '\t'));
            }
        }
        catch (e) {
            debug('Caught fatal error: %O', e);
            process.exitCode = 1;
            if (args.includes('--json')) {
                process.stdout.write(JSON.stringify({ error: e instanceof error_1.BaseError ? e : e.toString() }, undefined, '\t'));
            }
            else {
                process.stderr.write(`${e instanceof error_1.BaseError
                    ? `ERROR:\t${e.toString()}`
                    : e.stack
                        ? e.stack
                        : String(e)}\n`);
            }
        }
    }
    CordovaRes.runCommandLine = runCommandLine;
})(CordovaRes || (CordovaRes = {}));
module.exports = CordovaRes;
