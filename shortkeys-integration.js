//If you use chrome install Shortkeys, set a keyboard trigger, and then select "run javascript" and copy and paste the below there. 
// One click select all + go to next page

! function() {
    var e = function(t, n, a) {
            return (e = document.getElementsByClassName ? function(e, t, n) {
                n = n || document;
                for (var a, o = n.getElementsByClassName(e), l = t ? RegExp("\\b" + t + "\\b", "i") : null, u = [], r = 0, c = o.length; c > r; r += 1) a = o[r], (!l || l.test(a.nodeName)) && u.push(a);
                return u
            } : document.evaluate ? function(e, t, n) {
                t = t || "*", n = n || document;
                for (var a, o, l = e.split(" "), u = "", r = "http://www.w3.org/1999/xhtml", c = document.documentElement.namespaceURI === r ? r : null, s = [], m = 0, d = l.length; d > m; m += 1) u += '[contains(concat(" ", @class, " "), " ' + l[m] + ' ")]';
                try {
                    a = document.evaluate(".//" + t + u, n, c, 0, null)
                } catch (i) {
                    a = document.evaluate(".//" + t + u, n, null, 0, null)
                }
                for (; o = a.iterateNext();) s.push(o);
                return s
            } : function(e, t, n) {
                t = t || "*", n = n || document;
                for (var a, o, l = e.split(" "), u = [], r = "*" === t && n.all ? n.all : n.getElementsByTagName(t), c = [], s = 0, m = l.length; m > s; s += 1) u.push(RegExp("(^|\\s)" + l[s] + "(\\s|$)"));
                for (var d = 0, i = r.length; i > d; d += 1) {
                    a = r[d], o = !1;
                    for (var v = 0, h = u.length; h > v && (o = u[v].test(a.className), o); v += 1);
                    o && c.push(a)
                }
                return c
            })(t, n, a)
        },
        t = function(e, t) {
            if (-1 == e.className.indexOf("x-grid3-row-selected")) {
                var n = document.createEvent("MouseEvents");
                n.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, t, t, t, t, 0, null), e.dispatchEvent(n);
                var a = document.createEvent("MouseEvents");
                a.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, t, t, t, t, 0, null), e.dispatchEvent(a)
            }
        };
    try {
        var n = document.createElement("script");
        n.textContent = "window.fua();", (document.head || document.documentElement).appendChild(n), n.parentNode.removeChild(n);
        var a = e("x-grid3-rows", "div", document.getElementById("tweepiGridDiv"));
        if (a.length <= 0) return;
        t(a[0], !1), t(a[a.length - 1], !0)
    } catch (o) {
        alert("Something went wrong. Please make sure you are on a Tweepi.com page! " + o)
    }
}();

$(document).ready(function(){
  $('.btn-forward').click();
});
