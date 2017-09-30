import * as should from 'should';
import { CacheKeys } from '../../src/index';

describe('index', async () => {

	it('CacheKeys should contain cache and reporting cache keys', async () => {

		should(CacheKeys).be.instanceOf(Object);
		should(CacheKeys).have.properties([
			'OFFER_PAIR_KEY',
			'VERTICAL_KEY',
			'DEVICE_KEY',
			'AFFILIATE_KEY',
			'SUB_KEY',
			'INTERVAL_KEY'
		]);

	});

});
