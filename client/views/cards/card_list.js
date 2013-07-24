Template.cardList.helpers({
  cards: function () {
    return Cards.find({}, {sort: {submitted: -1}})
  },

  negativeCards: function () {
    return Cards.find({type: 'negative'}, {sort: {submitted: -1}})
  },

  neutralCards: function () {
    return Cards.find({type: 'neutral'}, {sort: {submitted: -1}})
  },

  positiveCards: function () {
    return Cards.find({type: 'positive'}, {sort: {submitted: -1}})
  }
})
