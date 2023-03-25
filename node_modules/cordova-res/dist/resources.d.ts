/// <reference types="node" />
import type { Metadata, Sharp } from 'sharp';
import { Platform } from './platform';
export declare const enum ResourceType {
    ADAPTIVE_ICON = "adaptive-icon",
    ICON = "icon",
    SPLASH = "splash"
}
export declare const RESOURCE_TYPES: readonly ResourceType[];
export declare const enum SourceType {
    RASTER = "raster",
    COLOR = "color"
}
export interface ImageSource {
    type: SourceType.RASTER;
    /**
     * Path to source image.
     */
    src: string;
}
export interface ColorSource {
    type: SourceType.COLOR;
    /**
     * Hex value.
     */
    color: string;
}
export declare type Source = ImageSource | ColorSource;
export interface ImageSourceData {
    src: string;
    pipeline: Sharp;
    metadata: Metadata;
}
export interface ResolvedImageSource extends ImageSource {
    platform: Platform;
    resource: ResourceType;
    image: ImageSourceData;
}
export interface ResolvedColorSource extends ColorSource {
    platform: Platform;
    resource: ResourceType;
    name: string;
}
export declare type ResolvedSource = ResolvedImageSource | ResolvedColorSource;
export declare const RESOURCE_FORMATS: readonly Format[];
export declare const RESOURCE_RASTER_FORMATS: readonly Format[];
export declare function isResourceFormat(format: any): format is Format;
export declare function isRasterResourceFormat(format: any): format is Format;
export interface RasterResourceSchema {
    /**
     * The expected width.
     */
    width: number;
    /**
     * The expected height.
     */
    height: number;
    /**
     * Whether transparency is allowed or not.
     */
    alpha: boolean;
}
export declare function validateRasterResource(platform: Platform, type: ResourceType, source: string, metadata: Metadata, schema: RasterResourceSchema, errstream: NodeJS.WritableStream | null): Promise<void>;
export declare const COLOR_REGEX: RegExp;
export declare function getRasterResourceSchema(platform: Platform, type: ResourceType): RasterResourceSchema;
export declare function validateResource(platform: Platform, type: ResourceType, source: string, pipeline: Sharp, errstream: NodeJS.WritableStream | null): Promise<Metadata>;
export interface PrettyResourceTypeOptions {
    pluralize?: boolean;
}
export declare function prettyResourceType(type: ResourceType, { pluralize }?: PrettyResourceTypeOptions): string;
export declare const enum Format {
    NONE = "none",
    PNG = "png",
    JPEG = "jpeg"
}
export declare const enum Orientation {
    LANDSCAPE = "landscape",
    PORTRAIT = "portrait"
}
export declare const enum Density {
    LDPI = "ldpi",
    MDPI = "mdpi",
    HDPI = "hdpi",
    XHDPI = "xhdpi",
    XXHDPI = "xxhdpi",
    XXXHDPI = "xxxhdpi",
    LAND_LDPI = "land-ldpi",
    LAND_MDPI = "land-mdpi",
    LAND_HDPI = "land-hdpi",
    LAND_XHDPI = "land-xhdpi",
    LAND_XXHDPI = "land-xxhdpi",
    LAND_XXXHDPI = "land-xxxhdpi",
    PORT_LDPI = "port-ldpi",
    PORT_MDPI = "port-mdpi",
    PORT_HDPI = "port-hdpi",
    PORT_XHDPI = "port-xhdpi",
    PORT_XXHDPI = "port-xxhdpi",
    PORT_XXXHDPI = "port-xxxhdpi"
}
/**
 * @see https://cordova.apache.org/docs/en/latest/config_ref/images.html#windows
 */
