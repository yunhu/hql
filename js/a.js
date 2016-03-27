<script>
var checkImgPath = {
    defaultData: [staticPath + "/img/index/h_pic_1.jpg", staticPath + "/img/index/h_pic_2.jpg", staticPath + "/img/index/h_pic_3.jpg"],
    index: [],
    fly: [],
    tk: [],
    getImgData: function() {
        for (var a = arguments.length - 1, b = 0; b < a; b++) {
            var c = this.checkImg(arguments[b], arguments[a]);
            Cookies.set(arguments[b], c);
            Cookies.set("isCheck", "true")
        }
    },
    checkImgArray: function(a) {
        switch (a) {
            case "index":
                return this.index;
            case "fly":
                return this.fly;
            case "tk":
                return this.tk;
            case "all":
                return this.defaultData
        }
    },
    checkImg: function(a,
                       b) {
        for (var c = this.checkImgArray(a), d = "", g = parseInt(b), e = 0; e < g; e++) if (0 < c.length) {
            var f = Math.floor(Math.random() * c.length),
                d = d + (c[f] + ",");
            c.splice(f, 1)
        } else break;
        return d
    },
    getCookieImgPath: function(a) {
        return Cookies.get(a).split(",")
    }
};
</script>
