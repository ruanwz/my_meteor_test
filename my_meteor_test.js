if (Meteor.isClient) {
  Accounts.ui.config({
      passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    })
  
  Template.hello.greeting = function () {
    return "Welcome to my_meteor_test.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  Meteor._debug('in server');
  });
}