export declare const enum Target {
    STORE_LOGO = "StoreLogo",
    SQUARE_30_X_30_LOGO = "Square30x30Logo",
    SQUARE_44_X_44_LOGO = "Square44x44Logo",
    SQUARE_70_X_70_LOGO = "Square70x70Logo",
    SQUARE_71_X_71_LOGO = "Square71x71Logo",
    SQUARE_150_X_150_LOGO = "Square150x150Logo",
    SQUARE_310_X_310_LOGO = "Square310x310Logo",
    WIDE_310_X_150_LOGO = "Wide310x150Logo",
    SPLASH_SCREEN = "SplashScreen"
}
export declare const enum ResourceKey {
    SRC = "src",
    FOREGROUND = "foreground",
    BACKGROUND = "background",
    FORMAT = "format",
    WIDTH = "width",
    HEIGHT = "height",
    DENSITY = "density",
    SCALE = "scale",
    ORIENTATION = "orientation",
    TARGET = "target"
}
export interface ResourceKeyValues {
    readonly [ResourceKey.SRC]: string;
    readonly [ResourceKey.FOREGROUND]: string;
    readonly [ResourceKey.BACKGROUND]: string;
    readonly [ResourceKey.FORMAT]: Format;
    readonly [ResourceKey.WIDTH]: number;
    readonly [ResourceKey.HEIGHT]: number;
    readonly [ResourceKey.DENSITY]: Density;
    readonly [ResourceKey.SCALE]: number;
    readonly [ResourceKey.ORIENTATION]: Orientation;
    readonly [ResourceKey.TARGET]: Target;
}
export declare type ResourceValue = ResourceKeyValues[ResourceKey];
export interface PlatformAndType<P extends Platform, T extends ResourceType> {
    readonly platform: P;
    readonly type: T;
}
export declare type UnknownResource = Partial<ResourceKeyValues> & PlatformAndType<Platform, ResourceType>;
export declare type BaseResourceConfig<P extends Platform, T extends ResourceType, R extends keyof ResourceKeyValues> = {
    [K in R]: ResourceKeyValues[K];
} & PlatformAndType<P, T>;
export declare type ImageResourceKey = ResourceKey.FORMAT | ResourceKey.WIDTH | ResourceKey.HEIGHT;
export declare type AndroidAdaptiveIconResourceConfig = BaseResourceConfig<Platform.ANDROID, ResourceType.ADAPTIVE_ICON, ImageResourceKey | ResourceKey.FOREGROUND | ResourceKey.BACKGROUND | ResourceKey.DENSITY>;
export declare type AndroidIconResourceConfig = BaseResourceConfig<Platform.ANDROID, ResourceType.ICON, ImageResourceKey | ResourceKey.SRC | ResourceKey.DENSITY>;
export declare type AndroidSplashResourceConfig = BaseResourceConfig<Platform.ANDROID, ResourceType.SPLASH, ImageResourceKey | ResourceKey.SRC | ResourceKey.DENSITY | ResourceKey.ORIENTATION>;
export declare type IOSIconResourceConfig = BaseResourceConfig<Platform.IOS, ResourceType.ICON, ImageResourceKey | ResourceKey.SRC | ResourceKey.SCALE>;
export declare type IOSSplashResourceConfig = BaseResourceConfig<Platform.IOS, ResourceType.SPLASH, ImageResourceKey | ResourceKey.SRC | ResourceKey.ORIENTATION | ResourceKey.SCALE>;
export declare type WindowsIconResourceConfig = BaseResourceConfig<Platform.WINDOWS, ResourceType.ICON, ImageResourceKey | ResourceKey.SRC | ResourceKey.TARGET | ResourceKey.SCALE>;
export declare type WindowsSplashResourceConfig = BaseResourceConfig<Platform.WINDOWS, ResourceType.SPLASH, ImageResourceKey | ResourceKey.SRC | ResourceKey.ORIENTATION | ResourceKey.TARGET | ResourceKey.SCALE>;
export declare type SimpleResourceConfig = AndroidIconResourceConfig | AndroidSplashResourceConfig | IOSIconResourceConfig | IOSSplashResourceConfig | WindowsIconResourceConfig | WindowsSplashResourceConfig;
export declare type ResourceConfig = AndroidAdaptiveIconResourceConfig | SimpleResourceConfig;
export declare function validateResourceTypes(types: readonly string[]): ResourceType[];
export declare function isSupportedResourceType(type: any): type is ResourceType;
export declare function getSimpleResources(platform: Platform, type: ResourceType): readonly SimpleResourceConfig[];
export declare function generateScaledWindowsResourceSrc(src: string, factor: number): string;
export declare function generateScaledWindowsResource<T extends WindowsIconResourceConfig | WindowsSplashResourceConfig>(resource: T, factor: number): T;
export declare function generateScaledWindowsResources<T extends WindowsIconResourceConfig | WindowsSplashResourceConfig>(resource: T, factors: readonly number[]): T[];
/**
 * App Icon: App list in start menu, task bar, task manager
 */
export declare const WINDOWS_SQUARE_44_X_44_ICON: WindowsIconResourceConfig;
/**
 * Small tile: Start menu
 */
export declare const WINDOWS_SQUARE_71_X_71_ICON: WindowsIconResourceConfig;
/**
 * Medium Tile: For Start menu, Microsoft Store listing
 */
