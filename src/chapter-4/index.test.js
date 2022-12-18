import { lcm_more_than_two_numbers } from "./index";

describe('lcm_more_than_two_numbers', () => {
	it('should return correct value when the array is [100,90,80,7]', () => {
		// GIVEN
		const array = [100,90,80,7];

		// WHEN
		const response = lcm_more_than_two_numbers(array);

		// THEN
		expect(response).toBe(25200);
	});

	it('should return correct value when the array is [5,10,15,25]', () => {
		// GIVEN
		const array = [5,10,15,25];

		// WHEN
		const response = lcm_more_than_two_numbers(array);

		// THEN
		expect(response).toBe(150);
	});

	it('should throw an error when the array length is less than 2', () => {
		// GIVEN
		const array = [5];

		// WHEN
		expect(() => lcm_more_than_two_numbers(array)).toThrow('Minimum 2 numbers required');
	});
})