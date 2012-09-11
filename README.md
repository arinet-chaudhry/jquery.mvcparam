jquery.mvcparam
===============

ASP.NET MVC parameter serialization using jQuery.

Example usage:
-------------

```js
var params = {
                term: 'Footwear',
                facetValues: [{ Field: 'attr_category', Value: null, Values: ['384'] }],
                statValues: [],
                skip: 0,
                sort: 'relevance',
                conditions: []
            };
var queryString = $.mvcparam(params);
```

or, use it to serialize your form tags:
```js
var $form = $('#mvc-form');
var queryString = $form.mvcserialize();
```

Example output:
-------------

```c#
"term=Footwear&facetValues%5B0%5D.Field=attr_category&facetValues%5B0%5D.Value=&facetValues%5B0%5D.Values%5B0%5D=384&skip=&sort=relevance"
```
decoded:
```c#
"term=Footwear&facetValues[0].Field=attr_category&facetValues[0].Value=&facetValues[0].Values[0]=384&skip=&sort=relevance"
```

Compared to the original $.param which is not compatible with MVC and outputs:
```c#
"term=Footwear&facetValues%5B0%5D%5BField%5D=attr_category&facetValues%5B0%5D%5BValue%5D=null&facetValues%5B0%5D%5BValues%5D%5B%5D=384&skip=0&sort=relevance"
```
decoded:
```c#
"term=Footwear&facetValues[0][Field]=attr_category&facetValues[0][Value]=null&facetValues[0][Values][]=384&skip=0&sort=relevance"
```

