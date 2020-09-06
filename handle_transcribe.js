
exports.handler = function(context, event, callback) {
  // Here's an example of setting up some TWiML to respond to with this function
	let twiml = new Twilio.twiml.VoiceResponse();
  console.log( '/handle_transcribe: hello?' );
  
  twiml.say( 'Thank you. The cats have been dispatched. Please have treat payment ready.' );

  // This callback is what is returned in response to this function being invoked.
  // It's really important! E.g. you might respond with TWiML here for a voice or SMS response.
  // Or you might return JSON data to a studio flow. Don't forget it!
  return callback(null, twiml);
};