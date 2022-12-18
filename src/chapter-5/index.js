export const sumArrays = (array1, array2) => {
	let sumOfArrays = [];
	let ctr1 = 0, ctr2 = 0;
	while (ctr1 < array1.length && ctr2 < array2.length) {
		sumOfArrays.push(array1[ctr1] + array2[ctr2]);
		ctr1++;
		ctr2++;
	}
	while (ctr1 < array1.length) {
		sumOfArrays.push(array1[ctr1]);
		ctr1++;
	}
	while (ctr2 < array2.length) {
		sumOfArrays.push(array2[ctr2]);
		ctr2++;
	}
	return sumOfArrays;
}