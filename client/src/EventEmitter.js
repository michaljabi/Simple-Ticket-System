export default class EventEmitter {

  static events = [];

  static emit ( eventName, data ) {
    this.events
      .filter( ( object ) => object.name == eventName )
      .forEach( ( { event } ) => event.callback( event, data ) );
  }

  static listen ( eventName, callback, target ) {
    this.events.push( {
      name: eventName,
      event: { callback, target }
    } )
  }

  static dismiss ( eventName, remTarget ) {
    const idxToRemove = this.events.findIndex( ( { name, event } ) => name == eventName && event.target == remTarget );
    if ( idxToRemove == -1 ) {
      return false;
    }
    this.events = [
      ...this.events.slice( 0, idxToRemove ),
      ...this.events.slice( idxToRemove + 1 )
    ];
    return true;
  }
}