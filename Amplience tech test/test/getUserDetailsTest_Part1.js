const supertest = require("supertest");
const chai = require("chai");

let expect = chai.expect;

let baseUrl = "https://api.github.com/users/";
let userIDs = "6wl";
let response = "";

let request = supertest(baseUrl);

describe('Get userDetails', () => {
    it('should return a 200 response', () => {
        return request
            .get(userIDs)
            .set('User-Agent', '')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                response = res.body;
            });
    });

    it('should return a name of "Gregory Loscombe"', () => {
        expect(response.name).to.equal("Gregory Loscombe");
    });

    it('should return an ID of 15330', () => {
        expect(response.id).to.equal(15330);
    });

    it('should return a location of "Manchester"', () => {
        expect(response.location).to.equal("Manchester");
    });

    it('should return the number of public repos 7', () => {
        expect(response.public_repos).to.equal(7);
    });

    it('should return the number of public gists 11', () => {
        expect(response.public_gists).to.equal(11);
    });

    it('should return the number of followers 13', () => {
        expect(response.followers).to.equal(13);
    });

    it('should return the number of following 29', () => {
        expect(response.following).to.equal(29);
    });

});

    // This was a little bit of learning / experiment for me as I haven't tested API's outside of postman,
    // so at first I created all the tests as separate calls, but realised this is very unefficient so changed to the above,
    // but left the below is for context / understanding of learning.


    // it('should return an ID of 15330', () => {
    //     return request
    //         .get(userIDs)
    //         .set('User-Agent', '')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body.id).to.equal(15330);
    //         });
    // });

    // it('should return a location of "Manchester"', () => {
    //     return request
    //         .get(userIDs)
    //         .set('User-Agent', '')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body.location).to.equal('Manchester');
    //         });
    // });

    // it('should return the number of public repos 7', () => {
    //     return request
    //         .get(userIDs)
    //         .set('User-Agent', '')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body.public_repos).to.equal(7);
    //         });
    // });

    // it('should return the number of public gists 11', () => {
    //     return request
    //         .get(userIDs)
    //         .set('User-Agent', '')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body.public_gists).to.equal(11);
    //         });
    // });

    // it('should return the number of followers 13', () => {
    //     return request
    //         .get(userIDs)
    //         .set('User-Agent', '')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body.followers).to.equal(13);
    //         });
    // });

    // it('should return the number of following 29', () => {
    //     return request
    //         .get(userIDs)
    //         .set('User-Agent', '')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body.following).to.equal(29);
    //         });
    // });


