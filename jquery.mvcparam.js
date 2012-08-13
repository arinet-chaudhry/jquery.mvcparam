// MVC param serialization
(function ($) {
    // changed: no 'traditional' argument
    $.mvcparam = function (a) {
        var s = [],
		add = function (key, value) {
		    // If value is a function, invoke it and return its value
		    value = $.isFunction(value) ? value() : value;
		    // changed: no value instead of 'null'
		    s[s.length] = encodeURIComponent(key) + "=" + (value ? encodeURIComponent(value) : '');
		};

        // If a jQuery element array was passed in, assume that it is an array of form elements.
        if ($.isArray(a) || (a.jquery && !$.isPlainObject(a))) {
            // Serialize the form elements
            $.each(a, function () {
                add(this.name, this.value);
            });
        } else {
            // Assume this is an array of object
            for (var prefix in a) {
                // changed: no need for 'traditional' argument
                buildParams(prefix, a[prefix], add);
            }
        }

        // Return the resulting serialization
        // changed: inline use of 'r20' variable expression
        return s.join("&").replace(/%20/g, "+");
    };

    function buildParams(prefix, obj, add) {
        if ($.isArray(obj)) {
            // Serialize array item.
            $.each(obj, function (i, v) {
                // changed: always include index bracket
                buildParams(prefix + "[" + i + "]", v, add);
            });

        } else if (jQuery.type(obj) === "object") {
                // Serialize object item.
            for (var name in obj) {
                // changed: use dot notation
                buildParams(prefix + "." + name, obj[name], add);
            }
        } else {
            // Serialize scalar item.
            add(prefix, obj);
        }
    }
})(jQuery);