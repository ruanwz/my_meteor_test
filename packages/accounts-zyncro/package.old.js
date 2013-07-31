Package.describe({
  summary: "Login service for Zyncro accounts"
});

Package.on_use(function(api) {
  api.use('coffeescript', ['client', 'server']);
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('zyncro', ['client', 'server']);

  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  //api.add_files('twitter_login_button.css', 'client');

  api.add_files('client/zyncro_client.coffee', ['client']);
  //api.add_files('zyncro_server.js', 'server');
  //api.add_files('twitter_client.js', 'client');
});
