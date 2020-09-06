exports.handler = async function(context, event, callback) {
  
  const axios = require('axios');
  // Here's an example of setting up some TWiML to respond to with this function
	let twiml = new Twilio.twiml.VoiceResponse();
  console.log( '/xm_trigger_event: hello?' );
  
  console.log( '/xm_trigger_event event.TranscriptionText: ' + event.TranscriptionText );
  
  var data = {
      text: event.TranscriptionText
  };
  
  await axios.post( context.XM_URL, data )
  .then((response) => {
    console.log(  'SUCCESS!' + JSON.stringify( response ) );
    return response.data;
  })
  .catch((error) => {
    console.log( 'ERROR!: ' + JSON.stringify( error ) );
    return error;
  });

};