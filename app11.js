var expect =
 require('chai').expect;
var should =
 require('chai').should();
it('likes BDD!', function(){
 var result = productionCall();
 expect(result).to.equal(true);
 result.should.equal(true)