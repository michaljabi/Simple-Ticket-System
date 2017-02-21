process.env.NODE_ENV = 'test';

import { describe, it } from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import server from '../../index';

let expect = chai.expect;
chai.use( chaiHttp );

describe( 'User Controller actions (api/users)', () => {

  it.skip( '/ it should GET an Array of MOCK STS users', ( done ) => {
    chai.request( server )
      .get( '/api/users' )
      .end( ( err, res ) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).be.a( 'array' );
        done();
      } );
  } );

} );