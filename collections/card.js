Cards = new Meteor.Collection('cards')

Cards.allow({
  remove: function (userId, card) {
    return userId === card.userId
  }
})

Meteor.methods({
  card: function (cardAttributes) {
    var user = Meteor.user()
    var type = 'positive'

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to fill a card");

    // ensure the message has content
    if (/^\s*$/.test(cardAttributes.content))
      throw new Meteor.Error(422, "Please fill in a card");

    if (/^:\(\s+/.test(cardAttributes.content)) {
      type = 'negative'
    } else if (/^:\)\s+/.test(cardAttributes.content)) {
      type = 'positive'
    } else if (/^:\|\s+/.test(cardAttributes.content)) {
      type = 'neutral'
    }

    var extract = cardAttributes.content.match(/(?:\:[\(\)|]\s+)(.*)/)

    // build the message
    var card = {
      content: (extract && extract[1]) ? extract[1] : cardAttributes.content,
      type: type,
      userId: user._id,
      submitted: new Date().getTime()
    };

    Cards.insert(card);
  }
});
