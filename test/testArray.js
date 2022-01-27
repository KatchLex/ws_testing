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

        it('Array of 10 users should be returned in response' , () => {
            expect(Object.entries(response).length).to.eql(10);
        });
    })
});