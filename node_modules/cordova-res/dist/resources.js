"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOS_SPLASH_RESOURCES = exports.IOS_2X_UNIVERSAL_ANYANY_SPLASH = exports.IOS_IPHONE_SPLASH = exports.IOS_2X_IPHONE_SPLASH = exports.IOS_PORTRAIT_IPAD_SPLASH = exports.IOS_PORTRAIT_IPADPRO_SPLASH = exports.IOS_PORTRAIT_2X_IPAD_SPLASH = exports.IOS_LANDSCAPE_IPAD_SPLASH = exports.IOS_LANDSCAPE_IPADPRO_SPLASH = exports.IOS_LANDSCAPE_2X_IPAD_SPLASH = exports.IOS_736H_LANDSCAPE_SPLASH = exports.IOS_736H_SPLASH = exports.IOS_2436H_LANDSCAPE_SPLASH = exports.IOS_2436H_SPLASH = exports.IOS_1792H_LANDSCAPE_IPHONE_SPLASH = exports.IOS_1792H_IPHONE_SPLASH = exports.IOS_2688H_LANDSCAPE_IPHONE_SPLASH = exports.IOS_2688H_IPHONE_SPLASH = exports.IOS_667H_SPLASH = exports.IOS_568H_2X_IPHONE_SPLASH = exports.IOS_ICON_RESOURCES = exports.IOS_108_PT_2X_ICON = exports.IOS_98_PT_2X_ICON = exports.IOS_86_PT_2X_ICON = exports.IOS_44_PT_2X_ICON = exports.IOS_27_5_PT_ICON = exports.IOS_24_PT_ICON = exports.IOS_1024_ICON = exports.IOS_83_5_PT_2X_ICON = exports.IOS_76_PT_2X_ICON = exports.IOS_76_PT_ICON = exports.IOS_72_PT_2X_ICON = exports.IOS_72_PT_ICON = exports.IOS_60_PT_3X_ICON = exports.IOS_60_PT_2X_ICON = exports.IOS_60_PT_ICON = exports.IOS_57_PT_2X_ICON = exports.IOS_57_PT_ICON = exports.IOS_50_PT_2X_ICON = exports.IOS_50_PT_ICON = exports.IOS_40_PT_3X_ICON = exports.IOS_40_PT_2X_ICON = exports.IOS_40_PT_ICON = exports.IOS_29_PT_3X_ICON = exports.IOS_29_PT_2X_ICON = exports.IOS_29_PT_ICON = exports.IOS_20_PT_3X_ICON = exports.IOS_20_PT_2X_ICON = exports.IOS_20_PT_ICON = exports.ANDROID_SPLASH_RESOURCES = exports.ANDROID_PORT_XXXHDPI_SCREEN = exports.ANDROID_PORT_XXHDPI_SCREEN = exports.ANDROID_PORT_XHDPI_SCREEN = exports.ANDROID_PORT_HDPI_SCREEN = exports.ANDROID_PORT_MDPI_SCREEN = exports.ANDROID_PORT_LDPI_SCREEN = exports.ANDROID_LAND_XXXHDPI_SCREEN = exports.ANDROID_LAND_XXHDPI_SCREEN = exports.ANDROID_LAND_XHDPI_SCREEN = exports.ANDROID_LAND_HDPI_SCREEN = exports.ANDROID_LAND_MDPI_SCREEN = exports.ANDROID_LAND_LDPI_SCREEN = exports.ANDROID_ICON_RESOURCES = exports.ANDROID_XXXHDPI_ICON = exports.ANDROID_XXHDPI_ICON = exports.ANDROID_XHDPI_ICON = exports.ANDROID_HDPI_ICON = exports.ANDROID_MDPI_ICON = exports.ANDROID_LDPI_ICON = exports.ANDROID_ADAPTIVE_ICON_RESOURCES = exports.ANDROID_XXXHDPI_ADAPTIVE_ICON = exports.ANDROID_XXHDPI_ADAPTIVE_ICON = exports.ANDROID_XHDPI_ADAPTIVE_ICON = exports.ANDROID_HDPI_ADAPTIVE_ICON = exports.ANDROID_MDPI_ADAPTIVE_ICON = exports.ANDROID_LDPI_ADAPTIVE_ICON = exports.WINDOWS_SPLASH_RESOURCES = exports.WINDOWS_SPLASH_SCREEN = exports.WINDOWS_ICON_RESOURCES = exports.WINDOWS_STORE_LOGO = exports.WINDOWS_WIDE_310_X_150_LOGO = exports.WINDOWS_SQUARE_310_X_310_ICON = exports.WINDOWS_SQUARE_150_X_150_ICON = exports.WINDOWS_SQUARE_71_X_71_ICON = exports.WINDOWS_SQUARE_44_X_44_ICON = exports.generateScaledWindowsResources = exports.generateScaledWindowsResource = exports.generateScaledWindowsResourceSrc = exports.getSimpleResources = exports.isSupportedResourceType = exports.validateResourceTypes = exports.prettyResourceType = exports.validateResource = exports.getRasterResourceSchema = exports.COLOR_REGEX = exports.validateRasterResource = exports.isRasterResourceFormat = exports.isResourceFormat = exports.RESOURCE_RASTER_FORMATS = exports.RESOURCE_FORMATS = exports.RESOURCE_TYPES = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const util_1 = tslib_1.__importDefault(require("util"));
const error_1 = require("./error");
const platform_1 = require("./platform");
exports.RESOURCE_TYPES = [
    "adaptive-icon" /* ADAPTIVE_ICON */,
    "icon" /* ICON */,
    "splash" /* SPLASH */,
];
exports.RESOURCE_FORMATS = ["jpeg" /* JPEG */, "png" /* PNG */];
exports.RESOURCE_RASTER_FORMATS = [
    "jpeg" /* JPEG */,
    "png" /* PNG */,
];
function isResourceFormat(format) {
    return exports.RESOURCE_FORMATS.includes(format);
}
exports.isResourceFormat = isResourceFormat;
function isRasterResourceFormat(format) {
    return exports.RESOURCE_RASTER_FORMATS.includes(format);
}
exports.isRasterResourceFormat = isRasterResourceFormat;
async function validateRasterResource(platform, type, source, metadata, schema, errstream) {
    const { format, width, height } = metadata;
    const { width: requiredWidth, height: requiredHeight } = schema;
    if (!format || !isRasterResourceFormat(format)) {
        throw new error_1.ValidationError(util_1.default.format(`The format of source images for %s %s must be one of: (%s) (image format is "%s").`, platform_1.prettyPlatform(platform), prettyResourceType(type, { pluralize: true }), exports.RESOURCE_RASTER_FORMATS.join(', '), format), {
            source,
            type,
            code: "BAD_IMAGE_FORMAT" /* BAD_IMAGE_FORMAT */,
            format,
            requiredFormats: exports.RESOURCE_RASTER_FORMATS,
        });
    }
    if (!width || !height || width < requiredWidth || height < requiredHeight) {
        throw new error_1.ValidationError(util_1.default.format(`The dimensions of source images for %s %s do not meet minimum size requirements: %dx%d (image is %dx%d).`, platform_1.prettyPlatform(platform), prettyResourceType(type, { pluralize: true }), requiredWidth, requiredHeight, width, height), {
            source,
            type,
            code: "BAD_IMAGE_SIZE" /* BAD_IMAGE_SIZE */,
            width,
            height,
            requiredWidth,
            requiredHeight,
        });
    }
    if (!schema.alpha && metadata.hasAlpha) {
        const platformSpecificMessage = platform === "ios" /* IOS */ && type === "icon" /* ICON */
            ? '\n' +
                '\tApple recommends avoiding transparency. See the App Icon Human Interface Guidelines[1] for details. Any transparency in your icon will be filled in with white.\n\n' +
                '\t[1]: https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/\n'
            : '';
        // @see https://github.com/ionic-team/cordova-res/issues/94
        errstream === null || errstream === void 0 ? void 0 : errstream.write(util_1.default.format('WARN:\tSource %s "%s" contains alpha channel, generated %s for %s will not.\n' +
            platformSpecificMessage, prettyResourceType(type), source, prettyResourceType(type, { pluralize: true }), platform_1.prettyPlatform(platform)) + '\n');
    }
}
exports.validateRasterResource = validateRasterResource;
exports.COLOR_REGEX = /^#[A-F0-9]{6}$/;
function getRasterResourceSchema(platform, type) {
    switch (platform) {
        case "android" /* ANDROID */:
            switch (type) {
                case "adaptive-icon" /* ADAPTIVE_ICON */:
                    return {
                        width: 432,
                        height: 432,
                        alpha: true,
                    };
                case "icon" /* ICON */:
                    /**
                     * The Play Store icon is not generated as a resource, but we keep
                     * the requirement 512x512 so it can be used for the Play Store icon.
                     *
                     * @see https://developer.android.com/google-play/resources/icon-design-specifications#attributes
                     */
                    return {
                        width: 512,
                        height: 512,
                        alpha: true,
                    };
                case "splash" /* SPLASH */:
                    /**
                     * The landscape and portrait splash screens for Android have a
                     * maximum respective width and height of 1920, so we require
                     * a source image of 1920x1920.
                     */
                    return {
                        width: 1920,
                        height: 1920,
                        alpha: true,
                    };
            }
        case "ios" /* IOS */:
            switch (type) {
                case "icon" /* ICON */:
                    /**
                     * The App Store icon is generated as a resource. Apple requires App
                     * Store icons to be 1024x1024.
                     *
                     * If alpha channels exist in iOS icons when uploaded to the App
                     * Store, the app may be rejected referencing ITMS-90717.
                     *
                     * @see https://github.com/ionic-team/cordova-res/issues/94
                     */
                    return {
                        width: 1024,
                        height: 1024,
                        alpha: false,
                    };
                case "splash" /* SPLASH */:
                    /**
                     * The 2x universal splash screen is 2732x2732.
                     */
                    return {
                        width: 2732,
                        height: 2732,
                        alpha: true,
                    };
            }
            break;
        case "windows" /* WINDOWS */:
            switch (type) {
                case "icon" /* ICON */:
                    /**
                     * The largest icon for Windows is 310x310. At a maximum scale factor
                     * of 400%, the requirement is 1240x1240.
                     *
                     * @see https://docs.microsoft.com/en-us/windows/uwp/design/style/app-icons-and-logos
                     */
                    return {
                        width: 1240,
                        height: 1240,
                        alpha: true,
                    };
                case "splash" /* SPLASH */:
                    /**
                     * There is only one generated splash screen resource for Windows,
                     * and it is 620x300. At a maximum scale factor of 400%, the
                     * requirement is 2480x1200.
                     *
                     * @see https://msdn.microsoft.com/en-us/windows/desktop/hh465338
                     */
                    return {
                        width: 2480,
                        height: 1200,
                        alpha: true,
                    };
            }
    }
    throw new error_1.BadInputError(`Unsupported platform/resource type combination: ${platform}/${type}`);
}
exports.getRasterResourceSchema = getRasterResourceSchema;
async function validateResource(platform, type, source, pipeline, errstream) {
    const metadata = await pipeline.metadata();
    const schema = getRasterResourceSchema(platform, type);
    await validateRasterResource(platform, type, source, metadata, schema, errstream);
    return metadata;
}
exports.validateResource = validateResource;
function prettyResourceType(type, { pluralize = false } = {}) {
    switch (type) {
        case "adaptive-icon" /* ADAPTIVE_ICON */:
            return 'adaptive icon' + (pluralize ? 's' : '');
        case "icon" /* ICON */:
            return 'icon' + (pluralize ? 's' : '');
        case "splash" /* SPLASH */:
            return 'splash screen' + (pluralize ? 's' : '');
    }
}
exports.prettyResourceType = prettyResourceType;
function validateResourceTypes(types) {
    const result = [];
    for (const type of types) {
        if (!isSupportedResourceType(type)) {
            throw new error_1.BadInputError(`Unsupported resource type: ${type}`);
        }
        result.push(type);
    }
    return result;
}
exports.validateResourceTypes = validateResourceTypes;
function isSupportedResourceType(type) {
    return exports.RESOURCE_TYPES.includes(type);
}
exports.isSupportedResourceType = isSupportedResourceType;
function getSimpleResources(platform, type) {
    switch (platform) {
        case "android" /* ANDROID */:
            switch (type) {
                case "icon" /* ICON */:
                    return exports.ANDROID_ICON_RESOURCES;
                case "splash" /* SPLASH */:
                    return exports.ANDROID_SPLASH_RESOURCES;
            }
            break;
        case "ios" /* IOS */:
            switch (type) {
                case "icon" /* ICON */:
                    return exports.IOS_ICON_RESOURCES;
                case "splash" /* SPLASH */:
                    return exports.IOS_SPLASH_RESOURCES;
            }
            break;
        case "windows" /* WINDOWS */:
            switch (type) {
                case "icon" /* ICON */:
                    return exports.WINDOWS_ICON_RESOURCES;
                case "splash" /* SPLASH */:
                    return exports.WINDOWS_SPLASH_RESOURCES;
            }
            break;
    }
    throw new error_1.BadInputError(`Unsupported platform/resource type combination: ${platform}/${type}`);
}
exports.getSimpleResources = getSimpleResources;
function generateScaledWindowsResourceSrc(src, factor) {
    const { dir, name, ext } = path_1.default.parse(src);
    return path_1.default.posix.join(dir, `${name}.scale-${factor * 100}${ext}`);
}
exports.generateScaledWindowsResourceSrc = generateScaledWindowsResourceSrc;
function generateScaledWindowsResource(resource, factor) {
    if (resource.scale !== 1) {
        throw new Error('Cannot generate scaled resource from scaled resource.');
    }
    return {
        ...resource,
        src: generateScaledWindowsResourceSrc(resource.src, factor),
        format: "png" /* PNG */,
        target: undefined,
        width: Math.round(resource.width * factor),
        height: Math.round(resource.height * factor),
        scale: factor,
    };
}
exports.generateScaledWindowsResource = generateScaledWindowsResource;
function generateScaledWindowsResources(resource, factors) {
    return factors.map(factor => generateScaledWindowsResource(resource, factor));
}
exports.generateScaledWindowsResources = generateScaledWindowsResources;
/**
 * App Icon: App list in start menu, task bar, task manager
 */
