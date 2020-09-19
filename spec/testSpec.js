var dbMethod = require("../method");
var {checkDocument} = require("../testData/checkDocument");
var {insertDocument} = require("../testData/insertDocument");

describe("ORMAE QA", () => {
    it("TC1- Verify empty DB returns null ",  async () => {
        let docCount = dbMethod.countDocuments("collectionName",checkDocument);
        expect(docCount).toBeNull("Empty DB returning value other than null.");
    });
    it("TC2- Verify DB returns non-null value on adding documents", () => {
        dbMethod.insertMany("collectionName",insertDocument);
        let docCount = dbMethod.countDocuments("collectionName",checkDocument);
        expect(docCount).not.toBeNull("DB reutrns null value even on adding documents.");
    });
    it("TC3- Verify the DB result based on search query", () => {
        let docCount = dbMethod.countDocuments("collectionName",checkDocument);
        expect(docCount).toBe(1,"Exactly one document is not returned as part of search");
    });
    it("TC4- Verify total document present in DB", () => {
        let docCount = dbMethod.countDocuments("collectionName",{});
        expect(docCount).toBe(2,"Unexpected count returned as part of search result.");
    })
});