import { defineComponent, resolveComponent, openBlock, createBlock, unref, createElementBlock, createElementVNode } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    collapse: { type: Boolean }
  },
  setup(__props) {
    let data = [
      {
        icon: "HomeFilled",
        name: "\u9996\u9875",
        index: "/"
      },
      {
        icon: "Check",
        name: "\u56FE\u6807\u9009\u62E9\u5668",
        index: "/chooseIcon"
      },
      {
        icon: "Location",
        name: "\u7701\u5E02\u533A\u9009\u62E9",
        index: "/chooseArea"
      },
      {
        icon: "Sort",
        name: "\u8D8B\u52BF\u6807\u8BB0",
        index: "/trend"
      },
      {
        icon: "Timer",
        name: "\u65F6\u95F4\u9009\u62E9",
        index: "/chooseTime"
      },
      {
        icon: "Bell",
        name: "\u901A\u77E5\u83DC\u5355",
        index: "/notification"
      },
      {
        icon: "Menu",
        name: "\u5BFC\u822A\u83DC\u5355",
        index: "/menu"
      },
      {
        icon: "TurnOff",
        name: "\u57CE\u5E02\u9009\u62E9",
        index: "/chooseCity"
      },
      {
        icon: "DArrowRight",
        name: "\u8FDB\u5EA6\u6761",
        index: "/progress"
      },
      {
        icon: "ScaleToOriginal",
        name: "\u65E5\u5386",
        index: "/calendar"
      },
      {
        icon: "Setting",
        name: "\u8868\u5355",
        index: "/form"
      },
      {
        icon: "Setting",
        name: "\u5F39\u51FA\u6846\u8868\u5355",
        index: "/modalForm"
      },
      {
        icon: "ShoppingBag",
        name: "\u8868\u683C",
        index: "/table"
      }
    ];
    return (_ctx, _cache) => {
      const _component_l_menu = resolveComponent("l-menu");
      return openBlock(), createBlock(_component_l_menu, {
        collapse: __props.collapse,
        data: unref(data),
        router: "",
        defaultActive: _ctx.$route.path
      }, null, 8, ["collapse", "data", "defaultActive"]);
    };
  }
});
var navSide = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3329ec29"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "header" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    collapse: { type: Boolean }
  },
  emits: ["update:collapse"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let toggle = () => {
      emits("update:collapse", !props.collapse);
    };
    return (_ctx, _cache) => {
      const _component_el_icon_expand = resolveComponent("el-icon-expand");
      const _component_el_icon_fold = resolveComponent("el-icon-fold");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("span", {
          onClick: _cache[0] || (_cache[0] = (...args) => unref(toggle) && unref(toggle)(...args))
        }, [
          __props.collapse ? (openBlock(), createBlock(_component_el_icon_expand, { key: 0 })) : (openBlock(), createBlock(_component_el_icon_fold, { key: 1 }))
        ])
      ]);
    };
  }
});
var navHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ad6c08f"]]);
var index = {
  install(app) {
    app.component("l-nav-side", navSide);
    app.component("l-nav-header", navHeader);
  }
};
export { index as default };
