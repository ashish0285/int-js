import { thousands_separators } from "./index";

describe('thousands_separators', () => {
	it(`should return the string separated by thousand for integers`, () => {
		// GIVEN
		const listOfNumbers = [10001, 1000000, 100, 0, 1, 1001, 1111];
		const expectedResp = ['10,001', '1,000,000', '100', '0', '1', '1,001', '1,111'];

		// WHEN
		const returnedList = listOfNumbers.map(number => thousands_separators(number));

		// THEN
		expect(returnedList).toEqual(expectedResp);
	});

	it(`should return the string separated by thousand for decimal numbers`, () => {
		// GIVEN
		const listOfNumbers = [10001.10, 1000000.1, 100.11, 0.1, 1.1, 1001.12, 1111.10];
		const expectedResp = ['10,001.1', '1,000,000.1', '100.11', '0.1', '1.1', '1,001.12', '1,111.1'];

		// WHEN
		const returnedList = listOfNumbers.map(number => thousands_separators(number));

		// THEN
		expect(returnedList).toEqual(expectedResp);
	});
})