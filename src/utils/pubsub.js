// [Step - 0] Create pubsub library + export

class PubSub {
  constructor() {
    this._eventsRegister = {}
  }

  on(evtName, func){
    try {
        if (typeof evtName !== 'string')  {
        throw Error("1st arg passed to .on() must be a STRING")
      }

      if (typeof func !== 'function')  {
        throw Error("2nd arg passed to .on() must be a FUNCTION")
      }

      if(typeof this._eventsRegister[evtName] === "undefined"){
         this._eventsRegister[evtName] = [func]
      } else {
         this._eventsRegister[evtName] = [...this._eventsRegister[evtName], func ]
      }
    } catch (err) {
      console.log( err )
    }

  }

  trigger(evtName, data){
    const arrOfFuncs = this._eventsRegister[evtName] || []
    arrOfFuncs.forEach( (funcEl)=> funcEl(data) )
  }

}
const pubSub = new PubSub()

export default pubSub