exports.WINDOWS_SQUARE_44_X_44_ICON = {
    platform: "windows" /* WINDOWS */,
    type: "icon" /* ICON */,
    src: 'Square44x44Logo.png',
    format: "none" /* NONE */,
    width: 44,
    height: 44,
    target: "Square44x44Logo" /* SQUARE_44_X_44_LOGO */,
    scale: 1,
};
/**
 * Small tile: Start menu
 */
exports.WINDOWS_SQUARE_71_X_71_ICON = {
    platform: "windows" /* WINDOWS */,
    type: "icon" /* ICON */,
    src: 'SmallTile.png',
    format: "none" /* NONE */,
    width: 71,
    height: 71,
    target: "Square71x71Logo" /* SQUARE_71_X_71_LOGO */,
    scale: 1,
};
/**
 * Medium Tile: For Start menu, Microsoft Store listing
 */
exports.WINDOWS_SQUARE_150_X_150_ICON = {
    platform: "windows" /* WINDOWS */,
    type: "icon" /* ICON */,
    src: 'Square150x150Logo.png',
    format: "none" /* NONE */,
    width: 150,
    height: 150,
    target: "Square150x150Logo" /* SQUARE_150_X_150_LOGO */,
    scale: 1,
};
/**
 * Large Tile: Start Menu
 */
