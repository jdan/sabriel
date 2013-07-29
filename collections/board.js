Boards = new Meteor.Collection('boards')

Meteor.methods({
  board: function (boardAttributes) {
    var user = Meteor.user()

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to create a board")

    // ensure the board has a title
    if (/^\s*$/.test(boardAttributes.title))
      throw new Meteor.Error(422, "Please enter a board title")

    // TODO(jordan) add this as a string prototype
    var extract = boardAttributes.title.replace(/^\s+/g, '')
                                       .replace(/\s+$/g, '')

    // build the board
    var board = {
      title: extract
    , creator: new UserBuilder(user)
    , submitted: new Date().getTime()
    }

    var boardId = Boards.insert(board)

    return boardId
  }
})
