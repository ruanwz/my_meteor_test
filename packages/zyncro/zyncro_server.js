// https://dev.zyncro.com/docs/api/1.1/get/account/verify_credentials
Zyncro.whitelistedFields = ['profile_image_url', 'profile_image_url_https', 'lang'];

Oauth.registerService('zyncro', 1, Zyncro._urls, function(oauthBinding) {
  var identity = oauthBinding.get('https://my.sandbox.zyncro.com/api/v1/rest/users/profile').data;

  var serviceData = {
    id: identity.id_str,
    screenName: identity.screen_name,
    accessToken: oauthBinding.accessToken,
    accessTokenSecret: oauthBinding.accessTokenSecret
  };

  // include helpful fields from zyncro
  var fields = _.pick(identity, Zyncro.whitelistedFields);
  _.extend(serviceData, fields);

  return {
    serviceData: serviceData,
    options: {
      profile: {
        name: identity.name
      }
    }
  };
});


Zyncro.retrieveCredential = function(credentialToken) {
  return Oauth.retrieveCredential(credentialToken);
};
