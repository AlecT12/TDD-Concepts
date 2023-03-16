#Production Code
function str_len( theStr ){
    return theStr.lenght
}
#A Unit Test
it('returns lenght of the srting',
function(){
    testStr = "1"                 //Setup
    result = str_len(testStr)     //Action
    expect(result).to.equal(1)    //Assert
})