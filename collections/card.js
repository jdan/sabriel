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
      throw new Meteor.Error(401, "You need to login to fill a card")

    // ensure the message has content
    if (/^\s*$/.test(cardAttributes.content))
      throw new Meteor.Error(422, "Please fill in a card")

    // Get the reaction from content (positive|neutral|negative)
    var type = reaction(cardAttributes.content)

    // ensure a type has been filled out
    if (!type)
      throw new Meteor.Error(422, "Please preface your message with a reaction.")

    var extract = cardAttributes.content.replace(/(\:[\(\)\|])/g, '')
                                        .replace(/^\s+/g, '')
                                        .replace(/\s+$/g, '')

    // build the message
    var card = {
      content: extract,
      type: type,
      user: new UserBuilder(user),
      submitted: new Date().getTime()
    }

    Cards.insert(card)
  }
});
