/// <reference types="node" />
import type { ResizeOptions } from './image';
import type { NativeProjectConfig } from './native';
import type { Platform, RunPlatformOptions, TransformFunction } from './platform';
import type { Density, Orientation } from './resources';
import { SourceType } from './resources';
interface Result {
    resources: ResultResource[];
    sources: ResultSource[];
}
interface ResultResource {
    src?: string;
    dest?: string;
    platform?: Platform;
    width?: number;
    height?: number;
    density?: Density;
    orientation?: Orientation;
    target?: string;
}
interface ResultSource {
    type: SourceType;
    value: string;
}
declare function CordovaRes(options?: CordovaRes.Options): Promise<Result>;
declare namespace CordovaRes {
    const run: typeof CordovaRes;
    type PlatformOptions = {
        [P in Platform]?: RunPlatformOptions;
    };
    type NativeProjectConfigByPlatform = {
        [P in Platform]?: NativeProjectConfig;
    };
    type Operations = ResizeOptions & {
        /**
         * Custom Sharp transform function.
         *
         * This function is called for every resource to allow for advanced image
         * manipulation via the Sharp API.
         *
         * @see https://sharp.pixelplumbing.com
         *
         * @param image The schema that describes the current image.
         * @param pipeline The Sharp object for the current image.
         *
         * @returns Sharp object
         */
        readonly transform?: TransformFunction;
    };
    /**
     * Options for `cordova-res`.
     *
     * Each key may be excluded to use a provided default.
     */
    interface Options {
        /**
         * Operating directory. Usually the root of the project.
         *
         * `cordova-res` operates in the root of a standard Cordova project setup.
         * The specified directory should contain `config.xml` and a resources
         * folder, configured via `resourcesDirectory`.
         */
        readonly directory?: string;
        /**
         * Directory name or absolute path to resources directory.
         *
         * The resources directory contains the source images and generated images
         * of a Cordova project's resources.
         */
        readonly resourcesDirectory?: string;
        /**
         * Specify an alternative output mechanism.
         *
         * `null` may be specified to silence output.
         */
        readonly logstream?: NodeJS.WritableStream | null;
        /**
         * Specify an alternative error output mechanism.
         *
         * `null` may be specified to silence error output.
         */
        readonly errstream?: NodeJS.WritableStream | null;
        /**
         * Resource generation configuration by platform.
         *
         * Each key/value represents the options for a supported platform. If
         * provided, resources are generated in an explicit, opt-in manner.
         */
        readonly platforms?: Readonly<PlatformOptions>;
        /**
         * Config for the native projects by platform.
         */
        readonly projectConfig?: Readonly<NativeProjectConfigByPlatform>;
        /**
         * Do not use the Cordova config.xml file.
         */
        readonly skipConfig?: boolean;
        /**
         * Copy generated resources to native project directories.
         */
        readonly copy?: boolean;
        /**
         * Image manipulation operations.
         */
        readonly operations?: Operations;
    }
    function runCommandLine(args: readonly string[]): Promise<void>;
}
export = CordovaRes;
