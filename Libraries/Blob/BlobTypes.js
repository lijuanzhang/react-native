/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule BlobTypes
 * @flow
 * @format
 */

'use strict';

export type BlobData = {
  blobId: string,
  offset: number,
  size: number,
  name?: string,
  type?: string,
  lastModified?: number,
};

export type BlobOptions = {
  type: string,
  lastModified: number,
};