exports.WINDOWS_SQUARE_310_X_310_ICON = {
    platform: "windows" /* WINDOWS */,
    type: "icon" /* ICON */,
    src: 'Square310x310Logo.png',
    format: "none" /* NONE */,
    width: 310,
    height: 310,
    target: "Square310x310Logo" /* SQUARE_310_X_310_LOGO */,
    scale: 1,
};
/**
 * Wide Tile: Start Menu
 */
exports.WINDOWS_WIDE_310_X_150_LOGO = {
    platform: "windows" /* WINDOWS */,
    type: "icon" /* ICON */,
    src: 'Wide310x150Logo.png',
    format: "none" /* NONE */,
    width: 310,
    height: 150,
    target: "Wide310x150Logo" /* WIDE_310_X_150_LOGO */,
    scale: 1,
};
/**
 * Store Logo: App installer, Partner Center, the "Report an app" option in the Store, the "Write a review" option in the Store
 */
exports.WINDOWS_STORE_LOGO = {
    platform: "windows" /* WINDOWS */,
    type: "icon" /* ICON */,
    src: 'StoreLogo.png',
    format: "none" /* NONE */,
    width: 50,
    height: 50,
    target: "StoreLogo" /* STORE_LOGO */,
    scale: 1,
};
/**
 * @see https://cordova.apache.org/docs/en/latest/config_ref/images.html#windows
 * @see https://docs.microsoft.com/en-us/windows/uwp/design/style/app-icons-and-logos
 * @see https://docs.microsoft.com/en-us/windows/uwp/design/style/app-icons-and-logos#icon-types-locations-and-scale-factors
 */
