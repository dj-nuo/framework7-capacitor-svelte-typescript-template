/// <reference types="node" />
import type { Sharp } from 'sharp';
import type { Operations } from '.';
import type { ImageSchema } from './image';
import type { AndroidAdaptiveIconResourceConfig, ColorSource, Format, ImageSource, ImageSourceData, ResolvedImageSource, ResolvedSource, ResourceConfig, SimpleResourceConfig } from './resources';
import { ResourceKey, ResourceType } from './resources';
export declare const enum Platform {
    ANDROID = "android",
    IOS = "ios",
    WINDOWS = "windows"
}
export declare const PLATFORMS: readonly Platform[];
export interface AndroidAdaptiveIconResourcePart {
    readonly [ResourceKey.SRC]: string;
}
export declare type TransformFunction = (image: ImageSchema, pipeline: Sharp) => Promise<Sharp> | Sharp;
export interface ResourceOptions<S> {
    /**
     * Represents the sources to use for this resource.
     *
     * Usually, this is a file path or {@link ImageSource}. In the case of
     * Android Adaptive Icons, this may be a {@link ColorSource}.
     */
    readonly sources: readonly S[];
}
export declare type SimpleResourceOptions = ResourceOptions<string | ImageSource>;
export interface GenerateResourceResult<R> {
    readonly resources: readonly R[];
    readonly source: ResolvedSource;
}
export interface RunPlatformResult<R> {
    readonly resources: readonly R[];
    readonly sources: ResolvedSource[];
}
export interface AdaptiveIconResourceOptions {
    /**
     * Provides options for an optional fallback for Android devices that do not support adaptive icons.
     *
     * @see https://cordova.apache.org/docs/en/dev/config_ref/images.html#adaptive-icons
     */
    icon?: SimpleResourceOptions;
    /**
     * Options for the foreground portion of adaptive icons.
     */
    foreground: SimpleResourceOptions;
    /**
     * Options for the background portion of adaptive icons.
     */
    background: ResourceOptions<string | ImageSource | ColorSource>;
}
export interface RunPlatformOptions {
    readonly [ResourceType.ADAPTIVE_ICON]?: AdaptiveIconResourceOptions;
    readonly [ResourceType.ICON]?: SimpleResourceOptions;
    readonly [ResourceType.SPLASH]?: SimpleResourceOptions;
}
export interface GeneratedImageResource {
    readonly format: Format;
    readonly width: number;
    readonly height: number;
    readonly src: string;
}
export declare type UnconsolidatedGeneratedAndroidAdaptiveIconResource = AndroidAdaptiveIconResourceConfig & GeneratedImageResource;
/**
 * Run resource generation for the given platform.
 */
export declare function run(platform: Platform, resourcesDirectory: string, options: Readonly<RunPlatformOptions>, operations: Required<Operations>, errstream: NodeJS.WritableStream | null): Promise<RunPlatformResult<ResourceConfig>>;
/**
 * Attempt to generate icons or splash screens for any platform.
 *
 * If there are no options given for this resource or if the source images are
 * not suitable, this function resolves with `undefined`.
 */
export declare function safelyGenerateSimpleResources(type: ResourceType.ICON | ResourceType.SPLASH, platform: Platform, resourcesDirectory: string, options: Readonly<SimpleResourceOptions> | undefined, operations: Required<Operations>, errstream: NodeJS.WritableStream | null): Promise<GenerateResourceResult<SimpleResourceConfig> | undefined>;
/**
 * Generate simple icons or splash screens.
 *
 * Icon and Splash Screen generation is "simple" because there's one source
 * image type and one set of resources to generate.
 *
 * If there are no options given for this resource, this function resolves
 * with `undefined`.
 */
export declare function generateSimpleResources(type: ResourceType.ICON | ResourceType.SPLASH, platform: Platform, resourcesDirectory: string, options: Readonly<SimpleResourceOptions> | undefined, operations: Required<Operations>, errstream: NodeJS.WritableStream | null): Promise<GenerateResourceResult<SimpleResourceConfig> | undefined>;
export declare function getResourceTransformFunction(platform: Platform, type: ResourceType, operations: Required<Operations>): TransformFunction;
export declare function combineTransformFunctions(transformations: readonly TransformFunction[]): TransformFunction;
/**
 * Attempt to generate Adaptive Icons for any platform.
 *
 * If there are no options given for this resource or if the platform or
 * source images are not suitable, this function resolves with `undefined`.
 */
export declare function safelyGenerateAdaptiveIconResources(platform: Platform, resourcesDirectory: string, options: Readonly<AdaptiveIconResourceOptions> | undefined, operations: Required<Operations>, errstream: NodeJS.WritableStream | null): Promise<RunPlatformResult<ResourceConfig> | undefined>;
/**
 * Generate Android Adaptive Icons.
 */
export declare function generateAdaptiveIconResources(resourcesDirectory: string, options: Readonly<AdaptiveIconResourceOptions>, operations: Required<Operations>, errstream: NodeJS.WritableStream | null): Promise<RunPlatformResult<ResourceConfig>>;
export declare function consolidateAdaptiveIconResources(foregrounds: readonly UnconsolidatedGeneratedAndroidAdaptiveIconResource[], backgrounds: readonly UnconsolidatedGeneratedAndroidAdaptiveIconResource[]): Promise<AndroidAdaptiveIconResourceConfig[]>;
/**
 * Generate the foreground of Adaptive Icons.
 */
export declare function generateAdaptiveIconResourcesPortion(resourcesDirectory: string, type: ResourceKey.FOREGROUND | ResourceKey.BACKGROUND, sources: readonly (string | ImageSource)[], operations: Required<Operations>, errstream: NodeJS.WritableStream | null): Promise<GenerateResourceResult<UnconsolidatedGeneratedAndroidAdaptiveIconResource>>;
export declare function generateAdaptiveIconResourcesPortionFromImageSource(resourcesDirectory: string, type: ResourceKey.FOREGROUND | ResourceKey.BACKGROUND, source: ResolvedImageSource, operations: Required<Operations>, errstream: NodeJS.WritableStream | null): Promise<UnconsolidatedGeneratedAndroidAdaptiveIconResource[]>;
export declare function getResourceDestination(resourcesDirectory: string, platform: Platform, type: ResourceType, src: string): string;
export declare function generateImageResource(resourcesDirectory: string, image: ImageSourceData, schema: ResourceConfig & ImageSchema, transform: TransformFunction | undefined, errstream: NodeJS.WritableStream | null): Promise<GeneratedImageResource>;
export declare function imageSourceToPath(source: string | ImageSource): string;
export declare function resolveSource(platform: Platform, type: ResourceType, name: string, sources: readonly (string | ImageSource | ColorSource)[], errstream: NodeJS.WritableStream | null): Promise<ResolvedSource>;
export declare function validatePlatforms(platforms: readonly string[]): Platform[];
export declare function filterSupportedPlatforms(platforms: readonly string[]): Platform[];
export declare function isSupportedPlatform(platform: any): platform is Platform;
export declare function prettyPlatform(platform: Platform): string;
