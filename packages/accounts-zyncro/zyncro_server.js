Accounts.oauth.registerService('zyncro');

var autopublishedFields = _.map(
  // don't send access token. https://dev.zyncro.com/discussions/5025
  Zyncro.whitelistedFields.concat(['id', 'screenName']),
  function (subfield) { return 'services.zyncro.' + subfield; });

Accounts.addAutopublishFields({
  forLoggedInUser: autopublishedFields,
  forOtherUsers: autopublishedFields
});
