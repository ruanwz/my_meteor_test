Meteor.loginWithZyncro = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Zyncro.requestCredential(options, credentialRequestCompleteCallback);
};
