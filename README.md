Floater
=======

Floating box directive for Angular 1.x

This directive assumes the presence of jQuery in your application to get some advanced functionality like `.offset()` and `.css()`.

You can modify this to work without it, but for true x-browser goodness, you should use real jQuery.

**Example:**

````html
<aside floater="#footer"></aside>
````

Notes:

* `attrs.floater` = the element you want to use as the bottom edge for your floating box (usually a footer)
* The parent element of the floating box should be `position: relative` for when it hits the bounding edge and needs to lock to the bottom
