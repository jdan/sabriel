root = exports ? this
root.Cards = Cards = new Meteor.Collection("cards")
Cards.allow remove: (userId, card) ->
  userId is card.userId

Meteor.methods card: (cardAttributes) ->
  user = Meteor.user()

  # ensure the user is logged in
  throw new Meteor.Error(401, "You need to login to fill a card")  unless user

  # ensure the message has content
  throw new Meteor.Error(422, "Please fill in a card")  if /^\s*$/.test(cardAttributes.content)

  # Get the reaction from content (positive|neutral|negative)
  type = reaction(cardAttributes.content)

  # ensure a type has been filled out
  throw new Meteor.Error(422, "Please preface your message with a reaction.")  unless type
  extract = cardAttributes.content.replace(/(\:[\(\)\|])/g, "").replace(/^\s+/g, "").replace(/\s+$/g, "")

  # build the message
  card =
    content: extract
    type: type
    userId: user._id
    submitted: new Date().getTime()

  Cards.insert card
