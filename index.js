module.exports = function (sort) {
  if (Array.isArray(sort)) {
    var arr = sort
    sort = function (a, b) {
      return arr.indexOf(a) - arr.indexOf(b)
    }
  } else if (sort && typeof sort !== 'function') {
    throw TypeError('Sort argument must either be an array or a function.')
  }

  return function (style) {
    var rules = style.rules
    var media = {}

    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i]
      var query = rule.media
      if (!query) continue;

      rules.splice(i--, 1)
      ;[].push.apply(media[query] || (media[query] = []), rule.rules)
    }

    var queries = Object.keys(media)
    if (sort) queries = queries.sort(sort);
    ;[].push.apply(rules, queries.map(function (query) {
      return {
        type: 'media',
        media: query,
        rules: media[query]
      }
    }))
  }
}