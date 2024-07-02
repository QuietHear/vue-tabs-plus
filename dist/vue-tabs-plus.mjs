import { resolveComponent as re, openBlock as s, createBlock as w, resolveDynamicComponent as ee, normalizeProps as te, mergeProps as B, withCtx as ue, createElementBlock as p, toDisplayString as q, ref as d, watch as z, nextTick as V, onMounted as de, onBeforeUnmount as ve, normalizeClass as f, unref as o, createCommentVNode as b, createElementVNode as r, Fragment as he, renderList as fe, withModifiers as ae, normalizeStyle as pe, createTextVNode as O, createStaticVNode as J } from "vue";
import { useRoute as me, useRouter as ge } from "vue-router";
const P = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(l) {
    return (N, Y) => {
      const m = re("el-icon");
      return l.iconObj.type === "custom" ? (s(), w(ee(l.iconObj.icon), te(B({ key: 0 }, l.iconObj.attrs)), null, 16)) : l.iconObj.type === "el" ? (s(), w(m, te(B({ key: 1 }, l.iconObj.attrs)), {
        default: ue(() => [
          (s(), w(ee(l.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : l.iconObj.type === "iconfont" ? (s(), p("i", B({
        key: 2,
        class: ["icon iconfont", "icon-" + l.iconObj.icon]
      }, l.iconObj.attrs), null, 16)) : (s(), p("i", B({
        key: 3,
        class: l.iconObj.type
      }, l.iconObj.attrs), q(l.iconObj.icon), 17));
    };
  }
};
const be = ["title", "onClick", "onContextmenu"], we = { class: "text-box" }, ke = ["onClick"], ye = /* @__PURE__ */ J('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g></svg></div>', 1), Le = /* @__PURE__ */ J('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M5 5L12 5L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate></path><path d="M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"></animate></path></g></svg></div>', 1), xe = /* @__PURE__ */ J('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M12 3V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M22 12H15.5M2 12H8.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M15 12L18 15M9 12L6 15M15 12L18 9M9 12L6 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g></svg></div>', 1), Me = /* @__PURE__ */ r("div", { class: "icon" }, [
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
], -1), Ce = /* @__PURE__ */ r("div", { class: "icon" }, [
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
], -1), Ie = {
  __name: "index",
  props: {
    // tab样式类型
    type: {
      type: String,
      default: "button"
    },
    // 标题是否开启国际化
    i18n: {
      type: Boolean,
      default: !1
    },
    // 同一个路由允许存在多页签（fullPath不同）
    multiple: {
      type: Boolean,
      default: !1
    },
    // 向左移动图标
    leftIcon: {
      type: Object,
      default: () => ({
        icon: "＜"
      })
    },
    // 向右移动图标
    rightIcon: {
      type: Object,
      default: () => ({
        icon: "＞"
      })
    },
    // 关闭图标
    closeIcon: {
      type: Object,
      default: () => ({
        icon: "x"
      })
    },
    // 移动到100%需要的步数
    stepPercentage: {
      type: Number,
      default: 10
    }
  },
  emits: ["reloadPage"],
  setup(l, { expose: N, emit: Y }) {
    const m = l, R = me(), L = ge(), le = (e, t) => {
      let a = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
      for (; e && !a.call(e, t); )
        e = e.parentElement;
      return e;
    }, ne = (e, t) => {
      let a = [], h = (j) => {
        j.forEach((I) => {
          oe(I, t) && a.push(I), I.childNodes && I.childNodes.length > 0 && h(I.childNodes);
        });
      };
      return h(e.childNodes), a;
    }, oe = (e, t) => e.classList ? e.classList.contains(t) : new RegExp("\\s" + t + "\\s").test(" " + e.className + " "), k = (e) => {
      let t = e instanceof Array ? [] : {};
      for (let a in e)
        t[a] = typeof e[a] == "object" ? k(e[a]) : e[a];
      return t;
    }, se = (e) => window.btoa(encodeURIComponent(JSON.stringify(e))), ie = (e) => JSON.parse(decodeURIComponent(window.atob(e))), n = d([]);
    z(
      () => n.value.length,
      () => {
        sessionStorage.setItem("_VUETABSARR_", se(n.value));
      }
    ), z(
      R,
      () => {
        K(R);
      }
    );
    const v = d({}), S = d(!1), x = d(!1), W = d(!1), X = d(!1);
    let M = 0, E = 0, $ = 0, D = 0, A = 0;
    const u = d(null), g = () => {
      c.value = !1;
      const e = ne(u.value, "item");
      n.value.forEach((t, a) => {
        a === 0 ? (t.btnMoveX = 0, t.chromeMoveX = 0) : (t.btnMoveX = n.value[a - 1].btnMoveX + e[a].clientWidth + 12, t.chromeMoveX = n.value[a - 1].chromeMoveX + e[a].clientWidth);
      }), $ = u.value.clientWidth - 20, M = 0, E = 0, e.forEach((t, a) => {
        E += t.clientWidth, M += t.clientWidth + 2, a !== 0 && (M += 10);
      }), T();
    }, T = () => {
      S.value = $ < (m.type === "button" ? M : E), D = (m.type === "button" ? M : E) - $, A = D / m.stepPercentage, S.value ? (u.value.scrollLeft = n.value.filter((e) => e.path === v.value.path)[0][m.type === "button" ? "btnMoveX" : "chromeMoveX"], Z(), x.value || u.value.addEventListener("wheel", H), x.value = !0) : (x.value && u.value.removeEventListener("wheel", H), x.value = !1);
    };
    z(
      () => m.type,
      () => T()
    );
    const Z = () => {
      W.value = u.value.scrollLeft === 0, X.value = u.value.scrollLeft === D;
    }, y = (e = !0) => {
      u.value.scrollLeft = u.value.scrollLeft + (e ? A : -A), Z();
    }, H = (e) => {
      c.value = !1, e.wheelDelta ? e.wheelDelta > 0 ? y(!1) : e.wheelDelta < 0 && y() : e.detail && (e.wheelDelta < 0 ? y(!1) : e.wheelDelta > 0 && y());
    }, c = d(!1);
    z(
      c,
      () => {
        c.value ? document.body.addEventListener("click", U) : document.body.removeEventListener("click", U);
      }
    );
    const F = d(0), G = d(0), i = d({
      data: {},
      index: 0
    }), ce = (e, t) => {
      i.value.data = k(e), i.value.index = t, F.value = event.pageX + 120 > document.body.clientWidth ? document.body.clientWidth - 120 : event.pageX, G.value = event.pageY, c.value = !0;
    }, U = () => {
      le(event.target, ".tabs-pop") === null && (c.value = !1);
    }, C = (e) => {
      switch (e) {
        case 1:
          c.value = !1, Y("reloadPage");
          break;
        case 2:
          c.value = !1, Q(i.value.data, i.value.index);
          break;
        case 3:
          n.value = [k(i.value.data)], c.value = !1, n.value.findIndex((t) => t.path === v.value.path) === -1 && L.push(i.value.data.path);
          break;
        case 4:
          n.value = k(n.value.slice(i.value.index)), n.value.findIndex((t) => t.path === v.value.path) === -1 ? (c.value = !1, L.push(i.value.data.path)) : V(() => {
            g();
          });
          break;
        case 5:
          n.value = k(n.value.slice(0, i.value.index + 1)), n.value.findIndex((t) => t.path === v.value.path) === -1 ? (c.value = !1, L.push(i.value.data.path)) : V(() => {
            g();
          });
          break;
      }
    }, K = (e) => {
      const t = {
        label: e.query.diyTitle || e.meta.title,
        supLabel: e.query.tabsSupTit || "",
        name: e.name,
        path: e.fullPath,
        icon: e.meta.icon
      }, a = n.value.findIndex((h) => m.multiple ? h.path === t.path : h.name === t.name);
      a === -1 ? (n.value.push(t), _(t)) : (n.value[a] = { ...t }, _(t, !1));
    }, Q = (e, t) => {
      n.value.splice(t, 1), V(() => {
        e.path === v.value.path ? L.push(n.value[t === n.value.length ? t - 1 : t].path) : g();
      });
    }, _ = (e, t = !0) => {
      v.value = k(e), t ? V(() => {
        g();
      }) : T();
    };
    return sessionStorage.getItem("_VUETABSARR_") && (n.value = ie(sessionStorage.getItem("_VUETABSARR_"))), K(R), de(() => {
      g(), window.addEventListener("resize", g);
    }), ve(() => {
      window.removeEventListener("resize", g), document.body.removeEventListener("click", U), sessionStorage.removeItem("_VUETABSARR_"), x.value && u.value.removeEventListener("wheel", H);
    }), N({ dealSize: g }), (e, t) => (s(), p("div", {
      class: f(["vue-tabs-plus", l.type !== "button" ? "chrome-tab" : ""])
    }, [
      o(S) ? (s(), p("div", {
        key: 0,
        class: f(["go-left", o(W) ? "is-dis" : ""]),
        onClick: t[0] || (t[0] = (a) => o(W) ? null : y(!1))
      }, [
        l.leftIcon && (l.leftIcon.icon || l.leftIcon.type) ? (s(), w(P, {
          key: 0,
          iconObj: l.leftIcon
        }, null, 8, ["iconObj"])) : b("", !0)
      ], 2)) : b("", !0),
      r("div", {
        ref_key: "itemBox",
        ref: u,
        class: "item-box"
      }, [
        (s(!0), p(he, null, fe(o(n), (a, h) => (s(), p("div", {
          class: f(["item", a.path === o(v).path ? "active" : ""]),
          title: (l.i18n ? e.$t(a.label) : a.label) + a.supLabel,
          key: h,
          onClick: (j) => a.path === o(v).path ? null : o(L).push(a.path),
          onContextmenu: ae((j) => ce(a, h), ["prevent"])
        }, [
          a.icon && (a.icon.icon || a.icon.type) ? (s(), w(P, {
            key: 0,
            class: "menu-icon",
            iconObj: a.icon
          }, null, 8, ["iconObj"])) : b("", !0),
          r("div", we, q(l.i18n ? e.$t(a.label) : a.label) + q(a.supLabel), 1),
          o(n).length > 1 ? (s(), p("div", {
            key: 1,
            class: "icon-box",
            onClick: ae((j) => {
              Q(a, h), c.value = !1;
            }, ["stop"])
          }, [
            l.closeIcon && (l.closeIcon.icon || l.closeIcon.type) ? (s(), w(P, {
              key: 0,
              iconObj: l.closeIcon
            }, null, 8, ["iconObj"])) : b("", !0)
          ], 8, ke)) : b("", !0)
        ], 42, be))), 128)),
        o(c) ? (s(), p("div", {
          key: 0,
          class: "tabs-pop",
          style: pe({ left: o(F) + "px", top: o(G) + "px" })
        }, [
          r("div", {
            class: f(["tabs-pop-item", o(i).data.path === o(v).path ? "" : "dis"]),
            onClick: t[1] || (t[1] = (a) => o(i).data.path === o(v).path ? C(1) : null)
          }, [
            ye,
            O(" 重新加载 ")
          ], 2),
          r("div", {
            class: f(["tabs-pop-item", o(n).length === 1 ? "dis" : ""]),
            onClick: t[2] || (t[2] = (a) => C(2))
          }, [
            Le,
            O(" 关闭当前 ")
          ], 2),
          r("div", {
            class: f(["tabs-pop-item", o(n).length === 1 ? "dis" : ""]),
            onClick: t[3] || (t[3] = (a) => C(3))
          }, [
            xe,
            O(" 关闭其他 ")
          ], 2),
          r("div", {
            class: f(["tabs-pop-item", o(i).index === 0 ? "dis" : ""]),
            onClick: t[4] || (t[4] = (a) => C(4))
          }, [
            Me,
            O(" 关闭左侧 ")
          ], 2),
          r("div", {
            class: f(["tabs-pop-item", o(i).index === o(n).length - 1 ? "dis" : ""]),
            onClick: t[5] || (t[5] = (a) => C(5))
          }, [
            Ce,
            O(" 关闭右侧 ")
          ], 2)
        ], 4)) : b("", !0)
      ], 512),
      o(S) ? (s(), p("div", {
        key: 1,
        class: f(["go-right", o(X) ? "is-dis" : ""]),
        onClick: t[6] || (t[6] = (a) => o(X) ? null : y())
      }, [
        l.rightIcon && (l.rightIcon.icon || l.rightIcon.type) ? (s(), w(P, {
          key: 0,
          iconObj: l.rightIcon
        }, null, 8, ["iconObj"])) : b("", !0)
      ], 2)) : b("", !0)
    ], 2));
  }
}, Oe = [Ie], Ne = {
  install(l) {
    Oe.forEach((N) => {
      l.component("vueTabsPlus", N);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ne);
export {
  Ne as default
};
