#Example
it('tests spies', function(){
 var callback = sinon.spy();
 prodFunction(callback);
 expect(callback).to.have.
 been.called();
});