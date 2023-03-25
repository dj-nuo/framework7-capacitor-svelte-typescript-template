import type { ResourceType } from './resources';
export declare const enum ValidationErrorCode {
    BAD_IMAGE_FORMAT = "BAD_IMAGE_FORMAT",
    BAD_IMAGE_SIZE = "BAD_IMAGE_SIZE"
}
export interface BadImageFormatValidationErrorDetails {
    source: string;
    type: ResourceType;
    code: ValidationErrorCode.BAD_IMAGE_FORMAT;
    format: string | undefined;
    requiredFormats: readonly string[];
}
export interface BadImageSizeValidationErrorDetails {
    source: string;
    type: ResourceType;
    code: ValidationErrorCode.BAD_IMAGE_SIZE;
    width: number | undefined;
    height: number | undefined;
    requiredWidth: number;
    requiredHeight: number;
}
export declare type ValidationErrorDetails = BadImageFormatValidationErrorDetails | BadImageSizeValidationErrorDetails;
export declare abstract class BaseError extends Error {
    readonly message: string;
    abstract readonly name: string;
    abstract readonly code: string;
    constructor(message: string);
    toString(): string;
    toJSON(): {
        [key: string]: any;
    };
}
export declare class BadInputError extends BaseError {
    readonly name = "BadInputError";
    readonly code = "BAD_INPUT";
}
export declare class ValidationError extends BaseError {
    readonly message: string;
    readonly details: ValidationErrorDetails;
    readonly name = "ValidationError";
    readonly code = "BAD_SOURCE";
    constructor(message: string, details: ValidationErrorDetails);
    toJSON(): {
        [key: string]: any;
    };
}
export declare class ResolveSourceImageError extends BaseError {
    readonly message: string;
    readonly errors: readonly ValidationError[];
    readonly name = "ResolveSourceImageError";
    readonly code = "BAD_SOURCES";
    constructor(message: string, errors: readonly ValidationError[]);
    toJSON(): {
        [key: string]: any;
    };
}
