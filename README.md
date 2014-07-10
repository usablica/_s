_s
===

> Pythonic array slicing in JavaScript

## Hello world

```javascript
[1,2,3,4,5,6]._s('0'); //returns [1]

[1,2,3,4,5,6]._s('-1'); //returns [6]

[1,2,3,4,5,6]._s('0:3'); //returns [1, 2, 3]

[1,2,3,4,5,6]._s(':'); //returns [1, 2, 3, 4, 5, 6]
```

## How to install

Downlaod latest stable version from `https://github.com/usablica/_s/releases` and include `_s.js` or `minified/_s.min.js` for web browser production use. 

Examples:

**Web browsers**:  

```html
<script src="_s.min.js" type="text/javascript"></script>
```

**NodeJS**:  

```javascript
require('_s.js');
```

That's it.

## Compatible environments
#### Client-side:
  - All major browsers including mobile browsers

#### Service-side:
  - All server-side platforms including NodeJS.

## Roadmap
- Add `String` slicing
- Write unit tests

## Release History

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
