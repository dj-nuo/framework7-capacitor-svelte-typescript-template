"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveSourceImageError = exports.ValidationError = exports.BadInputError = exports.BaseError = void 0;
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.stack = new Error().stack || '';
        this.message = message;
    }
    toString() {
        return this.message;
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message,
        };
    }
}
exports.BaseError = BaseError;
class BadInputError extends BaseError {
    constructor() {
        super(...arguments);
        this.name = 'BadInputError';
        this.code = 'BAD_INPUT';
    }
}
exports.BadInputError = BadInputError;
class ValidationError extends BaseError {
    constructor(message, details) {
        super(message);
        this.message = message;
        this.details = details;
        this.name = 'ValidationError';
        this.code = 'BAD_SOURCE';
    }
    toJSON() {
        return { ...super.toJSON(), details: this.details };
    }
}
exports.ValidationError = ValidationError;
class ResolveSourceImageError extends BaseError {
    constructor(message, errors) {
        super(message);
        this.message = message;
        this.errors = errors;
        this.name = 'ResolveSourceImageError';
        this.code = 'BAD_SOURCES';
    }
    toJSON() {
        return { ...super.toJSON(), sourceErrors: this.errors };
    }
}
exports.ResolveSourceImageError = ResolveSourceImageError;
