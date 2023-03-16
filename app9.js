it("Assert types", function () {
  assert.isTrue(true, "true");
  assert.isNaN(1.1, "NaN");
  assert.exists(foo, "!Exists");
  assert.isArray(obj, "!Array");
});
