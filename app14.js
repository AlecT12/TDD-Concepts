//Sinon Stub
it("tests stub", function () {
  var tc = new TestClass();
  sinon.stub(tc, "testFunc");
  testCall(tc);
  expect(tc.testFunc).to.have.been.called();
});
