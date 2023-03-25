/// <reference types="node" />
import et from 'elementtree';
import { Platform } from '../platform';
import type { ResolvedColorSource, ResolvedSource, ResourceConfig, ResourceValue, UnknownResource } from '../resources';
import { ResourceKey, ResourceType } from '../resources';
export declare function getConfigPath(directory: string): string;
export declare function run(resourcesDirectory: string, doc: et.ElementTree, sources: readonly ResolvedSource[], resources: readonly ResourceConfig[], errstream: NodeJS.WritableStream | null): Promise<void>;
export declare function resolveColorsDocument(colorsPath: string): Promise<et.ElementTree>;
export declare function runColorsConfig(colorsPath: string, colors: readonly ResolvedColorSource[]): Promise<void>;
export declare function runConfig(doc: et.ElementTree, resources: readonly ResourceConfig[], errstream: NodeJS.WritableStream | null): void;
export declare function runResource(container: et.Element, resource: ResourceConfig): void;
export declare function resolvePlatformElement(container: et.Element, platform: Platform): et.Element;
/**
 * Query a container for a subelement and create it if it doesn't exist
 */
export declare function resolveElement(container: et.Element, nodeName: string, xpaths: string[]): et.Element;
export declare function conformPath(value: string | number): string;
export declare function resolveAttributeValue(attr: ResourceKey, value: string | number): string;
export declare function resolveAttribute(resource: Partial<UnknownResource>, attr: ResourceKey): string | undefined;
export declare function groupImages(images: readonly ResourceConfig[]): Map<Platform, ResourceConfig[]>;
export declare function read(path: string): Promise<et.ElementTree>;
export declare function write(path: string, doc: et.ElementTree): Promise<void>;
export declare function getPlatforms(container: et.Element): string[];
export declare function getPreference(container: et.Element, name: string): string | undefined;
export declare const enum ResourceKeyType {
    PATH = "path"
}
export declare function getAttributeType(attr: ResourceKey): ResourceKeyType | undefined;
export declare function getResourceXPaths(rules: ResourceConfigXmlRules, resource: Partial<UnknownResource>): string[];
export declare function getIndexAttributeXPathParts(rules: ResourceConfigXmlRules, indexAttribute: ResourceConfigXmlIndex, value: UnknownResource[ResourceKey] | undefined): string[];
export declare function pathValues(inputValue: ResourceValue): ResourceValue[];
export interface PlatformConfigXmlRules {
    /**
     * Sort the resources as per config.xml requirements
     */
    readonly sort: (a: UnknownResource, b: UnknownResource) => -1 | 0 | 1;
}
export declare const RESOURCE_WEIGHTS: {
    [R in ResourceType]: number;
};
export declare const sortResources: (a: UnknownResource, b: UnknownResource) => -1 | 0 | 1;
export declare function getPlatformConfigXmlRules(platform: Platform): PlatformConfigXmlRules;
export interface ResourceConfigXmlIndex {
    readonly key: ResourceKey;
    readonly values?: (inputValue: ResourceValue) => ResourceValue | ResourceValue[];
}
export interface ResourceConfigXmlRules {
    /**
     * XML node name of this resource (e.g. 'icon', 'splash')
     */
    readonly nodeName: string;
    /**
     * An array of resource keys to copy into the XML node as attributes
     */
    readonly nodeAttributes: readonly ResourceKey[];
    /**
     * An array of resource keys to use as an index when generating the XPath(s)
     */
    readonly indexAttributes: ResourceConfigXmlIndex[];
    /**
     * Get whether a resource should be included in the XML or not
     */
    readonly included: (resource: Partial<UnknownResource>) => boolean;
}
export declare function getResourceConfigXmlRules(resource: ResourceConfig): ResourceConfigXmlRules | undefined;
