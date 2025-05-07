(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8303], {
    12177: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 69325)),
        Promise.resolve().then(r.bind(r, 80803)),
        Promise.resolve().then(r.bind(r, 19841)),
        Promise.resolve().then(r.t.bind(r, 72972, 23))
    },
    69325: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return a
            }
        });
        var n = r(57437)
          , i = r(27648)
          , s = r(99376);
        function a() {
            let e = (0,
            s.useSearchParams)()
              , t = e.get("effect")
              , r = e.get("image");
            return t && r ? (0,
            n.jsx)("div", {
                className: "w-full flex-1"
            }) : (0,
            n.jsx)("div", {
                className: "flex flex-1 flex-col justify-end",
                children: (0,
                n.jsxs)("p", {
                    className: "mt-auto text-s-mobile text-light-secondary lg:mx-auto lg:text-center lg:text-s lg:text-dark-background",
                    children: ["To learn more about us, check out our", " ", (0,
                    n.jsx)(i.default, {
                        href: "/about",
                        className: "underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "about page"
                    }), ".", (0,
                    n.jsx)("br", {}), "We’re", " ", (0,
                    n.jsx)(i.default, {
                        href: "/careers",
                        className: "underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "hiring"
                    }), " ", "across different roles!"]
                })
            })
        }
    },
    93679: function(e, t, r) {
        "use strict";
        var n = r(57437)
          , i = r(51123)
          , s = r(93953)
          , a = r(45652)
          , o = r(99376)
          , l = r(2265)
          , c = r(97714);
        t.default = function() {
            let[e,t] = (0,
            l.useState)(!0)
              , r = (0,
            o.useSearchParams)()
              , d = r.get("effect")
              , u = r.get("image")
              , h = r.get("skip");
            return u && d ? (0,
            n.jsxs)("div", {
                className: "hidden lg:flex lg:flex-col lg:gap-8",
                children: [(0,
                n.jsx)(c.default, {
                    effect: d,
                    image: u,
                    skip: !!h
                }), (0,
                n.jsx)("p", {
                    className: "text-center text-subtitle-mobile text-dark-background lg:text-subtitle",
                    children: "Beautifully bizarre! Take it next level when you create a Pika account."
                })]
            }) : (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsxs)("div", {
                        className: "relative",
                        children: [(0,
                        n.jsxs)("video", {
                            className: "h-auto max-h-[360px] w-auto rounded-[10px] object-cover",
                            autoPlay: !0,
                            loop: !0,
                            muted: e,
                            poster: "images/video.gif",
                            playsInline: !0,
                            controls: !1,
                            children: [(0,
                            n.jsx)("source", {
                                src: "images/video.gif",
                                type: "image/gif"
                            })]
                        }), (0,
                        n.jsx)(a.Z, {
                            className: "absolute bottom-2 right-2",
                            onClick: () => t(!e),
                            secondary: !0,
                            small: !0,
                            icon: e ? (0,
                            n.jsx)(i.Z, {
                                className: "h-4"
                            }) : (0,
                            n.jsx)(o.Z, {
                                className: "h-4"
                            })
                        })]
                    }), (0,
                    n.jsx)("p", {
                        className: "mx-auto hidden text-center text-subtitle-mobile text-dark-background lg:block lg:text-subtitle",
                        children: "Pikadditions is here: real footage meets unreal creativity. Level up your videos with surprising and fantastical elements."
                    })]
                })
        }
    },
    80803: function(e, t, r) {
        "use strict";
        var n = r(57437)
          , i = r(89360)
          , s = r(82774)
          , a = r(20441)
          , o = r(2265)
          , l = r(27648)
          , c = r(48086)
          , d = r(3548)
          , u = r(18920)
          , h = r(72052)
          , x = r(93679);
        t.default = function(e) {
            let {info: t} = e
              , [r,m] = (0,
            o.useState)(!1);
            return (0,
            n.jsxs)("div", {
                className: "flex w-full flex-1 flex-col justify-center gap-7",
                children: [(0,
                n.jsx)("div", {
                    className: "flex flex-col gap-2.5",
                    children: r ? (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-5",
                        children: [(0,
                        n.jsxs)("button", {
                            className: "group flex max-w-max items-center gap-2",
                            onClick: () => m(!1),
                            children: [(0,
                            n.jsx)(c.Z, {
                                className: "opacity-60 transition-opacity group-hover:opacity-100"
                            }), (0,
                            n.jsx)("span", {
                                children: "Back"
                            })]
                        }), (0,
                        n.jsx)("h1", {
                            className: "font-telka-extended text-heading-1-mobile !font-[1000] uppercase text-accent-primary lg:text-heading-1",
                            children: "Sign in"
                        })]
                    }) : (0,
                    n.jsxs)("div", {
                        className: "-mt-10 flex flex-col gap-2.5 lg:mt-0",
                        children: [(0,
                        n.jsx)("h1", {
                            className: "font-telka-extended text-heading-1-mobile !font-[1000] uppercase text-accent-primary lg:text-heading-1",
                            children: "Everlearn z Model"
                        }), (0,
                        n.jsx)("p", {
                            className: "text-subtitle-mobile text-light-primary lg:hidden",
                            children: "New model alert! Check out Pika 2.1 and create your weirdest, wildest dreams in stunning 1080p."
                        }), (0,
                        n.jsx)("div", {
                            className: "mb-7 mt-4 flex w-full flex-1 flex-col items-center justify-center gap-8 lg:hidden",
                            children: (0,
                            n.jsx)(x.default, {})
                        }), (0,
                        n.jsxs)("p", {
                            className: "text-subtitle-mobile lg:text-subtitle",
                            children: ["Sign in ", ""]
                        })]
                    })
                }), r ? (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(a.o, {}), (0,
                    n.jsxs)("p", {
                        className: "text-subtitle text-light-secondary",
                        children: ["Don’t have an account?", " ", (0,
                        n.jsx)(l.default, {
                            href: "/signup",
                            className: "text-white underline",
                            onClick: () => {
                                (0,
                                d.Z)({
                                    eventName: u.hO.SignUpWithEmail,
                                    properties: {
                                        position: "outer"
                                    }
                                })
                            }
                            ,
                            children: "Sign up"
                        })]
                    })]
                }) : (0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-5",
                    children: [(0,
                    n.jsx)(s.Z, {}), (0,
                    n.jsx)(h.Z, {}), (0,
                    n.jsx)(i.Z, {}), (0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-5 text-s",
                        children: [(0,
                        n.jsx)("div", {
                            className: "h-0 flex-1 border border-dashed opacity-[0.15]"
                        }), "or", (0,
                        n.jsx)("div", {
                            className: "h-0 flex-1 border border-dashed opacity-[0.15]"
                        })]
                    }), (0,
                    n.jsx)(a.w, {
                        onClick: () => {
                            (0,
                            d.Z)({
                                eventName: u.hO.SignIn,
                                properties: {
                                    provider: "email",
                                    position: "outer"
                                }
                            }),
                            m(!0)
                        }
                    }), t ? (0,
                    n.jsxs)("p", {
                        className: "text-s text-danger-primary",
                        children: [t, "."]
                    }) : null]
                })]
            })
        }
    },
    19841: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return o
            }
        });
        var n = r(57437)
          , i = r(2265)
          , s = r(89930)
          , a = r(53014);
        function o(e) {
            let {children: t} = e
              , [r,o] = (0,
            i.useState)(!0);
            return (0,
            n.jsx)(n.Fragment, {
                children: r ? (0,
                n.jsxs)("div", {
                    className: "fixed items-center top-0 left-0 w-full bg-white z-20 p-4 md:p-5 overflow-hidden",
                    children: [(0,
                    n.jsx)("div", {
                        className: "",
                        children: (0,
                        n.jsx)(s.default, {
                            as: "p",
                            className: "max-md:text-[.9375rem] max-md:leading-[1.0625rem] text-subtitle !font-medium text-dark-background text-center w-full",
                            children: t
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "absolute right-4 top-1/2 -translate-y-1/2",
                        children: (0,
                        n.jsx)("button", {
                            className: "w-4 h-4 p-0.5 rounded-full bg-dark-background hover:bg-dark-elements-hover transition-colors",
                            children: (0,
                            n.jsx)(a.Z, {
                                className: "w-3 h-3",
                                onClick: () => o(!1)
                            })
                        })
                    })]
                }) : null
            })
        }
    },
    51123: function(e, t, r) {
        "use strict";
        var n = r(57437)
          , i = r(84772)
          , s = r.n(i)
          , a = r(76773)
          , o = r(27648);
        t.Z = function(e) {
            let {className: t, children: r, loading: i, secondary: l, danger: c, disabled: d, small: u, transparent: h, ...x} = e
              , m = (0,
            n.jsxs)(n.Fragment, {
                children: ["right" !== x.iconPosition && x.icon, r, "right" === x.iconPosition && x.icon]
            })
              , f = s()({
                "px-4": !x.icon && !u,
                "px-3": !x.icon && u,
                "px-2.5": x.icon && !u,
                "px-1.5": x.icon && u,
                "gap-2 py-2.5": !u,
                "gap-1.5 py-1.5": u
            });
            if (delete x.icon,
            delete x.iconPosition,
            "link" !== x.purpose)
                return (0,
                n.jsx)("button", {
                    className: s()("rounded-md flex items-center justify-center transition-colors font-normal", "disabled:cursor-not-allowed", f, t, {
                        "hover:bg-accent-hover text-dark-background": !l && !c && !h,
                        "hover:bg-dark-elements-hover text-light-primary": l,
                        "hover:bg-danger-hover text-light-primary": c,
                        "hover:bg-light-disabled text-white": h,
                        "bg-accent-primary": !i && !l && !c && !h,
                        "bg-accent-hover": i && !l && !c && !h,
                        "bg-dark-elements": !i && l,
                        "bg-dark-elements-hover": i && l,
                        "bg-danger-primary": !i && c,
                        "bg-danger-primary-hover": i && c,
                        "bg-light-emphasis": !i && h,
                        "bg-light-disabled": i && h,
                        "disabled:border disabled:border-white disabled:border-opacity-[15%] disabled:bg-dark-elements  disabled:text-light-tertiary": d && !h && !i,
                        "disabled:opacity-50 disabled:bg-light-emphasis": d && h && !i
                    }),
                    disabled: d || i,
                    ...x,
                    children: i ? (0,
                    n.jsx)(a.Z, {
                        className: "text-dark-background"
                    }) : m
                });
            if ("link" === x.purpose) {
                let e = d ? "span" : o.default;
                return (0,
                n.jsx)(e, {
                    className: s()("rounded-md flex items-center justify-center transition-colors font-normal", "disabled:cursor-not-allowed", f, t, {
                        "hover:bg-accent-hover text-dark-background": !l && !d && !h && !c,
                        "hover:bg-dark-elements-hover": l && !d,
                        "hover:bg-dark-elements-hover text-light-primary": l,
                        "hover:bg-light-disabled text-white": h && !d,
                        "bg-accent-primary": !i && !l && !h && !d,
                        "bg-accent-hover": i && !l && !h && !d,
                        "bg-dark-elements": !i && l && !d,
                        "bg-dark-elements-hover": i && l && !d,
                        "bg-light-emphasis": !i && h && !d,
                        "bg-light-disabled": i && h && !d,
                        "border border-white border-opacity-[15%] bg-dark-elements disabled:text-light-tertiary": d && !h && !i,
                        "opacity-50 bg-light-emphasis": d && h && !i
                    }),
                    ...x,
                    children: i ? (0,
                    n.jsx)(a.Z, {
                        className: "text-dark-background"
                    }) : m
                })
            }
        }
    },
    76773: function(e, t, r) {
        "use strict";
        var n = r(57437)
          , i = r(84772)
          , s = r.n(i);
        t.Z = function(e) {
            let {className: t, ...r} = e;
            return (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                className: s()("animate-loadingRing mx-auto", t),
                ...r,
                children: (0,
                n.jsx)("path", {
                    d: "M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }
    },
    53014: function(e, t, r) {
        "use strict";
        var n = r(57437);
        t.Z = function(e) {
            return (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                stroke: "white",
                ...e,
                children: (0,
                n.jsx)("path", {
                    d: "M15 5L5 15M5 5L15 15",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }
    },
    92030: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return i
            }
        });
        var n = r(57437);
        function i(e) {
            let {color: t="#0D0D0D", ...r} = e;
            return (0,
            n.jsxs)("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...r,
                children: [(0,
                n.jsx)("path", {
                    d: "M3.66667 2V5.33333M16.3333 14.6667V18M2 3.66667H5.33333M14.6667 16.3333H18",
                    stroke: t,
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("path", {
                    d: "M10.5343 1.38675C10.4584 1.15585 10.2427 0.999854 9.99966 1C9.7566 1.00015 9.54112 1.1564 9.46545 1.38739L7.6842 6.82489L7.68348 6.82711C7.61963 7.02479 7.50978 7.20448 7.36295 7.35143C7.21612 7.49837 7.03651 7.60836 6.83888 7.67236L1.38675 9.46566C1.15585 9.54161 0.999854 9.75727 1 10.0003C1.00015 10.2434 1.1564 10.4589 1.38739 10.5345L6.82489 12.3158L6.82711 12.3165C7.02479 12.3804 7.20448 12.4902 7.35143 12.6371C7.49837 12.7839 7.60836 12.9635 7.67236 13.1611L7.67316 13.1636L9.46566 18.6133C9.54161 18.8442 9.75727 19.0001 10.0003 19C10.2434 18.9999 10.4589 18.8436 10.5345 18.6126L12.3158 13.1751L12.3165 13.1729C12.3804 12.9752 12.4902 12.7955 12.6371 12.6486C12.7839 12.5016 12.9635 12.3916 13.1611 12.3276L13.1636 12.3268L18.6133 10.5343C18.8442 10.4584 19.0001 10.2427 19 9.99966C18.9999 9.7566 18.8436 9.54112 18.6126 9.46545L13.1751 7.6842L13.1729 7.68348C12.9752 7.61963 12.7955 7.50978 12.6486 7.36295C12.5016 7.21612 12.3916 7.03651 12.3276 6.83888L10.5343 1.38675Z",
                    fill: t
                })]
            })
        }
    },
    40257: function(e, t, r) {
        "use strict";
        var n, i;
        e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(44227)
    },
    44227: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, r, n, i = e.exports = {};
                    function s() {
                        throw Error("setTimeout has not been defined")
                    }
                    function a() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function o(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === s || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (r) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : s
                        } catch (e) {
                            t = s
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : a
                        } catch (e) {
                            r = a
                        }
                    }();
                    var l = []
                      , c = !1
                      , d = -1;
                    function u() {
                        c && n && (c = !1,
                        n.length ? l = n.concat(l) : d = -1,
                        l.length && h())
                    }
                    function h() {
                        if (!c) {
                            var e = o(u);
                            c = !0;
                            for (var t = l.length; t; ) {
                                for (n = l,
                                l = []; ++d < t; )
                                    n && n[d].run();
                                d = -1,
                                t = l.length
                            }
                            n = null,
                            c = !1,
                            function(e) {
                                if (r === clearTimeout)
                                    return clearTimeout(e);
                                if ((r === a || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function x(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function m() {}
                    i.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                        l.push(new x(e,t)),
                        1 !== l.length || c || o(h)
                    }
                    ,
                    x.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    i.title = "browser",
                    i.browser = !0,
                    i.env = {},
                    i.argv = [],
                    i.version = "",
                    i.versions = {},
                    i.on = m,
                    i.addListener = m,
                    i.once = m,
                    i.off = m,
                    i.removeListener = m,
                    i.removeAllListeners = m,
                    i.emit = m,
                    i.prependListener = m,
                    i.prependOnceListener = m,
                    i.listeners = function(e) {
                        return []
                    }
                    ,
                    i.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    i.cwd = function() {
                        return "/"
                    }
                    ,
                    i.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    i.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(e) {
                var i = r[e];
                if (void 0 !== i)
                    return i.exports;
                var s = r[e] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    t[e](s, s.exports, n),
                    a = !1
                } finally {
                    a && delete r[e]
                }
                return s.exports
            }
            n.ab = "//";
            var i = n(229);
            e.exports = i
        }()
    },
    89593: function(e, t, r) {
        "use strict";
        r.d(t, {
            e: function() {
                return i
            }
        });
        var n = r(36614);
        function i() {
            return (0,
            n.createBrowserClient)("https://login.pika.art", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyY2ZhaHJ6a2pwYmxtcnNha254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDA1MjQsImV4cCI6MjAxMTgxNjUyNH0.2gMq3saImVLKVTDa1Ymzm28vfUG8KI7ALHBfFz9yDC8")
        }
    }
}, function(e) {
    e.O(0, [6603, 2972, 8370, 6312, 5162, 3786, 5438, 3736, 6060, 2971, 2117, 1744], function() {
        return e(e.s = 12177)
    }),
    _N_E = e.O()
}
]);
