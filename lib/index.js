/*
 * @Author: aFei
 * @Date: 2022-07-27 14:00:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-02-17 17:24:09
*/
import vueTabsPlus from "./index.vue";
const arr = [vueTabsPlus];
const comment = {
  install(Vue) {
    arr.forEach(item => {
      Vue.component('vueTabsPlus', item);
    })
  },
};
// 注入script方式vue中
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出为全量
export default comment;