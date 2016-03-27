<script>
var basePath = "/mskyweb",
    staticPath = "http://www.umetrip.com";
(function() {
    Array.prototype.S = String.fromCharCode(2);
    Array.prototype.in_array = function(a) {
        return RegExp(this.S + a + this.S).test(this.S + this.join(this.S) + this.S)
    };
    this.lib = {
        url: {
            flightNo: basePath + "/fs/fc.do",
            flightArea: basePath + "/fs/fa.do",
            domTicket: basePath + "/tk/dm.do",
            getPage: basePath + "/page.do",
            stop: basePath + "/tk/sd.do",
            checksub: basePath + "/checksub.do",
            sub: basePath + "/sub.do"
        },
        request: function(a, b, d, c) {
            a = {
                type: "POST",
                url: lib.url[a],
                contentType: "application/x-www-form-urlencoded",
                dataType: "json",
                timeout: 5E4,
                data: {},
                error: function(a) {
                    "timeout" == a.statusText ? alert("\u7f51\u7edc\u8bf7\u6c42\u8d85\u65f6,\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5.") : alert("\u670d\u52a1\u5668\u5fd9,\u8bf7\u7a0d\u540e\u518d\u8bd5.")
                },
                success: function(a) {
                    try {
                        a.errorCode ? alert(a.errorMsg) : (responseData = a, alert("SUCCESS!"))
                    } catch(b) {
                        alert("\u670d\u52a1\u5668\u5fd9,\u8bf7\u7a0d\u540e\u518d\u8bd5.")
                    }
                }
            };
            a.data = b;
            d && (a.success = d);
            c && (a.error = c);
            $.ajax(a)
        },
        navFloat: function(a) {
            var b = $(a).offset().top;
            $(window).scroll(function() {
                $(window).scrollTop() >
                b ? $("#top").hide() : $("#top").show()
            })
        },
        selectControl: function(a, b) {
            $(a).click(function() {
                $(b).slideToggle(200);
                $(document).bind("mousedown", lib.selectMouse)
            })
        },
        selectClick: function(a, b) {
            var d = b.replace(/\./, "#");
            $(b).click(function() {
                var b = $(a).text(),
                    e = $(this).text();
                b != e && ($(d).show(), $(d).siblings("div").hide(), $(a).text(e));
                $(this).parent().toggle();
                $(document).unbind("mousedown", lib.selectMouse)
            })
        },
        selectMouse: function(a) {
            1 > $(a.target).parents(".drop").length && lib.closeSelect()
        },
        closeSelect: function() {
            0 <
            $(".drop .down").length && ($(".drop .down").hide(), $(document).unbind("mousedown", lib.selectMouse))
        },
        backToTop: function() {
            $(window).scroll(function() {
                202 < $(window).scrollTop() ? $("#floatBottom").show() : $("#floatBottom").hide()
            });
            $(".toTop").click(function() {
                $("html, body").animate({
                        scrollTop: 0
                    },
                    400);
                return ! 1
            })
        },
        getDay: function() {
            var a = new Date,
                b = 10 > a.getDate() ? "0" + a.getDate() : a.getDate();
            return a.getFullYear() + "-" + "01 02 03 04 05 06 07 08 09 10 11 12".split(" ")[a.getMonth()] + "-" + b
        },
        getQueryParam: function(a) {
            var b =
                window.location.search.match(RegExp("(\\?|&)" + a + "(\\[\\])?=([^&]*)"));
            return "date" != a || b ? b ? b[3] : !1: lib.getDay()
        },
        substitute: function(a, b) {
            return a.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,
                function(a, c, e) {
                    return b[c] ? b[c] : "" == b[c] ? "": a
                })
        },
        sameCity: [["PEK", "NAY"], ["SHA", "PVG"]],
        cityCheck: function(a, b) {
            var d = a.val(),
                c = b.val();
            $(a).siblings(".autocomplete").removeClass("bor2_error");
            $(b).siblings(".autocomplete").removeClass("bor2_error");
            if (!d || "" == d) return $(a).siblings(".autocomplete").addClass("bor2_error"),
                !1;
            if (!c || "" == c || "" != d && c == d) return $(b).siblings(".autocomplete").addClass("bor2_error"),
                !1;
            for (var e = 0; e < lib.sameCity.length; e++) if (lib.sameCity[e].in_array(d) && lib.sameCity[e].in_array(c)) return $(a).siblings(".autocomplete").addClass("bor2_error"),
                $(b).siblings(".autocomplete").addClass("bor2_error"),
                !1;
            return ! 0
        },
        cityChange: function(a, b) {
            var d = $("#" + a + " .change").parents(".cx"),
                c = d.find("." + b);
            if ("" != $(c[0]).val() && "" != $(c[1]).val()) {
                var e = "",
                    e = $(c[0]).val();
                $(c[0]).val($(c[1]).val());
                $(c[1]).val(e);
                c = d.find(".hid-city-name");
                e = $(c[0]).val();
                $(c[0]).val($(c[1]).val());
                $(c[1]).val(e);
                d = d.find(".hid-city-3code");
                e = $(d[0]).val();
                $(d[0]).val($(d[1]).val());
                $(d[1]).val(e)
            }
        },
        pre: 0,
        showPageEvent: function(a, b, d) {
            $("#p_" + b).click(function() {
                a[b] && ($("#list").html(""), $("#list").html(a[b]), $("li:even").addClass("bg2"));
                lib.pre != b && ($("#p_" + lib.pre).removeClass("currentpage"), $("#p_" + b).addClass("currentpage"), 0 == lib.pre && 0 < b && $("#p_before").removeClass("disablepage"), 0 != lib.pre && 0 == b && $("#p_before").addClass("disablepage"),
                lib.pre < d - 1 && b == d - 1 && $("#p_next").addClass("disablepage"), lib.pre == d - 1 && b < d - 1 && $("#p_next").removeClass("disablepage"), lib.pre = b)
            })
        },
        genPage: function(a, b) {
            lib.pre = 0;
            var d = [];
            if (1 < b) {
                d.push("<div class='pagination'><a id='p_before' class='disablepage' href='javascript:void(0);'>\u4e0a\u4e00\u9875</a>");
                for (var c = 0; c < b; c++) 0 == c ? d.push("<a id='p_" + c + "' href='javascript:void(0);' class='currentpage'>1</a>") : d.push("<a id='p_" + c + "' href='javascript:void(0);'>" + (c + 1) + "</a>");
                d.push("<a id='p_next' href='javascript:void(0);'>\u4e0b\u4e00\u9875</a><div class='clear'></div></div>");
                $("#page").html("");
                $("#page").html(d.join(""));
                for (c = 0; c < b; c++) lib.showPageEvent(a, c, b);
                $("#p_before").click(function() {
                    a[lib.pre - 1] && ($("#list").html(""), $("#list").html(a[lib.pre - 1]), $("#p_" + lib.pre).removeClass("currentpage"), $("#p_" + (lib.pre - 1)).addClass("currentpage"), lib.pre == b - 1 && $("#p_next").removeClass("disablepage"), lib.pre--, 0 == lib.pre && $(this).addClass("disablepage"), $("li:even").addClass("bg2"))
                });
                $("#p_next").click(function() {
                    a[lib.pre + 1] && ($("#list").html(""), $("#list").html(a[lib.pre +
                    1]), $("#p_" + lib.pre).removeClass("currentpage"), $("#p_" + (lib.pre + 1)).addClass("currentpage"), 0 == lib.pre && $("#p_before").removeClass("disablepage"), lib.pre++, lib.pre == b - 1 && $(this).addClass("disablepage"), $("li:even").addClass("bg2"))
                })
            } else $("#page").html("")
        },
        focususShow: !1,
        focususFirstShow: !0,
        focusus: function() {
            $("#sidebarbtn").click(function() {
                lib.focususFirstShow && ($("#wframe").prop("src", "http://widget.weibo.com/weiboshow/index.php?language=&width=275&height%E2%80%A6tle=0&noborder=0&isWeibo=1&isFans=1&uid=2537944652&verifier=bd864c6a&dpc=1"),
                    lib.focususFirstShow = !1);
                lib.focususShow ? ($("#sidebarbtn").children("span").prop("class", "arrr2"), $(".sidebar").animate({
                        width: 35
                    },
                    "slow"), lib.focususShow = !1) : ($(".sidebar").animate({
                        width: 321
                    },
                    "slow"), $("#sidebarbtn").children("span").prop("class", "arrr"), lib.focususShow = !0)
            })
        },
        inputFocus: function(a, b) {
            $(a).val() == b && ($(a).val(""), $(a).css("color", "#414141"))
        },
        inputBlur: function(a, b) {
            var d = $(a).val();
            "" == $.trim(d) && ($(a).val(b), $(a).css("color", "#9c9c9c"))
        }
    }
})();
$(document).ready(function() {
    lib.backToTop();
    lib.focusus()
});
</script>
