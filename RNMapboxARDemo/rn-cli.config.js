/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * React Native CLI configuration file
 */
'use strict';

const path = require('path');

module.exports = {
  extraNodeModules: {
    // this is really a hack to allow us to resolve deps between the example and ar library
    'react': path.resolve(__dirname, 'node_modules/react'),
    'react-viro': path.resolve(__dirname, 'node_modules/react-viro'),
    'prop-types': path.resolve(__dirname, 'node_modules/prop-types'),
    '@mapbox/react-native-mapbox-ar': path.resolve(__dirname, '../javascript'),
  },

  getProjectRoots() {
    return this._getRoots();
  },

  getAssetRoots() {
    return this._getRoots();
  },

  getAssetExts() {
    return ["obj", "mtl", "JPG", "vrx", "hdr"];
  },

  _getRoots() {
    // match on either path separator
    if (__dirname.match(/node_modules[\/\\]react-native[\/\\]packager$/)) {
      // packager is running from node_modules of another project
      return [path.resolve(__dirname, '../../..')];
    } else if (__dirname.match(/Pods\/React\/packager$/)) {
      // packager is running from node_modules of another project
      return [path.resolve(__dirname, '../../..')];
    } else {
      return [path.resolve(__dirname, '.'), path.resolve(__dirname, '..')];
    }
  },

};
