/// <reference types="node" />
import { Platform } from './platform';
export interface NativeProjectConfig {
    readonly directory: string;
}
export declare const enum NativeResourceType {
    IOS_ICON = "ios-icon",
    IOS_SPLASH = "ios-splash",
    ANDROID_ADAPTIVE_FOREGROUND = "android-adaptive-foreground",
    ANDROID_ADAPTIVE_BACKGROUND = "android-adaptive-background",
    ANDROID_ROUND = "android-round",
    ANDROID_LEGACY = "android-legacy",
    ANDROID_SPLASH = "android-splash"
}
export interface NativeResource {
    readonly type: NativeResourceType;
    readonly source: string;
    readonly target: string;
}
export declare function copyToNativeProject(platform: Platform, resourcesDirectory: string, nativeProject: NativeProjectConfig, shouldCopyIcons: boolean, shouldCopySplash: boolean, logstream: NodeJS.WritableStream | null, errstream: NodeJS.WritableStream | null): Promise<void>;
