/**
 * Returns a reaction (negative|neutral|positive) from a given
 * input string.
 */
reaction = function (content) {
  // Default: positive
  var type

  if (/:\(/.test(content)) {
    type = 'negative'
  } else if (/:\)/.test(content)) {
    type = 'positive'
  } else if (/:\|/.test(content)) {
    type = 'neutral'
  }

  return type
}
