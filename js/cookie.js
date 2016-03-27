<script>
var Cookies = {
    set: function(a, c) {
        var d = arguments,
            b = arguments.length,
            e = 2 < b ? d[2] : null,
            f = 3 < b ? d[3] : "/",
            g = 4 < b ? d[4] : null,
            d = 5 < b ? d[5] : !1;
        document.cookie = a + "=" + escape(c) + (null == e ? "0": "; expires=" + e.toGMTString()) + (null == f ? "/main": "; path=" + f) + (null == g ? "": "; domain=" + g) + (!0 == d ? "; secure": "")
    },
    get: function(a) {
        a += "=";
        for (var c = a.length, d = document.cookie.length, b = 0, e = 0; b < d;) {
            e = b + c;
            if (document.cookie.substring(b, e) == a) return Cookies.getCookieVal(e);
            b = document.cookie.indexOf(" ", b) + 1;
            if (0 == b) break
        }
        return null
    },
    clear: function(a) {
        if (Cookies.get(a)) {
            var c =
                new Date;
            c.setTime(c.getTime() - 864E5);
            Cookies.set(a, "", c)
        }
    },
    getCookieVal: function(a) {
        var c = document.cookie.indexOf(";", a); - 1 == c && (c = document.cookie.length);
        return unescape(document.cookie.substring(a, c))
    }
};
$.extend({
    includePath: "",
    include: function(a) {
        a = "string" == typeof a ? [a] : a;
        for (var c = 0; c < a.length; c++) {
            var d = a[c].replace(/^\s|\s$/g, ""),
                b = d.split("."),
                e = "css" == b[b.length - 1].toLowerCase(),
                b = e ? "link": "script",
                f = e ? " type='text/css' rel='stylesheet' ": " language='javascript' type='text/javascript' ",
                d = (e ? "href": "src") + "='" + $.includePath + d + "'";
            0 == $(b + "[" + d + "]").length && document.write("<" + b + f + d + "></" + b + ">")
        }
    }
});
</script>
