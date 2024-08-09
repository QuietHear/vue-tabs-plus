/*
* @Author: aFei
* @Date: 2023-02-09 16:27:24
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2024-08-09 11:03:51
*/
<template>
  <div :class="['vue-tabs-plus', type !== 'button' ? 'chrome-tab' : '']">
    <div :class="['go-left', goLeftDis ? 'is-dis' : '']" @click="goLeftDis ? null : moveStep(false)" v-if="needPager">
      <Icon :iconObj="leftIcon" v-if="leftIcon && (leftIcon.icon || leftIcon.type)" />
    </div>
    <div ref="itemBox" class="item-box">
      <div :class="['item', item.path === activeMenu.path ? 'active' : '']"
        :title="(i18n ? $t(item.label) : item.label) + item.supLabel" v-for="(item, index) in dataList" :key="index"
        @click="item.path === activeMenu.path ? null : router.push(item.path)"
        @contextmenu.prevent="showPop(item, index)">
        <Icon class="menu-icon" :iconObj="item.icon" v-if="item.icon && (item.icon.icon || item.icon.type)" />
        <div class="text-box">
          {{ i18n ? $t(item.label) : item.label }}{{ item.supLabel }}
        </div>
        <!-- 关闭当前tab -->
        <div class="icon-box" @click.stop="deleteListOne(item, index); pop = false;" v-if="dataList.length > 1">
          <Icon :iconObj="closeIcon" v-if="closeIcon && (closeIcon.icon || closeIcon.type)" />
        </div>
      </div>
      <!-- 右键菜单 -->
      <div class="tabs-pop" :style="{ left: popX + 'px', top: popY + 'px' }" v-if="pop">
        <div :class="['tabs-pop-item', popMsg.data.path === activeMenu.path ? '' : 'dis']"
          @click="popMsg.data.path === activeMenu.path ? popThing(1) : null">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                <path stroke-dasharray="32" stroke-dashoffset="32"
                  d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0" />
                </path>
                <path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0" />
                </path>
              </g>
            </svg>
          </div>
          重新加载
        </div>
        <div :class="['tabs-pop-item', dataList.length === 1 ? 'dis' : '']" @click="popThing(2)">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                <path d="M5 5L12 5L19 5">
                  <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5" />
                </path>
                <path d="M5 12H19">
                  <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12" />
                </path>
                <path d="M5 19L12 19L19 19">
                  <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19" />
                </path>
              </g>
            </svg>
          </div>
          关闭当前
        </div>
        <div :class="['tabs-pop-item', dataList.length === 1 ? 'dis' : '']" @click="popThing(3)">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke-dasharray="20" stroke-dashoffset="20" d="M12 3V21">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
                </path>
                <path stroke-dasharray="8" stroke-dashoffset="8" d="M22 12H15.5M2 12H8.5">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0" />
                </path>
                <path stroke-dasharray="6" stroke-dashoffset="6" d="M15 12L18 15M9 12L6 15M15 12L18 9M9 12L6 9">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0" />
                </path>
              </g>
            </svg>
          </div>
          关闭其他
        </div>
        <div :class="['tabs-pop-item', popMsg.index === 0 ? 'dis' : '']" @click="popThing(4)">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M11.92 19.92L4 12l7.92-7.92l1.41 1.42l-5.5 5.5H22v2H7.83l5.51 5.5l-1.42 1.42M4 12V2H2v20h2V12Z" />
            </svg>
          </div>
          关闭左侧
        </div>
        <div :class="['tabs-pop-item', popMsg.index === (dataList.length - 1) ? 'dis' : '']" @click="popThing(5)">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12.08 4.08L20 12l-7.92 7.92l-1.41-1.42l5.5-5.5H2v-2h14.17l-5.5-5.5l1.41-1.42M20 12v10h2V2h-2v10Z" />
            </svg>
          </div>
          关闭右侧
        </div>
      </div>
    </div>
    <div :class="['go-right', goRightDis ? 'is-dis' : '']" @click="goRightDis ? null : moveStep()" v-if="needPager">
      <Icon :iconObj="rightIcon" v-if="rightIcon && (rightIcon.icon || rightIcon.type)" />
    </div>
  </div>
