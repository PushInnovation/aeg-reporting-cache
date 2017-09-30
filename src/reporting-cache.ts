import { Cache } from '@push_innovation/aeg-cache';
import * as CacheKeys from './cache-keys';
import { IReportingCacheResolveKeyOptions } from './types';

export default class ReportingCache extends Cache {

	/**
	 * Resolve the cache key
	 */
	public resolveKey (interval: string, options: IReportingCacheResolveKeyOptions): string {

		let key = super.resolveKey(interval, options);

		if (options.affiliateId && options.affiliateId !== 'all') {

			key = [key, CacheKeys.AFFILIATE_KEY, options.affiliateId].join(':');

		}

		if (options.sub && options.sub !== 'all') {

			key = [key, CacheKeys.SUB_KEY, options.sub].join(':');

		}

		if (options.offerPair && options.offerPair !== 'all') {

			key = [key, CacheKeys.OFFER_PAIR_KEY, options.offerPair.replace(':', '-')].join(':');

		}

		if (options.vertical && options.vertical !== 'all') {

			key = [key, CacheKeys.VERTICAL_KEY, options.vertical].join(':');

		}

		if (options.device && options.device !== 'all') {

			key = [key, CacheKeys.DEVICE_KEY, options.device].join(':');

		}

		return key;

	}

}
