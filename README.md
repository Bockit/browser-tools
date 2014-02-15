**This is a work in progress**

Browser Tools
-------------

I'd finally had enough of including jQuery for only a few specific use-cases. What I wanted was an incredibly modular library for things you do in the browser.

Browser tools is designed with browserify in mind, where it will only build the file with the functionality you're using.

Browser tools aims to provide the following functionality with a high granularity:

* Attributes getting, setting and removing
* Properties getting and setting (selected, multiple, checked etc.)
* ClassList-like functionality
* CSS getting and setting
* Element dimension calculations
* Element position calculations
* Events
* DOM Manipulation
* DOM Traversal

Support
-------

It's very poorly tested at the moment but the idea is to support IE9+ for now. Either making a separate polyfill module that shims in what's needed for browser-tools, or make ie8 versions of functions which don't work.

No AJAX
-------

There are plenty of modules for doing AJAX.

Why one module
--------------

Because I think having a module for each function would have too much overhead. It's made so that if you compile your code with something like browserify and use specific requires it will only include exactly what is used.

To Do
-----

* Add selector to events which checks if the event currentTarget matches
* Set up a test suite and a process to run it across the supported browsers
* Make the tests pass
* More traversal functions `nextUntil()`, `prevUntil()`
* Improve the algorithm for `closest()` and `dimensions/`. Closest could loop parent by parent until found or null, and dimensions functions should call getComputedValue themselves just once.

Selector
--------

This project works well with [selector][selector]

[selector]: /Bockit/selector