exports.WINDOWS_ICON_RESOURCES = [
    exports.WINDOWS_SQUARE_44_X_44_ICON,
    ...generateScaledWindowsResources(exports.WINDOWS_SQUARE_44_X_44_ICON, [1, 1.25, 1.4, 1.5, 2, 2.4, 4]),
    exports.WINDOWS_SQUARE_71_X_71_ICON,
    ...generateScaledWindowsResources(exports.WINDOWS_SQUARE_71_X_71_ICON, [1, 1.25, 1.4, 1.5, 2, 2.4, 4]),
    exports.WINDOWS_SQUARE_150_X_150_ICON,
    ...generateScaledWindowsResources(exports.WINDOWS_SQUARE_150_X_150_ICON, [1, 1.25, 1.4, 1.5, 2, 2.4, 4]),
    exports.WINDOWS_SQUARE_310_X_310_ICON,
    ...generateScaledWindowsResources(exports.WINDOWS_SQUARE_310_X_310_ICON, [1, 1.25, 1.4, 1.5, 1.8, 2, 4]),
    exports.WINDOWS_WIDE_310_X_150_LOGO,
    ...generateScaledWindowsResources(exports.WINDOWS_WIDE_310_X_150_LOGO, [0.8, 1, 1.25, 1.4, 1.5, 1.8, 2, 2.4, 4]),
    exports.WINDOWS_STORE_LOGO,
    ...generateScaledWindowsResources(exports.WINDOWS_STORE_LOGO, [1, 1.25, 1.4, 1.5, 1.8, 2, 2.4, 4]),
];
exports.WINDOWS_SPLASH_SCREEN = {
    platform: "windows" /* WINDOWS */,
    type: "splash" /* SPLASH */,
    src: 'Splash.png',
    format: "none" /* NONE */,
    width: 620,
    height: 300,
    orientation: "landscape" /* LANDSCAPE */,
    target: "SplashScreen" /* SPLASH_SCREEN */,
    scale: 1,
};
/**
 * @see https://msdn.microsoft.com/en-us/windows/desktop/hh465338
 * @see https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/index.html#windows-specific-information
 */
