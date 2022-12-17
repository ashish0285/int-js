export const thousands_separators = number => {
	const seperatedNum = number.toString().split(".");
	seperatedNum[0] =	seperatedNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return seperatedNum.join(".");
}
