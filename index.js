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
    var rules = style.rules
    var media = {}

    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i]
      var query = rule.media
      if (!query) continue;

      rules.splice(i--, 1)
      ;[].push.apply(media[query] || (media[query] = []), rule.rules)
    }

    ;[].push.apply(rules, Object.keys(media).sort(sortFn).map(function (query) {
      return {
        media: query,
        rules: media[query]
      }
    }))
  }
}