exports.WINDOWS_SPLASH_RESOURCES = [
    exports.WINDOWS_SPLASH_SCREEN,
    ...generateScaledWindowsResources(exports.WINDOWS_SPLASH_SCREEN, [1, 1.25, 1.5, 2, 4]),
];
exports.ANDROID_LDPI_ADAPTIVE_ICON = {
    platform: "android" /* ANDROID */,
    type: "adaptive-icon" /* ADAPTIVE_ICON */,
    foreground: 'ldpi-foreground.png',
    background: 'ldpi-background.png',
    format: "png" /* PNG */,
    width: 81,
    height: 81,
    density: "ldpi" /* LDPI */,
};
exports.ANDROID_MDPI_ADAPTIVE_ICON = {
    platform: "android" /* ANDROID */,
    type: "adaptive-icon" /* ADAPTIVE_ICON */,
    foreground: 'mdpi-foreground.png',
    background: 'mdpi-background.png',
    format: "png" /* PNG */,
    width: 108,
    height: 108,
    density: "mdpi" /* MDPI */,
};
exports.ANDROID_HDPI_ADAPTIVE_ICON = {
    foreground: 'hdpi-foreground.png',
    platform: "android" /* ANDROID */,
    type: "adaptive-icon" /* ADAPTIVE_ICON */,
    background: 'hdpi-background.png',
    format: "png" /* PNG */,
    width: 162,
    height: 162,
    density: "hdpi" /* HDPI */,
};
exports.ANDROID_XHDPI_ADAPTIVE_ICON = {
    platform: "android" /* ANDROID */,
    type: "adaptive-icon" /* ADAPTIVE_ICON */,
    foreground: 'xhdpi-foreground.png',
    background: 'xhdpi-background.png',
    format: "png" /* PNG */,
    width: 216,
    height: 216,
    density: "xhdpi" /* XHDPI */,
};
exports.ANDROID_XXHDPI_ADAPTIVE_ICON = {
    platform: "android" /* ANDROID */,
    type: "adaptive-icon" /* ADAPTIVE_ICON */,
    foreground: 'xxhdpi-foreground.png',
    background: 'xxhdpi-background.png',
    format: "png" /* PNG */,
    width: 324,
    height: 324,
    density: "xxhdpi" /* XXHDPI */,
};
exports.ANDROID_XXXHDPI_ADAPTIVE_ICON = {
    platform: "android" /* ANDROID */,
    type: "adaptive-icon" /* ADAPTIVE_ICON */,
    foreground: 'xxxhdpi-foreground.png',
    background: 'xxxhdpi-background.png',
    format: "png" /* PNG */,
    width: 432,
    height: 432,
    density: "xxxhdpi" /* XXXHDPI */,
};
exports.ANDROID_ADAPTIVE_ICON_RESOURCES = [
    exports.ANDROID_LDPI_ADAPTIVE_ICON,
    exports.ANDROID_MDPI_ADAPTIVE_ICON,
    exports.ANDROID_HDPI_ADAPTIVE_ICON,
    exports.ANDROID_XHDPI_ADAPTIVE_ICON,
    exports.ANDROID_XXHDPI_ADAPTIVE_ICON,
    exports.ANDROID_XXXHDPI_ADAPTIVE_ICON,
];
exports.ANDROID_LDPI_ICON = {
    platform: "android" /* ANDROID */,
    type: "icon" /* ICON */,
    src: 'drawable-ldpi-icon.png',
    format: "png" /* PNG */,
    width: 36,
    height: 36,
    density: "ldpi" /* LDPI */,
};
exports.ANDROID_MDPI_ICON = {
    platform: "android" /* ANDROID */,
    type: "icon" /* ICON */,
    src: 'drawable-mdpi-icon.png',
    format: "png" /* PNG */,
    width: 48,
    height: 48,
    density: "mdpi" /* MDPI */,
};
exports.ANDROID_HDPI_ICON = {
    platform: "android" /* ANDROID */,
    type: "icon" /* ICON */,
    src: 'drawable-hdpi-icon.png',
    format: "png" /* PNG */,
    width: 72,
    height: 72,
    density: "hdpi" /* HDPI */,
};
exports.ANDROID_XHDPI_ICON = {
    platform: "android" /* ANDROID */,
    type: "icon" /* ICON */,
    src: 'drawable-xhdpi-icon.png',
    format: "png" /* PNG */,
    width: 96,
    height: 96,
    density: "xhdpi" /* XHDPI */,
};
exports.ANDROID_XXHDPI_ICON = {
    platform: "android" /* ANDROID */,
    type: "icon" /* ICON */,
    src: 'drawable-xxhdpi-icon.png',
    format: "png" /* PNG */,
    width: 144,
    height: 144,
    density: "xxhdpi" /* XXHDPI */,
};
exports.ANDROID_XXXHDPI_ICON = {
    platform: "android" /* ANDROID */,
    type: "icon" /* ICON */,
    src: 'drawable-xxxhdpi-icon.png',
    format: "png" /* PNG */,
    width: 192,
    height: 192,
    density: "xxxhdpi" /* XXXHDPI */,
};
exports.ANDROID_ICON_RESOURCES = [
    exports.ANDROID_LDPI_ICON,
    exports.ANDROID_MDPI_ICON,
    exports.ANDROID_HDPI_ICON,
    exports.ANDROID_XHDPI_ICON,
    exports.ANDROID_XXHDPI_ICON,
    exports.ANDROID_XXXHDPI_ICON,
];
exports.ANDROID_LAND_LDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-land-ldpi-screen.png',
    format: "png" /* PNG */,
    width: 320,
    height: 240,
    density: "land-ldpi" /* LAND_LDPI */,
    orientation: "landscape" /* LANDSCAPE */,
};
exports.ANDROID_LAND_MDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-land-mdpi-screen.png',
    format: "png" /* PNG */,
    width: 480,
    height: 320,
    density: "land-mdpi" /* LAND_MDPI */,
    orientation: "landscape" /* LANDSCAPE */,
};
exports.ANDROID_LAND_HDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-land-hdpi-screen.png',
    format: "png" /* PNG */,
    width: 800,
    height: 480,
    density: "land-hdpi" /* LAND_HDPI */,
    orientation: "landscape" /* LANDSCAPE */,
};
exports.ANDROID_LAND_XHDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-land-xhdpi-screen.png',
    format: "png" /* PNG */,
    width: 1280,
    height: 720,
    density: "land-xhdpi" /* LAND_XHDPI */,
    orientation: "landscape" /* LANDSCAPE */,
};
exports.ANDROID_LAND_XXHDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-land-xxhdpi-screen.png',
    format: "png" /* PNG */,
    width: 1600,
    height: 960,
    density: "land-xxhdpi" /* LAND_XXHDPI */,
    orientation: "landscape" /* LANDSCAPE */,
};
exports.ANDROID_LAND_XXXHDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-land-xxxhdpi-screen.png',
    format: "png" /* PNG */,
    width: 1920,
    height: 1280,
    density: "land-xxxhdpi" /* LAND_XXXHDPI */,
    orientation: "landscape" /* LANDSCAPE */,
};
exports.ANDROID_PORT_LDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-port-ldpi-screen.png',
    format: "png" /* PNG */,
    width: 240,
    height: 320,
    density: "port-ldpi" /* PORT_LDPI */,
    orientation: "portrait" /* PORTRAIT */,
};
exports.ANDROID_PORT_MDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-port-mdpi-screen.png',
    format: "png" /* PNG */,
    width: 320,
    height: 480,
    density: "port-mdpi" /* PORT_MDPI */,
    orientation: "portrait" /* PORTRAIT */,
};
exports.ANDROID_PORT_HDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-port-hdpi-screen.png',
    format: "png" /* PNG */,
    width: 480,
    height: 800,
    density: "port-hdpi" /* PORT_HDPI */,
    orientation: "portrait" /* PORTRAIT */,
};
exports.ANDROID_PORT_XHDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-port-xhdpi-screen.png',
    format: "png" /* PNG */,
    width: 720,
    height: 1280,
    density: "port-xhdpi" /* PORT_XHDPI */,
    orientation: "portrait" /* PORTRAIT */,
};
exports.ANDROID_PORT_XXHDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-port-xxhdpi-screen.png',
    format: "png" /* PNG */,
    width: 960,
    height: 1600,
    density: "port-xxhdpi" /* PORT_XXHDPI */,
    orientation: "portrait" /* PORTRAIT */,
};
exports.ANDROID_PORT_XXXHDPI_SCREEN = {
    platform: "android" /* ANDROID */,
    type: "splash" /* SPLASH */,
    src: 'drawable-port-xxxhdpi-screen.png',
    format: "png" /* PNG */,
    width: 1280,
    height: 1920,
    density: "port-xxxhdpi" /* PORT_XXXHDPI */,
    orientation: "portrait" /* PORTRAIT */,
};
exports.ANDROID_SPLASH_RESOURCES = [
    exports.ANDROID_LAND_LDPI_SCREEN,
    exports.ANDROID_LAND_MDPI_SCREEN,
    exports.ANDROID_LAND_HDPI_SCREEN,
    exports.ANDROID_LAND_XHDPI_SCREEN,
    exports.ANDROID_LAND_XXHDPI_SCREEN,
    exports.ANDROID_LAND_XXXHDPI_SCREEN,
    exports.ANDROID_PORT_LDPI_SCREEN,
    exports.ANDROID_PORT_MDPI_SCREEN,
    exports.ANDROID_PORT_HDPI_SCREEN,
    exports.ANDROID_PORT_XHDPI_SCREEN,
    exports.ANDROID_PORT_XXHDPI_SCREEN,
    exports.ANDROID_PORT_XXXHDPI_SCREEN,
];
/**
 * 20pt Icon
 *
 * - iPhone Notification (iOS 7+)
 * - iPad Notification (iOS 7+)
 */