</template>
<script setup>
import Icon from "./components/icon.vue";
const emit = defineEmits(['reloadPage']);
const props = defineProps({
  // tab样式类型
  type: {
    type: String,
    default: "button",
    validator(value, props) {
      return ['button', 'chrome'].includes(value);
    }
  },
  // 标题是否开启国际化
  i18n: {
    type: Boolean,
    default: false,
  },
  // 同一个路由允许存在多页签（fullPath不同）
  multiple: {
    type: Boolean,
    default: false,
  },
  // 向左移动图标
  leftIcon: {
    type: Object,
    default: () => {
      return {
        icon: "＜"
      };
    },
  },
  // 向右移动图标
  rightIcon: {
    type: Object,
    default: () => {
      return {
        icon: "＞"
      };
    },
  },
  // 关闭图标
  closeIcon: {
    type: Object,
    default: () => {
      return {
        icon: "x"
      };
    },
  },
  // 移动到100%需要的步数
  stepPercentage: {
    type: Number,
    default: 10,
  }
});
const route = useRoute();
const router = useRouter();
const closest = (ele, selector) => {
  let matchesSelector = ele.matches || ele.webkitMatchesSelector || ele.mozMatchesSelector || ele.msMatchesSelector;
  while (ele) {
    if (matchesSelector.call(ele, selector)) {
      break;
    }
    ele = ele.parentElement;
  }
  return ele;
};
const findByClass = (ele, className) => {
  let result = [];
  let depth = (arr) => {
    arr.forEach((item) => {
      if (hasClass(item, className)) {
        result.push(item);
      }
      if (item.childNodes && item.childNodes.length > 0) {
        depth(item.childNodes);
      }
    })
  }
  depth(ele.childNodes);
  return result;
};
const hasClass = (ele, className) => {
  return ele.classList ? ele.classList.contains(className) : new RegExp('\\s' + className + '\\s').test(' ' + ele.className + ' ');
};
const deepCopy = (obj) => {
  let result = obj instanceof Array ? [] : {};
  for (let key in obj) {
    result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  }
  return result;
};
const encData = (data) => {
  return window.btoa(encodeURIComponent(JSON.stringify(data)));
};
const decData = (data) => {
  return JSON.parse(decodeURIComponent(window.atob(data)));
};
// 已被记录的菜单
const dataList = ref([]);
watch(
  () => dataList.value.length,
  () => {
    sessionStorage.setItem('_VUETABSARR_', encData(dataList.value));
  }
)
watch(
  route,
  () => {
    console.log(route, 'route');
    addListOne(route);
  }
);
// 当前激活菜单
const activeMenu = ref({});
// 展示左右滑动按钮
const needPager = ref(false);
// 已添加滚动监听
const isAddWheel = ref(false);
// 左按钮禁用
const goLeftDis = ref(false);
// 右按钮禁用
const goRightDis = ref(false);
// 当前按钮组尺寸
let btnNowWidth = 0;
// 当前chrome组尺寸
let chromeNowWidth = 0;
// 最大容器尺寸
let maxWidth = 0;
// 可移动距离
let maxX = 0;
// 移动距离
let step = 0;
// 内容区域ref
const itemBox = ref(null);
// 处理尺寸
const dealSize = () => {
  pop.value = false;
  const domList = findByClass(itemBox.value, 'item');
  // 点击元素移动距离计算
  dataList.value.forEach((item, index) => {
    if (index === 0) {
      item.btnMoveX = 0;
      item.chromeMoveX = 0;
    }
    else {
      item.btnMoveX = dataList.value[index - 1].btnMoveX + domList[index].clientWidth + 12;
      item.chromeMoveX = dataList.value[index - 1].chromeMoveX + domList[index].clientWidth;
    }
  });
  console.log(dataList.value, 'dataList');
  // 减掉padding
  maxWidth = itemBox.value.clientWidth - 20;
  btnNowWidth = 0;
  chromeNowWidth = 0;
  domList.forEach((item, index) => {
    chromeNowWidth += item.clientWidth;
    btnNowWidth += (item.clientWidth + 2);
    if (index !== 0) {
      btnNowWidth += 10;
    }
  });
  console.log(maxWidth, btnNowWidth, chromeNowWidth);
  dealSetting();
};
// 处理配置
const dealSetting = () => {
  // 切换tab时重新计算当前滚动
  needPager.value = maxWidth < (props.type === 'button' ? btnNowWidth : chromeNowWidth);
  console.log(needPager.value, 'needPager');
  maxX = (props.type === 'button' ? btnNowWidth : chromeNowWidth) - maxWidth;
  console.log(maxX, 'maxX');
  step = maxX / props.stepPercentage;
  console.log(step, 'step');
  // 处理显示翻页后续
  if (needPager.value) {
    // 保持选中的一直显示
    itemBox.value.scrollLeft = dataList.value.filter(item => item.path === activeMenu.value.path)[0][props.type === 'button' ? 'btnMoveX' : 'chromeMoveX'];
    checkPagerDis();
    // 监听
    if (!isAddWheel.value) {
      itemBox.value.addEventListener("wheel", wheelChange);
    }
    isAddWheel.value = true;
  }
  // 处理隐藏翻页后续
  else {
    // 监听
    if (isAddWheel.value) {
      itemBox.value.removeEventListener("wheel", wheelChange);
    }
    isAddWheel.value = false;
  }
};
watch(
  () => props.type,
  () => dealSetting()
);
// 检测翻页是否禁用
const checkPagerDis = () => {
  goLeftDis.value = itemBox.value.scrollLeft === 0;
  goRightDis.value = itemBox.value.scrollLeft === maxX;
};
// 元素横向移动事件
const moveStep = (goRight = true) => {
  itemBox.value.scrollLeft = itemBox.value.scrollLeft + (goRight ? step : -step);
  checkPagerDis();
};
// 鼠标滚动时
const wheelChange = (e) => {
  pop.value = false;
  // ie,chrome等非火狐
  if (e.wheelDelta) {
    if (e.wheelDelta > 0) {
      moveStep(false);
    }
    else if (e.wheelDelta < 0) {
      moveStep();
    }
  }
  // 火狐
  else if (e.detail) {
    if (e.wheelDelta < 0) {
      moveStep(false);
    }
    else if (e.wheelDelta > 0) {
      moveStep();
    }
  }
};
// 弹窗
const pop = ref(false);
watch(
  pop,
  () => {
    if (pop.value) {
      document.body.addEventListener("click", hidePop);
    }
    else {
      document.body.removeEventListener("click", hidePop);
    }
  }
);
// 弹窗x
const popX = ref(0);
// 弹窗y
const popY = ref(0);
// 打开浮窗数据
const popMsg = ref({
  data: {},
  index: 0
});
// 展示浮窗
const showPop = (obj, index) => {
  popMsg.value.data = deepCopy(obj);
  popMsg.value.index = index;
  popX.value = (event.pageX + 120) > document.body.clientWidth ? (document.body.clientWidth - 120) : event.pageX;
  popY.value = event.pageY;
  pop.value = true;
};
// 隐藏浮窗
const hidePop = () => {
  if (closest(event.target, ".tabs-pop") === null) {
    pop.value = false;
  }
};
// 点击事件
const popThing = (type) => {
  switch (type) {
    case 1:
      pop.value = false;
      emit('reloadPage');
      break;
    case 2:
      pop.value = false;
      deleteListOne(popMsg.value.data, popMsg.value.index);
      break;
    case 3:
      dataList.value = [deepCopy(popMsg.value.data)];
      pop.value = false;
      if (dataList.value.findIndex(item => item.path === activeMenu.value.path) === -1) {
        router.push(popMsg.value.data.path);
      }
      break;
    case 4:
      dataList.value = deepCopy(dataList.value.slice(popMsg.value.index));
      if (dataList.value.findIndex(item => item.path === activeMenu.value.path) === -1) {
        pop.value = false;
        router.push(popMsg.value.data.path);
      }
      else {
        nextTick(() => {
          dealSize();
        });
      }
      break;
    case 5:
      dataList.value = deepCopy(dataList.value.slice(0, popMsg.value.index + 1));
      if (dataList.value.findIndex(item => item.path === activeMenu.value.path) === -1) {
        pop.value = false;
        router.push(popMsg.value.data.path);
      }
      else {
        nextTick(() => {
          dealSize();
        });
      }
      break;
  }
};
// 添加一条数据
const addListOne = (routeObj) => {
  const lin = {
    label: routeObj.query.diyTitle || routeObj.meta.title,
    supLabel: routeObj.query.tabsSupTit || '',
    name: routeObj.name,
    path: routeObj.fullPath,
    icon: routeObj.meta.icon,
  };
  console.log(lin, 'lin');
  const index = dataList.value.findIndex(item => {
    return props.multiple ? item.path === lin.path : item.name === lin.name;
  });
  if (index === -1) {
    dataList.value.push(lin);
    changeActive(lin);
  } else {
    // 实时更新数据
    dataList.value[index] = { ...lin };
    changeActive(lin, false);
  }
};
// 删除一条数据
const deleteListOne = (obj, index) => {
  dataList.value.splice(index, 1);
  nextTick(() => {
    if (obj.path === activeMenu.value.path) {
      router.push(dataList.value[index === dataList.value.length ? index - 1 : index].path);
    }
    else {
      dealSize();
    }
  });
};
// 切换选中
const changeActive = (obj, changeLength = true) => {
  activeMenu.value = deepCopy(obj);
  if (changeLength) {
    nextTick(() => {
      dealSize();
    });
  }
  else {
    dealSetting();
  }
};
if (sessionStorage.getItem('_VUETABSARR_')) {
  dataList.value = decData(sessionStorage.getItem('_VUETABSARR_'));
}
console.log(route, 'route start');
addListOne(route);
onMounted(() => {
  dealSize();
  window.addEventListener("resize", dealSize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", dealSize);
  document.body.removeEventListener("click", hidePop);
  sessionStorage.removeItem('_VUETABSARR_');
  if (isAddWheel.value) {
    itemBox.value.removeEventListener("wheel", wheelChange);
  }
});
defineExpose({ dealSize });
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>