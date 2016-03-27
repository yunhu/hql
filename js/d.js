<script>
/*!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof JSON2 !== "object" && typeof window.JSON === "object" && window.JSON.stringify && window.JSON.parse) {
    JSON2 = window.JSON
} else {
    (function() {
        var a = {}; /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            var c = typeof define === "function" && define.amd;
            var e = {
                "function": true,
                object: true
            };
            var h = e[typeof a] && a && !a.nodeType && a;
            var i = e[typeof window] && window || this,
                b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
            if (b && (b.global === b || b.window === b || b.self === b)) {
                i = b
            }
            function j(ab, V) {
                ab || (ab = i.Object());
                V || (V = i.Object());
                var K = ab.Number || i.Number,
                    R = ab.String || i.String,
                    x = ab.Object || i.Object,
                    S = ab.Date || i.Date,
                    T = ab.SyntaxError || i.SyntaxError,
                    aa = ab.TypeError || i.TypeError,
                    J = ab.Math || i.Math,
                    Y = ab.JSON || i.JSON;
                if (typeof Y == "object" && Y) {
                    V.stringify = Y.stringify;
                    V.parse = Y.parse
                }
                var n = x.prototype,
                    u = n.toString,
                    r, m, L;
                var B = new S(-3509827334573292);
                try {
                    B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() == 10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708
                } catch (v) {}
                function o(ac) {
                    if (o[ac] !== L) {
                        return o[ac]
                    }
                    var ad;
                    if (ac == "bug-string-char-index") {
                        ad = "a" [0] != "a"
                    } else {
                        if (ac == "json") {
                            ad = o("json-stringify") && o("json-parse")
                        } else {
                            var ak, ah = '{"a":[1,true,false,null,"\\\b\\n\\f\\r\\t"]}';
                            if (ac == "json-stringify") {
                                var ai = V.stringify,
                                    aj = typeof ai == "function" && B;
                                if (aj) {
                                    (ak = function() {
                                        return 1
                                    }).toJSON = ak;
                                    try {
                                        aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L && ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) == "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" && ai({
                                                a: [ak, true, false, null, "\b\n\f\r\t"]
                                            }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" && ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"'
                                    } catch (ae) {
                                        aj = false
                                    }
                                }
                                ad = aj
                            }
                            if (ac == "json-parse") {
                                var ag = V.parse;
                                if (typeof ag == "function") {
                                    try {
                                        if (ag("0") === 0 && !ag(false)) {
                                            ak = ag(ah);
                                            var af = ak.a.length == 5 && ak.a[0] === 1;
                                            if (af) {
                                                try {
                                                    af = !ag('"\t"')
                                                } catch (ae) {}
                                                if (af) {
                                                    try {
                                                        af = ag("01") !== 1
                                                    } catch (ae) {}
                                                }
                                                if (af) {
                                                    try {
                                                        af = ag("1.") !== 1
                                                    } catch (ae) {}
                                                }
                                            }
                                        }
                                    } catch (ae) {
                                        af = false
                                    }
                                }
                                ad = af
                            }
                        }
                    }
                    return o[ac] = !! ad
                }
                if (!o("json")) {
                    var U = "[object Function]",
                        Q = "[object Date]",
                        N = "[object Number]",
                        O = "[object String]",
                        E = "[object Array]",
                        A = "[object Boolean]";
                    var F = o("bug-string-char-index");
                    if (!B) {
                        var s = J.floor;
                        var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        var D = function(ac, ad) {
                            return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 + ad) / 100) + s((ac - 1601 + ad) / 400)
                        }
                    }
                    if (!(r = n.hasOwnProperty)) {
                        r = function(ae) {
                            var ac = {},
                                ad;
                            if ((ac.__proto__ = null, ac.__proto__ = {
                                    toString: 1
                                }, ac).toString != u) {
                                r = function(ah) {
                                    var ag = this.__proto__,
                                        af = ah in (this.__proto__ = null, this);
                                    this.__proto__ = ag;
                                    return af
                                }
                            } else {
                                ad = ac.constructor;
                                r = function(ag) {
                                    var af = (this.constructor || ad).prototype;
                                    return ag in this && !(ag in af && this[ag] === af[ag])
                                }
                            }
                            ac = null;
                            return r.call(this, ae)
                        }
                    }
                    m = function(ae, ah) {
                        var af = 0,
                            ac, ad, ag;
                        (ac = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0;
                        ad = new ac();
                        for (ag in ad) {
                            if (r.call(ad, ag)) {
                                af++
                            }
                        }
                        ac = ad = null;
                        if (!af) {
                            ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            m = function(aj, an) {
                                var am = u.call(aj) == U,
                                    al, ak;
                                var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] && aj.hasOwnProperty || r;
                                for (al in aj) {
                                    if (!(am && al == "prototype") && ai.call(aj, al)) {
                                        an(al)
                                    }
                                }
                                for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) {}
                            }
                        } else {
                            if (af == 2) {
                                m = function(aj, am) {
                                    var ai = {},
                                        al = u.call(aj) == U,
                                        ak;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj, ak)) {
                                            am(ak)
                                        }
                                    }
                                }
                            } else {
                                m = function(aj, am) {
                                    var al = u.call(aj) == U,
                                        ak, ai;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) {
                                            am(ak)
                                        }
                                    }
                                    if (ai || r.call(aj, (ak = "constructor"))) {
                                        am(ak)
                                    }
                                }
                            }
                        }
                        return m(ae, ah)
                    };
                    if (!o("json-stringify")) {
                        var q = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        };
                        var I = "000000";
                        var t = function(ac, ad) {
                            return (I + (ad || 0)).slice(-ac)
                        };
                        var z = "\\u00";
                        var C = function(ai) {
                            var ad = '"',
                                ag = 0,
                                ah = ai.length,
                                ac = !F || ah > 10;
                            var af = ac && (F ? ai.split("") : ai);
                            for (; ag < ah; ag++) {
                                var ae = ai.charCodeAt(ag);
                                switch (ae) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        ad += q[ae];
                                        break;
                                    default:
                                        if (ae < 32) {
                                            ad += z + t(2, ae.toString(16));
                                            break
                                        }
                                        ad += ac ? af[ag] : ai.charAt(ag)
                                }
                            }
                            return ad + '"'
                        };
                        var p = function(ai, aA, ag, al, ax, ac, aj) {
                            var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
                            try {
                                at = aA[ai]
                            } catch (am) {}
                            if (typeof at == "object" && at) {
                                ae = u.call(at);
                                if (ae == Q && !r.call(at, "toJSON")) {
                                    if (at > -1 / 0 && at < 1 / 0) {
                                        if (D) {
                                            ay = s(at / 86400000);
                                            for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {}
                                            for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {}
                                            ay = 1 + ay - D(ap, az);
                                            ak = (at % 86400000 + 86400000) % 86400000;
                                            aw = s(ak / 3600000) % 24;
                                            au = s(ak / 60000) % 60;
                                            aq = s(ak / 1000) % 60;
                                            an = ak % 1000
                                        } else {
                                            ap = at.getUTCFullYear();
                                            az = at.getUTCMonth();
                                            ay = at.getUTCDate();
                                            aw = at.getUTCHours();
                                            au = at.getUTCMinutes();
                                            aq = at.getUTCSeconds();
                                            an = at.getUTCMilliseconds()
                                        }
                                        at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) : t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z"
                                    } else {
                                        at = null
                                    }
                                } else {
                                    if (typeof at.toJSON == "function" && ((ae != N && ae != O && ae != E) || r.call(at, "toJSON"))) {
                                        at = at.toJSON(ai)
                                    }
                                }
                            }
                            if (ag) {
                                at = ag.call(aA, ai, at)
                            }
                            if (at === null) {
                                return "null"
                            }
                            ae = u.call(at);
                            if (ae == A) {
                                return "" + at
                            } else {
                                if (ae == N) {
                                    return at > -1 / 0 && at < 1 / 0 ? "" + at : "null"
                                } else {
                                    if (ae == O) {
                                        return C("" + at)
                                    }
                                }
                            }
                            if (typeof at == "object") {
                                for (af = aj.length; af--;) {
                                    if (aj[af] === at) {
                                        throw aa()
                                    }
                                }
                                aj.push(at);
                                ar = [];
                                av = ac;
                                ac += ax;
                                if (ae == E) {
                                    for (ah = 0, af = at.length; ah < af; ah++) {
                                        ad = p(ah, at, ag, al, ax, ac, aj);
                                        ar.push(ad === L ? "null" : ad)
                                    }
                                    ao = ar.length ? (ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : ("[" + ar.join(",") + "]")) : "[]"
                                } else {
                                    m(al || at, function(aC) {
                                        var aB = p(aC, at, ag, al, ax, ac, aj);
                                        if (aB !== L) {
                                            ar.push(C(aC) + ":" + (ax ? " " : "") + aB)
                                        }
                                    });
                                    ao = ar.length ? (ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : ("{" + ar.join(",") + "}")) : "{}"
                                }
                                aj.pop();
                                return ao
                            }
                        };
                        V.stringify = function(ac, ae, af) {
                            var ad, al, aj, ai;
                            if (e[typeof ae] && ae) {
                                if ((ai = u.call(ae)) == U) {
                                    al = ae
                                } else {
                                    if (ai == E) {
                                        aj = {};
                                        for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)) {}
                                    }
                                }
                            }
                            if (af) {
                                if ((ai = u.call(af)) == N) {
                                    if ((af -= af % 1) > 0) {
                                        for (ad = "", af > 10 && (af = 10);
                                             ad.length < af; ad += " ") {}
                                    }
                                } else {
                                    if (ai == O) {
                                        ad = af.length <= 10 ? af : af.slice(0, 10)
                                    }
                                }
                            }
                            return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", [])
                        }
                    }
                    if (!o("json-parse")) {
                        var M = R.fromCharCode;
                        var l = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        };
                        var G, X;
                        var H = function() {
                            G = X = null;
                            throw T()
                        };
                        var y = function() {
                            var ah = X,
                                af = ah.length,
                                ag, ae, ac, ai, ad;
                            while (G < af) {
                                ad = ah.charCodeAt(G);
                                switch (ad) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        G++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        ag = F ? ah.charAt(G) : ah[G];
                                        G++;
                                        return ag;
                                    case 34:
                                        for (ag = "@", G++; G < af;) {
                                            ad = ah.charCodeAt(G);
                                            if (ad < 32) {
                                                H()
                                            } else {
                                                if (ad == 92) {
                                                    ad = ah.charCodeAt(++G);
                                                    switch (ad) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            ag += l[ad];
                                                            G++;
                                                            break;
                                                        case 117:
                                                            ae = ++G;
                                                            for (ac = G + 4; G < ac; G++) {
                                                                ad = ah.charCodeAt(G);
                                                                if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 && ad <= 70)) {
                                                                    H()
                                                                }
                                                            }
                                                            ag += M("0x" + ah.slice(ae, G));
                                                            break;
                                                        default:
                                                            H()
                                                    }
                                                } else {
                                                    if (ad == 34) {
                                                        break
                                                    }
                                                    ad = ah.charCodeAt(G);
                                                    ae = G;
                                                    while (ad >= 32 && ad != 92 && ad != 34) {
                                                        ad = ah.charCodeAt(++G)
                                                    }
                                                    ag += ah.slice(ae, G)
                                                }
                                            }
                                        }
                                        if (ah.charCodeAt(G) == 34) {
                                            G++;
                                            return ag
                                        }
                                        H();
                                    default:
                                        ae = G;
                                        if (ad == 45) {
                                            ai = true;
                                            ad = ah.charCodeAt(++G)
                                        }
                                        if (ad >= 48 && ad <= 57) {
                                            if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) {
                                                H()
                                            }
                                            ai = false;
                                            for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) {}
                                            if (ah.charCodeAt(G) == 46) {
                                                ac = ++G;
                                                for (; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            ad = ah.charCodeAt(G);
                                            if (ad == 101 || ad == 69) {
                                                ad = ah.charCodeAt(++G);
                                                if (ad == 43 || ad == 45) {
                                                    G++
                                                }
                                                for (ac = G; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            return +ah.slice(ae, G)
                                        }
                                        if (ai) {
                                            H()
                                        }
                                        if (ah.slice(G, G + 4) == "true") {
                                            G += 4;
                                            return true
                                        } else {
                                            if (ah.slice(G, G + 5) == "false") {
                                                G += 5;
                                                return false
                                            } else {
                                                if (ah.slice(G, G + 4) == "null") {
                                                    G += 4;
                                                    return null
                                                }
                                            }
                                        }
                                        H()
                                }
                            }
                            return "$"
                        };
                        var W = function(ad) {
                            var ac, ae;
                            if (ad == "$") {
                                H()
                            }
                            if (typeof ad == "string") {
                                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                                    return ad.slice(1)
                                }
                                if (ad == "[") {
                                    ac = [];
                                    for (;; ae || (ae = true)) {
                                        ad = y();
                                        if (ad == "]") {
                                            break
                                        }
                                        if (ae) {
                                            if (ad == ",") {
                                                ad = y();
                                                if (ad == "]") {
                                                    H()
                                                }
                                            } else {
                                                H()
                                            }
                                        }
                                        if (ad == ",") {
                                            H()
                                        }
                                        ac.push(W(ad))
                                    }
                                    return ac
                                } else {
                                    if (ad == "{") {
                                        ac = {};
                                        for (;; ae || (ae = true)) {
                                            ad = y();
                                            if (ad == "}") {
                                                break
                                            }
                                            if (ae) {
                                                if (ad == ",") {
                                                    ad = y();
                                                    if (ad == "}") {
                                                        H()
                                                    }
                                                } else {
                                                    H()
                                                }
                                            }
                                            if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" || y() != ":") {
                                                H()
                                            }
                                            ac[ad.slice(1)] = W(y())
                                        }
                                        return ac
                                    }
                                }
                                H()
                            }
                            return ad
                        };
                        var P = function(ae, ad, af) {
                            var ac = w(ae, ad, af);
                            if (ac === L) {
                                delete ae[ad]
                            } else {
                                ae[ad] = ac
                            }
                        };
                        var w = function(af, ae, ag) {
                            var ad = af[ae],
                                ac;
                            if (typeof ad == "object" && ad) {
                                if (u.call(ad) == E) {
                                    for (ac = ad.length; ac--;) {
                                        P(ad, ac, ag)
                                    }
                                } else {
                                    m(ad, function(ah) {
                                        P(ad, ah, ag)
                                    })
                                }
                            }
                            return ag.call(af, ae, ad)
                        };
                        V.parse = function(ae, af) {
                            var ac, ad;
                            G = 0;
                            X = "" + ae;
                            ac = W(y());
                            if (y() != "$") {
                                H()
                            }
                            G = X = null;
                            return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac
                        }
                    }
                }
                V.runInContext = j;
                return V
            }
            if (h && !c) {
                j(i, h)
            } else {
                var f = i.JSON,
                    k = i.JSON3,
                    d = false;
                var g = j(i, (i.JSON3 = {
                    noConflict: function() {
                        if (!d) {
                            d = true;
                            i.JSON = f;
                            i.JSON3 = k;
                            f = k = null
                        }
                        return g
                    }
                }));
                i.JSON = {
                    parse: g.parse,
                    stringify: g.stringify
                }
            }
            if (c) {
                define(function() {
                    return g
                })
            }
        }).call(this);
        JSON2 = a
    })()
}
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof Piwik !== "object") {
    Piwik = (function() {
        var k, a = {},
            x = document,
            e = navigator,
            N = screen,
            J = window,
            f = J.performance || J.mozPerformance || J.msPerformance || J.webkitPerformance,
            r = false,
            H = [],
            m = J.encodeURIComponent,
            I = J.decodeURIComponent,
            h = unescape,
            O, w, d;

        function j(Z) {
            try {
                return I(Z)
            } catch (aa) {
                return unescape(Z)
            }
        }
        function z(aa) {
            var Z = typeof aa;
            return Z !== "undefined"
        }
        function s(Z) {
            return typeof Z === "function"
        }
        function M(Z) {
            return typeof Z === "object"
        }
        function p(Z) {
            return typeof Z === "string" || Z instanceof String
        }
        function t(aa) {
            if (!aa) {
                return true
            }
            var Z;
            var ab = true;
            for (Z in aa) {
                if (Object.prototype.hasOwnProperty.call(aa, Z)) {
                    ab = false
                }
            }
            return ab
        }
        function U() {
            var Z, ab, aa;
            for (Z = 0; Z < arguments.length; Z += 1) {
                aa = arguments[Z];
                ab = aa.shift();
                if (p(ab)) {
                    O[ab].apply(O, aa)
                } else {
                    ab.apply(O, aa)
                }
            }
        }
        function Y(ac, ab, aa, Z) {
            if (ac.addEventListener) {
                ac.addEventListener(ab, aa, Z);
                return true
            }
            if (ac.attachEvent) {
                return ac.attachEvent("on" + ab, aa)
            }
            ac["on" + ab] = aa
        }
        function R(aa, ad) {
            var Z = "",
                ac, ab;
            for (ac in a) {
                if (Object.prototype.hasOwnProperty.call(a, ac)) {
                    ab = a[ac][aa];
                    if (s(ab)) {
                        Z += ab(ad)
                    }
                }
            }
            return Z
        }
        function V() {
            var Z;
            R("unload");
            if (k) {
                do {
                    Z = new Date()
                } while (Z.getTimeAlias() < k)
            }
        }
        function S() {
            var Z;
            if (!r) {
                r = true;
                R("load");
                for (Z = 0; Z < H.length; Z++) {
                    H[Z]()
                }
            }
            return true
        }
        function q() {
            var aa;
            if (x.addEventListener) {
                Y(x, "DOMContentLoaded", function Z() {
                    x.removeEventListener("DOMContentLoaded", Z, false);
                    S()
                })
            } else {
                if (x.attachEvent) {
                    x.attachEvent("onreadystatechange", function Z() {
                        if (x.readyState === "complete") {
                            x.detachEvent("onreadystatechange", Z);
                            S()
                        }
                    });
                    if (x.documentElement.doScroll && J === J.top) {
                        (function Z() {
                            if (!r) {
                                try {
                                    x.documentElement.doScroll("left")
                                } catch (ab) {
                                    setTimeout(Z, 0);
                                    return
                                }
                                S()
                            }
                        }())
                    }
                }
            }
            if ((new RegExp("WebKit")).test(e.userAgent)) {
                aa = setInterval(function() {
                    if (r || /loaded|complete/.test(x.readyState)) {
                        clearInterval(aa);
                        S()
                    }
                }, 10)
            }
            Y(J, "load", S, false)
        }
        function i(ab, aa) {
            var Z = x.createElement("script");
            Z.type = "text/javascript";
            Z.src = ab;
            if (Z.readyState) {
                Z.onreadystatechange = function() {
                    var ac = this.readyState;
                    if (ac === "loaded" || ac === "complete") {
                        Z.onreadystatechange = null;
                        aa()
                    }
                }
            } else {
                Z.onload = aa
            }
            x.getElementsByTagName("head")[0].appendChild(Z)
        }
        function A() {
            var Z = "";
            try {
                Z = J.top.document.referrer
            } catch (ab) {
                if (J.parent) {
                    try {
                        Z = J.parent.document.referrer
                    } catch (aa) {
                        Z = ""
                    }
                }
            }
            if (Z === "") {
                Z = x.referrer
            }
            return Z
        }
        function l(Z) {
            var ab = new RegExp("^([a-z]+):"),
                aa = ab.exec(Z);
            return aa ? aa[1] : null
        }
        function c(Z) {
            var ab = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                aa = ab.exec(Z);
            return aa ? aa[1] : Z
        }
        function L(ab, aa) {
            var Z = "[\\?&#]" + aa + "=([^&#]*)";
            var ad = new RegExp(Z);
            var ac = ad.exec(ab);
            return ac ? I(ac[1]) : ""
        }
        function v(Z) {
            return unescape(m(Z))
        }
        function X(ao) {
            var ab = function(av, au) {
                    return (av << au) | (av >>> (32 - au))
                },
                ap = function(ax) {
                    var av = "",
                        aw, au;
                    for (aw = 7; aw >= 0; aw--) {
                        au = (ax >>> (aw * 4)) & 15;
                        av += au.toString(16)
                    }
                    return av
                },
                ae, ar, aq, aa = [],
                ai = 1732584193,
                ag = 4023233417,
                af = 2562383102,
                ad = 271733878,
                ac = 3285377520,
                an, am, al, ak, aj, at, Z, ah = [];
            ao = v(ao);
            Z = ao.length;
            for (ar = 0; ar < Z - 3; ar += 4) {
                aq = ao.charCodeAt(ar) << 24 | ao.charCodeAt(ar + 1) << 16 | ao.charCodeAt(ar + 2) << 8 | ao.charCodeAt(ar + 3);
                ah.push(aq)
            }
            switch (Z & 3) {
                case 0:
                    ar = 2147483648;
                    break;
                case 1:
                    ar = ao.charCodeAt(Z - 1) << 24 | 8388608;
                    break;
                case 2:
                    ar = ao.charCodeAt(Z - 2) << 24 | ao.charCodeAt(Z - 1) << 16 | 32768;
                    break;
                case 3:
                    ar = ao.charCodeAt(Z - 3) << 24 | ao.charCodeAt(Z - 2) << 16 | ao.charCodeAt(Z - 1) << 8 | 128;
                    break
            }
            ah.push(ar);
            while ((ah.length & 15) !== 14) {
                ah.push(0)
            }
            ah.push(Z >>> 29);
            ah.push((Z << 3) & 4294967295);
            for (ae = 0; ae < ah.length; ae += 16) {
                for (ar = 0; ar < 16; ar++) {
                    aa[ar] = ah[ae + ar]
                }
                for (ar = 16; ar <= 79; ar++) {
                    aa[ar] = ab(aa[ar - 3] ^ aa[ar - 8] ^ aa[ar - 14] ^ aa[ar - 16], 1)
                }
                an = ai;
                am = ag;
                al = af;
                ak = ad;
                aj = ac;
                for (ar = 0; ar <= 19; ar++) {
                    at = (ab(an, 5) + ((am & al) | (~am & ak)) + aj + aa[ar] + 1518500249) & 4294967295;
                    aj = ak;
                    ak = al;
                    al = ab(am, 30);
                    am = an;
                    an = at
                }
                for (ar = 20; ar <= 39; ar++) {
                    at = (ab(an, 5) + (am ^ al ^ ak) + aj + aa[ar] + 1859775393) & 4294967295;
                    aj = ak;
                    ak = al;
                    al = ab(am, 30);
                    am = an;
                    an = at
                }
                for (ar = 40; ar <= 59; ar++) {
                    at = (ab(an, 5) + ((am & al) | (am & ak) | (al & ak)) + aj + aa[ar] + 2400959708) & 4294967295;
                    aj = ak;
                    ak = al;
                    al = ab(am, 30);
                    am = an;
                    an = at
                }
                for (ar = 60; ar <= 79; ar++) {
                    at = (ab(an, 5) + (am ^ al ^ ak) + aj + aa[ar] + 3395469782) & 4294967295;
                    aj = ak;
                    ak = al;
                    al = ab(am, 30);
                    am = an;
                    an = at
                }
                ai = (ai + an) & 4294967295;
                ag = (ag + am) & 4294967295;
                af = (af + al) & 4294967295;
                ad = (ad + ak) & 4294967295;
                ac = (ac + aj) & 4294967295
            }
            at = ap(ai) + ap(ag) + ap(af) + ap(ad) + ap(ac);
            return at.toLowerCase()
        }
        function Q(ab, Z, aa) {
            if (!ab) {
                ab = ""
            }
            if (!Z) {
                Z = ""
            }
            if (ab === "translate.googleusercontent.com") {
                if (aa === "") {
                    aa = Z
                }
                Z = L(Z, "u");
                ab = c(Z)
            } else {
                if (ab === "cc.bingj.com" || ab === "webcache.googleusercontent.com" || ab.slice(0, 5) === "74.6.") {
                    Z = x.links[0].href;
                    ab = c(Z)
                }
            }
            return [ab, Z, aa]
        }
        function B(aa) {
            var Z = aa.length;
            if (aa.charAt(--Z) === ".") {
                aa = aa.slice(0, Z)
            }
            if (aa.slice(0, 2) === "*.") {
                aa = aa.slice(1)
            }
            if (aa.indexOf("/") !== -1) {
                aa = aa.substr(0, aa.indexOf("/"))
            }
            return aa
        }
        function W(aa) {
            aa = aa && aa.text ? aa.text : aa;
            if (!p(aa)) {
                var Z = x.getElementsByTagName("title");
                if (Z && z(Z[0])) {
                    aa = Z[0].text
                }
            }
            return aa
        }
        function F(Z) {
            if (!Z) {
                return []
            }
            if (!z(Z.children) && z(Z.childNodes)) {
                return Z.children
            }
            if (z(Z.children)) {
                return Z.children
            }
            return []
        }
        function K(aa, Z) {
            if (!aa || !Z) {
                return false
            }
            if (aa.contains) {
                return aa.contains(Z)
            }
            if (aa === Z) {
                return true
            }
            if (aa.compareDocumentPosition) {
                return !!(aa.compareDocumentPosition(Z) & 16)
            }
            return false
        }
        function C(ab, ac) {
            if (ab && ab.indexOf) {
                return ab.indexOf(ac)
            }
            if (!z(ab) || ab === null) {
                return -1
            }
            if (!ab.length) {
                return -1
            }
            var Z = ab.length;
            if (Z === 0) {
                return -1
            }
            var aa = 0;
            while (aa < Z) {
                if (ab[aa] === ac) {
                    return aa
                }
                aa++
            }
            return -1
        }
        function g(ab) {
            if (!ab) {
                return false
            }
            function Z(ad, ae) {
                if (J.getComputedStyle) {
                    return x.defaultView.getComputedStyle(ad, null)[ae]
                }
                if (ad.currentStyle) {
                    return ad.currentStyle[ae]
                }
            }
            function ac(ad) {
                ad = ad.parentNode;
                while (ad) {
                    if (ad === x) {
                        return true
                    }
                    ad = ad.parentNode
                }
                return false
            }
            function aa(af, al, ad, ai, ag, aj, ah) {
                var ae = af.parentNode,
                    ak = 1;
                if (!ac(af)) {
                    return false
                }
                if (9 === ae.nodeType) {
                    return true
                }
                if ("0" === Z(af, "opacity") || "none" === Z(af, "display") || "hidden" === Z(af, "visibility")) {
                    return false
                }
                if (!z(al) || !z(ad) || !z(ai) || !z(ag) || !z(aj) || !z(ah)) {
                    al = af.offsetTop;
                    ag = af.offsetLeft;
                    ai = al + af.offsetHeight;
                    ad = ag + af.offsetWidth;
                    aj = af.offsetWidth;
                    ah = af.offsetHeight
                }
                if (ab === af && (0 === ah || 0 === aj) && "hidden" === Z(af, "overflow")) {
                    return false
                }
                if (ae) {
                    if (("hidden" === Z(ae, "overflow") || "scroll" === Z(ae, "overflow"))) {
                        if (ag + ak > ae.offsetWidth + ae.scrollLeft || ag + aj - ak < ae.scrollLeft || al + ak > ae.offsetHeight + ae.scrollTop || al + ah - ak < ae.scrollTop) {
                            return false
                        }
                    }
                    if (af.offsetParent === ae) {
                        ag += ae.offsetLeft;
                        al += ae.offsetTop
                    }
                    return aa(ae, al, ad, ai, ag, aj, ah)
                }
                return true
            }
            return aa(ab)
        }
        var T = {
            htmlCollectionToArray: function(ab) {
                var Z = [],
                    aa;
                if (!ab || !ab.length) {
                    return Z
                }
                for (aa = 0; aa < ab.length; aa++) {
                    Z.push(ab[aa])
                }
                return Z
            },
            find: function(Z) {
                if (!document.querySelectorAll || !Z) {
                    return []
                }
                var aa = document.querySelectorAll(Z);
                return this.htmlCollectionToArray(aa)
            },
            findMultiple: function(ab) {
                if (!ab || !ab.length) {
                    return []
                }
                var aa, ac;
                var Z = [];
                for (aa = 0; aa < ab.length; aa++) {
                    ac = this.find(ab[aa]);
                    Z = Z.concat(ac)
                }
                Z = this.makeNodesUnique(Z);
                return Z
            },
            findNodesByTagName: function(aa, Z) {
                if (!aa || !Z || !aa.getElementsByTagName) {
                    return []
                }
                var ab = aa.getElementsByTagName(Z);
                return this.htmlCollectionToArray(ab)
            },
            makeNodesUnique: function(Z) {
                var ae = [].concat(Z);
                Z.sort(function(ag, af) {
                    if (ag === af) {
                        return 0
                    }
                    var ai = C(ae, ag);
                    var ah = C(ae, af);
                    if (ai === ah) {
                        return 0
                    }
                    return ai > ah ? -1 : 1
                });
                if (Z.length <= 1) {
                    return Z
                }
                var aa = 0;
                var ac = 0;
                var ad = [];
                var ab;
                ab = Z[aa++];
                while (ab) {
                    if (ab === Z[aa]) {
                        ac = ad.push(aa)
                    }
                    ab = Z[aa++] || null
                }
                while (ac--) {
                    Z.splice(ad[ac], 1)
                }
                return Z
            },
            getAttributeValueFromNode: function(ad, ab) {
                if (!this.hasNodeAttribute(ad, ab)) {
                    return
                }
                if (ad && ad.getAttribute) {
                    return ad.getAttribute(ab)
                }
                if (!ad || !ad.attributes) {
                    return
                }
                var ac = (typeof ad.attributes[ab]);
                if ("undefined" === ac) {
                    return
                }
                if (ad.attributes[ab].value) {
                    return ad.attributes[ab].value
                }
                if (ad.attributes[ab].nodeValue) {
                    return ad.attributes[ab].nodeValue
                }
                var aa;
                var Z = ad.attributes;
                if (!Z) {
                    return
                }
                for (aa = 0; aa < Z.length; aa++) {
                    if (Z[aa].nodeName === ab) {
                        return Z[aa].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(aa, Z) {
                var ab = this.getAttributeValueFromNode(aa, Z);
                return !!ab
            },
            hasNodeAttribute: function(ab, Z) {
                if (ab && ab.hasAttribute) {
                    return ab.hasAttribute(Z)
                }
                if (ab && ab.attributes) {
                    var aa = (typeof ab.attributes[Z]);
                    return "undefined" !== aa
                }
                return false
            },
            hasNodeCssClass: function(ab, Z) {
                if (ab && Z && ab.className) {
                    var aa = typeof ab.className === "string" ? ab.className.split(" ") : [];
                    if (-1 !== C(aa, Z)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(ad, ab, Z) {
                if (!Z) {
                    Z = []
                }
                if (!ad || !ab) {
                    return Z
                }
                var ac = F(ad);
                if (!ac || !ac.length) {
                    return Z
                }
                var aa, ae;
                for (aa = 0; aa < ac.length; aa++) {
                    ae = ac[aa];
                    if (this.hasNodeAttribute(ae, ab)) {
                        Z.push(ae)
                    }
                    Z = this.findNodesHavingAttribute(ae, ab, Z)
                }
                return Z
            },
            findFirstNodeHavingAttribute: function(ab, aa) {
                if (!ab || !aa) {
                    return
                }
                if (this.hasNodeAttribute(ab, aa)) {
                    return ab
                }
                var Z = this.findNodesHavingAttribute(ab, aa);
                if (Z && Z.length) {
                    return Z[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(ac, ab) {
                if (!ac || !ab) {
                    return
                }
                if (this.hasNodeAttributeWithValue(ac, ab)) {
                    return ac
                }
                var Z = this.findNodesHavingAttribute(ac, ab);
                if (!Z || !Z.length) {
                    return
                }
                var aa;
                for (aa = 0; aa < Z.length; aa++) {
                    if (this.getAttributeValueFromNode(Z[aa], ab)) {
                        return Z[aa]
                    }
                }
            },
            findNodesHavingCssClass: function(ad, ac, Z) {
                if (!Z) {
                    Z = []
                }
                if (!ad || !ac) {
                    return Z
                }
                if (ad.getElementsByClassName) {
                    var ae = ad.getElementsByClassName(ac);
                    return this.htmlCollectionToArray(ae)
                }
                var ab = F(ad);
                if (!ab || !ab.length) {
                    return []
                }
                var aa, af;
                for (aa = 0; aa < ab.length; aa++) {
                    af = ab[aa];
                    if (this.hasNodeCssClass(af, ac)) {
                        Z.push(af)
                    }
                    Z = this.findNodesHavingCssClass(af, ac, Z)
                }
                return Z
            },
            findFirstNodeHavingClass: function(ab, aa) {
                if (!ab || !aa) {
                    return
                }
                if (this.hasNodeCssClass(ab, aa)) {
                    return ab
                }
                var Z = this.findNodesHavingCssClass(ab, aa);
                if (Z && Z.length) {
                    return Z[0]
                }
            },
            isLinkElement: function(aa) {
                if (!aa) {
                    return false
                }
                var Z = String(aa.nodeName).toLowerCase();
                var ac = ["a", "area"];
                var ab = C(ac, Z);
                return ab !== -1
            },
            setAnyAttribute: function(aa, Z, ab) {
                if (!aa || !Z) {
                    return
                }
                if (aa.setAttribute) {
                    aa.setAttribute(Z, ab)
                } else {
                    aa[Z] = ab
                }
            }
        };
        var o = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var aa = "." + this.CONTENT_CLASS;
                var Z = "[" + this.CONTENT_ATTR + "]";
                var ab = T.findMultiple([aa, Z]);
                return ab
            },
            findContentNodesWithinNode: function(ac) {
                if (!ac) {
                    return []
                }
                var aa = T.findNodesHavingCssClass(ac, this.CONTENT_CLASS);
                var Z = T.findNodesHavingAttribute(ac, this.CONTENT_ATTR);
                if (Z && Z.length) {
                    var ab;
                    for (ab = 0; ab < Z.length; ab++) {
                        aa.push(Z[ab])
                    }
                }
                if (T.hasNodeAttribute(ac, this.CONTENT_ATTR)) {
                    aa.push(ac)
                } else {
                    if (T.hasNodeCssClass(ac, this.CONTENT_CLASS)) {
                        aa.push(ac)
                    }
                }
                aa = T.makeNodesUnique(aa);
                return aa
            },
            findParentContentNode: function(aa) {
                if (!aa) {
                    return
                }
                var ab = aa;
                var Z = 0;
                while (ab && ab !== x && ab.parentNode) {
                    if (T.hasNodeAttribute(ab, this.CONTENT_ATTR)) {
                        return ab
                    }
                    if (T.hasNodeCssClass(ab, this.CONTENT_CLASS)) {
                        return ab
                    }
                    ab = ab.parentNode;
                    if (Z > 1000) {
                        break
                    }
                    Z++
                }
            },
            findPieceNode: function(aa) {
                var Z;
                Z = T.findFirstNodeHavingAttribute(aa, this.CONTENT_PIECE_ATTR);
                if (!Z) {
                    Z = T.findFirstNodeHavingClass(aa, this.CONTENT_PIECE_CLASS)
                }
                if (Z) {
                    return Z
                }
                return aa
            },
            findTargetNodeNoDefault: function(Z) {
                if (!Z) {
                    return
                }
                var aa = T.findFirstNodeHavingAttributeWithValue(Z, this.CONTENT_TARGET_ATTR);
                if (aa) {
                    return aa
                }
                aa = T.findFirstNodeHavingAttribute(Z, this.CONTENT_TARGET_ATTR);
                if (aa) {
                    return aa
                }
                aa = T.findFirstNodeHavingClass(Z, this.CONTENT_TARGET_CLASS);
                if (aa) {
                    return aa
                }
            },
            findTargetNode: function(Z) {
                var aa = this.findTargetNodeNoDefault(Z);
                if (aa) {
                    return aa
                }
                return Z
            },
            findContentName: function(aa) {
                if (!aa) {
                    return
                }
                var ad = T.findFirstNodeHavingAttributeWithValue(aa, this.CONTENT_NAME_ATTR);
                if (ad) {
                    return T.getAttributeValueFromNode(ad, this.CONTENT_NAME_ATTR)
                }
                var Z = this.findContentPiece(aa);
                if (Z) {
                    return this.removeDomainIfIsInLink(Z)
                }
                if (T.hasNodeAttributeWithValue(aa, "title")) {
                    return T.getAttributeValueFromNode(aa, "title")
                }
                var ab = this.findPieceNode(aa);
                if (T.hasNodeAttributeWithValue(ab, "title")) {
                    return T.getAttributeValueFromNode(ab, "title")
                }
                var ac = this.findTargetNode(aa);
                if (T.hasNodeAttributeWithValue(ac, "title")) {
                    return T.getAttributeValueFromNode(ac, "title")
                }
            },
            findContentPiece: function(aa) {
                if (!aa) {
                    return
                }
                var ac = T.findFirstNodeHavingAttributeWithValue(aa, this.CONTENT_PIECE_ATTR);
                if (ac) {
                    return T.getAttributeValueFromNode(ac, this.CONTENT_PIECE_ATTR)
                }
                var Z = this.findPieceNode(aa);
                var ab = this.findMediaUrlInNode(Z);
                if (ab) {
                    return this.toAbsoluteUrl(ab)
                }
            },
            findContentTarget: function(ab) {
                if (!ab) {
                    return
                }
                var ac = this.findTargetNode(ab);
                if (T.hasNodeAttributeWithValue(ac, this.CONTENT_TARGET_ATTR)) {
                    return T.getAttributeValueFromNode(ac, this.CONTENT_TARGET_ATTR)
                }
                var aa;
                if (T.hasNodeAttributeWithValue(ac, "href")) {
                    aa = T.getAttributeValueFromNode(ac, "href");
                    return this.toAbsoluteUrl(aa)
                }
                var Z = this.findPieceNode(ab);
                if (T.hasNodeAttributeWithValue(Z, "href")) {
                    aa = T.getAttributeValueFromNode(Z, "href");
                    return this.toAbsoluteUrl(aa)
                }
            },
            isSameDomain: function(Z) {
                if (!Z || !Z.indexOf) {
                    return false
                }
                if (0 === Z.indexOf(this.getLocation().origin)) {
                    return true
                }
                var aa = Z.indexOf(this.getLocation().host);
                if (8 >= aa && 0 <= aa) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(ab) {
                var aa = "^https?://[^/]+";
                var Z = "^.*//[^/]+";
                if (ab && ab.search && -1 !== ab.search(new RegExp(aa)) && this.isSameDomain(ab)) {
                    ab = ab.replace(new RegExp(Z), "");
                    if (!ab) {
                        ab = "/"
                    }
                }
                return ab
            },
            findMediaUrlInNode: function(ad) {
                if (!ad) {
                    return
                }
                var ab = ["img", "embed", "video", "audio"];
                var Z = ad.nodeName.toLowerCase();
                if (-1 !== C(ab, Z) && T.findFirstNodeHavingAttributeWithValue(ad, "src")) {
                    var ac = T.findFirstNodeHavingAttributeWithValue(ad, "src");
                    return T.getAttributeValueFromNode(ac, "src")
                }
                if (Z === "object" && T.hasNodeAttributeWithValue(ad, "data")) {
                    return T.getAttributeValueFromNode(ad, "data")
                }
                if (Z === "object") {
                    var ae = T.findNodesByTagName(ad, "param");
                    if (ae && ae.length) {
                        var aa;
                        for (aa = 0; aa < ae.length; aa++) {
                            if ("movie" === T.getAttributeValueFromNode(ae[aa], "name") && T.hasNodeAttributeWithValue(ae[aa], "value")) {
                                return T.getAttributeValueFromNode(ae[aa], "value")
                            }
                        }
                    }
                    var af = T.findNodesByTagName(ad, "embed");
                    if (af && af.length) {
                        return this.findMediaUrlInNode(af[0])
                    }
                }
            },
            trim: function(Z) {
                if (Z && String(Z) === Z) {
                    return Z.replace(/^\s+|\s+$/g, "")
                }
                return Z
            },
            isOrWasNodeInViewport: function(ae) {
                if (!ae || !ae.getBoundingClientRect || ae.nodeType !== 1) {
                    return true
                }
                var ad = ae.getBoundingClientRect();
                var ac = x.documentElement || {};
                var ab = ad.top < 0;
                if (ab && ae.offsetTop) {
                    ab = (ae.offsetTop + ad.height) > 0
                }
                var aa = ac.clientWidth;
                if (J.innerWidth && aa > J.innerWidth) {
                    aa = J.innerWidth
                }
                var Z = ac.clientHeight;
                if (J.innerHeight && Z > J.innerHeight) {
                    Z = J.innerHeight
                }
                return ((ad.bottom > 0 || ab) && ad.right > 0 && ad.left < aa && ((ad.top < Z) || ab))
            },
            isNodeVisible: function(aa) {
                var Z = g(aa);
                var ab = this.isOrWasNodeInViewport(aa);
                return Z && ab
            },
            buildInteractionRequestParams: function(Z, aa, ab, ac) {
                var ad = "";
                if (Z) {
                    ad += "c_i=" + m(Z)
                }
                if (aa) {
                    if (ad) {
                        ad += "&"
                    }
                    ad += "c_n=" + m(aa)
                }
                if (ab) {
                    if (ad) {
                        ad += "&"
                    }
                    ad += "c_p=" + m(ab)
                }
                if (ac) {
                    if (ad) {
                        ad += "&"
                    }
                    ad += "c_t=" + m(ac)
                }
                return ad
            },
            buildImpressionRequestParams: function(Z, aa, ab) {
                var ac = "c_n=" + m(Z) + "&c_p=" + m(aa);
                if (ab) {
                    ac += "&c_t=" + m(ab)
                }
                return ac
            },
            buildContentBlock: function(ab) {
                if (!ab) {
                    return
                }
                var Z = this.findContentName(ab);
                var aa = this.findContentPiece(ab);
                var ac = this.findContentTarget(ab);
                Z = this.trim(Z);
                aa = this.trim(aa);
                ac = this.trim(ac);
                return {
                    name: Z || "Unknown",
                    piece: aa || "Unknown",
                    target: ac || ""
                }
            },
            collectContent: function(ac) {
                if (!ac || !ac.length) {
                    return []
                }
                var ab = [];
                var Z, aa;
                for (Z = 0; Z < ac.length; Z++) {
                    aa = this.buildContentBlock(ac[Z]);
                    if (z(aa)) {
                        ab.push(aa)
                    }
                }
                return ab
            },
            setLocation: function(Z) {
                this.location = Z
            },
            getLocation: function() {
                var Z = this.location || J.location;
                if (!Z.origin) {
                    Z.origin = Z.protocol + "//" + Z.hostname + (Z.port ? ":" + Z.port : "")
                }
                return Z
            },
            toAbsoluteUrl: function(aa) {
                if ((!aa || String(aa) !== aa) && aa !== "") {
                    return aa
                }
                if ("" === aa) {
                    return this.getLocation().href
                }
                if (aa.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + aa
                }
                if (aa.search(/:\/\//) !== -1) {
                    return aa
                }
                if (0 === aa.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + aa
                }
                if (0 === aa.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + aa
                }
                if (0 === aa.search("^[a-zA-Z]{2,11}:")) {
                    return aa
                }
                if (aa.search(/^\//) !== -1) {
                    return this.getLocation().origin + aa
                }
                var Z = "(.*/)";
                var ab = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(Z))[0];
                return ab + aa
            },
            isUrlToCurrentDomain: function(aa) {
                var ab = this.toAbsoluteUrl(aa);
                if (!ab) {
                    return false
                }
                var Z = this.getLocation().origin;
                if (Z === ab) {
                    return true
                }
                if (0 === String(ab).indexOf(Z)) {
                    if (":" === String(ab).substr(Z.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(aa, Z) {
                if (!aa || !Z) {
                    return
                }
                T.setAnyAttribute(aa, "href", Z)
            },
            shouldIgnoreInteraction: function(ab) {
                var aa = T.hasNodeAttribute(ab, this.CONTENT_IGNOREINTERACTION_ATTR);
                var Z = T.hasNodeCssClass(ab, this.CONTENT_IGNOREINTERACTION_CLASS);
                return aa || Z
            }
        };

        function E(Z, aa) {
            if (aa) {
                return aa
            }
            if (Z.slice(-9) === "piwik.php") {
                Z = Z.slice(0, Z.length - 9)
            }
            return Z
        }
        function D(af) {
            var ah = "Piwik_Overlay";
            var aa = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
            var ab = aa.exec(x.referrer);
            if (ab) {
                var ad = ab[1];
                if (ad !== String(af)) {
                    return false
                }
                var ae = ab[2],
                    Z = ab[3],
                    ac = ab[4];
                if (!ac) {
                    ac = ""
                } else {
                    if (ac.indexOf("&segment=") === 0) {
                        ac = ac.substr("&segment=".length)
                    }
                }
                J.name = ah + "###" + ae + "###" + Z + "###" + ac
            }
            var ag = J.name.split("###");
            return ag.length === 4 && ag[0] === ah
        }
        function P(aa, ag, ac) {
            var af = J.name.split("###"),
                ae = af[1],
                Z = af[2],
                ad = af[3],
                ab = E(aa, ag);
            i(ab + "plugins/Overlay/client/client.js?v=1", function() {
                Piwik_Overlay_Client.initialize(ab, ac, ae, Z, ad)
            })
        }
        function n() {
            if (z(J.frameElement)) {
                return (J.frameElement && String(J.frameElement.nodeName).toLowerCase() === "iframe")
            }
            try {
                return J.self !== J.top
            } catch (Z) {
                return true
            }
        }
        function G(bJ, bD) {
            var bz = Q(x.domain, J.location.href, A()),
                ch = B(bz[0]),
                bj = j(bz[1]),
                aY = j(bz[2]),
                cf = false,
                bN = "GET",
                cu = bN,
                an = "application/x-www-form-urlencoded; charset=UTF-8",
                bZ = an,
                aj = bJ || "",
                be = "",
                cl = "",
                bB = bD || "",
                a7 = "",
                bk = "",
                aH, aU = x.title,
                cr = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                af = [ch],
                a8 = [],
                bh = [],
                aK = [],
                bf = 500,
                b8, aI, bn, bl, Z, bV = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
                bd = ["pk_kwd", "piwik_kwd", "utm_term"],
                aV = "_pk_",
                cj, a0, aW = false,
                cd, aS, a4, b9 = 33955200000,
                bT = 1800000,
                cq = 15768000000,
                aF = true,
                bR = 0,
                bm = false,
                au = false,
                bG, br = {},
                bQ = {},
                aX = {},
                a3 = 200,
                cm = {},
                cs = {},
                bF = [],
                bK = false,
                b2 = false,
                aa = false,
                ct = false,
                ar = false,
                aR = n(),
                ck = null,
                bH, av, a9, bC = X,
                aZ;

            function cx(cH, cE, cD, cG, cC, cF) {
                if (aW) {
                    return
                }
                var cB;
                if (cD) {
                    cB = new Date();
                    cB.setTime(cB.getTime() + cD)
                }
                x.cookie = cH + "=" + m(cE) + (cD ? ";expires=" + cB.toGMTString() : "") + ";path=" + (cG || "/") + (cC ? ";domain=" + cC : "") + (cF ? ";secure" : "")
            }
            function ai(cD) {
                if (aW) {
                    return 0
                }
                var cB = new RegExp("(^|;)[ ]*" + cD + "=([^;]*)"),
                    cC = cB.exec(x.cookie);
                return cC ? I(cC[2]) : 0
            }
            function bx(cB) {
                var cC;
                if (bl) {
                    cC = new RegExp("#.*");
                    return cB.replace(cC, "")
                }
                return cB
            }
            function bq(cD, cB) {
                var cE = l(cB),
                    cC;
                if (cE) {
                    return cB
                }
                if (cB.slice(0, 1) === "/") {
                    return l(cD) + "://" + c(cD) + cB
                }
                cD = bx(cD);
                cC = cD.indexOf("?");
                if (cC >= 0) {
                    cD = cD.slice(0, cC)
                }
                cC = cD.lastIndexOf("/");
                if (cC !== cD.length - 1) {
                    cD = cD.slice(0, cC + 1)
                }
                return cD + cB
            }
            function b6(cD, cB) {
                var cC;
                cD = String(cD).toLowerCase();
                cB = String(cB).toLowerCase();
                if (cD === cB) {
                    return true
                }
                if (cB.slice(0, 1) === ".") {
                    if (cD === cB.slice(1)) {
                        return true
                    }
                    cC = cD.length - cB.length;
                    if ((cC > 0) && (cD.slice(cC) === cB)) {
                        return true
                    }
                }
                return false
            }
            function co(cC, cB) {
                cC = String(cC);
                return cC.indexOf(cB, cC.length - cB.length) !== -1
            }
            function aQ(cC, cB) {
                cC = String(cC);
                return cC.substr(0, cC.length - cB)
            }
            function bP(cB) {
                var cC = document.createElement("a");
                if (cB.indexOf("//") !== 0 && cB.indexOf("http") !== 0) {
                    cB = "http://" + cB
                }
                cC.href = o.toAbsoluteUrl(cB);
                if (cC.pathname) {
                    return cC.pathname
                }
                return ""
            }
            function aG(cC, cB) {
                var cD = (!cB || cB === "/");
                if (cD) {
                    return true
                }
                if (cC === cB) {
                    return true
                }
                if (!cC) {
                    return false
                }
                cB = String(cB).toLowerCase();
                cC = String(cC).toLowerCase();
                if (!co(cC, "/")) {
                    cC += "/"
                }
                if (!co(cB, "/")) {
                    cB += "/"
                }
                return cC.indexOf(cB) === 0
            }
            function ac(cF, cH) {
                var cC, cB, cD, cE, cG;
                for (cC = 0; cC < af.length; cC++) {
                    cE = B(af[cC]);
                    cG = bP(af[cC]);
                    if (b6(cF, cE) && aG(cH, cG)) {
                        return true
                    }
                }
                return false
            }
            function az(cE) {
                var cC, cB, cD;
                for (cC = 0; cC < af.length; cC++) {
                    cB = B(af[cC].toLowerCase());
                    if (cE === cB) {
                        return true
                    }
                    if (cB.slice(0, 1) === ".") {
                        if (cE === cB.slice(1)) {
                            return true
                        }
                        cD = cE.length - cB.length;
                        if ((cD > 0) && (cE.slice(cD) === cB)) {
                            return true
                        }
                    }
                }
                return false
            }
            function bU(cB, cD) {
                var cC = new Image(1, 1);
                cC.onload = function() {
                    w = 0;
                    if (typeof cD === "function") {
                        cD()
                    }
                };
                cC.src = aj + (aj.indexOf("?") < 0 ? "?" : "&") + cB
            }
            function cp(cC, cF, cB) {
                if (!z(cB) || null === cB) {
                    cB = true
                }
                try {
                    var cE = J.XMLHttpRequest ? new J.XMLHttpRequest() : J.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                    cE.open("POST", aj, true);
                    cE.onreadystatechange = function() {
                        if (this.readyState === 4 && !(this.status >= 200 && this.status < 300) && cB) {
                            bU(cC, cF)
                        } else {
                            if (typeof cF === "function") {
                                cF()
                            }
                        }
                    };
                    cE.setRequestHeader("Content-Type", bZ);
                    cE.send(cC)
                } catch (cD) {
                    if (cB) {
                        bU(cC, cF)
                    }
                }
            }
            function bL(cC) {
                var cB = new Date();
                var cD = cB.getTime() + cC;
                if (!k || cD > k) {
                    k = cD
                }
            }
            function bS(cB) {
                if (bH || !aI) {
                    return
                }
                bH = setTimeout(function cC() {
                    bH = null;
                    if (!aR) {
                        aR = (!x.hasFocus || x.hasFocus())
                    }
                    if (!aR) {
                        bS(aI);
                        return
                    }
                    if (bn()) {
                        return
                    }
                    var cD = new Date(),
                        cE = aI - (cD.getTime() - ck);
                    cE = Math.min(aI, cE);
                    bS(cE)
                }, cB || aI)
            }
            function bg() {
                if (!bH) {
                    return
                }
                clearTimeout(bH);
                bH = null
            }
            function aN() {
                aR = true;
                if (bn()) {
                    return
                }
                bS()
            }
            function ag() {
                bg()
            }
            function cz() {
                if (ar || !aI) {
                    return
                }
                ar = true;
                Y(J, "focus", aN);
                Y(J, "blur", ag);
                bS()
            }
            function b3(cF) {
                var cC = new Date();
                var cB = cC.getTime();
                ck = cB;
                if (b2 && cB < b2) {
                    var cD = b2 - cB;
                    setTimeout(cF, cD);
                    bL(cD + 50);
                    b2 += 50;
                    return
                }
                if (b2 === false) {
                    var cE = 800;
                    b2 = cB + cE
                }
                cF()
            }
            function bc(cC, cB, cD) {
                if (!cd && cC) {
                    b3(function() {
                        if (cu === "POST") {
                            cp(cC, cD)
                        } else {
                            bU(cC, cD)
                        }
                        bL(cB)
                    })
                }
                if (!ar) {
                    cz()
                } else {
                    bS()
                }
            }
            function bO(cB) {
                if (cd) {
                    return false
                }
                return (cB && cB.length)
            }
            function cy(cD, cB) {
                if (!bO(cD)) {
                    return
                }
                var cC = '{"requests":["?' + cD.join('","?') + '"]}';
                b3(function() {
                    cp(cC, null, false);
                    bL(cB)
                })
            }
            function ax(cB) {
                return aV + cB + "." + bB + "." + aZ
            }
            function bA() {
                if (aW) {
                    return "0"
                }
                if (!z(e.cookieEnabled)) {
                    var cB = ax("testcookie");
                    cx(cB, "1");
                    return ai(cB) === "1" ? "1" : "0"
                }
                return e.cookieEnabled ? "1" : "0"
            }
            function aT() {
                aZ = bC((cj || ch) + (a0 || "/")).slice(0, 4)
            }
            function bs() {
                var cC = ax("cvar"),
                    cB = ai(cC);
                if (cB.length) {
                    cB = JSON2.parse(cB);
                    if (M(cB)) {
                        return cB
                    }
                }
                return {}
            }
            function b4() {
                if (au === false) {
                    au = bs()
                }
            }
            function ce() {
                return bC((e.userAgent || "") + (e.platform || "") + JSON2.stringify(cs) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }
            function cb() {
                var cD = new Date(),
                    cB = Math.round(cD.getTime() / 1000),
                    cC = ax("id"),
                    cG = ai(cC),
                    cF, cE;
                if (cG) {
                    cF = cG.split(".");
                    cF.unshift("0");
                    if (bk.length) {
                        cF[1] = bk
                    }
                    return cF
                }
                if (bk.length) {
                    cE = bk
                } else {
                    if ("0" === bA()) {
                        cE = ""
                    } else {
                        cE = ce()
                    }
                }
                cF = ["1", cE, cB, 0, cB, "", ""];
                return cF
            }
            function aB() {
                var cI = cb(),
                    cE = cI[0],
                    cF = cI[1],
                    cC = cI[2],
                    cB = cI[3],
                    cG = cI[4],
                    cD = cI[5];
                if (!z(cI[6])) {
                    cI[6] = ""
                }
                var cH = cI[6];
                return {
                    newVisitor: cE,
                    uuid: cF,
                    createTs: cC,
                    visitCount: cB,
                    currentVisitTs: cG,
                    lastVisitTs: cD,
                    lastEcommerceOrderTs: cH
                }
            }
            function am() {
                var cE = new Date(),
                    cC = cE.getTime(),
                    cF = aB().createTs;
                var cB = parseInt(cF, 10);
                var cD = (cB * 1000) + b9 - cC;
                return cD
            }
            function ap(cB) {
                if (!bB) {
                    return
                }
                var cD = new Date(),
                    cC = Math.round(cD.getTime() / 1000);
                if (!z(cB)) {
                    cB = aB()
                }
                var cE = cB.uuid + "." + cB.createTs + "." + cB.visitCount + "." + cC + "." + cB.lastVisitTs + "." + cB.lastEcommerceOrderTs;
                cx(ax("id"), cE, am(), a0, cj)
            }
            function bi() {
                var cB = ai(ax("ref"));
                if (cB.length) {
                    try {
                        cB = JSON2.parse(cB);
                        if (M(cB)) {
                            return cB
                        }
                    } catch (cC) {}
                }
                return ["", "", 0, ""]
            }
            function bt(cD, cC, cB) {
                cx(cD, "", -86400, cC, cB)
            }
            function a5(cC) {
                var cB = "testvalue";
                cx("test", cB, 10000, null, cC);
                if (ai("test") === cB) {
                    bt("test", null, cC);
                    return true
                }
                return false
            }
            function ak() {
                var cD = aW;
                aW = false;
                var cB = ["id", "ses", "cvar", "ref"];
                var cC, cE;
                for (cC = 0; cC < cB.length; cC++) {
                    cE = ax(cB[cC]);
                    if (0 !== ai(cE)) {
                        bt(cE, a0, cj)
                    }
                }
                aW = cD
            }
            function by(cB) {
                bB = cB;
                ap()
            }
            function cA(cF) {
                if (!cF || !M(cF)) {
                    return
                }
                var cE = [];
                var cD;
                for (cD in cF) {
                    if (Object.prototype.hasOwnProperty.call(cF, cD)) {
                        cE.push(cD)
                    }
                }
                var cG = {};
                cE.sort();
                var cB = cE.length;
                var cC;
                for (cC = 0; cC < cB; cC++) {
                    cG[cE[cC]] = cF[cE[cC]]
                }
                return cG
            }
            function bI() {
                cx(ax("ses"), "*", bT, a0, cj)
            }
            function bW(cD, cY, cZ, cE) {
                var cX, cC = new Date(),
                    cL = Math.round(cC.getTime() / 1000),
                    cI, cW, cF = 1024,
                    c4, cM, cU = au,
                    cG = ax("ses"),
                    cS = ax("ref"),
                    cP = ax("cvar"),
                    cQ = ai(cG),
                    cV = bi(),
                    c1 = aH || bj,
                    cJ, cB;
                if (aW) {
                    ak()
                }
                if (cd) {
                    return ""
                }
                var cR = aB();
                if (!z(cE)) {
                    cE = ""
                }
                var cO = x.characterSet || x.charset;
                if (!cO || cO.toLowerCase() === "utf-8") {
                    cO = null
                }
                cJ = cV[0];
                cB = cV[1];
                cI = cV[2];
                cW = cV[3];
                if (!cQ) {
                    var c0 = bT / 1000;
                    if (!cR.lastVisitTs || (cL - cR.lastVisitTs) > c0) {
                        cR.visitCount++;
                        cR.lastVisitTs = cR.currentVisitTs
                    }
                    if (!a4 || !cJ.length) {
                        for (cX in bV) {
                            if (Object.prototype.hasOwnProperty.call(bV, cX)) {
                                cJ = L(c1, bV[cX]);
                                if (cJ.length) {
                                    break
                                }
                            }
                        }
                        for (cX in bd) {
                            if (Object.prototype.hasOwnProperty.call(bd, cX)) {
                                cB = L(c1, bd[cX]);
                                if (cB.length) {
                                    break
                                }
                            }
                        }
                    }
                    c4 = c(aY);
                    cM = cW.length ? c(cW) : "";
                    if (c4.length && !az(c4) && (!a4 || !cM.length || az(cM))) {
                        cW = aY
                    }
                    if (cW.length || cJ.length) {
                        cI = cL;
                        cV = [cJ, cB, cI, bx(cW.slice(0, cF))];
                        cx(cS, JSON2.stringify(cV), cq, a0, cj)
                    }
                }
                cD += "&idsite=" + bB + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + cC.getHours() + "&m=" + cC.getMinutes() + "&s=" + cC.getSeconds() + "&url=" + m(bx(c1)) + (aY.length ? "&urlref=" + m(bx(aY)) : "") + ((a7 && a7.length) ? "&uid=" + m(a7) : "") + "&_id=" + cR.uuid + "&_idts=" + cR.createTs + "&_idvc=" + cR.visitCount + "&_idn=" + cR.newVisitor + (cJ.length ? "&_rcn=" + m(cJ) : "") + (cB.length ? "&_rck=" + m(cB) : "") + "&_refts=" + cI + "&_viewts=" + cR.lastVisitTs + (String(cR.lastEcommerceOrderTs).length ? "&_ects=" + cR.lastEcommerceOrderTs : "") + (String(cW).length ? "&_ref=" + m(bx(cW.slice(0, cF))) : "") + (cO ? "&cs=" + m(cO) : "") + "&send_image=0";
                for (cX in cs) {
                    if (Object.prototype.hasOwnProperty.call(cs, cX)) {
                        cD += "&" + cX + "=" + cs[cX]
                    }
                }
                var c3 = [];
                if (cY) {
                    for (cX in cY) {
                        if (Object.prototype.hasOwnProperty.call(cY, cX) && /^dimension\d+$/.test(cX)) {
                            var cH = cX.replace("dimension", "");
                            c3.push(parseInt(cH, 10));
                            c3.push(String(cH));
                            cD += "&" + cX + "=" + cY[cX];
                            delete cY[cX]
                        }
                    }
                }
                if (cY && t(cY)) {
                    cY = null
                }
                for (cX in aX) {
                    if (Object.prototype.hasOwnProperty.call(aX, cX)) {
                        var cN = (-1 === c3.indexOf(cX));
                        if (cN) {
                            cD += "&dimension" + cX + "=" + aX[cX]
                        }
                    }
                }
                if (cY) {
                    cD += "&data=" + m(JSON2.stringify(cY))
                } else {
                    if (Z) {
                        cD += "&data=" + m(JSON2.stringify(Z))
                    }
                }
                function cK(c5, c6) {
                    var c7 = JSON2.stringify(c5);
                    if (c7.length > 2) {
                        return "&" + c6 + "=" + m(c7)
                    }
                    return ""
                }
                var c2 = cA(br);
                var cT = cA(bQ);
                cD += cK(c2, "cvar");
                cD += cK(cT, "e_cvar");
                if (au) {
                    cD += cK(au, "_cvar");
                    for (cX in cU) {
                        if (Object.prototype.hasOwnProperty.call(cU, cX)) {
                            if (au[cX][0] === "" || au[cX][1] === "") {
                                delete au[cX]
                            }
                        }
                    }
                    if (bm) {
                        cx(cP, JSON2.stringify(au), bT, a0, cj)
                    }
                }
                if (aF) {
                    if (bR) {
                        cD += "&gt_ms=" + bR
                    } else {
                        if (f && f.timing && f.timing.requestStart && f.timing.responseEnd) {
                            cD += "&gt_ms=" + (f.timing.responseEnd - f.timing.requestStart)
                        }
                    }
                }
                cR.lastEcommerceOrderTs = z(cE) && String(cE).length ? cE : cR.lastEcommerceOrderTs;
                ap(cR);
                bI();
                cD += R(cZ);
                if (cl.length) {
                    cD += "&" + cl
                }
                if (s(bG)) {
                    cD = bG(cD)
                }
                return cD
            }
            bn = function aJ() {
                var cB = new Date();
                if (ck + aI <= cB.getTime()) {
                    var cC = bW("ping=1", null, "ping");
                    bc(cC, bf);
                    return true
                }
                return false
            };

            function a1(cE, cD, cI, cF, cB, cL) {
                var cG = "idgoal=0",
                    cH, cC = new Date(),
                    cJ = [],
                    cK;
                if (String(cE).length) {
                    cG += "&ec_id=" + m(cE);
                    cH = Math.round(cC.getTime() / 1000)
                }
                cG += "&revenue=" + cD;
                if (String(cI).length) {
                    cG += "&ec_st=" + cI
                }
                if (String(cF).length) {
                    cG += "&ec_tx=" + cF
                }
                if (String(cB).length) {
                    cG += "&ec_sh=" + cB
                }
                if (String(cL).length) {
                    cG += "&ec_dt=" + cL
                }
                if (cm) {
                    for (cK in cm) {
                        if (Object.prototype.hasOwnProperty.call(cm, cK)) {
                            if (!z(cm[cK][1])) {
                                cm[cK][1] = ""
                            }
                            if (!z(cm[cK][2])) {
                                cm[cK][2] = ""
                            }
                            if (!z(cm[cK][3]) || String(cm[cK][3]).length === 0) {
                                cm[cK][3] = 0
                            }
                            if (!z(cm[cK][4]) || String(cm[cK][4]).length === 0) {
                                cm[cK][4] = 1
                            }
                            cJ.push(cm[cK])
                        }
                    }
                    cG += "&ec_items=" + m(JSON2.stringify(cJ))
                }
                cG = bW(cG, Z, "ecommerce", cH);
                bc(cG, bf)
            }
            function bu(cB, cF, cE, cD, cC, cG) {
                if (String(cB).length && z(cF)) {
                    a1(cB, cF, cE, cD, cC, cG)
                }
            }
            function a2(cB) {
                if (z(cB)) {
                    a1("", cB, "", "", "", "")
                }
            }
            function bv(cD, cE) {
                var cB = new Date(),
                    cC = bW("action_name=" + m(W(cD || aU)), cE, "log");
                bc(cC, bf)
            }
            function aD(cD, cC) {
                var cE, cB = "(^| )(piwik[_-]" + cC;
                if (cD) {
                    for (cE = 0; cE < cD.length; cE++) {
                        cB += "|" + cD[cE]
                    }
                }
                cB += ")( |$)";
                return new RegExp(cB)
            }
            function ay(cB) {
                return (aj && cB && 0 === String(cB).indexOf(aj))
            }
            function bX(cF, cB, cG, cC) {
                if (ay(cB)) {
                    return 0
                }
                var cE = aD(bh, "download"),
                    cD = aD(aK, "link"),
                    cH = new RegExp("\\.(" + cr.join("|") + ")([?&#]|$)", "i");
                if (cD.test(cF)) {
                    return "link"
                }
                if (cC || cE.test(cF) || cH.test(cB)) {
                    return "download"
                }
                if (cG) {
                    return 0
                }
                return "link"
            }
            function ad(cC) {
                var cB;
                cB = cC.parentNode;
                while (cB !== null && z(cB)) {
                    if (T.isLinkElement(cC)) {
                        break
                    }
                    cC = cB;
                    cB = cC.parentNode
                }
                return cC
            }
            function cv(cG) {
                cG = ad(cG);
                if (!T.hasNodeAttribute(cG, "href")) {
                    return
                }
                if (!z(cG.href)) {
                    return
                }
                var cF = T.getAttributeValueFromNode(cG, "href");
                if (ay(cF)) {
                    return
                }
                var cC = cG.pathname || bP(cG.href);
                var cH = cG.hostname || c(cG.href);
                var cI = cH.toLowerCase();
                var cD = cG.href.replace(cH, cI);
                var cE = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
                if (!cE.test(cD)) {
                    var cB = bX(cG.className, cD, ac(cI, cC), T.hasNodeAttribute(cG, "download"));
                    if (cB) {
                        return {
                            type: cB,
                            href: cD
                        }
                    }
                }
            }
            function at(cB, cC, cD, cE) {
                var cF = o.buildInteractionRequestParams(cB, cC, cD, cE);
                if (!cF) {
                    return
                }
                return bW(cF, null, "contentInteraction")
            }
            function ca(cD, cE, cI, cB, cC) {
                if (!z(cD)) {
                    return
                }
                if (ay(cD)) {
                    return cD
                }
                var cG = o.toAbsoluteUrl(cD);
                var cF = "redirecturl=" + m(cG) + "&";
                cF += at(cE, cI, cB, (cC || cD));
                var cH = "&";
                if (aj.indexOf("?") < 0) {
                    cH = "?"
                }
                return aj + cH + cF
            }
            function aO(cB, cC) {
                if (!cB || !cC) {
                    return false
                }
                var cD = o.findTargetNode(cB);
                if (o.shouldIgnoreInteraction(cD)) {
                    return false
                }
                cD = o.findTargetNodeNoDefault(cB);
                if (cD && !K(cD, cC)) {
                    return false
                }
                return true
            }
            function bY(cD, cC, cF) {
                if (!cD) {
                    return
                }
                var cB = o.findParentContentNode(cD);
                if (!cB) {
                    return
                }
                if (!aO(cB, cD)) {
                    return
                }
                var cE = o.buildContentBlock(cB);
                if (!cE) {
                    return
                }
                if (!cE.target && cF) {
                    cE.target = cF
                }
                return o.buildInteractionRequestParams(cC, cE.name, cE.piece, cE.target)
            }
            function aA(cC) {
                if (!bF || !bF.length) {
                    return false
                }
                var cB, cD;
                for (cB = 0; cB < bF.length; cB++) {
                    cD = bF[cB];
                    if (cD && cD.name === cC.name && cD.piece === cC.piece && cD.target === cC.target) {
                        return true
                    }
                }
                return false
            }
            function bb(cE) {
                if (!cE) {
                    return false
                }
                var cH = o.findTargetNode(cE);
                if (!cH || o.shouldIgnoreInteraction(cH)) {
                    return false
                }
                var cI = cv(cH);
                if (ct && cI && cI.type) {
                    return false
                }
                if (T.isLinkElement(cH) && T.hasNodeAttributeWithValue(cH, "href")) {
                    var cB = String(T.getAttributeValueFromNode(cH, "href"));
                    if (0 === cB.indexOf("#")) {
                        return false
                    }
                    if (ay(cB)) {
                        return true
                    }
                    if (!o.isUrlToCurrentDomain(cB)) {
                        return false
                    }
                    var cF = o.buildContentBlock(cE);
                    if (!cF) {
                        return
                    }
                    var cD = cF.name;
                    var cJ = cF.piece;
                    var cG = cF.target;
                    if (!T.hasNodeAttributeWithValue(cH, o.CONTENT_TARGET_ATTR) || cH.wasContentTargetAttrReplaced) {
                        cH.wasContentTargetAttrReplaced = true;
                        cG = o.toAbsoluteUrl(cB);
                        T.setAnyAttribute(cH, o.CONTENT_TARGET_ATTR, cG)
                    }
                    var cC = ca(cB, "click", cD, cJ, cG);
                    o.setHrefAttribute(cH, cC);
                    return true
                }
                return false
            }
            function aq(cC) {
                if (!cC || !cC.length) {
                    return
                }
                var cB;
                for (cB = 0; cB < cC.length; cB++) {
                    bb(cC[cB])
                }
            }
            function aC(cB) {
                return function(cC) {
                    if (!cB) {
                        return
                    }
                    var cF = o.findParentContentNode(cB);
                    var cG;
                    if (cC) {
                        cG = cC.target || cC.srcElement
                    }
                    if (!cG) {
                        cG = cB
                    }
                    if (!aO(cF, cG)) {
                        return
                    }
                    bL(bf);
                    if (T.isLinkElement(cB) && T.hasNodeAttributeWithValue(cB, "href") && T.hasNodeAttributeWithValue(cB, o.CONTENT_TARGET_ATTR)) {
                        var cD = T.getAttributeValueFromNode(cB, "href");
                        if (!ay(cD) && cB.wasContentTargetAttrReplaced) {
                            T.setAnyAttribute(cB, o.CONTENT_TARGET_ATTR, "")
                        }
                    }
                    var cK = cv(cB);
                    if (aa && cK && cK.type) {
                        return cK.type
                    }
                    if (bb(cF)) {
                        return "href"
                    }
                    var cH = o.buildContentBlock(cF);
                    if (!cH) {
                        return
                    }
                    var cE = cH.name;
                    var cL = cH.piece;
                    var cJ = cH.target;
                    var cI = at("click", cE, cL, cJ);
                    bc(cI, bf);
                    return cI
                }
            }
            function bw(cD) {
                if (!cD || !cD.length) {
                    return
                }
                var cB, cC;
                for (cB = 0; cB < cD.length; cB++) {
                    cC = o.findTargetNode(cD[cB]);
                    if (cC && !cC.contentInteractionTrackingSetupDone) {
                        cC.contentInteractionTrackingSetupDone = true;
                        Y(cC, "click", aC(cC))
                    }
                }
            }
            function a6(cD, cE) {
                if (!cD || !cD.length) {
                    return []
                }
                var cB, cC;
                for (cB = 0; cB < cD.length; cB++) {
                    if (aA(cD[cB])) {
                        cD.splice(cB, 1);
                        cB--
                    } else {
                        bF.push(cD[cB])
                    }
                }
                if (!cD || !cD.length) {
                    return []
                }
                aq(cE);
                bw(cE);
                var cF = [];
                for (cB = 0; cB < cD.length; cB++) {
                    cC = bW(o.buildImpressionRequestParams(cD[cB].name, cD[cB].piece, cD[cB].target), undefined, "contentImpressions");
                    cF.push(cC)
                }
                return cF
            }
            function b1(cC) {
                var cB = o.collectContent(cC);
                return a6(cB, cC)
            }
            function aM(cC) {
                if (!cC || !cC.length) {
                    return []
                }
                var cB;
                for (cB = 0; cB < cC.length; cB++) {
                    if (!o.isNodeVisible(cC[cB])) {
                        cC.splice(cB, 1);
                        cB--
                    }
                }
                if (!cC || !cC.length) {
                    return []
                }
                return b1(cC)
            }
            function al(cD, cB, cC) {
                var cE = o.buildImpressionRequestParams(cD, cB, cC);
                return bW(cE, null, "contentImpression")
            }
            function cw(cE, cC) {
                if (!cE) {
                    return
                }
                var cB = o.findParentContentNode(cE);
                var cD = o.buildContentBlock(cB);
                if (!cD) {
                    return
                }
                if (!cC) {
                    cC = "Unknown"
                }
                return at(cC, cD.name, cD.piece, cD.target)
            }
            function cc(cC, cE, cB, cD) {
                return "e_c=" + m(cC) + "&e_a=" + m(cE) + (z(cB) ? "&e_n=" + m(cB) : "") + (z(cD) ? "&e_v=" + m(cD) : "")
            }
            function ae(cD, cF, cB, cE, cG) {
                if (String(cD).length === 0 || String(cF).length === 0) {
                    return false
                }
                var cC = bW(cc(cD, cF, cB, cE), cG, "event");
                bc(cC, bf)
            }
            function bE(cB, cE, cC, cF) {
                var cD = bW("search=" + m(cB) + (cE ? "&search_cat=" + m(cE) : "") + (z(cC) ? "&search_count=" + cC : ""), cF, "sitesearch");
                bc(cD, bf)
            }
            function cg(cB, cE, cD) {
                var cC = bW("idgoal=" + cB + (cE ? "&revenue=" + cE : ""), cD, "goal");
                bc(cC, bf)
            }
            function cn(cE, cB, cI, cH, cD) {
                var cG = cB + "=" + m(bx(cE));
                var cC = bY(cD, "click", cE);
                if (cC) {
                    cG += "&" + cC
                }
                var cF = bW(cG, cI, "link");
                bc(cF, (cH ? 0 : bf), cH)
            }
            function bp(cC, cB) {
                if (cC !== "") {
                    return cC + cB.charAt(0).toUpperCase() + cB.slice(1)
                }
                return cB
            }
            function bM(cG) {
                var cF, cB, cE = ["", "webkit", "ms", "moz"],
                    cD;
                if (!aS) {
                    for (cB = 0; cB < cE.length; cB++) {
                        cD = cE[cB];
                        if (Object.prototype.hasOwnProperty.call(x, bp(cD, "hidden"))) {
                            if (x[bp(cD, "visibilityState")] === "prerender") {
                                cF = true
                            }
                            break
                        }
                    }
                }
                if (cF) {
                    Y(x, cD + "visibilitychange", function cC() {
                        x.removeEventListener(cD + "visibilitychange", cC, false);
                        cG()
                    });
                    return
                }
                cG()
            }
            function ao(cB) {
                if (x.readyState === "complete") {
                    cB()
                } else {
                    if (J.addEventListener) {
                        J.addEventListener("load", cB)
                    } else {
                        if (J.attachEvent) {
                            J.attachEvent("onLoad", cB)
                        }
                    }
                }
            }
            function aP(cC) {
                var cB = false;
                if (x.attachEvent) {
                    cB = x.readyState === "complete"
                } else {
                    cB = x.readyState !== "loading"
                }
                if (cB) {
                    cC()
                } else {
                    if (x.addEventListener) {
                        x.addEventListener("DOMContentLoaded", cC)
                    } else {
                        if (x.attachEvent) {
                            x.attachEvent("onreadystatechange", cC)
                        }
                    }
                }
            }
            function b7(cB) {
                var cC = cv(cB);
                if (cC && cC.type) {
                    cC.href = j(cC.href);
                    cn(cC.href, cC.type, undefined, null, cB)
                }
            }
            function b0() {
                return x.all && !x.addEventListener
            }
            function ci(cB) {
                var cD = cB.which;
                var cC = (typeof cB.button);
                if (!cD && cC !== "undefined") {
                    if (b0()) {
                        if (cB.button & 1) {
                            cD = 1
                        } else {
                            if (cB.button & 2) {
                                cD = 3
                            } else {
                                if (cB.button & 4) {
                                    cD = 2
                                }
                            }
                        }
                    } else {
                        if (cB.button === 0 || cB.button === "0") {
                            cD = 1
                        } else {
                            if (cB.button & 1) {
                                cD = 2
                            } else {
                                if (cB.button & 2) {
                                    cD = 3
                                }
                            }
                        }
                    }
                }
                return cD
            }
            function bo(cB) {
                switch (ci(cB)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }
            function aE(cB) {
                return cB.target || cB.srcElement
            }
            function ah(cB) {
                return function(cE) {
                    cE = cE || J.event;
                    var cD = bo(cE);
                    var cF = aE(cE);
                    if (cE.type === "click") {
                        var cC = false;
                        if (cB && cD === "middle") {
                            cC = true
                        }
                        if (cF && !cC) {
                            b7(cF)
                        }
                    } else {
                        if (cE.type === "mousedown") {
                            if (cD === "middle" && cF) {
                                av = cD;
                                a9 = cF
                            } else {
                                av = a9 = null
                            }
                        } else {
                            if (cE.type === "mouseup") {
                                if (cD === av && cF === a9) {
                                    b7(cF)
                                }
                                av = a9 = null
                            } else {
                                if (cE.type === "contextmenu") {
                                    b7(cF)
                                }
                            }
                        }
                    }
                }
            }
            function ab(cC, cB) {
                Y(cC, "click", ah(cB), false);
                if (cB) {
                    Y(cC, "mouseup", ah(cB), false);
                    Y(cC, "mousedown", ah(cB), false);
                    Y(cC, "contextmenu", ah(cB), false)
                }
            }
            function ba(cC) {
                if (!aa) {
                    aa = true;
                    var cD, cB = aD(a8, "ignore"),
                        cE = x.links;
                    if (cE) {
                        for (cD = 0;
                             cD < cE.length; cD++) {
                            if (!cB.test(cE[cD].className)) {
                                ab(cE[cD], cC)
                            }
                        }
                    }
                }
            }
            function aw(cD, cF, cG) {
                if (bK) {
                    return true
                }
                bK = true;
                var cH = false;
                var cE, cC;

                function cB() {
                    cH = true
                }
                ao(function() {
                    function cI(cK) {
                        setTimeout(function() {
                            if (!bK) {
                                return
                            }
                            cH = false;
                            cG.trackVisibleContentImpressions();
                            cI(cK)
                        }, cK)
                    }
                    function cJ(cK) {
                        setTimeout(function() {
                            if (!bK) {
                                return
                            }
                            if (cH) {
                                cH = false;
                                cG.trackVisibleContentImpressions()
                            }
                            cJ(cK)
                        }, cK)
                    }
                    if (cD) {
                        cE = ["scroll", "resize"];
                        for (cC = 0; cC < cE.length; cC++) {
                            if (x.addEventListener) {
                                x.addEventListener(cE[cC], cB)
                            } else {
                                J.attachEvent("on" + cE[cC], cB)
                            }
                        }
                        cJ(100)
                    }
                    if (cF && cF > 0) {
                        cF = parseInt(cF, 10);
                        cI(cF)
                    }
                })
            }
            function aL(cF, cH) {
                var cG = bP(cF);
                var cE = bP(cH);
                if (!cG || cG === "/" || !cE || cE === "/") {
                    return
                }
                var cD = B(cF);
                if (ac(cD, "/")) {
                    return
                }
                if (co(cG, "/")) {
                    cG = aQ(cG, 1)
                }
                var cI = cG.split("/");
                var cC;
                for (cC = 2; cC < cI.length; cC++) {
                    var cB = cI.slice(0, cC).join("/");
                    if (ac(cD, cB)) {
                        cG = cB;
                        break
                    }
                }
                if (!aG(cE, cG)) {
                    return
                }
                return cG
            }
            function b5() {
                var cD, cF, cG = {
                        pdf: "application/pdf",
                        qt: "video/quicktime",
                        realp: "audio/x-pn-realaudio-plugin",
                        wma: "application/x-mplayer2",
                        dir: "application/x-director",
                        fla: "application/x-shockwave-flash",
                        java: "application/x-java-vm",
                        gears: "application/x-googlegears",
                        ag: "application/x-silverlight"
                    },
                    cC = J.devicePixelRatio || 1;
                if (!((new RegExp("MSIE")).test(e.userAgent))) {
                    if (e.mimeTypes && e.mimeTypes.length) {
                        for (cD in cG) {
                            if (Object.prototype.hasOwnProperty.call(cG, cD)) {
                                cF = e.mimeTypes[cG[cD]];
                                cs[cD] = (cF && cF.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (typeof navigator.javaEnabled !== "unknown" && z(e.javaEnabled) && e.javaEnabled()) {
                        cs.java = "1"
                    }
                    if (s(J.GearsFactory)) {
                        cs.gears = "1"
                    }
                    cs.cookie = bA()
                }
                var cE = parseInt(N.width, 10) * cC;
                var cB = parseInt(N.height, 10) * cC;
                cs.res = parseInt(cE, 10) + "x" + parseInt(cB, 10)
            }
            b5();
            aT();
            ap();
            return {
                getVisitorId: function() {
                    return aB().uuid
                },
                getVisitorInfo: function() {
                    return cb()
                },
                getAttributionInfo: function() {
                    return bi()
                },
                getAttributionCampaignName: function() {
                    return bi()[0]
                },
                getAttributionCampaignKeyword: function() {
                    return bi()[1]
                },
                getAttributionReferrerTimestamp: function() {
                    return bi()[2]
                },
                getAttributionReferrerUrl: function() {
                    return bi()[3]
                },
                setTrackerUrl: function(cB) {
                    aj = cB
                },
                getTrackerUrl: function() {
                    return aj
                },
                getSiteId: function() {
                    return bB
                },
                setSiteId: function(cB) {
                    by(cB)
                },
                setUserId: function(cB) {
                    if (!z(cB) || !cB.length) {
                        return
                    }
                    a7 = cB;
                    bk = bC(a7).substr(0, 16)
                },
                getUserId: function() {
                    return a7
                },
                setCustomData: function(cB, cC) {
                    if (M(cB)) {
                        Z = cB
                    } else {
                        if (!Z) {
                            Z = {}
                        }
                        Z[cB] = cC
                    }
                },
                getCustomData: function() {
                    return Z
                },
                setCustomRequestProcessing: function(cB) {
                    bG = cB
                },
                appendToTrackingUrl: function(cB) {
                    cl = cB
                },
                getRequest: function(cB) {
                    return bW(cB)
                },
                addPlugin: function(cB, cC) {
                    a[cB] = cC
                },
                setCustomDimension: function(cB, cC) {
                    cB = parseInt(cB, 10);
                    if (cB > 0) {
                        if (!z(cC)) {
                            cC = ""
                        }
                        if (!p(cC)) {
                            cC = String(cC)
                        }
                        aX[cB] = cC
                    }
                },
                getCustomDimension: function(cB) {
                    cB = parseInt(cB, 10);
                    if (cB > 0 && Object.prototype.hasOwnProperty.call(aX, cB)) {
                        return aX[cB]
                    }
                },
                deleteCustomDimension: function(cB) {
                    cB = parseInt(cB, 10);
                    if (cB > 0) {
                        delete aX[cB]
                    }
                },
                setCustomVariable: function(cC, cB, cF, cD) {
                    var cE;
                    if (!z(cD)) {
                        cD = "visit"
                    }
                    if (!z(cB)) {
                        return
                    }
                    if (!z(cF)) {
                        cF = ""
                    }
                    if (cC > 0) {
                        cB = !p(cB) ? String(cB) : cB;
                        cF = !p(cF) ? String(cF) : cF;
                        cE = [cB.slice(0, a3), cF.slice(0, a3)];
                        if (cD === "visit" || cD === 2) {
                            b4();
                            au[cC] = cE
                        } else {
                            if (cD === "page" || cD === 3) {
                                br[cC] = cE
                            } else {
                                if (cD === "event") {
                                    bQ[cC] = cE
                                }
                            }
                        }
                    }
                },
                getCustomVariable: function(cC, cD) {
                    var cB;
                    if (!z(cD)) {
                        cD = "visit"
                    }
                    if (cD === "page" || cD === 3) {
                        cB = br[cC]
                    } else {
                        if (cD === "event") {
                            cB = bQ[cC]
                        } else {
                            if (cD === "visit" || cD === 2) {
                                b4();
                                cB = au[cC]
                            }
                        }
                    }
                    if (!z(cB) || (cB && cB[0] === "")) {
                        return false
                    }
                    return cB
                },
                deleteCustomVariable: function(cB, cC) {
                    if (this.getCustomVariable(cB, cC)) {
                        this.setCustomVariable(cB, "", "", cC)
                    }
                },
                storeCustomVariablesInCookie: function() {
                    bm = true
                },
                setLinkTrackingTimer: function(cB) {
                    bf = cB
                },
                setDownloadExtensions: function(cB) {
                    if (p(cB)) {
                        cB = cB.split("|")
                    }
                    cr = cB
                },
                addDownloadExtensions: function(cC) {
                    var cB;
                    if (p(cC)) {
                        cC = cC.split("|")
                    }
                    for (cB = 0; cB < cC.length; cB++) {
                        cr.push(cC[cB])
                    }
                },
                removeDownloadExtensions: function(cD) {
                    var cC, cB = [];
                    if (p(cD)) {
                        cD = cD.split("|")
                    }
                    for (cC = 0; cC < cr.length; cC++) {
                        if (C(cD, cr[cC]) === -1) {
                            cB.push(cr[cC])
                        }
                    }
                    cr = cB
                },
                setDomains: function(cB) {
                    af = p(cB) ? [cB] : cB;
                    var cD = false,
                        cC;
                    for (cC in af) {
                        if (Object.prototype.hasOwnProperty.call(af, cC) && b6(ch, B(String(af[cC])))) {
                            cD = true;
                            if (!a0) {
                                var cE = aL(af[cC], bj);
                                if (cE) {
                                    this.setCookiePath(cE)
                                }
                                break
                            }
                        }
                    }
                    if (!cD) {
                        af.push(ch)
                    }
                },
                setIgnoreClasses: function(cB) {
                    a8 = p(cB) ? [cB] : cB
                },
                setRequestMethod: function(cB) {
                    cu = cB || bN
                },
                setRequestContentType: function(cB) {
                    bZ = cB || an
                },
                setReferrerUrl: function(cB) {
                    aY = cB
                },
                setCustomUrl: function(cB) {
                    aH = bq(bj, cB)
                },
                setDocumentTitle: function(cB) {
                    aU = cB
                },
                setAPIUrl: function(cB) {
                    be = cB
                },
                setDownloadClasses: function(cB) {
                    bh = p(cB) ? [cB] : cB
                },
                setLinkClasses: function(cB) {
                    aK = p(cB) ? [cB] : cB
                },
                setCampaignNameKey: function(cB) {
                    bV = p(cB) ? [cB] : cB
                },
                setCampaignKeywordKey: function(cB) {
                    bd = p(cB) ? [cB] : cB
                },
                discardHashTag: function(cB) {
                    bl = cB
                },
                setCookieNamePrefix: function(cB) {
                    aV = cB;
                    au = bs()
                },
                setCookieDomain: function(cB) {
                    var cC = B(cB);
                    if (a5(cC)) {
                        cj = cC;
                        aT()
                    }
                },
                setCookiePath: function(cB) {
                    a0 = cB;
                    aT()
                },
                setVisitorCookieTimeout: function(cB) {
                    b9 = cB * 1000
                },
                setSessionCookieTimeout: function(cB) {
                    bT = cB * 1000
                },
                setReferralCookieTimeout: function(cB) {
                    cq = cB * 1000
                },
                setConversionAttributionFirstReferrer: function(cB) {
                    a4 = cB
                },
                disableCookies: function() {
                    aW = true;
                    cs.cookie = "0";
                    if (bB) {
                        ak()
                    }
                },
                deleteCookies: function() {
                    ak()
                },
                setDoNotTrack: function(cC) {
                    var cB = e.doNotTrack || e.msDoNotTrack;
                    cd = cC && (cB === "yes" || cB === "1");
                    if (cd) {
                        this.disableCookies()
                    }
                },
                addListener: function(cC, cB) {
                    ab(cC, cB)
                },
                enableLinkTracking: function(cB) {
                    ct = true;
                    if (r) {
                        ba(cB)
                    } else {
                        H.push(function() {
                            ba(cB)
                        })
                    }
                },
                enableJSErrorTracking: function() {
                    if (cf) {
                        return
                    }
                    cf = true;
                    var cB = J.onerror;
                    J.onerror = function(cG, cE, cD, cF, cC) {
                        bM(function() {
                            var cH = "JavaScript Errors";
                            var cI = cE + ":" + cD;
                            if (cF) {
                                cI += ":" + cF
                            }
                            ae(cH, cI, cG)
                        });
                        if (cB) {
                            return cB(cG, cE, cD, cF, cC)
                        }
                        return false
                    }
                },
                disablePerformanceTracking: function() {
                    aF = false
                },
                setGenerationTimeMs: function(cB) {
                    bR = parseInt(cB, 10)
                },
                enableHeartBeatTimer: function(cB) {
                    cB = Math.max(cB, 1);
                    aI = (cB || 15) * 1000;
                    if (ck !== null) {
                        cz()
                    }
                },
                killFrame: function() {
                    if (J.location !== J.top.location) {
                        J.top.location = J.location
                    }
                },
                redirectFile: function(cB) {
                    if (J.location.protocol === "file:") {
                        J.location = cB
                    }
                },
                setCountPreRendered: function(cB) {
                    aS = cB
                },
                trackGoal: function(cB, cD, cC) {
                    bM(function() {
                        cg(cB, cD, cC)
                    })
                },
                trackLink: function(cC, cB, cE, cD) {
                    bM(function() {
                        cn(cC, cB, cE, cD)
                    })
                },
                trackPageView: function(cB, cC) {
                    bF = [];
                    if (D(bB)) {
                        bM(function() {
                            P(aj, be, bB)
                        })
                    } else {
                        bM(function() {
                            bv(cB, cC)
                        })
                    }
                },
                trackAllContentImpressions: function() {
                    if (D(bB)) {
                        return
                    }
                    bM(function() {
                        aP(function() {
                            var cB = o.findContentNodes();
                            var cC = b1(cB);
                            cy(cC, bf)
                        })
                    })
                },
                trackVisibleContentImpressions: function(cB, cC) {
                    if (D(bB)) {
                        return
                    }
                    if (!z(cB)) {
                        cB = true
                    }
                    if (!z(cC)) {
                        cC = 750
                    }
                    aw(cB, cC, this);
                    bM(function() {
                        ao(function() {
                            var cD = o.findContentNodes();
                            var cE = aM(cD);
                            cy(cE, bf)
                        })
                    })
                },
                trackContentImpression: function(cD, cB, cC) {
                    if (D(bB)) {
                        return
                    }
                    if (!cD) {
                        return
                    }
                    cB = cB || "Unknown";
                    bM(function() {
                        var cE = al(cD, cB, cC);
                        bc(cE, bf)
                    })
                },
                trackContentImpressionsWithinNode: function(cB) {
                    if (D(bB) || !cB) {
                        return
                    }
                    bM(function() {
                        if (bK) {
                            ao(function() {
                                var cC = o.findContentNodesWithinNode(cB);
                                var cD = aM(cC);
                                cy(cD, bf)
                            })
                        } else {
                            aP(function() {
                                var cC = o.findContentNodesWithinNode(cB);
                                var cD = b1(cC);
                                cy(cD, bf)
                            })
                        }
                    })
                },
                trackContentInteraction: function(cD, cE, cB, cC) {
                    if (D(bB)) {
                        return
                    }
                    if (!cD || !cE) {
                        return
                    }
                    cB = cB || "Unknown";
                    bM(function() {
                        var cF = at(cD, cE, cB, cC);
                        bc(cF, bf)
                    })
                },
                trackContentInteractionNode: function(cC, cB) {
                    if (D(bB) || !cC) {
                        return
                    }
                    bM(function() {
                        var cD = cw(cC, cB);
                        bc(cD, bf)
                    })
                },
                logAllContentBlocksOnPage: function() {
                    var cC = o.findContentNodes();
                    var cB = o.collectContent(cC);
                    if (console !== undefined && console && console.log) {
                        console.log(cB)
                    }
                },
                trackEvent: function(cC, cE, cB, cD, cF) {
                    bM(function() {
                        ae(cC, cE, cB, cD, cF)
                    })
                },
                trackSiteSearch: function(cB, cD, cC, cE) {
                    bM(function() {
                        bE(cB, cD, cC, cE)
                    })
                },
                setEcommerceView: function(cE, cB, cD, cC) {
                    if (!z(cD) || !cD.length) {
                        cD = ""
                    } else {
                        if (cD instanceof Array) {
                            cD = JSON2.stringify(cD)
                        }
                    }
                    br[5] = ["_pkc", cD];
                    if (z(cC) && String(cC).length) {
                        br[2] = ["_pkp", cC]
                    }
                    if ((!z(cE) || !cE.length) && (!z(cB) || !cB.length)) {
                        return
                    }
                    if (z(cE) && cE.length) {
                        br[3] = ["_pks", cE]
                    }
                    if (!z(cB) || !cB.length) {
                        cB = ""
                    }
                    br[4] = ["_pkn", cB]
                },
                addEcommerceItem: function(cF, cB, cD, cC, cE) {
                    if (cF.length) {
                        cm[cF] = [cF, cB, cD, cC, cE]
                    }
                },
                trackEcommerceOrder: function(cB, cF, cE, cD, cC, cG) {
                    bu(cB, cF, cE, cD, cC, cG)
                },
                trackEcommerceCartUpdate: function(cB) {
                    a2(cB)
                }
            }
        }
        function y() {
            return {
                push: U
            }
        }
        function b(ae, ad) {
            var af = {};
            var ab, ac;
            for (ab = 0; ab < ad.length; ab++) {
                var Z = ad[ab];
                af[Z] = 1;
                for (ac = 0; ac < ae.length; ac++) {
                    if (ae[ac] && ae[ac][0]) {
                        var aa = ae[ac][0];
                        if (Z === aa) {
                            U(ae[ac]);
                            delete ae[ac];
                            if (af[aa] > 1) {
                                if (console !== undefined && console && console.error) {
                                    console.error("The method " + aa + ' is registered more than once in "paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                                }
                            }
                            af[aa]++
                        }
                    }
                }
            }
            return ae
        }
        Y(J, "beforeunload", V, false);
        q();
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        O = new G();
        var u = ["disableCookies", "setTrackerUrl", "setAPIUrl", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setSiteId", "enableLinkTracking"];
        _paq = b(_paq, u);
        for (w = 0; w < _paq.length; w++) {
            if (_paq[w]) {
                U(_paq[w])
            }
        }
        _paq = new y();
        d = {
            addPlugin: function(Z, aa) {
                a[Z] = aa
            },
            getTracker: function(Z, aa) {
                if (!z(aa)) {
                    aa = this.getAsyncTracker().getSiteId()
                }
                if (!z(Z)) {
                    Z = this.getAsyncTracker().getTrackerUrl()
                }
                return new G(Z, aa)
            },
            getAsyncTracker: function() {
                return O
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return d
            })
        }
        return d
    }())
}
if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit()
}(function() {
    var a = (typeof AnalyticsTracker);
    if (a === "undefined") {
        AnalyticsTracker = Piwik
    }
}());
if (typeof piwik_log !== "function") {
    piwik_log = function(b, f, d, g) {
        function a(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var c, e = Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) {
            e.setLinkTrackingTimer(c)
        }
        c = a("download_extensions");
        if (c) {
            e.setDownloadExtensions(c)
        }
        c = a("hosts_alias");
        if (c) {
            e.setDomains(c)
        }
        c = a("ignore_classes");
        if (c) {
            e.setIgnoreClasses(c)
        }
        e.trackPageView();
        if (a("install_tracker")) {
            piwik_track = function(i, k, j, h) {
                e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h)
            };
            e.enableLinkTracking()
        }
    }; /*! @license-end */
};
</script>
