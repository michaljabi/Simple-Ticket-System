process.env.NODE_ENV = 'test';

import { describe, it } from "mocha";
import { ticketGenerator } from '../core/report/ticketGenerator';
import chai from "chai";
import chaiHttp from "chai-http";
import server from '../index';
import { validateNewlyReportedBug } from '../core/report/validateNewlyReportedBug';

chai.use( chaiHttp );
const expect = chai.expect;

describe( 'Ticket generation', () => {

  it( 'should generate a random Ticket for a problem < 16 chars', () => {
    const ticket = ticketGenerator();
    const ticket2 = ticketGenerator();


    expect( ticket ).to.not.equals( ticket2 );
    expect( ticketGenerator().length ).to.be.below( 16 );
  } );

  const mockTicketInput = {
    title: 'Bug reporting',
    component: 'page-clients',
    description: 'page-clients',
    email: 'jabi@test.com'
  }
  const mockTicketBadInput = {
    title: 'Bug reporting',
    component: 'page-clients',
    description: 'page-clients',
    email: 'anybody@gmail.co.m'
  }

  it( 'should validate input body when ticket via POST requested', () => {


    const out = validateNewlyReportedBug( mockTicketInput );
    const out2 = validateNewlyReportedBug( mockTicketBadInput );

    expect( out ).to.eql( { isValid: true } );
    expect( out2 ).to.eql(
      {
        isValid: false,
        errors: {
          email: ['isEmail']
        }
      } );
  } );

  it( 'should send back the ticket via controller when POST requested', ( done ) => {

    chai.request( server )
      .post( '/api/report/bug' )
      .send( mockTicketInput )
      .end( ( err, res ) => {
        expect( err ).to.be.null;
        expect( res ).to.have.status( 200 );
        expect( res.body ).be.a( 'object' );
        done();
      } );
  } );

  it( 'should send back errors when POST requested', ( done ) => {

    chai.request( server )
      .post( '/api/report/bug' )
      .send( mockTicketBadInput )
      .end( ( err, res ) => {
        expect( res ).to.have.status( 400 );
        expect( res.body ).to.eql( {
          errors:
            { email: ['isEmail'] }
          });
        done();
      } );
  } );


} );