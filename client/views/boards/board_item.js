Template.board.helpers({
  negativeCards: function () {
    return Cards.find({boardId: this._id, type: 'negative'}, {sort: {submitted: -1}})
  },

  neutralCards: function () {
    return Cards.find({boardId: this._id, type: 'neutral'}, {sort: {submitted: -1}})
  },

  positiveCards: function () {
    return Cards.find({boardId: this._id, type: 'positive'}, {sort: {submitted: -1}})
  }
})
