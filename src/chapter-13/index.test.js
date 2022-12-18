import { merge_sort } from "./index";

describe("merge_sort", () => {
	it(`should sort the list with unique elements`, () => {
		// GIVEN
		const list = [3, 2, 1, 7, 6];
        const sortedArray = [1, 2, 3, 6, 7];

		// WHEN
		const result = merge_sort(list, 0, list.length - 1);

		// THEN
		expect(result).toEqual(sortedArray);
	});

	it(`should sort the list with duplicates`, () => {
		// GIVEN
		const list = [2, 2, 1, 7, 7];
        const sortedArray = [1, 2, 2, 7, 7];

		// WHEN
		const result = merge_sort(list, 0, list.length - 1);

		// THEN
		expect(result).toEqual(sortedArray);
	});

	it(`should sort the list with elements in descending order`, () => {
		// GIVEN
		const list = [5, 4, 3, 2, 1, 0, -2];
        const sortedArray = [-2, 0, 1, 2, 3, 4, 5];

		// WHEN
		const result = merge_sort(list, 0, list.length - 1);

		// THEN
		expect(result).toEqual(sortedArray);
	});
});