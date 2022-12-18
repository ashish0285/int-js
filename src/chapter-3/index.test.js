import { printReport } from "./index";

describe("printReport", () => {

    console.log = jest.fn();

	it("should console correctly", () => {
		// GIVEN
		const studentDetail = {
			David: 80,
			Vinoth: 77,
			Divya: 88,
			Ishitha: 95,
			Thomas: 68,
		};

		//  WHEN
		printReport(studentDetail);

		// THEN
		expect([...console.log.mock.calls]).toEqual([
			["Grade for David :", "B"],
			["Grade for Vinoth :", "C"],
			["Grade for Divya :", "B"],
			["Grade for Ishitha :", "A"],
			["Grade for Thomas :", "D"],
            ["Average Marks: ", 81.6],
			["Overall Grade: ", "B"]
		]);
	});

	it('should throw an error when marks are not valid', () => {
		// GIVEN
		const studentInfo = {
			David: -80,
			Vinoth: 77,
			Divya: 88,
			Ishitha: 95,
			Thomas: 68,
		}

		// WHEN THEN
		expect(() => printReport(studentInfo)).toThrow('Invalid Marks')
	});
});