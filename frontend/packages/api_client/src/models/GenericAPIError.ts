/* tslint:disable */
/* eslint-disable */
/**
 * OpenCraft Instance Manager
 * API for OpenCraft Instance Manager
 *
 * The version of the OpenAPI document: api
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    GenericAPIErrorErrors,
    GenericAPIErrorErrorsFromJSON,
    GenericAPIErrorErrorsFromJSONTyped,
    GenericAPIErrorErrorsToJSON,
} from './';

/**
 * 
 * @export
 * @interface GenericAPIError
 */
export interface GenericAPIError {
    /**
     * 
     * @type {GenericAPIErrorErrors}
     * @memberof GenericAPIError
     */
    errors?: GenericAPIErrorErrors;
}

export function GenericAPIErrorFromJSON(json: any): GenericAPIError {
    return GenericAPIErrorFromJSONTyped(json, false);
}

export function GenericAPIErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericAPIError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : GenericAPIErrorErrorsFromJSON(json['errors']),
    };
}

export function GenericAPIErrorToJSON(value?: GenericAPIError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': GenericAPIErrorErrorsToJSON(value.errors),
    };
}

