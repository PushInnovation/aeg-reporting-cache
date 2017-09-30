import { ICacheResolveKeyOptions } from '@push_innovation/aeg-cache';

export interface IReportingCacheResolveKeyOptions extends ICacheResolveKeyOptions {
	affiliateId?: string;
	sub?: string;
	offerPair?: string;
	vertical?: string;
	device?: string;
}
