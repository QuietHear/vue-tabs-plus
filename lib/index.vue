/*
 * @Author: aFei
 * @Date: 2023-02-09 16:27:24
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-02-20 15:04:07
*/
<template>
  <div :class="['vue-tabs-plus', type !== 'button' ? 'chrome-tab' : '']">
    <div :class="['go-left', goLeftDis ? 'is-dis' : '']" @click="goLeftDis ? null : moveStep(false)" v-if="needPager">
      <template v-if="leftIcon && (leftIcon.icon || leftIcon.type)">
        <component :is="leftIcon.icon" v-bind="leftIcon.attrs" v-if="leftIcon.type === 'custom'" />
        <el-icon v-bind="leftIcon.attrs" v-else-if="leftIcon.type === 'el'">
          <component :is="leftIcon.icon" />
        </el-icon>
        <i :class="['icon iconfont', 'icon-' + leftIcon.icon]" v-bind="leftIcon.attrs"
          v-else-if="leftIcon.type === 'iconfont'" />
        <i :class="leftIcon.type" v-bind="leftIcon.attrs" v-else>{{ leftIcon.icon }}</i>
      </template>
    </div>
    <div ref="itemBox" class="item-box">
      <div :class="['item', item.path === activeMenu.path ? 'active' : '']"
        :title="(i18n ? $t(item.label) : item.label) + item.supLabel" v-for="(item, index) in dataList" :key="index"
        @click="item.path === activeMenu.path ? null : router.push(item.path)"
        @contextmenu.prevent="showPop(item, index)">
        <template v-if="item.icon && (item.icon.icon || item.icon.type)">
          <component class="menu-icon" :is="item.icon.icon" v-bind="item.icon.attrs"
            v-if="item.icon.type === 'custom'" />
          <el-icon class="menu-icon" v-bind="item.icon.attrs" v-else-if="item.icon.type === 'el'">
            <component :is="item.icon.icon" />
          </el-icon>
          <i :class="['menu-icon icon iconfont', 'icon-' + item.icon.icon]" v-bind="item.icon.attrs"
            v-else-if="item.icon.type === 'iconfont'" />
          <i :class="['menu-icon', item.icon.type]" v-bind="item.icon.attrs" v-else>{{ item.icon.icon }}</i>
        </template>
        <div class="text-box">
          {{ i18n? $t(item.label) : item.label }}{{ item.supLabel }}
        </div>
        <!-- ????????????tab -->
        <div class="icon-box" @click.stop="deleteListOne(item, index)" v-if="dataList.length > 1">
          <template v-if="closeIcon && (closeIcon.icon || closeIcon.type)">
            <component :is="closeIcon.icon" v-bind="closeIcon.attrs" v-if="closeIcon.type === 'custom'" />
            <el-icon v-bind="closeIcon.attrs" v-else-if="closeIcon.type === 'el'">
              <component :is="closeIcon.icon" />
            </el-icon>
            <i :class="['icon iconfont', 'icon-' + closeIcon.icon]" v-bind="closeIcon.attrs"
              v-else-if="closeIcon.type === 'iconfont'" />
            <i :class="closeIcon.type" v-bind="closeIcon.attrs" v-else>{{ closeIcon.icon }}</i>
          </template>
        </div>
      </div>
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
          ????????????
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
          ????????????
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
          ????????????
        </div>
        <div :class="['tabs-pop-item', popMsg.index === 0 ? 'dis' : '']" @click="popThing(4)">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M11.92 19.92L4 12l7.92-7.92l1.41 1.42l-5.5 5.5H22v2H7.83l5.51 5.5l-1.42 1.42M4 12V2H2v20h2V12Z" />
            </svg>
          </div>
          ????????????
        </div>
        <div :class="['tabs-pop-item', popMsg.index === (dataList.length - 1) ? 'dis' : '']" @click="popThing(5)">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12.08 4.08L20 12l-7.92 7.92l-1.41-1.42l5.5-5.5H2v-2h14.17l-5.5-5.5l1.41-1.42M20 12v10h2V2h-2v10Z" />
            </svg>
          </div>
          ????????????
        </div>
      </div>
    </div>
    <div :class="['go-right', goRightDis ? 'is-dis' : '']" @click="goRightDis ? null : moveStep()" v-if="needPager">
      <template v-if="rightIcon && (rightIcon.icon || rightIcon.type)">
        <component :is="rightIcon.icon" v-bind="rightIcon.attrs" v-if="rightIcon.type === 'custom'" />
        <el-icon v-bind="rightIcon.attrs" v-else-if="rightIcon.type === 'el'">
          <component :is="rightIcon.icon" />
        </el-icon>
        <i :class="['icon iconfont', 'icon-' + rightIcon.icon]" v-bind="rightIcon.attrs"
          v-else-if="rightIcon.type === 'iconfont'" />
        <i :class="rightIcon.type" v-bind="rightIcon.attrs" v-else>{{ rightIcon.icon }}</i>
      </template>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['reloadPage']);
