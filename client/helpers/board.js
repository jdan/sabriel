/**
 * Method to extract the participants of a given board. That is, the
 * users who have at least one card submitted to this board.
 */
boardParticipants = function (board) {
  // extract the users from each card
  var users = Cards.find({ boardId: board._id })
                  .fetch()
                  .map(function (card) {
                    return card.user
                  })

  // return unique users
  return _.uniq(users, function (user) {
    return user._id
  })
}
