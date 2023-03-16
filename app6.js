describe("test_suite", function () {
  beforeEach(function () {
    console.log("before each");
  });
  it("returns true", function () {
    expect(call()).to.equal(true);
  });
  afterEach(function () {
    console.log("After each");
  });
});
