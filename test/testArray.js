const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');
const getComment = require('../data/getUsers');
const env = require('../endpoint/test');

describe('Calculate users', () => {

    getComment.map((data) => {
        let response;

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        it('Status code is "200 - Success"' , async () => {
            expect(response.statusCode).to.eql(200);
        });

        it('Content-type header exists in response' , async () => {
            expect(response.rawHeaders).to.include('Content-Type');
        });

        it('Content-type header is "application/json; charset=utf-8"' , async () => {
            expect(response.rawHeaders).to.include('application/json; charset=utf-8');
        });

        it('Response is an Array' , async () => {
            expect(Array.isArray(response.body)).be.true
        });

        it('10 users are returned in the response' , async () => {
            expect(response.body.length).to.eql(10);
        });
    })
});