export declare const WINDOWS_SQUARE_150_X_150_ICON: WindowsIconResourceConfig;
/**
 * Large Tile: Start Menu
 */
export declare const WINDOWS_SQUARE_310_X_310_ICON: WindowsIconResourceConfig;
/**
 * Wide Tile: Start Menu
 */
export declare const WINDOWS_WIDE_310_X_150_LOGO: WindowsIconResourceConfig;
/**
 * Store Logo: App installer, Partner Center, the "Report an app" option in the Store, the "Write a review" option in the Store
 */
export declare const WINDOWS_STORE_LOGO: WindowsIconResourceConfig;
/**
 * @see https://cordova.apache.org/docs/en/latest/config_ref/images.html#windows
 * @see https://docs.microsoft.com/en-us/windows/uwp/design/style/app-icons-and-logos
 * @see https://docs.microsoft.com/en-us/windows/uwp/design/style/app-icons-and-logos#icon-types-locations-and-scale-factors
 */
export declare const WINDOWS_ICON_RESOURCES: readonly WindowsIconResourceConfig[];
export declare const WINDOWS_SPLASH_SCREEN: WindowsSplashResourceConfig;
/**
 * @see https://msdn.microsoft.com/en-us/windows/desktop/hh465338
 * @see https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/index.html#windows-specific-information
 */
export declare const WINDOWS_SPLASH_RESOURCES: readonly WindowsSplashResourceConfig[];
export declare const ANDROID_LDPI_ADAPTIVE_ICON: AndroidAdaptiveIconResourceConfig;
export declare const ANDROID_MDPI_ADAPTIVE_ICON: AndroidAdaptiveIconResourceConfig;
export declare const ANDROID_HDPI_ADAPTIVE_ICON: AndroidAdaptiveIconResourceConfig;
export declare const ANDROID_XHDPI_ADAPTIVE_ICON: AndroidAdaptiveIconResourceConfig;
export declare const ANDROID_XXHDPI_ADAPTIVE_ICON: AndroidAdaptiveIconResourceConfig;
export declare const ANDROID_XXXHDPI_ADAPTIVE_ICON: AndroidAdaptiveIconResourceConfig;
export declare const ANDROID_ADAPTIVE_ICON_RESOURCES: readonly AndroidAdaptiveIconResourceConfig[];
export declare const ANDROID_LDPI_ICON: AndroidIconResourceConfig;
export declare const ANDROID_MDPI_ICON: AndroidIconResourceConfig;
export declare const ANDROID_HDPI_ICON: AndroidIconResourceConfig;
export declare const ANDROID_XHDPI_ICON: AndroidIconResourceConfig;
export declare const ANDROID_XXHDPI_ICON: AndroidIconResourceConfig;
export declare const ANDROID_XXXHDPI_ICON: AndroidIconResourceConfig;
export declare const ANDROID_ICON_RESOURCES: readonly AndroidIconResourceConfig[];
export declare const ANDROID_LAND_LDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_LAND_MDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_LAND_HDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_LAND_XHDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_LAND_XXHDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_LAND_XXXHDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_PORT_LDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_PORT_MDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_PORT_HDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_PORT_XHDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_PORT_XXHDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_PORT_XXXHDPI_SCREEN: AndroidSplashResourceConfig;
export declare const ANDROID_SPLASH_RESOURCES: readonly AndroidSplashResourceConfig[];
/**
 * 20pt Icon
 *
 * - iPhone Notification (iOS 7+)
 * - iPad Notification (iOS 7+)
 */
export declare const IOS_20_PT_ICON: IOSIconResourceConfig;
export declare const IOS_20_PT_2X_ICON: IOSIconResourceConfig;
export declare const IOS_20_PT_3X_ICON: IOSIconResourceConfig;
/**
 * 29pt Icon
 *
 * - iPhone Settings (iOS 7+)
 * - iPad Settings (iOS 7+)
 * - Apple Watch Companion Settings
 * - Apple Watch Notification Center
 */
export declare const IOS_29_PT_ICON: IOSIconResourceConfig;
export declare const IOS_29_PT_2X_ICON: IOSIconResourceConfig;
export declare const IOS_29_PT_3X_ICON: IOSIconResourceConfig;
/**
 * 40pt Icon
 *
 * - iPhone Spotlight (iOS 7+)
 * - iPad Spotlight (iOS 7+)
 * - Apple Watch Home Screen
 */