exports.IOS_20_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-20.png',
    format: "png" /* PNG */,
    width: 20,
    height: 20,
    scale: 1,
};
exports.IOS_20_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-20@2x.png',
    format: "png" /* PNG */,
    width: 40,
    height: 40,
    scale: 2,
};
exports.IOS_20_PT_3X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-20@3x.png',
    format: "png" /* PNG */,
    width: 60,
    height: 60,
    scale: 3,
};
/**
 * 29pt Icon
 *
 * - iPhone Settings (iOS 7+)
 * - iPad Settings (iOS 7+)
 * - Apple Watch Companion Settings
 * - Apple Watch Notification Center
 */
exports.IOS_29_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-29.png',
    format: "png" /* PNG */,
    width: 29,
    height: 29,
    scale: 1,
};
exports.IOS_29_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-29@2x.png',
    format: "png" /* PNG */,
    width: 58,
    height: 58,
    scale: 2,
};
exports.IOS_29_PT_3X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-29@3x.png',
    format: "png" /* PNG */,
    width: 87,
    height: 87,
    scale: 3,
};
/**
 * 40pt Icon
 *
 * - iPhone Spotlight (iOS 7+)
 * - iPad Spotlight (iOS 7+)
 * - Apple Watch Home Screen
 */
exports.IOS_40_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-40.png',
    format: "png" /* PNG */,
    width: 40,
    height: 40,
    scale: 1,
};
exports.IOS_40_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-40@2x.png',
    format: "png" /* PNG */,
    width: 80,
    height: 80,
    scale: 2,
};
exports.IOS_40_PT_3X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-40@3x.png',
    format: "png" /* PNG */,
    width: 120,
    height: 120,
    scale: 3,
};
/**
 * 50pt Icon
 *
 * - iPad Spotlight (iOS 5,6)
 * - Apple Watch Home Screen
 */
exports.IOS_50_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-50.png',
    format: "png" /* PNG */,
    width: 50,
    height: 50,
    scale: 1,
};
exports.IOS_50_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-50@2x.png',
    format: "png" /* PNG */,
    width: 100,
    height: 100,
    scale: 2,
};
/**
 * 57pt Icon
 *
 * - iPhone App (iOS 5,6)
 */
exports.IOS_57_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon.png',
    format: "png" /* PNG */,
    width: 57,
    height: 57,
    scale: 1,
};
exports.IOS_57_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon@2x.png',
    format: "png" /* PNG */,
    width: 114,
    height: 114,
    scale: 2,
};
/**
 * 60pt Icon
 *
 * - iPhone App (iOS 7+)
 */
