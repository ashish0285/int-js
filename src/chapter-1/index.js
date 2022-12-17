export const findSecondSmallestAndLargest = (array=[]) => {
	if (array && array.length <=1) throw new Error('Second Largest and Smallest cannot be found in provided array');
    let [min1, min2, max1, max2] = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MIN_VALUE, Number.MIN_VALUE];
    array.forEach(ele =>{
        if (ele<min1) {
            min2=min1;
            min1=ele;
        } else if ( ele<min2) min2=ele;
        if (ele>max1) {
            max2=max1;
            max1=ele;
        } else if ( ele>max2) max2=ele;
    });
    return [min2, max2];
}