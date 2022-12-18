import { checkTypes } from "./index";

describe("checkTypes", () => {
	it(`should return true when same type values are provided`, () => {
		// GIVEN
        const listA = [undefined, '25', 23, null, [], {}];
        const listB = [undefined, '103', 239, null, [], {}];

        // WHEN
        let results=[];
        for(let i=0;i<listA.length;i++ ){
            results.push(checkTypes(listA[i], listB[i]));
        }

		// THEN
		expect(results.every(result => result)).toBe(true);
	});

	it(`should return false when different type values are provided`, () => {
        // GIVEN
        const listA = [null, '25', 23, undefined, [], {}];
        const listB = [undefined, 103, '239', 1, {}, '15'];

        // WHEN
        let results=[];
        for(let i=0;i<listA.length;i++ ){
            results.push(checkTypes(listA[i], listB[i]));
        }
        
		// THEN
		expect(results.every(result => result)).toBe(false);
	});
});