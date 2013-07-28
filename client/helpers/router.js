Meteor.Router.add({
  '/': 'boardList',

  '/boards/:_id': {
    to: 'boardPage',
    and: function (id) {
      Session.set('currentBoardId', id);
    }
  },

  '/new': 'boardEntry'
});

Meteor.Router.filters({
  'requireLogin': function (page) {
    if (Meteor.user()) {
      return page;
    } else {
      return 'accessDenied';
    }
  }
});

Meteor.Router.filter('requireLogin', {only: 'boardEntry'});
