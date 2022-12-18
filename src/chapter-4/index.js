const calcHCF = (a, b) => {
	if (a != b) {
		const [x, y] = absDifference(Math.abs(a), Math.abs(b));
		const [min, max] = orderNumbers(x, y);
		return calcHCF(min, max);
	}
	return a;
}

const absDifference = (a, b) => {
	return a > b ? [b, a - b] : [a, b - a];
}

const orderNumbers = (a, b) => {
	return a > b ? [b, a] : [a, b];
}

const calcLCM = (a, b) => {
	return (Math.abs(a * b)) / calcHCF(a, b);
}

export const lcm_more_than_two_numbers = (array) => {
	if (array.length < 2)
		throw new Error('Minimum 2 numbers required')
	return array.reduce((lcmAcc, currentValue) => calcLCM(lcmAcc, currentValue), array[0]);
}