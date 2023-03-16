// Sinon Mocks
it("tests mock", function () {
  var tc = new TestClass();
  var mock = sinon.mock(tc);
  mock.expects("func").once();
  testCall(tc);
  mock.verify();
});