const props = defineProps({
  // tab????????????
  type: {
    type: String,
    default: "button",
  },
  // ???????????????????????????
  i18n: {
    type: Boolean,
    default: false,
  },
  // ???????????????????????????????????????fullPath?????????
  multiple: {
    type: Boolean,
    default: false,
  },
  // ??????????????????
  leftIcon: {
    type: Object,
    default: () => {
      return {
        icon: "???"
      };
    },
  },
  // ??????????????????
  rightIcon: {
    type: Object,
    default: () => {
      return {
        icon: "???"
      };
    },
  },
  // ????????????
  closeIcon: {
    type: Object,
    default: () => {
      return {
        icon: "x"
      };
    },
  },
  // ?????????100%???????????????
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
// ?????????????????????
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
// ??????????????????
const activeMenu = ref({});
// ????????????????????????
const needPager = ref(false);
// ?????????????????????
const isAddWheel = ref(false);
// ???????????????
const goLeftDis = ref(false);
// ???????????????
const goRightDis = ref(false);
// ?????????????????????
let btnNowWidth = 0;
// ??????chrome?????????
let chromeNowWidth = 0;
// ??????????????????
let maxWidth = 0;
// ???????????????
let maxX = 0;
// ????????????
let step = 0;
// ????????????ref
const itemBox = ref(null);
// ????????????
const dealSize = () => {
  pop.value = false;
  const domList = findByClass(itemBox.value, 'item');
  // ??????????????????????????????
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
  // ??????padding
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
// ????????????
const dealSetting = () => {
  // ??????tab???????????????????????????
  needPager.value = maxWidth < (props.type === 'button' ? btnNowWidth : chromeNowWidth);
  console.log(needPager.value, 'needPager');
  maxX = (props.type === 'button' ? btnNowWidth : chromeNowWidth) - maxWidth;
  console.log(maxX, 'maxX');
  step = maxX / props.stepPercentage;
  console.log(step, 'step');
  // ????????????????????????
  if (needPager.value) {
    // ???????????????????????????
    itemBox.value.scrollLeft = dataList.value.filter(item => item.path === activeMenu.value.path)[0][props.type === 'button' ? 'btnMoveX' : 'chromeMoveX'];
    checkPagerDis();
    // ??????
    if (!isAddWheel.value) {
      itemBox.value.addEventListener("wheel", wheelChange);
    }
    isAddWheel.value = true;
  }
  // ????????????????????????
  else {
    // ??????
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
// ????????????????????????
const checkPagerDis = () => {
  goLeftDis.value = itemBox.value.scrollLeft === 0;
  goRightDis.value = itemBox.value.scrollLeft === maxX;
};
// ????????????????????????
const moveStep = (goRight = true) => {
  itemBox.value.scrollLeft = itemBox.value.scrollLeft + (goRight ? step : -step);
  checkPagerDis();
};
// ???????????????
const wheelChange = (e) => {
  pop.value = false;
  // ie,chrome????????????
  if (e.wheelDelta) {
    if (e.wheelDelta > 0) {
      moveStep(false);
    }
    else if (e.wheelDelta < 0) {
      moveStep();
    }
  }
  // ??????
  else if (e.detail) {
    if (e.wheelDelta < 0) {
      moveStep(false);
    }
    else if (e.wheelDelta > 0) {
      moveStep();
    }
  }
};
// ??????
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
// ??????x
const popX = ref(0);
// ??????y
const popY = ref(0);
// ??????????????????
const popMsg = ref({
  data: {},
  index: 0
});
// ????????????
const showPop = (obj, index) => {
  popMsg.value.data = deepCopy(obj);
  popMsg.value.index = index;
  popX.value = (event.pageX + 120) > document.body.clientWidth ? (document.body.clientWidth - 120) : event.pageX;
  popY.value = event.pageY;
  pop.value = true;
};
// ????????????
const hidePop = () => {
  if (closest(event.target, ".tabs-pop") === null) {
    pop.value = false;
  }
};
// ????????????
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
// ??????????????????
const addListOne = (routeObj) => {
  const lin = {
    label: routeObj.meta.title,
    supLabel: routeObj.query.tabsSupTit || '',
    name: routeObj.name,
    path: routeObj.fullPath,
    icon: routeObj.meta.icon,
  };
  if (dataList.value.findIndex(item => {
    return props.multiple ? item.path === lin.path : item.name === lin.name;
  }) === -1) {
    dataList.value.push(lin);
    changeActive(lin);
  } else {
    changeActive(lin, false);
  }
};
// ??????????????????
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
// ????????????
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