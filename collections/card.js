Cards = new Meteor.Collection('cards')

Cards.allow({
  remove: function (userId, card) {
    return userId === card.userId
  }
})

Meteor.methods({
  card: function (cardAttributes) {
    var user = Meteor.user()

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to fill a card");

    // ensure the message has content
    if (/^\s*$/.test(cardAttributes.content))
      throw new Meteor.Error(422, "Please fill in a card");

    // build the message
    var card = {
      // watercoolerFeatures() includes markdown, images, emoji, etc.
      // see `client/helpers/string.js` for details
      content: cardAttributes.content,
      type: cardAttributes.type,
      userId: user._id,
      submitted: new Date().getTime()
    };

    Cards.insert(card);
  }
});
