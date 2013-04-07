## Move Media [![Build Status](https://travis-ci.org/jonathanong/rework-move-media.png)](https://travis-ci.org/jonathanong/rework-move-media)

Aggregate media queries and move it to the end of the file.

### API

```js
var rework = require('rework')
var moveMedia = require('rework-move-media')

var css = rework(inputCSS)
.use(moveMedia(sort))
.toString()
```

#### moveMedia([sort])

`sort` (function) - An optional function to sort the media queries.
This function is passed in an `Array.prototype.sort()` function.

```js
var css = rework(inputCSS)
.use(moveMedia(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}))
.toString()
```

`sort` (array) - If `sort` is an array of strings,
the media queries will be sorted in the order provided.

```js
var css = rework(inputCSS)
.use(moveMedia([
  '(min-width: 320px)',
  '(min-width: 960px)',
  '(min-width: 1080px)'
]))
.toString()
```

If no `sort` option is specified,
the queries will be sorted by the order in which they were defined.

### Compatibility

IE9+

### License

WTFPL
