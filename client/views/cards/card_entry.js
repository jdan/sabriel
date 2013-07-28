Template.cardEntry.events({
  'submit form': function (e) {
    e.preventDefault()

    var card = {
      content: $(e.target).find('[name=content]').val(),
      boardId: Session.get('currentBoardId')
    }

    if (!/^\s*$/.test(card.content)) {
      $(e.target).find('[name=content]').val('')

      // Reset the class
      $('.card-entry').removeClass(['positive', 'neutral', 'negative'].join(' '))

      Meteor.call('card', card, function (error, id) {
        if (error)
          alert(error.reason)
      })
    }
  },

  'keyup input[name=content]': function (e) {
    var content = $(e.target).val()
    var type = reaction(content)

    // Change the entry field to have the appropriate class
    $('.card-entry').removeClass(['positive', 'neutral', 'negative'].join(' '))
    if (type) {
      $('.card-entry').addClass(type)
    }
  }
})
