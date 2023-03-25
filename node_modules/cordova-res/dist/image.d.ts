/// <reference types="node" />
import type { Metadata, Sharp } from 'sharp';
import type { Platform } from './platform';
import type { ResolvedImageSource, ResourceType } from './resources';
import { Format } from './resources';
export declare type SharpTransformation = (pipeline: Sharp) => Promise<Sharp> | Sharp;
/**
 * Check an array of source files, returning the first viable image.
 */
export declare function resolveSourceImage(platform: Platform, type: ResourceType, sources: string[], errstream: NodeJS.WritableStream | null): Promise<ResolvedImageSource>;
export declare function readSourceImage(platform: Platform, type: ResourceType, src: string, errstream: NodeJS.WritableStream | null): Promise<ResolvedImageSource>;
export declare function debugSourceImage(src: string, error: NodeJS.ErrnoException, errstream: NodeJS.WritableStream | null): void;
export declare type Fit = 'contain' | 'cover' | 'fill';
export declare type Position = 'center' | 'top' | 'right top' | 'right' | 'right bottom' | 'bottom' | 'left bottom' | 'left' | 'left top';
export declare const FITS: readonly Fit[];
export declare const FITS_WITH_POSITION: readonly Fit[];
export declare const POSITIONS: readonly Position[];
export declare function validateFit(fit: any): Fit;
export declare function validatePosition(fit: Fit, position: any): Position;
export interface ResizeOptions {
    /**
     * When resizing, use this fit algorithm.
     */
    readonly fit?: Fit;
    /**
     * When resizing using a {@link fit} of `cover` or `contain`, use this to position the image.
     */
    readonly position?: Position;
}
export interface ImageSchema extends ResizeOptions {
    readonly src: string;
    readonly format: Format;
    readonly width: number;
    readonly height: number;
}
export declare function generateImage(image: ImageSchema, src: Sharp, metadata: Metadata, errstream: NodeJS.WritableStream | null): Promise<void>;
export declare function applyTransformations(src: Sharp, transformations: readonly SharpTransformation[]): Promise<Sharp>;
export declare function createImageResizer(image: ImageSchema): SharpTransformation;
export declare function createImageConverter(format: Format): SharpTransformation;
