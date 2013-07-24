Template.cardEntry.events({
  'submit form': function (e) {
    e.preventDefault()

    var content = $(e.target).find('[name=content]').val()
    var type = 'positive'

    if (/^:\(\s+/.test(content)) {
      type = 'negative'
    } else if (/^:\)\s+/.test(content)) {
      type = 'positive'
    } else if (/^:\|\s+/.test(content)) {
      type = 'neutral'
    }

    var extract = content.match(/(?:\:[\(\)|]\s+)(.*)/)

    card = {
      content: (extract && extract[1]) ? extract[1] : content,
      type: type,
      userId: Meteor.userId(),
      submitted: new Date()
    }

    if (!/^\s*$/.test(card.content)) {
      $(e.target).find('[name=content]').val('')
      
      Cards.insert(card)

      /*
      Meteor.call('message', message, function (error, id) {
        if (error)
          alert(error.reason)
      })
      */
    }
  }
})
