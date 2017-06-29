### Browser support
IE 7+ (possibly 9 also), latest of Chrome/FF/Safari, iOS 7+ and Android 2.1+ (except 3.x)

### Quick steps to use:


#### Set up your HTML

``` html
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

#### Load files or import library


##### ES5
``` html
<script src="//{{ site.data.egjs.github.user }}.github.io/{{ site.data.egjs.github.repo }}/{{ site.data.egjs.download.production }}"></script>
```

##### ES6+
``` js
import Visible from "@egjs/visible";
```

### Initialize

#### ES5
``` js
// create eg.Visible with option
var visible = new eg.Visible("#contents", {
  targetClass: "check_visible"
});
```
