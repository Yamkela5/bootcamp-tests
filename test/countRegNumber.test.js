describe('The countRegNumber', function(){

    it('should count RegNumber that endsWith', function(){
        assert.equal(true, countRegNumber('CY'));
    });
    it('should count RegNumber', function(){
        // this test will fail - can you fix it?
        assert.equal(true, countRegNumber('CA'));
    });
});
