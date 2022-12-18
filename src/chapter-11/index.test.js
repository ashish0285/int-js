import { all_properties } from "./index";

describe("all_properties", () => {
	it(`should provide all methods for a sample object`, () => {
		// GIVEN
		const sampleObject = {
			var1: 2,
			var2: 'some text',
			var3: () => {},
			var4: () => {},
		};

		// WHEN
		const result = all_properties(sampleObject);

		// THEN
		expect(result).toEqual(['var3','var4']);
	});

	it(`should provide all methods for the Array prototype`, () => {
		// GIVEN
		const sampleObject = Array.prototype;
        const expectedList = [
            'constructor',    'concat',   'copyWithin',
            'fill',           'find',     'findIndex',
            'lastIndexOf',    'pop',      'push',
            'reverse',        'shift',    'unshift',
            'slice',          'sort',     'splice',
            'includes',       'indexOf',  'join',
            'keys',           'entries',  'values',
            'forEach',        'filter',   'flat',
            'flatMap',        'map',      'every',
            'some',           'reduce',   'reduceRight',
            'toLocaleString', 'toString', 'at'
          ];

		// WHEN
		const result = all_properties(sampleObject)

		// THEN
		expect(result).toEqual(expectedList);
	});
});