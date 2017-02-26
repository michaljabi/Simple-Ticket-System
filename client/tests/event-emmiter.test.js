import EventEmitter from '../src/EventEmitter';

describe.only( 'Event emitter working logic', () => {

  const caller = { caller: 'caller' };

  it( 'should add new listener to event', () => {

    EventEmitter
      .listen( 'someEvent',
      ( ev, data ) => {
        console.log( ev.target, data )
      },
      caller );
    expect(EventEmitter.events.length).toEqual(1);
    expect(EventEmitter.events[0]).toHaveProperty("name");
    expect(EventEmitter.events[0]).toHaveProperty("event.target");
    expect(EventEmitter.events[0]).toHaveProperty("event.callback");
} );

  it( 'should pass data with emission', () => {

    EventEmitter.emit( 'someEvent', { some: 'data' } );
    EventEmitter.emit( 'orherEvent', { some: 'data' } );
  } );

  it( 'should dismiss an listener', () => {

    EventEmitter.dismiss( 'someEvent', caller );
    EventEmitter.emit( 'someEvent', { this_one: 'should not be emited' } );
    expect(EventEmitter.events.length).toEqual(0);
  } );
} );