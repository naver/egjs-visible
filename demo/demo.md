### Demo

{% include_relative assets/html/visible.html %}

```html
<div class="wrap">
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
