import { ref as f, watch as W, nextTick as X, onMounted as ue, onBeforeUnmount as re, resolveComponent as de, openBlock as n, createElementBlock as i, normalizeClass as m, Fragment as z, createBlock as v, resolveDynamicComponent as p, normalizeProps as M, mergeProps as c, withCtx as D, toDisplayString as x, createCommentVNode as w, createElementVNode as r, renderList as ve, unref as he, withModifiers as te, normalizeStyle as fe, createTextVNode as V, createStaticVNode as F } from "vue";
import { useRoute as ge, useRouter as me } from "vue-router";
const ye = ["title", "onClick", "onContextmenu"], ke = { class: "text-box" }, pe = ["onClick"], we = /* @__PURE__ */ F('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g></svg></div>', 1), Ie = /* @__PURE__ */ F('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M5 5L12 5L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate></path><path d="M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"></animate></path></g></svg></div>', 1), be = /* @__PURE__ */ F('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M12 3V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M22 12H15.5M2 12H8.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M15 12L18 15M9 12L6 15M15 12L18 9M9 12L6 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g></svg></div>', 1), Le = /* @__PURE__ */ r("div", { class: "icon" }, [
  /* @__PURE__ */ r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ r("path", {
      fill: "currentColor",
      d: "M11.92 19.92L4 12l7.92-7.92l1.41 1.42l-5.5 5.5H22v2H7.83l5.51 5.5l-1.42 1.42M4 12V2H2v20h2V12Z"
    })
  ])
], -1), Me = /* @__PURE__ */ r("div", { class: "icon" }, [
  /* @__PURE__ */ r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ r("path", {
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
  setup(a, { expose: $, emit: ae }) {
    const I = a, A = ge(), C = me(), le = (e, t) => {
      let s = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
      for (; e && !s.call(e, t); )
        e = e.parentElement;
      return e;
    }, ne = (e, t) => {
      let s = [], l = (B) => {
        B.forEach((k) => {
          oe(k, t) && s.push(k), k.childNodes && k.childNodes.length > 0 && l(k.childNodes);
        });
      };
      return l(e.childNodes), s;
    }, oe = (e, t) => e.classList ? e.classList.contains(t) : new RegExp("\\s" + t + "\\s").test(" " + e.className + " "), b = (e) => {
      let t = e instanceof Array ? [] : {};
      for (let s in e)
        t[s] = typeof e[s] == "object" ? b(e[s]) : e[s];
      return t;
    }, se = (e) => window.btoa(encodeURIComponent(JSON.stringify(e))), ie = (e) => JSON.parse(decodeURIComponent(window.atob(e))), o = f([]);
    W(
      () => o.value.length,
      () => {
        sessionStorage.setItem("_VUETABSARR_", se(o.value));
      }
    ), W(
      A,
      () => {
        j(A);
      }
    );
    const g = f({}), P = f(!1), N = f(!1), H = f(!1), T = f(!1);
    let S = 0, R = 0, U = 0, O = 0, J = 0;
    const h = f(null), y = () => {
      d.value = !1;
      const e = ne(h.value, "item");
      o.value.forEach((t, s) => {
        s === 0 ? (t.btnMoveX = 0, t.chromeMoveX = 0) : (t.btnMoveX = o.value[s - 1].btnMoveX + e[s].clientWidth + 12, t.chromeMoveX = o.value[s - 1].chromeMoveX + e[s].clientWidth);
      }), U = h.value.clientWidth - 20, S = 0, R = 0, e.forEach((t, s) => {
        R += t.clientWidth, S += t.clientWidth + 2, s !== 0 && (S += 10);
      }), Y();
    }, Y = () => {
      P.value = U < (I.type === "button" ? S : R), O = (I.type === "button" ? S : R) - U, J = O / I.stepPercentage, P.value ? (h.value.scrollLeft = o.value.filter((e) => e.path === g.value.path)[0][I.type === "button" ? "btnMoveX" : "chromeMoveX"], G(), N.value || h.value.addEventListener("wheel", Z), N.value = !0) : (N.value && h.value.removeEventListener("wheel", Z), N.value = !1);
    };
    W(
      () => I.type,
      () => Y()
    );
    const G = () => {
      H.value = h.value.scrollLeft === 0, T.value = h.value.scrollLeft === O;
    }, L = (e = !0) => {
      h.value.scrollLeft = h.value.scrollLeft + (e ? J : -J), G();
    }, Z = (e) => {
      d.value = !1, e.wheelDelta ? e.wheelDelta > 0 ? L(!1) : e.wheelDelta < 0 && L() : e.detail && (e.wheelDelta < 0 ? L(!1) : e.wheelDelta > 0 && L());
    }, d = f(!1);
    W(
      d,
      () => {
        d.value ? document.body.addEventListener("click", q) : document.body.removeEventListener("click", q);
      }
    );
    const K = f(0), Q = f(0), u = f({
      data: {},
      index: 0
    }), ce = (e, t) => {
      u.value.data = b(e), u.value.index = t, K.value = event.pageX + 120 > document.body.clientWidth ? document.body.clientWidth - 120 : event.pageX, Q.value = event.pageY, d.value = !0;
    }, q = () => {
      le(event.target, ".tabs-pop") === null && (d.value = !1);
    }, E = (e) => {
      switch (e) {
        case 1:
          d.value = !1, ae("reloadPage");
          break;
        case 2:
          d.value = !1, _(u.value.data, u.value.index);
          break;
        case 3:
          o.value = [b(u.value.data)], d.value = !1, o.value.findIndex((t) => t.path === g.value.path) === -1 && C.push(u.value.data.path);
          break;
        case 4:
          o.value = b(o.value.slice(u.value.index)), o.value.findIndex((t) => t.path === g.value.path) === -1 ? (d.value = !1, C.push(u.value.data.path)) : X(() => {
            y();
          });
          break;
        case 5:
          o.value = b(o.value.slice(0, u.value.index + 1)), o.value.findIndex((t) => t.path === g.value.path) === -1 ? (d.value = !1, C.push(u.value.data.path)) : X(() => {
            y();
          });
          break;
      }
    }, j = (e) => {
      const t = {
        label: e.meta.title,
        supLabel: e.query.tabsSupTit || "",
        name: e.name,
        path: e.fullPath,
        icon: e.meta.icon
      };
      o.value.findIndex((s) => I.multiple ? s.path === t.path : s.name === t.name) === -1 ? (o.value.push(t), ee(t)) : ee(t, !1);
    }, _ = (e, t) => {
      o.value.splice(t, 1), X(() => {
        e.path === g.value.path ? C.push(o.value[t === o.value.length ? t - 1 : t].path) : y();
      });
    }, ee = (e, t = !0) => {
      g.value = b(e), t ? X(() => {
        y();
      }) : Y();
    };
    return sessionStorage.getItem("_VUETABSARR_") && (o.value = ie(sessionStorage.getItem("_VUETABSARR_"))), j(A), ue(() => {
      y(), window.addEventListener("resize", y);
    }), re(() => {
      window.removeEventListener("resize", y), document.body.removeEventListener("click", q), sessionStorage.removeItem("_VUETABSARR_"), N.value && h.value.removeEventListener("wheel", Z);
    }), $({ dealSize: y }), (e, t) => {
      const s = de("el-icon");
      return n(), i("div", {
        class: m(["vue-tabs-plus", a.type !== "button" ? "chrome-tab" : ""])
      }, [
        P.value ? (n(), i("div", {
          key: 0,
          class: m(["go-left", H.value ? "is-dis" : ""]),
          onClick: t[0] || (t[0] = (l) => H.value ? null : L(!1))
        }, [
          a.leftIcon && (a.leftIcon.icon || a.leftIcon.type) ? (n(), i(z, { key: 0 }, [
            a.leftIcon.type === "custom" ? (n(), v(p(a.leftIcon.icon), M(c({ key: 0 }, a.leftIcon.attrs)), null, 16)) : a.leftIcon.type === "el" ? (n(), v(s, M(c({ key: 1 }, a.leftIcon.attrs)), {
              default: D(() => [
                (n(), v(p(a.leftIcon.icon)))
              ]),
              _: 1
            }, 16)) : a.leftIcon.type === "iconfont" ? (n(), i("i", c({
              key: 2,
              class: ["icon iconfont", "icon-" + a.leftIcon.icon]
            }, a.leftIcon.attrs), null, 16)) : (n(), i("i", c({
              key: 3,
              class: a.leftIcon.type
            }, a.leftIcon.attrs), x(a.leftIcon.icon), 17))
          ], 64)) : w("", !0)
        ], 2)) : w("", !0),
        r("div", {
          ref_key: "itemBox",
          ref: h,
          class: "item-box"
        }, [
          (n(!0), i(z, null, ve(o.value, (l, B) => (n(), i("div", {
            class: m(["item", l.path === g.value.path ? "active" : ""]),
            title: (a.i18n ? e.$t(l.label) : l.label) + l.supLabel,
            key: B,
            onClick: (k) => l.path === g.value.path ? null : he(C).push(l.path),
            onContextmenu: te((k) => ce(l, B), ["prevent"])
          }, [
            l.icon && (l.icon.icon || l.icon.type) ? (n(), i(z, { key: 0 }, [
              l.icon.type === "custom" ? (n(), v(p(l.icon.icon), c({
                key: 0,
                class: "menu-icon"
              }, l.icon.attrs), null, 16)) : l.icon.type === "el" ? (n(), v(s, c({
                key: 1,
                class: "menu-icon"
              }, l.icon.attrs), {
                default: D(() => [
                  (n(), v(p(l.icon.icon)))
                ]),
                _: 2
              }, 1040)) : l.icon.type === "iconfont" ? (n(), i("i", c({
                key: 2,
                class: ["menu-icon icon iconfont", "icon-" + l.icon.icon]
              }, l.icon.attrs), null, 16)) : (n(), i("i", c({
                key: 3,
                class: ["menu-icon", l.icon.type]
              }, l.icon.attrs), x(l.icon.icon), 17))
            ], 64)) : w("", !0),
            r("div", ke, x(a.i18n ? e.$t(l.label) : l.label) + x(l.supLabel), 1),
            o.value.length > 1 ? (n(), i("div", {
              key: 1,
              class: "icon-box",
              onClick: te((k) => _(l, B), ["stop"])
            }, [
              a.closeIcon && (a.closeIcon.icon || a.closeIcon.type) ? (n(), i(z, { key: 0 }, [
                a.closeIcon.type === "custom" ? (n(), v(p(a.closeIcon.icon), M(c({ key: 0 }, a.closeIcon.attrs)), null, 16)) : a.closeIcon.type === "el" ? (n(), v(s, M(c({ key: 1 }, a.closeIcon.attrs)), {
                  default: D(() => [
                    (n(), v(p(a.closeIcon.icon)))
                  ]),
                  _: 1
                }, 16)) : a.closeIcon.type === "iconfont" ? (n(), i("i", c({
                  key: 2,
                  class: ["icon iconfont", "icon-" + a.closeIcon.icon]
                }, a.closeIcon.attrs), null, 16)) : (n(), i("i", c({
                  key: 3,
                  class: a.closeIcon.type
                }, a.closeIcon.attrs), x(a.closeIcon.icon), 17))
              ], 64)) : w("", !0)
            ], 8, pe)) : w("", !0)
          ], 42, ye))), 128)),
          d.value ? (n(), i("div", {
            key: 0,
            class: "tabs-pop",
            style: fe({ left: K.value + "px", top: Q.value + "px" })
          }, [
            r("div", {
              class: m(["tabs-pop-item", u.value.data.path === g.value.path ? "" : "dis"]),
              onClick: t[1] || (t[1] = (l) => u.value.data.path === g.value.path ? E(1) : null)
            }, [
              we,
              V(" \u91CD\u65B0\u52A0\u8F7D ")
            ], 2),
            r("div", {
              class: m(["tabs-pop-item", o.value.length === 1 ? "dis" : ""]),
              onClick: t[2] || (t[2] = (l) => E(2))
            }, [
              Ie,
              V(" \u5173\u95ED\u5F53\u524D ")
            ], 2),
            r("div", {
              class: m(["tabs-pop-item", o.value.length === 1 ? "dis" : ""]),
              onClick: t[3] || (t[3] = (l) => E(3))
            }, [
              be,
              V(" \u5173\u95ED\u5176\u4ED6 ")
            ], 2),
            r("div", {
              class: m(["tabs-pop-item", u.value.index === 0 ? "dis" : ""]),
              onClick: t[4] || (t[4] = (l) => E(4))
            }, [
              Le,
              V(" \u5173\u95ED\u5DE6\u4FA7 ")
            ], 2),
            r("div", {
              class: m(["tabs-pop-item", u.value.index === o.value.length - 1 ? "dis" : ""]),
              onClick: t[5] || (t[5] = (l) => E(5))
            }, [
              Me,
              V(" \u5173\u95ED\u53F3\u4FA7 ")
            ], 2)
          ], 4)) : w("", !0)
        ], 512),
        P.value ? (n(), i("div", {
          key: 1,
          class: m(["go-right", T.value ? "is-dis" : ""]),
          onClick: t[6] || (t[6] = (l) => T.value ? null : L())
        }, [
          a.rightIcon && (a.rightIcon.icon || a.rightIcon.type) ? (n(), i(z, { key: 0 }, [
            a.rightIcon.type === "custom" ? (n(), v(p(a.rightIcon.icon), M(c({ key: 0 }, a.rightIcon.attrs)), null, 16)) : a.rightIcon.type === "el" ? (n(), v(s, M(c({ key: 1 }, a.rightIcon.attrs)), {
              default: D(() => [
                (n(), v(p(a.rightIcon.icon)))
              ]),
              _: 1
            }, 16)) : a.rightIcon.type === "iconfont" ? (n(), i("i", c({
              key: 2,
              class: ["icon iconfont", "icon-" + a.rightIcon.icon]
            }, a.rightIcon.attrs), null, 16)) : (n(), i("i", c({
              key: 3,
              class: a.rightIcon.type
            }, a.rightIcon.attrs), x(a.rightIcon.icon), 17))
          ], 64)) : w("", !0)
        ], 2)) : w("", !0)
      ], 2);
    };
  }
}, Ce = [xe], Ne = {
  install(a) {
    Ce.forEach(($) => {
      a.component("vueTabsPlus", $);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ne);
export {
  Ne as default
};
