const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';

const app = require('./server').default;

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {
  describe('GET /students endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('should return the list of students', (done) => {
        chai.request(app)
          .get('/students')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.include('This is the list of our students');
            done();
          });
      });
    });

    describe('When the database is unavailable', () => {
      before(() => {
        process.argv[2] = './nonexistent.csv';
      });

      it('should return an error message', (done) => {
        chai.request(app)
          .get('/students')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(500);
            chai.expect(response.text).to.equal('Cannot load the database');
            done();
          });
      });
    });
  });

  describe('GET /students/:major endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('should return the list of students in the specified major', (done) => {
        chai.request(app)
          .get('/students/CS')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.include('List:');
            done();
          });
      });

      it('should return an error message when the major parameter is wrong', (done) => {
        chai.request(app)
          .get('/students/BLABLA')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(500);
            chai.expect(response.text).to.equal('Major parameter must be CS or SWE');
            done();
          });
      });
    });

    describe('When the database is unavailable', () => {
      before(() => {
        process.argv[2] = './nonexistent.csv';
      });

      it('should return an error message', (done) => {
        chai.request(app)
          .get('/students/CS')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(500);
            chai.expect(response.text).to.equal('Cannot load the database');
            done();
          });
      });
    });
  });
});
