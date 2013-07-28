Boards = new Meteor.Collection('boards')

Meteor.methods({
  board: function (boardAttributes) {
    var user = Meteor.user()

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to fill a card")

    // ensure the message has content
    if (/^\s*$/.test(boardAttributes.title))
      throw new Meteor.Error(422, "Please enter a board title")

    // TODO(jordan) add this as a string prototype
    var extract = boardAttributes.title.replace(/^\s+/g, '')
                                       .replace(/\s+$/g, '')

    // build the message
    var board = {
      title: extract,
      creator: user._id,
      submitted: new Date().getTime()
    }

    var boardId = Boards.insert(board)

    return boardId
  }
})
