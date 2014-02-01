**This is a work in progress**

Browser Tools
-------------

I'd finally had enough of including jQuery for only a few specific use-cases. What I wanted was an incredibly modular library for things you do in the browser.

Browser tools is designed with browserify in mind, where it will only build the file with the functionality you're using.

Browser tools aims to provide the following functionality with a high granularity:

* CSS getting and setting
* Attributes getting, setting and removing
* Element dimension calculations
* Element position calculations
* DOM Traversal
* ClassList-like functionality

Support
-------

It's completely untested at the moment (as in, I haven't even run half the code once), but the idea is to support IE9+ for now. Either making a separate polyfill module that shims in what's needed for browser-tools, or make ie8 versions of functions which don't work.

No AJAX
-------

There are plenty of modules for doing AJAX.

Why one module
--------------

Because I think having a module for each function, considering the majority are a few lines, would be ridiculous. It's made so that

To Do
-----

* Actually run half the code and make sure it works
* Set up a test suite and a process to run it across the supported browsers
* Make the tests pass
* Add DOM events `on(el, 'mousemove', function(){})`, `off(...)`, `once(...)` and something for delegating. I dunno yet how it'd work.
* More traversal functions `closest()`, `nextUntil()`, `prevUntil()`

Blue sky
--------

* Some kind of monad jquery-esque thing which selects elements and uses these functions to manipulate them.