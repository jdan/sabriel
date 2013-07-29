Template.boardList.helpers({
  boards: function () {
    return Boards.find({})
  }

, participants: function () {
    return boardParticipants(this)
  }
})