exports.IOS_60_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-60.png',
    format: "png" /* PNG */,
    width: 60,
    height: 60,
    scale: 1,
};
exports.IOS_60_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-60@2x.png',
    format: "png" /* PNG */,
    width: 120,
    height: 120,
    scale: 2,
};
exports.IOS_60_PT_3X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-60@3x.png',
    format: "png" /* PNG */,
    width: 180,
    height: 180,
    scale: 3,
};
/**
 * 72pt Icon
 *
 * - iPad App (iOS 5,6)
 */
exports.IOS_72_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-72.png',
    format: "png" /* PNG */,
    width: 72,
    height: 72,
    scale: 1,
};
exports.IOS_72_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-72@2x.png',
    format: "png" /* PNG */,
    width: 144,
    height: 144,
    scale: 2,
};
/**
 * 76pt Icon
 *
 * - iPad App (iOS 7+)
 */
exports.IOS_76_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-76.png',
    format: "png" /* PNG */,
    width: 76,
    height: 76,
    scale: 1,
};
exports.IOS_76_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-76@2x.png',
    format: "png" /* PNG */,
    width: 152,
    height: 152,
    scale: 2,
};
/**
 * 83.5pt Icon
 *
 * iPad Pro (12.9-inch)
 */
exports.IOS_83_5_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-83.5@2x.png',
    format: "png" /* PNG */,
    width: 167,
    height: 167,
    scale: 2,
};
/**
 * 1024px Icon
 *
 * - App Store
 */
exports.IOS_1024_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-1024.png',
    format: "png" /* PNG */,
    width: 1024,
    height: 1024,
    scale: 1,
};
/**
 * 24pt Icon
 *
 * - Apple Watch Notification Center
 */
exports.IOS_24_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-24@2x.png',
    format: "png" /* PNG */,
    width: 48,
    height: 48,
    scale: 2,
};
/**
 * 27.5pt Icon
 *
 * - Apple Watch Notification Center
 */
exports.IOS_27_5_PT_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-27.5@2x.png',
    format: "png" /* PNG */,
    width: 55,
    height: 55,
    scale: 2,
};
/**
 * 44pt Icon
 *
 * - Apple Watch Home Screen
 */
exports.IOS_44_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-44@2x.png',
    format: "png" /* PNG */,
    width: 88,
    height: 88,
    scale: 2,
};
/**
 * 86pt Icon
 *
 * - Apple Watch Short Look
 */
exports.IOS_86_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-86@2x.png',
    format: "png" /* PNG */,
    width: 172,
    height: 172,
    scale: 2,
};
/**
 * 98pt Icon
 *
 * - Apple Watch Short Look
 */
exports.IOS_98_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-98@2x.png',
    format: "png" /* PNG */,
    width: 196,
    height: 196,
    scale: 2,
};
/**
 * 108pt Icon
 *
 * - Apple Watch Short Look
 */
