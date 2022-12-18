export const dayMapping = {
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thrusday: 4,
	Friday: 5,
	Saturday: 6,
	Sunday: 7
}

export const ISO_numeric_date = date => {
	let utcDay = date.getUTCDay();
	return utcDay === 0 ? 7 : utcDay;
}
