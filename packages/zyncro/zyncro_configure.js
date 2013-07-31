Template.configureLoginServiceDialogForZyncro.siteUrl = function () {
  // Zyncro doesn't recognize localhost as a domain name
  return Meteor.absoluteUrl({replaceLocalhost: true});
};

Template.configureLoginServiceDialogForZyncro.fields = function () {
  return [
    {property: 'consumerKey', label: 'Consumer key'},
    {property: 'secret', label: 'Consumer secret'}
  ];
};
