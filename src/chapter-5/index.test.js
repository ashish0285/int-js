import { sumArrays } from "./index";

describe('sumArrays', () => {
	it ('should give correct values when both array1 length is lesser than array2 length', () => {
		// GIVEN
		const array1 = [1, 0, 2, 3, 4],
		array2 = [3, 5, 6, 7, 8, 13];

		// WHEN
		const summedArray = sumArrays(array1, array2);

		// THEN
		expect(summedArray.length).toBe(array2.length);
		expect(summedArray).toEqual([4, 5, 8, 10, 12, 13])
	});

	it ('should give correct values when array1 length is greater than array2 length', () => {
		// GIVEN
		const array2 = [1, 0, 2, 3, 4],
		array1 = [3, 5, 6, 7, 8, 13];

		// WHEN
		const summedArray = sumArrays(array1, array2);

		// THEN
		expect(summedArray.length).toBe(array1.length);
		expect(summedArray).toEqual([4, 5, 8, 10, 12, 13])
	});

	it ('should give correct values when both array length is equal', () => {
		// GIVEN
		const array1 = [1, 0, 2, 3, 4],
		array2 = [3, 5, 6, 7, 8];

		// WHEN
		const summedArray = sumArrays(array1, array2);

		// THEN
		expect(summedArray.length).toBe(array1.length);
		expect(summedArray).toEqual([4, 5, 8, 10, 12])
	});

	it ('should return the empty array when both array length is 0', () => {
		// GIVEN
		const array1 = [],
		array2 = [];

		// WHEN
		const summedArray = sumArrays(array1, array2);

		// THEN
		expect(summedArray.length).toBe(array1.length);
		expect(summedArray).toEqual([])
	});
})