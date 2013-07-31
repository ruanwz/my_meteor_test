if (typeof Zyncro === 'undefined') {
  Zyncro = {};
}

Zyncro._urls = {
  requestToken: "https://my.sandbox.zyncro.com/tokenservice/oauth/v1/get_request_token",
  authorize: "https://my.sandbox.zyncro.com/tokenservice/jsps/login/login.jsp",
  accessToken: "https://my.sandbox.zyncro.com/tokenservice/oauth/v1/get_access_token",
  authenticate:  "https://my.sandbox.zyncro.com/tokenservice/jsps/login/login.jsp",
  oauth_callback: "http://localhost:3000/_oauth/zyncro"

};
