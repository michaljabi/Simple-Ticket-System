import { reportProblemAction } from '../src/main/reporter/problem/reportProblemAction';

describe.skip('reportProblemAction tests', () => {

  it( 'should receive a token when Report Problem Action is fired with right data', ( done ) => {

    const mockData = {
      title: 'Bug reporting',
      component: 'page-clients',
      description: 'page-clients',
      email: 'jabi@test.com'
    };
    reportProblemAction( mockData )
      .then( ( name ) => {

        expect( name ).toEqual( 'Paul' );
      } )
      .catch( ( error ) => {

        console.dir(error);
        expect( error ).toEqual( 'Paulz' );
      } ).then(done);

  } );

});

