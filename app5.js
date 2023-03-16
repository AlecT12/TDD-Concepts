describe("test_suite", function () {
  before(function () {
    console.log("Before tests");
  });
  it("returns true", function () {
    expect(call()).to.equal(true);
  });
  after(function () {
    console.log("After tests");
  });
});
