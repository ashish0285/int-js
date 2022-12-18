export const merge_sort = (array, low, high) => {
	const mid = Math.floor((low + high) / 2);
	if (low >= high) return array.slice(low, high + 1);
	return combineSortedArrays(merge_sort(array, low, mid), merge_sort(array, mid + 1, high));
}

const combineSortedArrays = (firstArray, secondArray) => {
	let index1 = 0, index2 = 0, finalArray = [];
	while (index1 < firstArray.length && index2 < secondArray.length)
		if (firstArray[index1] < secondArray[index2]) {
            finalArray.push(firstArray[index1]);
			index1++;
		} else {
			finalArray.push(secondArray[index2]);
			index2++;
		}
	
	while (index1 < firstArray.length) {
		finalArray.push(firstArray[index1]);
		index1++;
	}

	while (index2 < secondArray.length) {
		finalArray.push(secondArray[index2]);
		index2++;
	}
	return finalArray;
}
