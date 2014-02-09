**This is a work in progress, half the code has never been run yet. Before I got any further I wanted to see how it would look.**

Browser Tools
-------------

I'd finally had enough of including jQuery for only a few specific use-cases. What I wanted was an incredibly modular library for things you do in the browser.

Browser tools is designed with browserify in mind, where it will only build the file with the functionality you're using.

Browser tools aims to provide the following functionality with a high granularity:

* Attributes getting, setting and removing
* ClassList-like functionality
* CSS getting and setting
* Element dimension calculations
* Events
* DOM Manipulation
* Element position calculations
* DOM Traversal

Support
-------

It's very poorly tests at the moment but the idea is to support IE9+ for now. Either making a separate polyfill module that shims in what's needed for browser-tools, or make ie8 versions of functions which don't work.

No AJAX
-------

There are plenty of modules for doing AJAX.

Why one module
--------------

Because I think having a module for each function would have too much overhead. It's made so that if you compile your code with something like browserify and use specific requires it will only include exactly what is used.

To Do
-----

* Actually run the events and traversal functions to see if they work
* Write the manipulation functions
* Set up a test suite and a process to run it across the supported browsers
* Make the tests pass
* Add DOM events `on(el, 'mousemove', function(){})`, `off(...)`, `once(...)` and something for delegating. I dunno yet how it'd work.
* More traversal functions `closest()`, `nextUntil()`, `prevUntil()`

Selector
--------

This project works well with [selector][selector]

[selector]: /Bockit/selector