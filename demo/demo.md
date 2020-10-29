### Basic

{% include_relative assets/html/demo.html %}

#### html

```html
<div class="wrap" codepen="visible">
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
</div>
```

#### JS
You can call **observe()** to listen both **"scroll"** and **"resize"** event from the wrapper element.

```js
// Create eg.Visible instance
var visibleView = new eg.Visible('.scroller',{
  targetClass : "card",
  expandSize : 0
}).on("change", function (e) {
  // Add change event handler
  e.visible.forEach(el => el.classList.add("visible"));
  e.invisible.forEach(el => el.classList.remove("visible"));
  handler(e)
});

// Observe with options
visibleView.observe({ delay: 100, containment: false });
```

Or you can manually check the visibility change by yourself.

```js
// Create eg.Visible instance
var visibleView = new eg.Visible('.scroller',{
  targetClass : "card",
  expandSize : 0
}).on("change", function (e) {
  // Add change event handler
  $(e.visible).addClass("visible");
  $(e.invisible).removeClass("visible");
  handler(e)
});

// Call "check" method whenever you want to check visibility change of the elements compared with last time you call "check" method.
visibleView.check();    

$('.scroller').scroll(function() {
  // When you call "check" mehtod and if there is a change, "change" event will trigger.
  visibleView.check();    
});
```
