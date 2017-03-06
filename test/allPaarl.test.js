describe('allPaarl', function(){

    it('should countregNmbr.endsWith', function(){
        assert.equal(false, allPaarl('CA'));
    });
    it('should countregNmbr.startsWith', function(){
        // this test will fail - can you fix it?
        assert.equal(false, allPaarl('CY'));
    });
});
