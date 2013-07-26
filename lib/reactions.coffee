###
Returns a reaction (negative|neutral|positive) from a given
input string.
###
root = exports ? this
root.reaction = reaction = (content) ->

  if /:\(/.test(content)
    "negative"
  else if /:\|/.test(content)
    "neutral"
  else if /:\)/.test(content)
    "positive"