exports.IOS_108_PT_2X_ICON = {
    platform: "ios" /* IOS */,
    type: "icon" /* ICON */,
    src: 'icon-108@2x.png',
    format: "png" /* PNG */,
    width: 216,
    height: 216,
    scale: 2,
};
exports.IOS_ICON_RESOURCES = [
    exports.IOS_57_PT_ICON,
    exports.IOS_57_PT_2X_ICON,
    exports.IOS_20_PT_ICON,
    exports.IOS_20_PT_2X_ICON,
    exports.IOS_20_PT_3X_ICON,
    exports.IOS_29_PT_ICON,
    exports.IOS_29_PT_2X_ICON,
    exports.IOS_29_PT_3X_ICON,
    exports.IOS_24_PT_ICON,
    exports.IOS_27_5_PT_ICON,
    exports.IOS_44_PT_2X_ICON,
    exports.IOS_86_PT_2X_ICON,
    exports.IOS_98_PT_2X_ICON,
    exports.IOS_108_PT_2X_ICON,
    exports.IOS_40_PT_ICON,
    exports.IOS_40_PT_2X_ICON,
    exports.IOS_40_PT_3X_ICON,
    exports.IOS_50_PT_ICON,
    exports.IOS_50_PT_2X_ICON,
    exports.IOS_60_PT_ICON,
    exports.IOS_60_PT_2X_ICON,
    exports.IOS_60_PT_3X_ICON,
    exports.IOS_72_PT_ICON,
    exports.IOS_72_PT_2X_ICON,
    exports.IOS_76_PT_ICON,
    exports.IOS_76_PT_2X_ICON,
    exports.IOS_83_5_PT_2X_ICON,
    exports.IOS_1024_ICON,
];
exports.IOS_568H_2X_IPHONE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-568h@2x~iphone.png',
    format: "png" /* PNG */,
    width: 640,
    height: 1136,
    orientation: "portrait" /* PORTRAIT */,
    scale: 2,
};
exports.IOS_667H_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-667h.png',
    format: "png" /* PNG */,
    width: 750,
    height: 1334,
    orientation: "portrait" /* PORTRAIT */,
    scale: 1,
};
exports.IOS_2688H_IPHONE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-2688h~iphone.png',
    format: "png" /* PNG */,
    width: 1242,
    height: 2688,
    orientation: "portrait" /* PORTRAIT */,
    scale: 1,
};
exports.IOS_2688H_LANDSCAPE_IPHONE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Landscape-2688h~iphone.png',
    format: "png" /* PNG */,
    width: 2688,
    height: 1242,
    orientation: "landscape" /* LANDSCAPE */,
    scale: 1,
};
exports.IOS_1792H_IPHONE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-1792h~iphone.png',
    format: "png" /* PNG */,
    width: 828,
    height: 1792,
    orientation: "portrait" /* PORTRAIT */,
    scale: 1,
};
exports.IOS_1792H_LANDSCAPE_IPHONE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Landscape-1792h~iphone.png',
    format: "png" /* PNG */,
    width: 1792,
    height: 828,
    orientation: "landscape" /* LANDSCAPE */,
    scale: 1,
};
exports.IOS_2436H_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-2436h.png',
    format: "png" /* PNG */,
    width: 1125,
    height: 2436,
    orientation: "portrait" /* PORTRAIT */,
    scale: 1,
};
exports.IOS_2436H_LANDSCAPE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Landscape-2436h.png',
    format: "png" /* PNG */,
    width: 2436,
    height: 1125,
    orientation: "landscape" /* LANDSCAPE */,
    scale: 1,
};
exports.IOS_736H_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-736h.png',
    format: "png" /* PNG */,
    width: 1242,
    height: 2208,
    orientation: "portrait" /* PORTRAIT */,
    scale: 1,
};
exports.IOS_736H_LANDSCAPE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Landscape-736h.png',
    format: "png" /* PNG */,
    width: 2208,
    height: 1242,
    orientation: "landscape" /* LANDSCAPE */,
    scale: 1,
};
exports.IOS_LANDSCAPE_2X_IPAD_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Landscape@2x~ipad.png',
    format: "png" /* PNG */,
    width: 2048,
    height: 1536,
    orientation: "landscape" /* LANDSCAPE */,
    scale: 2,
};
exports.IOS_LANDSCAPE_IPADPRO_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Landscape@~ipadpro.png',
    format: "png" /* PNG */,
    width: 2732,
    height: 2048,
    orientation: "landscape" /* LANDSCAPE */,
    scale: 1,
};
exports.IOS_LANDSCAPE_IPAD_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Landscape~ipad.png',
    format: "png" /* PNG */,
    width: 1024,
    height: 768,
    orientation: "landscape" /* LANDSCAPE */,
    scale: 1,
};
exports.IOS_PORTRAIT_2X_IPAD_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Portrait@2x~ipad.png',
    format: "png" /* PNG */,
    width: 1536,
    height: 2048,
    orientation: "portrait" /* PORTRAIT */,
    scale: 2,
};
exports.IOS_PORTRAIT_IPADPRO_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Portrait@~ipadpro.png',
    format: "png" /* PNG */,
    width: 2048,
    height: 2732,
    orientation: "portrait" /* PORTRAIT */,
    scale: 1,
};
exports.IOS_PORTRAIT_IPAD_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default-Portrait~ipad.png',
    format: "png" /* PNG */,
    width: 768,
    height: 1024,
    orientation: "portrait" /* PORTRAIT */,
    scale: 1,
};
exports.IOS_2X_IPHONE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default@2x~iphone.png',
    format: "png" /* PNG */,
    width: 640,
    height: 960,
    orientation: "portrait" /* PORTRAIT */,
    scale: 2,
};
exports.IOS_IPHONE_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default~iphone.png',
    format: "png" /* PNG */,
    width: 320,
    height: 480,
    orientation: "portrait" /* PORTRAIT */,
    scale: 1,
};
exports.IOS_2X_UNIVERSAL_ANYANY_SPLASH = {
    platform: "ios" /* IOS */,
    type: "splash" /* SPLASH */,
    src: 'Default@2x~universal~anyany.png',
    format: "png" /* PNG */,
    width: 2732,
    height: 2732,
    orientation: "portrait" /* PORTRAIT */,
    scale: 2,
};
exports.IOS_SPLASH_RESOURCES = [
    exports.IOS_568H_2X_IPHONE_SPLASH,
    exports.IOS_667H_SPLASH,
    exports.IOS_2688H_IPHONE_SPLASH,
    exports.IOS_2688H_LANDSCAPE_IPHONE_SPLASH,
    exports.IOS_1792H_IPHONE_SPLASH,
    exports.IOS_1792H_LANDSCAPE_IPHONE_SPLASH,
    exports.IOS_2436H_SPLASH,
    exports.IOS_2436H_LANDSCAPE_SPLASH,
    exports.IOS_736H_SPLASH,
    exports.IOS_736H_LANDSCAPE_SPLASH,
    exports.IOS_LANDSCAPE_2X_IPAD_SPLASH,
    exports.IOS_LANDSCAPE_IPADPRO_SPLASH,
    exports.IOS_LANDSCAPE_IPAD_SPLASH,
    exports.IOS_PORTRAIT_2X_IPAD_SPLASH,
    exports.IOS_PORTRAIT_IPADPRO_SPLASH,
    exports.IOS_PORTRAIT_IPAD_SPLASH,
    exports.IOS_2X_IPHONE_SPLASH,
    exports.IOS_IPHONE_SPLASH,
    exports.IOS_2X_UNIVERSAL_ANYANY_SPLASH,
];
