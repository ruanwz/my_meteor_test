Package.describe({
  summary: "Zyncro OAuth flow",
  // internal for now. Should be external when it has a richer API to do
  // actual API things with the service, not just handle the OAuth flow.
  internal: true
});

Package.on_use(function(api) {
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('service-configuration', ['client', 'server']);
  api.use('oauth1', ['client', 'server']);

  api.add_files(
    ['zyncro_configure.html', 'zyncro_configure.js'],
    'client');

  api.add_files('zyncro_common.js', ['client', 'server']);
  api.add_files('zyncro_server.js', 'server');
  api.add_files('zyncro_client.js', 'client');
});
