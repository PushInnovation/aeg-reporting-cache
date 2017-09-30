import ReportingCache from './reporting-cache';
import { CacheExpiry, CacheKeys as CacheKeys } from '@adexchange/aeg-cache';
import * as CacheKeysReporting from './cache-keys';
import { IReportingCacheResolveKeyOptions } from './types';

const keys = Object.assign(CacheKeysReporting, CacheKeys);

export { ReportingCache, CacheExpiry, keys as CacheKeys, IReportingCacheResolveKeyOptions };

export default ReportingCache;
