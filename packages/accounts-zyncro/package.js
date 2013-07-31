Package.describe({
  summary: "Login service for Zyncro accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('zyncro', ['client', 'server']);

  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files('zyncro_login_button.css', 'client');

  api.add_files('zyncro_common.js', ['client', 'server']);
  api.add_files('zyncro_server.js', 'server');
  api.add_files('zyncro_client.js', 'client');
});
