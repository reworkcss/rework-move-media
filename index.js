module.exports = function (sortFn) {
  if (Array.isArray(sortFn)) {
    var arr = sortFn
    sortFn = function (a, b) {
      var ai = arr.indexOf(a)
      var bi = arr.indexOf(b)
      if (ai === -1 && bi === -1) return 0;
      return ai - bi
    }
  } else if (!sortFn) {
    sortFn = function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    }
  }

  return function (style) {
    var rules = []
    var media = {}

    style.rules.forEach(function (rule) {
      var query = rule.media
      if (!query) return rules.push(rule);

      ;[].push.apply((media[query] || (media[query] = {
        media: query,
        rules: []
      })).rules, rule.rules)
    })

    style.rules = rules.concat(Object.keys(media).sort(sortFn).map(function (query) {
      return media[query]
    }))
  }
}