import { dayMapping, ISO_numeric_date } from "./index";

describe('ISO_numeric_date', () => {
	Object.entries(dayMapping).forEach((dayInfo, index) => {
		it(`should return respectibe number for ${dayInfo[0]} day`, () => {
			// GIVEN
			let date = new Date('Mon Sep 26 2022 17:40:33 GMT+0530');
			date.setDate(date.getDate() + index);
	
			// WHEN
			const day = ISO_numeric_date(date);
	
			// THEN
			expect(day).toBe(dayInfo[1]);
		});
	})
});