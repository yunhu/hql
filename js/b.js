<script>
var basePath = "/mskyweb", //根路径
    staticPath = "http://www.umetrip.com",//静态路径
    preSelect = "index",
    weiboShow = false,
    imgPath = [],
    hrefFlog = "",
    newFlog = "",
    closeFloating = function() {
        $(".footerCode").animate({
            height: "47px"
        }, 1000, function() {
            $("#footerFclose").hide();
            Cookies.set("isFloating", "true")
        })
    },
    openFloating = function() {
        0 < document.cookie.indexOf("isFloating") && $(".footerCode").animate({
            height: "225px"
        }, 1000, function() {
            $("#footerFclose").show();
            Cookies.clear("isFloating")
        })
    },
    indexApplyLayout = {
        weiboApply: false,
        top: function() {
            return '<div id="top"><div class="top"><div class="t_com"> <span style="display:none"><div class="tx"><img src="' + staticPath + '/img/index/h_tx.png" width="24" height="24" /></div><div class="signout"><label>LivindesignLivindesignLivindesign</label> <a href="#">退出</a></div></span><span style="display:none"><div class="tx"><img src="' + staticPath + '/img/index/h_tx_1.png" width="24" height="24" /></div><div class="login"><a href="#">登录</a></div></span>提供全球<b>673389</b>个航班实时信息<div class="clear"></div></div></div></div>'
        },
        indexNav: function() {
            return '<div id="nav" class="nav"><div class="n_com"><ul id="mencIndex"><li id="social"><a href="javascript:void(0);">社会招聘</a></li><li id="recruit"><a href="javascript:void(0);">校园招聘</a></li><li id="cli"><a href="javascript:void(0);">客户端</a></li><li id="tk" style="display:none"><a href="javascript:void(0);">机票搜索</a></li><li id="fly"><a href="javascript:void(0);">航班动态</a></li><li id="index"><a href="javascript:void(0);">首页</a></li></ul><a id="logo" href="' + basePath + '/main/index.html?hrefParam=index"></a></div></div>'
        },
        footer: function() {
            return '<div id="footer"><div class="footer"><p class="f_t"><a href="' + staticPath + '/about/profile.html">关于航旅纵横</a>  |  <a href="' + staticPath + '/about/contact.html">联系航旅</a>  | <a href="' + staticPath + '/about/honor.html">航旅荣誉</a>  | <a href="' + staticPath + '/about/help.html">帮助中心</a>  |  <a href="' + staticPath + '/mskyweb/page.do?p=suggest">意见与建议</a></p><p>意见反馈：umetrip@travelsky.com ｜QQ粉丝群1：233633496(已满) ｜QQ粉丝群2：328822013(已满)  ｜QQ粉丝群3：302422066(已满)  ｜QQ粉丝群4：315399820  ｜京公网安备11010102000528号  ｜京ICP备06014661号-7</p><p>All design and content Copyright © 2014 中国民航信息网络股份有限公司</p></div></div>'
        },
        footerFloating: function() {
            var a = "",
                b = "";
            0 < document.cookie.indexOf("isFloating") && (a = 'style="height:47px;"', b = 'style="display:none"');
            return '<div class="footerCode footerCodeBg" ' + a + '></div><div onmouseover="openFloating()" class="footerCode" ' + a + '><div class="box"><img src="' + staticPath + '/img/pad_f.png" width="348" height="187" class="imgBox" /><div class="con"><p style="font-size:34px">航旅纵横<label>让旅行更幸福</label></p><p>信息全覆盖<label>出行更轻松</label></p><p>动态即时晓<label>消息覆盖全</label></p><p>行程记录全<label>机票真假容易知</label></p></div><div class="code"><img src="' + staticPath + '/img/yj.png" width="244" height="27"/><img src="' + staticPath + '/img/code_f.png" width="155" height="153" class="zj"/></div><div class="clear" style="clear:both;"></div><img id="footerFclose" ' + b + ' src="' + staticPath + '/img/close_f.png" onclick="closeFloating()" width="38" height="38" class="close"/></div></div>'
        },
        toTop: function() {
            return '<div id="floatBottom" class="floatBottom"><a class="toTop">回顶部</a></div>'
        },
        sidebar: function() {
            return '<div id="sidebar"><div class="sidebar" style="right: 0;"><div class="side" id="sidebarbtn"><span class="arrr2"></span>关注我们</div><div class="bar" id="sidebarcont"><div class="weixin"><span>微信公众账号</span><p><img src="' + staticPath + '/img/weixin.jpg" width="80" height="80" /><strong>航旅纵横</strong> <b>微信号：ume_trip</b><div class="clear"></div></p></div><div class="tit">新浪微博</div><div class="weibo" id="weibo"></div></div></div></div>'
        },
        sidebarDom: function() {
            $("#weibo").html('<iframe width="275" height="350" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=275&height=350&fansRow=1&ptype=1&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=1&uid=2537944652&verifier=bd864c6a&dpc=1"></iframe>')
        },
        applyHtml: function() {
            var a = "";
            if (0 == arguments.length) 0 == $("#header").length && (a += '<div id="header" class="header">' + this.top() + this.indexNav() + "</div>"), 0 == $("#footer").length && (a += this.footer()), 0 == $("#floatBottom").length && (a += this.toTop()), 0 == $("#sidebar").length && (a += this.sidebar());
            else for (var b = 0; b < arguments.length; b++) switch (arguments[b]) {
                case "top":
                    0 == $("#header").length && (flogStr += this.top());
                    break;
                case "indexNav":
                    0 == $("#header").length && (flogStr += this.indexNav());
                    break;
                case "footer":
                    0 == $("#footer").length && (a += this.footer());
                    break;
                case "toTop":
                    0 == $("#floatBottom").length && (a += this.toTop());
                    break;
                case "sidebar":
                    0 == $("#sidebar").length && (a += this.sidebar())
            }
            $("body").append(a)

        }
    },
    getParam = function(a) {
        var b = window.location.search;
        if ("" == b) return "index";
        a = RegExp("[?&]" + a + "=([^&]+)", "g").exec(b);
        b = null;
        if (null != a) try {
            b = decodeURIComponent(decodeURIComponent(a[1]))
        } catch (c) {
            try {
                b = decodeURIComponent(a[1])
            } catch (d) {
                b = a[1]
            }
        }
        return newFlog = b
    };
$(function() {});
</script>
