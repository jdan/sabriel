Template.cardEntry.events({
  'submit form': function (e) {
    e.preventDefault()

    var card = {
      content: $(e.target).find('[name=content]').val()
    }

    if (!/^\s*$/.test(card.content)) {
      $(e.target).find('[name=content]').val('')
      
      Meteor.call('card', card, function (error, id) {
        if (error)
          alert(error.reason)
      })
    }

  }
})
