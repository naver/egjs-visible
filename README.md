# egjs-visible

A class that checks if an element is visible in the base element or viewport.

## Documentation

* API Documentation
    - Latest: [http://naver.github.io/egjs/latest/doc/eg.Visible.html](http://naver.github.io/egjs/latest/doc/eg.Visible.html)
    - Specific version: [http://naver.github.io/egjs/[VERSION]/doc/eg.Visible.html](http://naver.github.io/egjs/[VERSION]/doc/eg.Visible.html)
* An advanced demo is available here: [http://codepen.io/collection/AKpkGW/](http://codepen.io/collection/AKpkGW/)

## Supported Browsers

The following table shows browsers supported by eg.Visible

|Internet Explorer|Chrome|Firefox|Safari|iOS|Android|
|---|---|---|---|---|---|
|7+|Latest|Latest|Latest|7+|2.1+(except 3.x)|

## Dependency

eg.Visible has the dependencies for the following libraries:

|[eg.Component](http://github.com/naver/egjs/egjs-component)|
|----|
|2.0.0+|


## How to Use

### 1. Load dependency library before visible.js (or visible.min.js) load.
```html
<script src="../node_modules/@egjs/component/dist/component.js"></script>
```

### 2. Load visible.js
```html
<script src="../dist/visible.js"></script>
```

### 3. Make a target element
```html
<!-- Target DOM -->
<ul id="contents">
    <li class="check_visible">
        <div>test1</div>
    </li>
    <li class="check_visible">
        <div>test2</div>
    </li>
    <li class="check_visible">
        <div>test3</div>
    </li>
    <li class="check_visible">
        <div>test4</div>
    </li>
    <li class="check_visible">
        <div>test5</div>
    </li>
    <li class="check_visible">
        <div>test6</div>
    </li>
</ul>
```

### 4. Use eg.Visible
```javascript
// create eg.Visible with option
var visible = new eg.Visible("#contents", {
  targetClass: "check_visible"
});
```

## Bug Report

If you find a bug, please report it to us using the [Issues](https://github.com/naver/egjs-visible/issues) page on GitHub.


## License
eg.Visible is released under the [MIT license](http://naver.github.io/egjs/license.txt).

```
Copyright (c) 2015 NAVER Corp.

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
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
