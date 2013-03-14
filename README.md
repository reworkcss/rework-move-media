## Move Media

Aggregate media queries and move it to the end of the file.

### API

    var moveMedia = require('rework-move-media')

    var css = rework(inputCSS)
      .use(moveMedia(sortFunction))
      .toString()

By default, `sortFunction` just sorts the queries alphabetically:

    function sortFunction(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    }

If `sortFunction` is an array of strings,
it will sort the media queries in the order provided.
Assumes all media queries are accounted for:

    var css = rework(inputCSS)
      .use(moveMedia([
        '(min-width: 320px)',
        '(min-width: 960px)',
        '(min-width: 1080px)'
      ]))
      .toString()

### Limitations

- Assumes media query order does not matter.
  If it does, then use your own sort function.
- Declarations within each media query preserves order.
- In general, keep the order in mind!

### License

WTFPL