/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Type } from '../facade/lang';
import { GetterFn, MethodFn, SetterFn } from './types';
export interface PlatformReflectionCapabilities {
    isReflectionEnabled(): boolean;
    factory(type: Type): Function;
    interfaces(type: Type): any[];
    hasLifecycleHook(type: any, lcInterface: any, lcProperty: string): boolean;
    parameters(type: any): any[][];
    annotations(type: any): any[];
    propMetadata(typeOrFunc: any): {
        [key: string]: any[];
    };
    getter(name: string): GetterFn;
    setter(name: string): SetterFn;
    method(name: string): MethodFn;
    importUri(type: any): string;
}