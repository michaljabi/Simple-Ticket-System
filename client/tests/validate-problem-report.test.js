import { validateProblemReportForm, translateErrorsFromServer } from '../src/main/reporter/problem/form/validateProblemReport';

describe( 'validations of problem report form', () => {

  let mockData = {};

  beforeEach( () => {
    mockData = {
      title: 'Bug reporting',
      component: 'page-clients',
      description: 'page-clients',
      email: 'jabi@test.com',
      isVerified: true
    };
  } );

  it( 'should validate that form is filled right and verified', () => {

    mockData.isVerified = true;
    const errors = validateProblemReportForm( mockData );
    expect( errors ).toEqual( false );
  } );

  it( 'should give validation error when form is not verified', () => {

    mockData.isVerified = false;
    const errors = validateProblemReportForm( mockData );
    expect( Object.keys( errors ) ).toContain( 'isVerified' );
  } );

  it( 'should give validation errors', () => {

    const errors = validateProblemReportForm( {
      email: 'jabi@texst.com...../',
      isVerified: true
    } );
    expect( errors ).toHaveProperty( 'email' );
    expect( errors ).toHaveProperty( 'title' );
  } );

  it( 'title is a crucial required field', () => {

    const errors = validateProblemReportForm( {
      title: 'this is a valid title',
      isVerified: true
    } );
    const errors2 = validateProblemReportForm( {
      title: '',
      isVerified: true
    } );
    const errors3 = validateProblemReportForm( {
      title: '       \n\t',
      isVerified: true
    } );
    expect( errors ).toBe( false );
    expect( errors2 ).toHaveProperty( 'title' );
    expect( errors3 ).toHaveProperty( 'title' );
  } );
  
  it( 'translates errors from server', () => {

    const errors = translateErrorsFromServer( {
      title: ['isRequired'],
      email: ['isRequired', 'isEmail'],
      otherEmail: ['isEmail']
    } );

    expect( errors ).toHaveProperty( 'title' );
    expect( errors.title ).toMatch( /is required/ );
    expect( errors.email ).toMatch( /is required/ );
    expect( errors.otherEmail ).toMatch( /need to be an e-mail/ );
  } );

} );