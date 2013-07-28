Template.boardEntry.events({
  'submit form': function (e) {
    e.preventDefault()

    var board = {
      title: $(e.target).find('[name=title]').val(),
      boardId: Session.get('currentBoardId')
    }

    Meteor.call('board', board, function (error, id) {
      // TODO error handling
      if (!error) {
        Meteor.Router.to('boardPage', id);
      }
    });
  }
})
