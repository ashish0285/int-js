import { fibonacciPrintString } from './index';

describe('fibonacciPrintString', () => {
	it('should return appropriate string when the number of terms is 5', () => {
		// GIVEN
		const numberOfTerms = 5;

		// WHEN
		const response = fibonacciPrintString(numberOfTerms);

		// THEN
		expect(response).toEqual(' 0 1 1 2 3');
	})

	it('should return appropriate string when the number of terms is 4', () => {
		// GIVEN
		const numberOfTerms = 4;

		// WHEN
		const response = fibonacciPrintString(numberOfTerms);

		// THEN
		expect(response).toEqual(' 0 1 1 2');
	})

	it('should return appropriate string when the number of terms is 6', () => {
		// GIVEN
		const numberOfTerms = 6;

		// WHEN
		const response = fibonacciPrintString(numberOfTerms);

		// THEN
		expect(response).toEqual(' 0 1 1 2 3 5');
	})

	it('should return appropriate string when the number of terms is 0', () => {
		// GIVEN
		const numberOfTerms = 0;

		// WHEN
		const response = fibonacciPrintString(numberOfTerms);

		// THEN
		expect(response).toEqual('Invalid value for N');
	})

	it('should return appropriate string when the number of terms is 1', () => {
		// GIVEN
		const numberOfTerms = 1;

		// WHEN
		const response = fibonacciPrintString(numberOfTerms);

		// THEN
		expect(response).toEqual(' 0');
	})

	it('should return appropriate string when the number of terms is negative', () => {
		// GIVEN
		const numberOfTerms = -1;

		// WHEN
		const response = fibonacciPrintString(numberOfTerms);

		// THEN
		expect(response).toEqual('Invalid value for N');
	})
})