export declare const IOS_40_PT_ICON: IOSIconResourceConfig;
export declare const IOS_40_PT_2X_ICON: IOSIconResourceConfig;
export declare const IOS_40_PT_3X_ICON: IOSIconResourceConfig;
/**
 * 50pt Icon
 *
 * - iPad Spotlight (iOS 5,6)
 * - Apple Watch Home Screen
 */
export declare const IOS_50_PT_ICON: IOSIconResourceConfig;
export declare const IOS_50_PT_2X_ICON: IOSIconResourceConfig;
/**
 * 57pt Icon
 *
 * - iPhone App (iOS 5,6)
 */
export declare const IOS_57_PT_ICON: IOSIconResourceConfig;
export declare const IOS_57_PT_2X_ICON: IOSIconResourceConfig;
/**
 * 60pt Icon
 *
 * - iPhone App (iOS 7+)
 */
export declare const IOS_60_PT_ICON: IOSIconResourceConfig;
export declare const IOS_60_PT_2X_ICON: IOSIconResourceConfig;
export declare const IOS_60_PT_3X_ICON: IOSIconResourceConfig;
/**
 * 72pt Icon
 *
 * - iPad App (iOS 5,6)
 */
export declare const IOS_72_PT_ICON: IOSIconResourceConfig;
export declare const IOS_72_PT_2X_ICON: IOSIconResourceConfig;
/**
 * 76pt Icon
 *
 * - iPad App (iOS 7+)
 */
export declare const IOS_76_PT_ICON: IOSIconResourceConfig;
export declare const IOS_76_PT_2X_ICON: IOSIconResourceConfig;
/**
 * 83.5pt Icon
 *
 * iPad Pro (12.9-inch)
 */
export declare const IOS_83_5_PT_2X_ICON: IOSIconResourceConfig;
/**
 * 1024px Icon
 *
 * - App Store
 */
export declare const IOS_1024_ICON: IOSIconResourceConfig;
/**
 * 24pt Icon
 *
 * - Apple Watch Notification Center
 */
export declare const IOS_24_PT_ICON: IOSIconResourceConfig;
/**
 * 27.5pt Icon
 *
 * - Apple Watch Notification Center
 */
export declare const IOS_27_5_PT_ICON: IOSIconResourceConfig;
/**
 * 44pt Icon
 *
 * - Apple Watch Home Screen
 */
export declare const IOS_44_PT_2X_ICON: IOSIconResourceConfig;
/**
 * 86pt Icon
 *
 * - Apple Watch Short Look
 */
export declare const IOS_86_PT_2X_ICON: IOSIconResourceConfig;
/**
 * 98pt Icon
 *
 * - Apple Watch Short Look
 */
export declare const IOS_98_PT_2X_ICON: IOSIconResourceConfig;
/**
 * 108pt Icon
 *
 * - Apple Watch Short Look
 */
export declare const IOS_108_PT_2X_ICON: IOSIconResourceConfig;
export declare const IOS_ICON_RESOURCES: readonly IOSIconResourceConfig[];
export declare const IOS_568H_2X_IPHONE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_667H_SPLASH: IOSSplashResourceConfig;
export declare const IOS_2688H_IPHONE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_2688H_LANDSCAPE_IPHONE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_1792H_IPHONE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_1792H_LANDSCAPE_IPHONE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_2436H_SPLASH: IOSSplashResourceConfig;
export declare const IOS_2436H_LANDSCAPE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_736H_SPLASH: IOSSplashResourceConfig;
export declare const IOS_736H_LANDSCAPE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_LANDSCAPE_2X_IPAD_SPLASH: IOSSplashResourceConfig;
export declare const IOS_LANDSCAPE_IPADPRO_SPLASH: IOSSplashResourceConfig;
export declare const IOS_LANDSCAPE_IPAD_SPLASH: IOSSplashResourceConfig;
export declare const IOS_PORTRAIT_2X_IPAD_SPLASH: IOSSplashResourceConfig;
export declare const IOS_PORTRAIT_IPADPRO_SPLASH: IOSSplashResourceConfig;
export declare const IOS_PORTRAIT_IPAD_SPLASH: IOSSplashResourceConfig;
export declare const IOS_2X_IPHONE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_IPHONE_SPLASH: IOSSplashResourceConfig;
export declare const IOS_2X_UNIVERSAL_ANYANY_SPLASH: IOSSplashResourceConfig;
export declare const IOS_SPLASH_RESOURCES: readonly IOSSplashResourceConfig[];
