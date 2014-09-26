_s
===

> Pythonic array slicing in JavaScript

## Hello world

```javascript
_s([1,2,3,4,5,6], '0'); //returns [1]

_s([1,2,3,4,5,6], '-1'); //returns [6]

_s([1,2,3,4,5,6], '0:3'); //returns [1, 2, 3]

_s([1,2,3,4,5,6], ':'); //returns [1, 2, 3, 4, 5, 6]
```

## How to install

1. **NPM**

    `npm install underscore-s`

2. **Bower**

    `bower install _s`

3. Or download latest stable version from `https://github.com/usablica/_s/releases` and include `_s.js` or `minified/_s.min.js` for web browser production use. 

Examples:

**Web browsers**:  

```html
<script src="_s.min.js" type="text/javascript"></script>
```

**NodeJS**:  

```javascript
_s = require('underscore-s')._s;
```

That's it.

## How to use

The general scheme for `_s` is:

    from:to:step

All values can be both positive and negative.

### Get a single value

```javascript
_s([1, 2, 3, 4, 5, 6], '0'); //returns [1]
_s([1, 2, 3, 4, 5, 6], '-1'); //returns [6]
```

### Get a range of values

```javascript
_s([1, 2, 3, 4, 5, 6], '0:3'); //returns [1, 2, 3]
_s([1, 2, 3, 4, 5, 6], '-4:-1'); //returns [3, 4, 5]
_s([1, 2 ,3 ,4 ,5 ,6], ':'); //returns [1, 2 ,3 ,4 ,5 ,6]. Makes a copy of original array
```

### Using step parameter

```javascript
_s([1, 2, 3, 4, 5, 6], '::1'); //returns [1,2,3,4,5,6]
_s([1, 2, 3, 4, 5, 6], '::2'); //returns [1, 3, 5]
_s([1, 2, 3, 4, 5, 6], '::-1'); //returns [6, 5, 4, 3, 2, 1]. Equal to array.reverse
_s([1, 2, 3, 4, 5, 6], '0:4:2'); //returns [1, 3]
_s([1, 2, 3, 4, 5, 6], '0:4:3'); //returns [1, 4]
```

Found something interesting? Please add it here :-)

## Compatible environments
#### Client-side:
  - All major browsers including mobile browsers

#### Service-side:
  - All server-side platforms including NodeJS.

## Roadmap
- Write unit tests

## Release History

 * **v0.2.0** - 2014-07-04
   - Remove prototype + add AMD/CommonJS module structure


 * **v0.1.0** - 2014-06-10
   - Initial version

## Author
**Afshin Mehrabani**

- [Twitter](https://twitter.com/afshinmeh)
- [Github](https://github.com/afshinm)
- [Personal page](http://afshinm.name/)

## License
> Copyright (C) 2014 Afshin Mehrabani (afshin.meh@gmail.com)

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
    documentation files (the "Software"), to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
    and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions
    of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.
