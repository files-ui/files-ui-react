/**
 * Unlike most files in the node-environment-extensions folder this one is not
 * an extension itself but it exposes a function to install config based global
 * behaviors that should be loaded whenever a Node Server or Node Worker are created.
 */
import type { NextConfigComplete } from '../config-shared';
export declare function installGlobalBehaviors(config: NextConfigComplete): void;
