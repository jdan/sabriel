/**
 * Returns a reaction (negative|neutral|positive) from a given
 * input string.
 */
reaction = function (content) {
  // Default: positive
  var type

  if (/^:\(\s+/.test(content)) {
    type = 'negative'
  } else if (/^:\)\s+/.test(content)) {
    type = 'positive'
  } else if (/^:\|\s+/.test(content)) {
    type = 'neutral'
  }

  return type
}
