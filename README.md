## Move Media [![Build Status](https://travis-ci.org/reworkcss/rework-move-media.png)](https://travis-ci.org/reworkcss/rework-move-media)

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

The MIT License (MIT)

Copyright (c) 2013 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.