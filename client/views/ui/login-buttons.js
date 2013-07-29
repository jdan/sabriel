Template.loginButton.events({
  'click button.login': function (e) {
    e.preventDefault()
    if (Meteor.user()) return
    Meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, function (err) {
      if (err)
        Session.set('errorMessage', err.reason || 'Unknown error');
    })
  },

  'click button.logout': function (e) {
    e.preventDefault()
    if (Meteor.user()) Meteor.logout()
  }
})
