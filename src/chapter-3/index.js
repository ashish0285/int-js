const calculateAverage = (studentsDetail) => {
	let sumOfMarks = 0, count=0;
	Object.values(studentsDetail).forEach(marks => {
		if (marks >= 0 && marks <= 100) {
            sumOfMarks += marks;
            count++;
        } else
			throw new Error('Invalid Marks');
	});
	return sumOfMarks / count;
}

const getGrade = (averageMarks) => {
    let grade;
    switch (Math.trunc(averageMarks/10)){
        case 10:
        case 9:
            grade = 'A';
        break;
        case 8:
            grade = 'B';
        break;
        case 7:
            grade = 'C';
        break;
        case 6:
            grade = 'D';
        break;
        default:
            grade = 'F';
    }
	return grade;
}

export const printReport = (studentsDetail) => {
	const averageMarks = calculateAverage(studentsDetail);
	Object.entries(studentsDetail).forEach(studentDetails => {
		const grade = getGrade(studentDetails[1]);
		console.log(`Grade for ${studentDetails[0]} :`, grade);
	});
    console.log('Average Marks: ', averageMarks);
	console.log('Overall Grade: ', getGrade(averageMarks));
}