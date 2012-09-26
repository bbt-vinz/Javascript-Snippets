# Javascript Snippets

Last updated: 25-08-2012

This is just a repository for JS Snippets that are commonly used for projects.

It will be updated regularly as I find anything useful.

NOTE: Of course you would need [jQuery] installed before using any of these snippets. You might also need to install [Modernizr] for some of the snippets as well.

OTHER NOTE: Some of these snippets are plugins/extensions from 'other' authors and I have included their copyright/disclaimer, info in the JS file.

[jQuery]: http://www.jquery.com 
[Modernizr]: http://www.modernizr.com 

## List of snippets 

Included snippets are listed below: 

* `image check`: hide broken image inside elements. This is a must for Expression.
* `ellipsis`: this is useful for controlling the width and height of a container. You can specify the maximum character with "count" attribute. 
* `url vars`: grab a url variable and make use of it. 
* `scroll top`: back to top button. 
* `hover intent`: every navigation dropdown needs it. 
* `bold highlight header`: mostly used for Expression Title tag. 
* `background image`: turn <img> into background image so you can center/cropped it or put something on top.
* `even/odd menu`: ideal for tables. displays different color per table row. 
* `tabs`: tabs made with one article menu.
* `placeholder`: remember how IE doesn't have input placeholder? This will help you.

## Implementation

Most of the guidelines for some of these snippets have been included in the lib.js but I'll include it here as well.

### URL Vars

Here's how to grab variable(s) from browser url.

```js 
     var bio = $.getUrlVar('bio');
     (bio != undefined)?true:false;
```

### Hover Intent

I recommend you refer to [their site] but I put the JS here for my personal use:

[their site]: http://cherne.net/brian/resources/jquery.hoverIntent.html

```js 
   $('.menu-item').hoverIntent({
            timeout: 180,
            interval: 180,
            over: function () {
                $('.level-2').fadeOut(500);
                $('.level-2',this).slideDown(500);
            },
            out: function () {
                $('.level-2s',this).slideUp(200);

            }
   });
```

### Tabs

Below is the basic setup for tabs:

```html
  <section class="tabs">
     <a href="[$href]" class="tab" id="tab-[$id]">[$title]</a>
  </section>
```