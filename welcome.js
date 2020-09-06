
exports.handler = async function(context, event, callback) {

  // Here's an example of setting up some TWiML to respond to with this function
	let twiml = new Twilio.twiml.VoiceResponse();

  twiml.say( 'Barrow Corp Security request line.' );
  twiml.say( 'To have the cats dispatched, record your issue at the tone and hit any key.' );
  
  console.log( '/welcome PRE URL' );
  var url = context.XM_URL;
  
  var data = {
    text: event.TranscriptionText
  };
  
  console.log( 'Pre record...' );
  
  twiml.record({ 
    maxLength: 45,  
    action: '/handle_transcribe',
    transcribeCallback: '/xm_trigger_event'
  });
  
  console.log( '/welcome Post record...' );
          
  return callback(null, twiml);
};