const chai	= require('chai');
const expect	= chai.expect;
const request	= require('superagent');
const status	= require('http-status');


describe('9000API',function(){
	it('GET returns hello world',function(done){
		request.get('http://localhost:9001/').end(function(err,res){
		expect(err).to.not.be.an('error');
		expect(res.statusCode).to.equal(status.OK);
		expect(res.text).to.equal('Its over 9000!');
		done();

	});
});
	it('POST verbotten',function(done){
		request.post('http://localhost:9001/')
			.end(function(err,res){
			expect(err).to.be.an('error');
			expect(res.statusCode).to.equal(404);
		done();
		});
	});

});

