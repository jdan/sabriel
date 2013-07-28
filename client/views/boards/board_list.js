Template.boardList.helpers({
  boards: function () {
    return Boards.find({})
  }
})
