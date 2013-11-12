# shrinkList jQuery plugin

by [Tinacious Design](http://tinaciousdesign.com)

The shrinkList.js plugin does just that, shrinks lists.

This plugin allows you to take a long unordered or ordered list with, for example, 10 items, but only show 5 initially, and create a link for you to show the remaining list items.

View the demo [here](http://tinacious.github.io/shrinkList/).

## Customization

You can customize the following:

1. Amount of items to show initially
2. Speed of the animation in milliseconds 
3. Text string that will be clickable to show the rest of the list items

## Implementation

### Include the plugin

Source the plugin file `shrinkList.js` or `shrinkList.min.js`

### Set up your HTML

```html
<ul id="my_list">
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
</ul>
```

### Call the plugin on document.ready or window.load

```js
$('#my_list').shirnkList({
    filterText: 'Show all filters',
    filterSpeed: 250,
    maxFilters: 3 // default: 10
});
```

### See the Results

Your rendered HTML should look something like this:

```
List item
List item
List item
...
Show all filters
```


