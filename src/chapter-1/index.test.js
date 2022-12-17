import { findSecondSmallestAndLargest } from './index';

describe('findSecondSmallestAndLargest', () => {
	it('should assert the correct response for positive test case when there is no duplicate in the array', () => {
		// GIVEN
		const array = [1, 2, 3, 4, 5];
		const response = findSecondSmallestAndLargest(array);
		expect(response).toMatchObject([2,4]);
	})

	it('should assert the correct response for positive test case when there is one duplicate in the array', () => {
		// GIVEN
		const array = [1, 2, 3, 3, 5];
		const response = findSecondSmallestAndLargest(array);
		expect(response).toMatchObject([2,3]);
	})

	it('should assert the correct response for positive test case when there are multiple duplicates in the array', () => {
		// GIVEN
		const array = [2, 2, 3, 3, 3];
		const response = findSecondSmallestAndLargest(array);
		expect(response).toMatchObject([2,3]);
	})
	it('should assert the correct response when the array is of size 1', () => {
		// GIVEN
		const array = [1];
		const errormsg = 'Second Largest and Smallest cannot be found in provided array';
		expect(()=>findSecondSmallestAndLargest(array)).toThrow(errormsg);
		
	})
})