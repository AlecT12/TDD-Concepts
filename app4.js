var expect = require("chai").expect;
describe("outter", function () {
  describe("inner", function () {
    it("returns true", function () {
      expect(call()).to.equal(true);
    });
  });
});
