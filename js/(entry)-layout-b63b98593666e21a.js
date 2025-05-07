(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5815], {
    66135: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 69325)),
        Promise.resolve().then(r.bind(r, 93679)),
        Promise.resolve().then(r.t.bind(r, 72972, 23))
    },
    69325: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return o
            }
        });
        var n = r(57437)
          , a = r(27648)
          , i = r(99376);
        function o() {
            let e = (0,
            i.useSearchParams)()
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
                    n.jsx)(a.default, {
                        href: "/about",
                        className: "underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "about page"
                    }), ".", (0,
                    n.jsx)("br", {}), "We’re", " ", (0,
                    n.jsx)(a.default, {
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
          , a = r(51123)
          , i = r(93953)
          , o = r(45652)
          , s = r(99376)
          , c = r(2265)
          , l = r(97714);
        t.default = function() {
            let[e,t] = (0,
            c.useState)(!0)
              , r = (0,
            s.useSearchParams)()
              , u = r.get("effect")
              , d = r.get("image")
              , p = r.get("skip");
            return d && u ? (0,
            n.jsxs)("div", {
                className: "hidden lg:flex lg:flex-col lg:gap-8",
                children: [(0,
                n.jsx)(l.default, {
                    effect: u,
                    image: d,
                    skip: !!p
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
                        children: "Dreams are the blueprint action is the architect.."
                    })]
                })
        }
    },
    97714: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return u
            }
        });
        var n = r(57437)
          , a = r(2265)
          , i = r(19615)
          , o = r(51123)
          , s = r(93953)
          , c = r(45652);
        let l = "https://cdn.pika.art";
        function u(e) {
            let {effect: t, image: r, skip: u} = e
              , [d,p] = (0,
            a.useState)(0)
              , [f,h] = (0,
            a.useState)(u)
              , [m,g] = (0,
            a.useState)(!0)
              , v = (0,
            a.useRef)(null);
            return (0,
            a.useEffect)( () => {
                let e = setInterval( () => {
                    p(t => t < 100 ? Math.min(t + 4, 100) : (clearInterval(e),
                    t))
                }
                , 100);
                return () => clearInterval(e)
            }
            , []),
            (0,
            a.useEffect)( () => {
                if (f) {
                    var e;
                    null === (e = v.current) || void 0 === e || e.play()
                }
            }
            , [f]),
            (0,
            n.jsxs)("div", {
                className: "relative aspect-video h-auto max-h-[360px] w-auto shrink-0 overflow-hidden rounded-[.625rem]",
                children: [(0,
                n.jsx)("video", {
                    className: "h-full w-full object-cover",
                    loop: !0,
                    muted: m,
                    poster: "".concat(l, "/feature/v1.5/cached_results/").concat(t, "_").concat(r, "_poster.jpg"),
                    playsInline: !0,
                    controls: !1,
                    ref: v,
                    children: (0,
                    n.jsx)("source", {
                        src: "".concat(l, "/feature/v1.5/cached_results/").concat(t, "_").concat(r, ".mp4"),
                        type: "video/mp4"
                    })
                }), (0,
                n.jsx)(o.Z, {
                    className: "absolute bottom-2 right-2",
                    onClick: () => g(!m),
                    secondary: !0,
                    small: !0,
                    icon: m ? (0,
                    n.jsx)(s.Z, {
                        className: "h-4"
                    }) : (0,
                    n.jsx)(c.Z, {
                        className: "h-4"
                    })
                }), f ? null : (0,
                n.jsxs)("div", {
                    className: "absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-5 bg-dark-elements-upper",
                    children: [(0,
                    n.jsx)(i.Z, {
                        percentage: d,
                        onComplete: e => {
                            100 === e && h(!0)
                        }
                    }), (0,
                    n.jsx)("p", {
                        className: "text-center text-m-mobile text-white text-opacity-60 xl:text-m",
                        children: "Your video is generating"
                    })]
                })]
            })
        }
    },
    51123: function(e, t, r) {
        "use strict";
        var n = r(57437)
          , a = r(84772)
          , i = r.n(a)
          , o = r(76773)
          , s = r(27648);
        t.Z = function(e) {
            let {className: t, children: r, loading: a, secondary: c, danger: l, disabled: u, small: d, transparent: p, ...f} = e
              , h = (0,
            n.jsxs)(n.Fragment, {
                children: ["right" !== f.iconPosition && f.icon, r, "right" === f.iconPosition && f.icon]
            })
              , m = i()({
                "px-4": !f.icon && !d,
                "px-3": !f.icon && d,
                "px-2.5": f.icon && !d,
                "px-1.5": f.icon && d,
                "gap-2 py-2.5": !d,
                "gap-1.5 py-1.5": d
            });
            if (delete f.icon,
            delete f.iconPosition,
            "link" !== f.purpose)
                return (0,
                n.jsx)("button", {
                    className: i()("rounded-md flex items-center justify-center transition-colors font-normal", "disabled:cursor-not-allowed", m, t, {
                        "hover:bg-accent-hover text-dark-background": !c && !l && !p,
                        "hover:bg-dark-elements-hover text-light-primary": c,
                        "hover:bg-danger-hover text-light-primary": l,
                        "hover:bg-light-disabled text-white": p,
                        "bg-accent-primary": !a && !c && !l && !p,
                        "bg-accent-hover": a && !c && !l && !p,
                        "bg-dark-elements": !a && c,
                        "bg-dark-elements-hover": a && c,
                        "bg-danger-primary": !a && l,
                        "bg-danger-primary-hover": a && l,
                        "bg-light-emphasis": !a && p,
                        "bg-light-disabled": a && p,
                        "disabled:border disabled:border-white disabled:border-opacity-[15%] disabled:bg-dark-elements  disabled:text-light-tertiary": u && !p && !a,
                        "disabled:opacity-50 disabled:bg-light-emphasis": u && p && !a
                    }),
                    disabled: u || a,
                    ...f,
                    children: a ? (0,
                    n.jsx)(o.Z, {
                        className: "text-dark-background"
                    }) : h
                });
            if ("link" === f.purpose) {
                let e = u ? "span" : s.default;
                return (0,
                n.jsx)(e, {
                    className: i()("rounded-md flex items-center justify-center transition-colors font-normal", "disabled:cursor-not-allowed", m, t, {
                        "hover:bg-accent-hover text-dark-background": !c && !u && !p && !l,
                        "hover:bg-dark-elements-hover": c && !u,
                        "hover:bg-dark-elements-hover text-light-primary": c,
                        "hover:bg-light-disabled text-white": p && !u,
                        "bg-accent-primary": !a && !c && !p && !u,
                        "bg-accent-hover": a && !c && !p && !u,
                        "bg-dark-elements": !a && c && !u,
                        "bg-dark-elements-hover": a && c && !u,
                        "bg-light-emphasis": !a && p && !u,
                        "bg-light-disabled": a && p && !u,
                        "border border-white border-opacity-[15%] bg-dark-elements disabled:text-light-tertiary": u && !p && !a,
                        "opacity-50 bg-light-emphasis": u && p && !a
                    }),
                    ...f,
                    children: a ? (0,
                    n.jsx)(o.Z, {
                        className: "text-dark-background"
                    }) : h
                })
            }
        }
    },
    76773: function(e, t, r) {
        "use strict";
        var n = r(57437)
          , a = r(84772)
          , i = r.n(a);
        t.Z = function(e) {
            let {className: t, ...r} = e;
            return (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                className: i()("animate-loadingRing mx-auto", t),
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
    19615: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return u
            }
        });
        var n = r(57437)
          , a = r(71332)
          , i = r(84772)
          , o = r.n(i)
          , s = r(2265)
          , c = r(95438)
          , l = function() {
            return (0,
            n.jsx)("div", {
                className: "w-14 h-14",
                children: (0,
                n.jsx)(c.y1, {
                    src: "/videos/pika-loader.lottie",
                    autoplay: !0,
                    loop: !0
                })
            })
        }
          , u = function(e) {
            let {percentage: t, className: r, onComplete: i} = e
              , c = 2 * Math.PI * 28.5
              , [u,d] = (0,
            s.useState)(t);
            return (0,
            s.useEffect)( () => {
                let e = setInterval( () => {
                    d(e => e < t ? e + 1 : (null == i || i(t),
                    e))
                }
                , a.yc / (t - u));
                return () => clearInterval(e)
            }
            , [t]),
            (0,
            n.jsxs)("div", {
                className: o()("relative", r),
                children: [u < 14 ? (0,
                n.jsx)("div", {
                    className: o()("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", {
                        "animate-scaleDownFadeOut": 14 === u
                    }),
                    children: (0,
                    n.jsx)(l, {})
                }) : (0,
                n.jsxs)("span", {
                    className: "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 animate-fadeIn text-m-mobile text-white lg:text-m",
                    children: [u, "%"]
                }), (0,
                n.jsxs)("svg", {
                    width: "60",
                    height: "60",
                    viewBox: "0 0 60 60",
                    className: "-rotate-90",
                    children: [(0,
                    n.jsx)("circle", {
                        r: 28.5,
                        cx: "30",
                        cy: "30",
                        fill: "transparent",
                        strokeWidth: 3,
                        stroke: "white",
                        strokeOpacity: "0.15"
                    }), (0,
                    n.jsx)("circle", {
                        r: 28.5,
                        cx: "30",
                        cy: "30",
                        fill: "transparent",
                        strokeLinecap: "round",
                        stroke: "white",
                        className: "transition-[stroke-dashoffset]",
                        strokeWidth: 3,
                        strokeDasharray: c,
                        strokeDashoffset: c * (1 - .01 * u)
                    })]
                })]
            })
        }
    },
    19103: function(e, t, r) {
        "use strict";
        var n = r(57437);
        t.Z = function(e) {
            return (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "white",
                stroke: "none",
                ...e,
                children: (0,
                n.jsx)("path", {
                    d: "M10.475 2.34378C10.4075 2.13853 10.2158 1.99987 9.9997 2C9.78364 2.00013 9.59211 2.13902 9.52485 2.34435L7.94151 7.17768L7.94087 7.17966C7.88412 7.35536 7.78647 7.5151 7.65595 7.64571C7.52544 7.77633 7.36578 7.87409 7.19012 7.93098L2.34378 9.52503C2.13853 9.59254 1.99987 9.78424 2 10.0003C2.00013 10.2164 2.13902 10.4079 2.34435 10.4752L7.17768 12.0585L7.17966 12.0591C7.35536 12.1159 7.5151 12.2135 7.64571 12.344C7.77633 12.4746 7.8741 12.6342 7.93099 12.8099L7.9317 12.8121L9.52503 17.6562C9.59254 17.8615 9.78424 18.0001 10.0003 18C10.2164 17.9999 10.4079 17.861 10.4752 17.6557L12.0585 12.8223L12.0591 12.8203C12.1159 12.6446 12.2135 12.4849 12.344 12.3543C12.4746 12.2237 12.6342 12.1259 12.8099 12.069L12.8121 12.0683L17.6562 10.475C17.8615 10.4075 18.0001 10.2158 18 9.9997C17.9999 9.78364 17.861 9.59211 17.6557 9.52485L12.8223 7.94151L12.8203 7.94087C12.6446 7.88412 12.4849 7.78647 12.3543 7.65595C12.2237 7.52544 12.1259 7.36578 12.069 7.19012L10.475 2.34378Z"
                })
            })
        }
    },
    93953: function(e, t, r) {
        "use strict";
        var n = r(57437);
        r(2265),
        t.Z = e => (0,
        n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            ...e,
            children: (0,
            n.jsx)("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeOpacity: .85,
                strokeWidth: 1.5,
                d: "m14.667 6-4 4m0-4 4 4M7.333 3.333 4 6H1.333v4H4l3.333 2.667V3.333Z"
            })
        })
    },
    45652: function(e, t, r) {
        "use strict";
        var n = r(57437);
        r(2265),
        t.Z = e => (0,
        n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 12,
            viewBox: "0 0 16 12",
            fill: "none",
            ...e,
            children: (0,
            n.jsx)("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeOpacity: .85,
                strokeWidth: 1.5,
                d: "M10.36 3.64a3.333 3.333 0 0 1 0 4.713m2.353-7.066a6.667 6.667 0 0 1 0 9.426m-5.38-9.38L4 4H1.333v4H4l3.333 2.667V1.333Z"
            })
        })
    },
    92030: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return a
            }
        });
        var n = r(57437);
        function a(e) {
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
    71332: function(e, t, r) {
        "use strict";
        r.d(t, {
            bl: function() {
                return p
            },
            sl: function() {
                return f
            },
            W1: function() {
                return i
            },
            AB: function() {
                return b
            },
            Bu: function() {
                return y
            },
            hN: function() {
                return o
            },
            tI: function() {
                return v
            },
            Qn: function() {
                return m
            },
            cK: function() {
                return k
            },
            aC: function() {
                return x
            },
            _3: function() {
                return L
            },
            kk: function() {
                return C
            },
            RF: function() {
                return h
            },
            o1: function() {
                return j
            },
            Rq: function() {
                return w
            },
            yc: function() {
                return g
            }
        });
        var n, a, i, o, s = r(19103), c = r(92030), l = r(57437), u = r(40257);
        let d = "https://api.pika.art"
          , p = {
            feedGenerations: e => {
                let {after: t, perPage: r=9, category: n, userId: a} = e;
                return "".concat(d, "/generations/v2?").concat(t ? "id=".concat(t, "&") : "", "&perPage=").concat(r).concat(n ? "&category=".concat(n) : "", "&userId=").concat(a)
            }
            ,
            userGenerations: e => {
                let {userId: t, after: r, perPage: n=9} = e;
                return "".concat(d, "/").concat(t, "/v2/generations?").concat(r ? "id=".concat(r, "&") : "", "perPage=").concat(n)
            }
            ,
            generate: "".concat(d, "/generate"),
            generateV15: "".concat(d, "/generate/v1.5"),
            generateV2: "".concat(d, "/generate/v2"),
            regenerate: "".concat(d, "/regenerate"),
            video: (e, t) => "".concat(d, "/fetch/video/").concat(e).concat(t ? "?userId=".concat(t) : ""),
            feedback: "".concat(d, "/feedback"),
            createFolder: "".concat(d, "/folder/create"),
            renameFolder: "".concat(d, "/folder/rename"),
            deleteFolder: "".concat(d, "/folder/delete"),
            addToFolder: "".concat(d, "/folder/video/add"),
            removeFromFolder: "".concat(d, "/folder/video/remove"),
            getFolders: e => {
                let {userId: t} = e;
                return "".concat(d, "/folders?userId=").concat(t)
            }
            ,
            folderGenerations: e => {
                let {folderName: t, after: r, perPage: n=9, userId: a} = e;
                return "".concat(d, "/folder/videos?").concat(r ? "id=".concat(r, "&") : "", "&perPage=").concat(n, "&userId=").concat(a, "&folderName=").concat(t)
            }
            ,
            upscale: "".concat(d, "/upscale"),
            adjust: "".concat(d, "/adjust"),
            refreshGenerations: e => {
                let {ids: t, userId: r} = e;
                return "".concat(d, "/refresh/generations?userId=").concat(r, "&ids=").concat(t.join(","))
            }
            ,
            delete: "".concat(d, "/delete"),
            generateAudio: "".concat(d, "/generate-audio"),
            audio: "".concat(d, "/fetch/audio"),
            musicVideo: e => "".concat(d, "/fetch/musicVideo/").concat(e),
            adminGenerations: e => {
                let {userId: t, page: r, perPage: n=12} = e;
                return "".concat(d, "/admin/generations?userId=").concat(t, "&page=").concat(r, "&perPage=").concat(n)
            }
        }
          , f = [{
            label: "16:9",
            value: 16 / 9
        }, {
            label: "9:16",
            value: 9 / 16
        }, {
            label: "1:1",
            value: 1
        }, {
            label: "5:2",
            value: 2.5
        }, {
            label: "4:5",
            value: .8
        }, {
            label: "4:3",
            value: 4 / 3
        }]
          , h = {
            aspectRatio: 16 / 9,
            frameRate: 24,
            camera: {},
            parameters: {
                guidanceScale: 12,
                motion: 1,
                negativePrompt: "",
                seed: void 0
            },
            extend: !1
        }
          , m = 3;
        (n = i || (i = {})).TopLeft = "tl",
        n.TopRight = "tr",
        n.BottomLeft = "bl",
        n.BottomRight = "br",
        n.Top = "t",
        n.Right = "r",
        n.Bottom = "b",
        n.Left = "l",
        n.Center = "c",
        n.Empty = "e",
        (a = o || (o = {})).File = "file",
        a.Encrypt = "encrypt",
        a.Extend = "extend",
        a.Outpainting = "outpainting",
        a.Inpainting = "inpainting",
        a.Normal = "normal",
        a.SFX = "sfx",
        a.LipSync = "lipSync",
        a.Ingredients = "ingredients",
        a.Pikaddition = "pikaddition";
        let g = 1e4
          , v = 26214400
          , x = 5
          , k = 2e3
          , y = "My Favorites"
          , b = u.env.NEXT_PUBLIC_CALENDLY_BOOK_CALL_URL || ""
          , C = [{
            name: "Pika Turbo",
            value: "Turbo",
            description: "Our fastest and cheapest model, ideal for Pikascenes",
            icon: null,
            isNew: !0
        }, {
            name: "Pika 2.1",
            value: "2.1",
            description: "Our latest model with better motion and Pikascenes support",
            icon: function(e) {
                let {color: t="#0D0D0D", ...r} = e;
                return (0,
                l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    ...r,
                    children: [(0,
                    l.jsx)("path", {
                        d: "M8.47497 1.34378C8.40746 1.13853 8.21576 0.99987 7.9997 1C7.78364 1.00013 7.59211 1.13902 7.52485 1.34435L5.94151 6.17768L5.94087 6.17966C5.88412 6.35536 5.78647 6.5151 5.65595 6.64571C5.52544 6.77633 5.36578 6.87409 5.19012 6.93098L0.343775 8.52503C0.138534 8.59254 -0.000129576 8.78424 9.08626e-08 9.0003C0.000130151 9.21636 0.139024 9.40789 0.344346 9.47515L5.17768 11.0585L5.17966 11.0591C5.35536 11.1159 5.5151 11.2135 5.64571 11.344C5.77633 11.4746 5.8741 11.6342 5.93099 11.8099L5.9317 11.8121L7.52503 16.6562C7.59254 16.8615 7.78424 17.0001 8.0003 17C8.21636 16.9999 8.40789 16.861 8.47515 16.6557L10.0585 11.8223L10.0591 11.8203C10.1159 11.6446 10.2135 11.4849 10.344 11.3543C10.4746 11.2237 10.6342 11.1259 10.8099 11.069L10.8121 11.0683L15.6562 9.47497C15.8615 9.40746 16.0001 9.21576 16 8.9997C15.9999 8.78364 15.861 8.59211 15.6557 8.52485L10.8223 6.94151L10.8203 6.94087C10.6446 6.88412 10.4849 6.78647 10.3543 6.65595C10.2237 6.52544 10.1259 6.36578 10.069 6.19012L8.47497 1.34378Z",
                        fill: t
                    }), (0,
                    l.jsx)("path", {
                        d: "M15.7078 12.1504C15.6783 12.0606 15.5944 11.9999 15.4999 12C15.4053 12.0001 15.3215 12.0608 15.2921 12.1507L14.5994 14.2652L14.5991 14.2661C14.5743 14.343 14.5316 14.4129 14.4745 14.47C14.4174 14.5271 14.3475 14.5699 14.2707 14.5948L12.1504 15.2922C12.0606 15.3217 11.9999 15.4056 12 15.5001C12.0001 15.5947 12.0608 15.6785 12.1507 15.7079L14.2652 16.4006L14.2661 16.4009C14.343 16.4257 14.4129 16.4684 14.47 16.5255C14.5271 16.5826 14.5699 16.6525 14.5948 16.7293L14.5951 16.7303L15.2922 18.8496C15.3217 18.9394 15.4056 19.0001 15.5001 19C15.5947 18.9999 15.6785 18.9392 15.7079 18.8493L16.4006 16.7348L16.4009 16.7339C16.4257 16.657 16.4684 16.5871 16.5255 16.53C16.5826 16.4729 16.6525 16.4301 16.7293 16.4052L16.7303 16.4049L18.8496 15.7078C18.9394 15.6783 19.0001 15.5944 19 15.4999C18.9999 15.4053 18.9392 15.3215 18.8493 15.2921L16.7348 14.5994L16.7339 14.5991C16.657 14.5743 16.5871 14.5316 16.53 14.4745C16.4729 14.4174 16.4301 14.3475 16.4052 14.2707L15.7078 12.1504Z",
                        fill: t
                    }), (0,
                    l.jsx)("path", {
                        d: "M15.6484 1.10743C15.6273 1.04329 15.5674 0.99996 15.4999 1C15.4324 1.00004 15.3725 1.04344 15.3515 1.10761L14.8567 2.61802L14.8565 2.61864C14.8388 2.67355 14.8083 2.72347 14.7675 2.76428C14.7267 2.8051 14.6768 2.83565 14.6219 2.85343L13.1074 3.35157C13.0433 3.37267 13 3.43258 13 3.50009C13 3.56761 13.0434 3.62747 13.1076 3.64849L14.618 4.14328L14.6186 4.14348C14.6736 4.16121 14.7235 4.19173 14.7643 4.23251C14.8051 4.2733 14.8357 4.32319 14.8534 4.37809L14.8537 4.37877L15.3516 5.89257C15.3727 5.95671 15.4326 6.00004 15.5001 6C15.5676 5.99996 15.6275 5.95655 15.6485 5.89239L16.1433 4.38197L16.1435 4.38136C16.1612 4.32645 16.1917 4.27653 16.2325 4.23571C16.2733 4.1949 16.3232 4.16434 16.3781 4.14657L16.3788 4.14634L17.8926 3.64843C17.9567 3.62733 18 3.56742 18 3.49991C18 3.43239 17.9566 3.37253 17.8924 3.35151L16.382 2.85672L16.3814 2.85652C16.3264 2.83879 16.2765 2.80827 16.2357 2.76749C16.1949 2.7267 16.1643 2.67681 16.1466 2.62191L15.6484 1.10743Z",
                        fill: t
                    })]
                })
            },
            isNew: !0
        }, {
            name: "Pika 1.5",
            value: "1.5",
            description: "Updated model with new effects",
            icon: c.Z,
            isNew: !1
        }, {
            name: "Pika 1.0",
            value: "1.0",
            description: "Classic model with classic features",
            icon: s.Z,
            isNew: !1
        }]
          , L = [{
            value: "creative",
            name: "Creative",
            description: "Gives Pika more room to play"
        }, {
            value: "precise",
            name: "Precise",
            description: "Tells Pika to limit creative interpretation"
        }]
          , w = [{
            id: 1,
            title: "Anime",
            key_frontend_phrase: "Anime,",
            preview_image: "https://cdn.pika.art/feature/styles/images/anime.jpg",
            key_phrase: "Anime,",
            frame_rate: 8,
            negative_prompt: null
        }, {
            id: 2,
            title: "Moody",
            key_frontend_phrase: "Moody, filmic style, 35mm,",
            preview_image: "https://cdn.pika.art/feature/styles/images/moody.jpg",
            key_phrase: "Moody, filmic style, 35mm,",
            frame_rate: 24,
            negative_prompt: null
        }, {
            id: 3,
            title: "3D",
            key_frontend_phrase: "3D render,",
            preview_image: "https://cdn.pika.art/feature/styles/images/3d.jpg",
            key_phrase: "Unreal engine, 3D render,",
            frame_rate: 24,
            negative_prompt: null
        }, {
            id: 4,
            title: "Watercolor",
            key_frontend_phrase: "Watercolor paint style of",
            preview_image: "https://cdn.pika.art/feature/styles/images/watercolor.jpg",
            key_phrase: "Watercolor paint style of",
            frame_rate: 12,
            negative_prompt: null
        }, {
            id: 5,
            title: "Natural",
            key_frontend_phrase: "Naturalistic film style, natural light, film grain,",
            preview_image: "https://cdn.pika.art/feature/styles/images/natural.jpg",
            key_phrase: "Naturalistic film style, natural light, film grain, Richard Linklater,",
            frame_rate: 24,
            negative_prompt: "Blurry, dark. "
        }, {
            id: 6,
            title: "Claymation",
            key_frontend_phrase: "Claymation, stop motion,",
            preview_image: "https://cdn.pika.art/feature/styles/images/claymation.jpg",
            key_phrase: "Claymation, stop motion,",
            frame_rate: 12,
            negative_prompt: null
        }, {
            id: 7,
            title: "Black & white",
            key_frontend_phrase: "Black and white film of a",
            preview_image: "https://cdn.pika.art/feature/styles/images/black-and-white.jpg",
            key_phrase: "Black and white film of a",
            frame_rate: 24,
            negative_prompt: null
        }]
          , j = "Add this to my video. Based on the current actions in the original video, come up with a natural and engaging way to fit the object into the video."
    },
    84772: function(e, t) {
        var r;
        !function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function a() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var i = typeof r;
                        if ("string" === i || "number" === i)
                            e.push(r);
                        else if (Array.isArray(r)) {
                            if (r.length) {
                                var o = a.apply(null, r);
                                o && e.push(o)
                            }
                        } else if ("object" === i) {
                            if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                                e.push(r.toString());
                                continue
                            }
                            for (var s in r)
                                n.call(r, s) && r[s] && e.push(s)
                        }
                    }
                }
                return e.join(" ")
            }
            e.exports ? (a.default = a,
            e.exports = a) : void 0 !== (r = (function() {
                return a
            }
            ).apply(t, [])) && (e.exports = r)
        }()
    },
    40257: function(e, t, r) {
        "use strict";
        var n, a;
        e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (a = r.g.process) ? void 0 : a.env) ? r.g.process : r(44227)
    },
    44227: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, r, n, a = e.exports = {};
                    function i() {
                        throw Error("setTimeout has not been defined")
                    }
                    function o() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function s(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === i || !t) && setTimeout)
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
                            t = "function" == typeof setTimeout ? setTimeout : i
                        } catch (e) {
                            t = i
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : o
                        } catch (e) {
                            r = o
                        }
                    }();
                    var c = []
                      , l = !1
                      , u = -1;
                    function d() {
                        l && n && (l = !1,
                        n.length ? c = n.concat(c) : u = -1,
                        c.length && p())
                    }
                    function p() {
                        if (!l) {
                            var e = s(d);
                            l = !0;
                            for (var t = c.length; t; ) {
                                for (n = c,
                                c = []; ++u < t; )
                                    n && n[u].run();
                                u = -1,
                                t = c.length
                            }
                            n = null,
                            l = !1,
                            function(e) {
                                if (r === clearTimeout)
                                    return clearTimeout(e);
                                if ((r === o || !r) && clearTimeout)
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
                    function f(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function h() {}
                    a.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                        c.push(new f(e,t)),
                        1 !== c.length || l || s(p)
                    }
                    ,
                    f.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    a.title = "browser",
                    a.browser = !0,
                    a.env = {},
                    a.argv = [],
                    a.version = "",
                    a.versions = {},
                    a.on = h,
                    a.addListener = h,
                    a.once = h,
                    a.off = h,
                    a.removeListener = h,
                    a.removeAllListeners = h,
                    a.emit = h,
                    a.prependListener = h,
                    a.prependOnceListener = h,
                    a.listeners = function(e) {
                        return []
                    }
                    ,
                    a.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    a.cwd = function() {
                        return "/"
                    }
                    ,
                    a.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    a.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(e) {
                var a = r[e];
                if (void 0 !== a)
                    return a.exports;
                var i = r[e] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    t[e](i, i.exports, n),
                    o = !1
                } finally {
                    o && delete r[e]
                }
                return i.exports
            }
            n.ab = "//";
            var a = n(229);
            e.exports = a
        }()
    }
}, function(e) {
    e.O(0, [2972, 6312, 5438, 2971, 2117, 1744], function() {
        return e(e.s = 66135)
    }),
    _N_E = e.O()
}
]);
