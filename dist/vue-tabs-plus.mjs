import { ref as g, watch as X, nextTick as D, onMounted as re, onBeforeUnmount as de, resolveComponent as he, openBlock as a, createElementBlock as c, normalizeClass as y, unref as i, Fragment as V, createBlock as v, resolveDynamicComponent as w, normalizeProps as x, mergeProps as u, withCtx as $, toDisplayString as C, createCommentVNode as I, createElementVNode as d, renderList as ve, withModifiers as ne, normalizeStyle as fe, createTextVNode as P, createStaticVNode as G } from "vue";
import { useRoute as ge, useRouter as me } from "vue-router";
const ye = ["title", "onClick", "onContextmenu"], ke = { class: "text-box" }, pe = ["onClick"], we = /* @__PURE__ */ G('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g></svg></div>', 1), Ie = /* @__PURE__ */ G('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M5 5L12 5L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate></path><path d="M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"></animate></path></g></svg></div>', 1), be = /* @__PURE__ */ G('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M12 3V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M22 12H15.5M2 12H8.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M15 12L18 15M9 12L6 15M15 12L18 9M9 12L6 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g></svg></div>', 1), Le = /* @__PURE__ */ d("div", { class: "icon" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ d("path", {
      fill: "currentColor",
      d: "M11.92 19.92L4 12l7.92-7.92l1.41 1.42l-5.5 5.5H22v2H7.83l5.51 5.5l-1.42 1.42M4 12V2H2v20h2V12Z"
    })
  ])
], -1), Me = /* @__PURE__ */ d("div", { class: "icon" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ d("path", {
      fill: "currentColor",
      d: "M12.08 4.08L20 12l-7.92 7.92l-1.41-1.42l5.5-5.5H2v-2h14.17l-5.5-5.5l1.41-1.42M20 12v10h2V2h-2v10Z"
    })
  ])
], -1), xe = {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "button"
    },
    i18n: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    leftIcon: {
      type: Object,
      default: () => ({
        icon: "\uFF1C"
      })
    },
    rightIcon: {
      type: Object,
      default: () => ({
        icon: "\uFF1E"
      })
    },
    closeIcon: {
      type: Object,
      default: () => ({
        icon: "x"
      })
    },
    stepPercentage: {
      type: Number,
      default: 10
    }
  },
  emits: ["reloadPage"],
  setup(n, { expose: A, emit: oe }) {
    const b = n, H = ge(), N = me(), ae = (e, t) => {
      let s = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
      for (; e && !s.call(e, t); )
        e = e.parentElement;
      return e;
    }, le = (e, t) => {
      let s = [], o = (z) => {
        z.forEach((p) => {
          se(p, t) && s.push(p), p.childNodes && p.childNodes.length > 0 && o(p.childNodes);
        });
      };
      return o(e.childNodes), s;
    }, se = (e, t) => e.classList ? e.classList.contains(t) : new RegExp("\\s" + t + "\\s").test(" " + e.className + " "), L = (e) => {
      let t = e instanceof Array ? [] : {};
      for (let s in e)
        t[s] = typeof e[s] == "object" ? L(e[s]) : e[s];
      return t;
    }, ie = (e) => window.btoa(encodeURIComponent(JSON.stringify(e))), ce = (e) => JSON.parse(decodeURIComponent(window.atob(e))), l = g([]);
    X(
      () => l.value.length,
      () => {
        sessionStorage.setItem("_VUETABSARR_", ie(l.value));
      }
    ), X(
      H,
      () => {
        _(H);
      }
    );
    const m = g({}), R = g(!1), S = g(!1), T = g(!1), U = g(!1);
    let E = 0, W = 0, O = 0, J = 0, Y = 0;
    const f = g(null), k = () => {
      h.value = !1;
      const e = le(f.value, "item");
      l.value.forEach((t, s) => {
        s === 0 ? (t.btnMoveX = 0, t.chromeMoveX = 0) : (t.btnMoveX = l.value[s - 1].btnMoveX + e[s].clientWidth + 12, t.chromeMoveX = l.value[s - 1].chromeMoveX + e[s].clientWidth);
      }), O = f.value.clientWidth - 20, E = 0, W = 0, e.forEach((t, s) => {
        W += t.clientWidth, E += t.clientWidth + 2, s !== 0 && (E += 10);
      }), Z();
    }, Z = () => {
      R.value = O < (b.type === "button" ? E : W), J = (b.type === "button" ? E : W) - O, Y = J / b.stepPercentage, R.value ? (f.value.scrollLeft = l.value.filter((e) => e.path === m.value.path)[0][b.type === "button" ? "btnMoveX" : "chromeMoveX"], K(), S.value || f.value.addEventListener("wheel", q), S.value = !0) : (S.value && f.value.removeEventListener("wheel", q), S.value = !1);
    };
    X(
      () => b.type,
      () => Z()
    );
    const K = () => {
      T.value = f.value.scrollLeft === 0, U.value = f.value.scrollLeft === J;
    }, M = (e = !0) => {
      f.value.scrollLeft = f.value.scrollLeft + (e ? Y : -Y), K();
    }, q = (e) => {
      h.value = !1, e.wheelDelta ? e.wheelDelta > 0 ? M(!1) : e.wheelDelta < 0 && M() : e.detail && (e.wheelDelta < 0 ? M(!1) : e.wheelDelta > 0 && M());
    }, h = g(!1);
    X(
      h,
      () => {
        h.value ? document.body.addEventListener("click", F) : document.body.removeEventListener("click", F);
      }
    );
    const Q = g(0), j = g(0), r = g({
      data: {},
      index: 0
    }), ue = (e, t) => {
      r.value.data = L(e), r.value.index = t, Q.value = event.pageX + 120 > document.body.clientWidth ? document.body.clientWidth - 120 : event.pageX, j.value = event.pageY, h.value = !0;
    }, F = () => {
      ae(event.target, ".tabs-pop") === null && (h.value = !1);
    }, B = (e) => {
      switch (e) {
        case 1:
          h.value = !1, oe("reloadPage");
          break;
        case 2:
          h.value = !1, ee(r.value.data, r.value.index);
          break;
        case 3:
          l.value = [L(r.value.data)], h.value = !1, l.value.findIndex((t) => t.path === m.value.path) === -1 && N.push(r.value.data.path);
          break;
        case 4:
          l.value = L(l.value.slice(r.value.index)), l.value.findIndex((t) => t.path === m.value.path) === -1 ? (h.value = !1, N.push(r.value.data.path)) : D(() => {
            k();
          });
          break;
        case 5:
          l.value = L(l.value.slice(0, r.value.index + 1)), l.value.findIndex((t) => t.path === m.value.path) === -1 ? (h.value = !1, N.push(r.value.data.path)) : D(() => {
            k();
          });
          break;
      }
    }, _ = (e) => {
      const t = {
        label: e.meta.title,
        supLabel: e.query.tabsSupTit || "",
        name: e.name,
        path: e.fullPath,
        icon: e.meta.icon
      };
      l.value.findIndex((s) => b.multiple ? s.path === t.path : s.name === t.name) === -1 ? (l.value.push(t), te(t)) : te(t, !1);
    }, ee = (e, t) => {
      l.value.splice(t, 1), D(() => {
        e.path === m.value.path ? N.push(l.value[t === l.value.length ? t - 1 : t].path) : k();
      });
    }, te = (e, t = !0) => {
      m.value = L(e), t ? D(() => {
        k();
      }) : Z();
    };
    return sessionStorage.getItem("_VUETABSARR_") && (l.value = ce(sessionStorage.getItem("_VUETABSARR_"))), _(H), re(() => {
      k(), window.addEventListener("resize", k);
    }), de(() => {
      window.removeEventListener("resize", k), document.body.removeEventListener("click", F), sessionStorage.removeItem("_VUETABSARR_"), S.value && f.value.removeEventListener("wheel", q);
    }), A({ dealSize: k }), (e, t) => {
      const s = he("el-icon");
      return a(), c("div", {
        class: y(["vue-tabs-plus", n.type !== "button" ? "chrome-tab" : ""])
      }, [
        i(R) ? (a(), c("div", {
          key: 0,
          class: y(["go-left", i(T) ? "is-dis" : ""]),
          onClick: t[0] || (t[0] = (o) => i(T) ? null : M(!1))
        }, [
          n.leftIcon && (n.leftIcon.icon || n.leftIcon.type) ? (a(), c(V, { key: 0 }, [
            n.leftIcon.type === "custom" ? (a(), v(w(n.leftIcon.icon), x(u({ key: 0 }, n.leftIcon.attrs)), null, 16)) : n.leftIcon.type === "el" ? (a(), v(s, x(u({ key: 1 }, n.leftIcon.attrs)), {
              default: $(() => [
                (a(), v(w(n.leftIcon.icon)))
              ]),
              _: 1
            }, 16)) : n.leftIcon.type === "iconfont" ? (a(), c("i", u({
              key: 2,
              class: ["icon iconfont", "icon-" + n.leftIcon.icon]
            }, n.leftIcon.attrs), null, 16)) : (a(), c("i", u({
              key: 3,
              class: n.leftIcon.type
            }, n.leftIcon.attrs), C(n.leftIcon.icon), 17))
          ], 64)) : I("", !0)
        ], 2)) : I("", !0),
        d("div", {
          ref_key: "itemBox",
          ref: f,
          class: "item-box"
        }, [
          (a(!0), c(V, null, ve(i(l), (o, z) => (a(), c("div", {
            class: y(["item", o.path === i(m).path ? "active" : ""]),
            title: (n.i18n ? e.$t(o.label) : o.label) + o.supLabel,
            key: z,
            onClick: (p) => o.path === i(m).path ? null : i(N).push(o.path),
            onContextmenu: ne((p) => ue(o, z), ["prevent"])
          }, [
            o.icon && (o.icon.icon || o.icon.type) ? (a(), c(V, { key: 0 }, [
              o.icon.type === "custom" ? (a(), v(w(o.icon.icon), u({
                key: 0,
                class: "menu-icon"
              }, o.icon.attrs), null, 16)) : o.icon.type === "el" ? (a(), v(s, u({
                key: 1,
                class: "menu-icon"
              }, o.icon.attrs), {
                default: $(() => [
                  (a(), v(w(o.icon.icon)))
                ]),
                _: 2
              }, 1040)) : o.icon.type === "iconfont" ? (a(), c("i", u({
                key: 2,
                class: ["menu-icon icon iconfont", "icon-" + o.icon.icon]
              }, o.icon.attrs), null, 16)) : (a(), c("i", u({
                key: 3,
                class: ["menu-icon", o.icon.type]
              }, o.icon.attrs), C(o.icon.icon), 17))
            ], 64)) : I("", !0),
            d("div", ke, C(n.i18n ? e.$t(o.label) : o.label) + C(o.supLabel), 1),
            i(l).length > 1 ? (a(), c("div", {
              key: 1,
              class: "icon-box",
              onClick: ne((p) => ee(o, z), ["stop"])
            }, [
              n.closeIcon && (n.closeIcon.icon || n.closeIcon.type) ? (a(), c(V, { key: 0 }, [
                n.closeIcon.type === "custom" ? (a(), v(w(n.closeIcon.icon), x(u({ key: 0 }, n.closeIcon.attrs)), null, 16)) : n.closeIcon.type === "el" ? (a(), v(s, x(u({ key: 1 }, n.closeIcon.attrs)), {
                  default: $(() => [
                    (a(), v(w(n.closeIcon.icon)))
                  ]),
                  _: 1
                }, 16)) : n.closeIcon.type === "iconfont" ? (a(), c("i", u({
                  key: 2,
                  class: ["icon iconfont", "icon-" + n.closeIcon.icon]
                }, n.closeIcon.attrs), null, 16)) : (a(), c("i", u({
                  key: 3,
                  class: n.closeIcon.type
                }, n.closeIcon.attrs), C(n.closeIcon.icon), 17))
              ], 64)) : I("", !0)
            ], 8, pe)) : I("", !0)
          ], 42, ye))), 128)),
          i(h) ? (a(), c("div", {
            key: 0,
            class: "tabs-pop",
            style: fe({ left: i(Q) + "px", top: i(j) + "px" })
          }, [
            d("div", {
              class: y(["tabs-pop-item", i(r).data.path === i(m).path ? "" : "dis"]),
              onClick: t[1] || (t[1] = (o) => i(r).data.path === i(m).path ? B(1) : null)
            }, [
              we,
              P(" \u91CD\u65B0\u52A0\u8F7D ")
            ], 2),
            d("div", {
              class: y(["tabs-pop-item", i(l).length === 1 ? "dis" : ""]),
              onClick: t[2] || (t[2] = (o) => B(2))
            }, [
              Ie,
              P(" \u5173\u95ED\u5F53\u524D ")
            ], 2),
            d("div", {
              class: y(["tabs-pop-item", i(l).length === 1 ? "dis" : ""]),
              onClick: t[3] || (t[3] = (o) => B(3))
            }, [
              be,
              P(" \u5173\u95ED\u5176\u4ED6 ")
            ], 2),
            d("div", {
              class: y(["tabs-pop-item", i(r).index === 0 ? "dis" : ""]),
              onClick: t[4] || (t[4] = (o) => B(4))
            }, [
              Le,
              P(" \u5173\u95ED\u5DE6\u4FA7 ")
            ], 2),
            d("div", {
              class: y(["tabs-pop-item", i(r).index === i(l).length - 1 ? "dis" : ""]),
              onClick: t[5] || (t[5] = (o) => B(5))
            }, [
              Me,
              P(" \u5173\u95ED\u53F3\u4FA7 ")
            ], 2)
          ], 4)) : I("", !0)
        ], 512),
        i(R) ? (a(), c("div", {
          key: 1,
          class: y(["go-right", i(U) ? "is-dis" : ""]),
          onClick: t[6] || (t[6] = (o) => i(U) ? null : M())
        }, [
          n.rightIcon && (n.rightIcon.icon || n.rightIcon.type) ? (a(), c(V, { key: 0 }, [
            n.rightIcon.type === "custom" ? (a(), v(w(n.rightIcon.icon), x(u({ key: 0 }, n.rightIcon.attrs)), null, 16)) : n.rightIcon.type === "el" ? (a(), v(s, x(u({ key: 1 }, n.rightIcon.attrs)), {
              default: $(() => [
                (a(), v(w(n.rightIcon.icon)))
              ]),
              _: 1
            }, 16)) : n.rightIcon.type === "iconfont" ? (a(), c("i", u({
              key: 2,
              class: ["icon iconfont", "icon-" + n.rightIcon.icon]
            }, n.rightIcon.attrs), null, 16)) : (a(), c("i", u({
              key: 3,
              class: n.rightIcon.type
            }, n.rightIcon.attrs), C(n.rightIcon.icon), 17))
          ], 64)) : I("", !0)
        ], 2)) : I("", !0)
      ], 2);
    };
  }
}, Ce = [xe], Ne = {
  install(n) {
    Ce.forEach((A) => {
      n.component("vueTabsPlus", A);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ne);
export {
  Ne as default
};
