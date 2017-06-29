### Basic

{% include_relative assets/html/demo.html %}

```js
var visibleView = new eg.Visible('.scroller',{
    targetClass : "card",
    expandSize : 0
}).on("change", function (e) {
    $(e.visible).addClass("visible");
    $(e.invisible).removeClass("visible");
});

visibleView.check();    

$('.scroller').scroll(function() {
    visibleView.check();    
});
```
