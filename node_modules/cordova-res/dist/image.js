"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImageConverter = exports.createImageResizer = exports.applyTransformations = exports.generateImage = exports.validatePosition = exports.validateFit = exports.POSITIONS = exports.FITS_WITH_POSITION = exports.FITS = exports.debugSourceImage = exports.readSourceImage = exports.resolveSourceImage = void 0;
const tslib_1 = require("tslib");
const utils_array_1 = require("@ionic/utils-array");
const utils_fs_1 = require("@ionic/utils-fs");
const debug_1 = tslib_1.__importDefault(require("debug"));
const sharp_1 = tslib_1.__importDefault(require("sharp"));
const util_1 = tslib_1.__importDefault(require("util"));
const error_1 = require("./error");
const platform_1 = require("./platform");
const resources_1 = require("./resources");
const debug = debug_1.default('cordova-res:image');
/**
 * Check an array of source files, returning the first viable image.
 */
async function resolveSourceImage(platform, type, sources, errstream) {
    const errors = [];
    for (const source of sources) {
        try {
            return await readSourceImage(platform, type, source, errstream);
        }
        catch (e) {
            errors.push([source, e]);
        }
    }
    for (const [source, error] of errors) {
        debugSourceImage(source, error, errstream);
    }
    const msg = util_1.default.format(`Missing valid source image for %s %s (sources: %s)`, platform_1.prettyPlatform(platform), resources_1.prettyResourceType(type, { pluralize: true }), sources.join(', '));
    throw new error_1.ResolveSourceImageError(msg, errors
        .map(([, error]) => error)
        .filter((e) => e instanceof error_1.ValidationError));
}
exports.resolveSourceImage = resolveSourceImage;
async function readSourceImage(platform, type, src, errstream) {
    const image = sharp_1.default(await utils_fs_1.readFile(src));
    const metadata = await resources_1.validateResource(platform, type, src, image, errstream);
    debug('Source image for %s: %O', type, metadata);
    return {
        platform,
        resource: type,
        type: "raster" /* RASTER */,
        src,
        image: { src, pipeline: image, metadata },
    };
}
exports.readSourceImage = readSourceImage;
function debugSourceImage(src, error, errstream) {
    if (error.code === 'ENOENT') {
        debug('Source file missing: %s', src);
    }
    else {
        errstream === null || errstream === void 0 ? void 0 : errstream.write(util_1.default.format('WARN:\tError with source file %s: %s', src, error) + '\n');
        debug('Error with source file %s: %O', src, error);
    }
}
exports.debugSourceImage = debugSourceImage;
exports.FITS = ['contain', 'cover', 'fill'];
exports.FITS_WITH_POSITION = ['contain', 'cover'];
exports.POSITIONS = [
    'center',
    'top',
    'right top',
    'right',
    'right bottom',
    'bottom',
    'left bottom',
    'left',
    'left top',
];
function validateFit(fit) {
    if (!exports.FITS.includes(fit)) {
        throw new error_1.BadInputError(`Invalid fit: "${fit}" (valid: ${exports.FITS.map(f => `"${f}"`).join(', ')})`);
    }
    return fit;
}
exports.validateFit = validateFit;
function validatePosition(fit, position) {
    if (!exports.FITS_WITH_POSITION.includes(fit) && position !== 'center') {
        throw new error_1.BadInputError(`Cannot use position for fit: "${fit}" (only ${exports.FITS_WITH_POSITION.map(f => `"${f}"`).join(', ')})`);
    }
    if (!exports.POSITIONS.includes(position)) {
        throw new error_1.BadInputError(`Invalid position: "${position}" (valid: ${exports.POSITIONS.map(p => `"${p}"`).join(', ')})`);
    }
    return position;
}
exports.validatePosition = validatePosition;
async function generateImage(image, src, metadata, errstream) {
    if (image.format === "none" /* NONE */) {
        debug('Skipping generation of %o (format=none)', image.src);
        return;
    }
    debug('Generating %o (%ox%o) fit=%o position=%o', image.src, image.width, image.height, image.fit, image.position);
    if (metadata.format !== image.format) {
        errstream === null || errstream === void 0 ? void 0 : errstream.write(util_1.default.format(`WARN:\tMust perform conversion from %s to png.`, metadata.format) + '\n');
    }
    const pipeline = await applyTransformations(src, [
        createImageResizer(image),
        createImageConverter(image.format),
    ]);
    await utils_fs_1.writeFile(image.src, await pipeline.toBuffer());
}
exports.generateImage = generateImage;
async function applyTransformations(src, transformations) {
    return utils_array_1.reduce(transformations, async (pipeline, transformation) => transformation(pipeline), src);
}
exports.applyTransformations = applyTransformations;
function createImageResizer(image) {
    return src => src.resize(image.width, image.height, {
        fit: image.fit,
        position: image.position,
    });
}
exports.createImageResizer = createImageResizer;
function createImageConverter(format) {
    return src => {
        switch (format) {
            case "png" /* PNG */:
                return src.png();
            case "jpeg" /* JPEG */:
                return src.jpeg();
        }
        return src;
    };
}
exports.createImageConverter = createImageConverter;
