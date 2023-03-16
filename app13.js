//Method Wrapping Spy
it("tests spies", function () {
  var tc = new TestClass();
  sinon.spy(tc, "testFunc");
  tc.testFunc();
  expect(tc.testFunc).to.have.been.called();
});
