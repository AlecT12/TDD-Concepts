//Method Wrapping Spy
it("tests spies", function () {
  var tc = new TestClass();
  sinon.spy(tc, "testFunc");
  tc.testFunc();
  tc.should.have.been.called();
});
