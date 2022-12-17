import { text_truncate } from "./index";

describe('text_truncate', () => {
	it(`should return the original text when only text is supplied`, () => {
		// GIVEN
		const string = 'We are doing JS string exercises.';

		// WHEN
		const truncatedString = text_truncate(string);

		// THEN
		expect(truncatedString).toEqual(string);
	});

	it(`should return appropriate string when no ending string is provided`, () => {
		// GIVEN
		const string = 'We are doing JS string exercises.';

		// WHEN
		const truncatedString = text_truncate(string, 19);

		// THEN
		expect(truncatedString).toEqual('We are doing JS ...');
	});

	it(`should return appropriate string when ending string is provided`, () => {
		// GIVEN
		const string = 'We are doing JS string exercises.';

		// WHEN
		const truncatedString = text_truncate(string, 15, '!!');

		// THEN
		expect(truncatedString).toEqual('We are doing !!');
	});

	it(`should return appropriate string when empty ending string provided`, () => {
		// GIVEN
		const string = 'We are doing JS string exercises.';

		// WHEN
		const truncatedString = text_truncate(string, 15, '');

		// THEN
		expect(truncatedString).toEqual('We are doing...');
	});

	it(`should throw an error when negative number of characters is provided`, () => {
		// GIVEN
		const string = 'We are doing JS string exercises.';

		// WHEN THEN
		expect(() => text_truncate(string, -10)).toThrow('Number of characters should be non negative');
	});
})