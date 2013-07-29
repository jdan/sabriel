Template.card.helpers({
  ownerAvatar: function () {
    return this.user.picture
  }

, isOwnCard: function () {
    return Meteor.userId() === this.user._id
  }
})

Template.card.events({
  'click .card-delete': function (e) {
    e.preventDefault()
    if (confirm('Are you sure you want to delete this card?'))
      Cards.remove(this._id)
  }
})
