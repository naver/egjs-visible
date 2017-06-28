### Browser support
IE 7+ (possibly 9 also), latest of Chrome/FF/Safari, iOS 7+ and Android 2.1+ (except 3.x)

### Quick steps to use:


#### Set up your HTML

``` html
<!-- Target DOM -->
<div class="scroller">
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
  <div class="card item"></div>
</div>
```

#### Load files or import library


##### ES5
``` html
{% for dist in site.data.egjs.dist %}
<script src="//{{ site.data.egjs.github.user }}.github.io/{{ site.data.egjs.github.repo }}/{{ dist }}"></script>
{% endfor %}
```

##### ES6+
``` js
import Visible from "@egjs/visible";
```

### Initialize

#### ES5
``` js
// Create eg.Visible instance
var visible = new eg.Visible('#contents');

// Add change event handler
visible.on("change", function (e) {
    $(e.visible).addClass("focus");
    $(e.invisible).removeClass("focus");
});

// Call "check" method whenever you want to check visibility change of the elements compared with last time you call "check" method.
// When you call "check" mehtod and if there is a change, "change" event will trigger.
visible.check();
```
