Template.boardPage.helpers({
  currentBoard: function () {
    return Boards.findOne(Session.get('currentBoardId'))
  }
})
