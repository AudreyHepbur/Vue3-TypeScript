<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <h1 @click="selectGirlFun">双燕离</h1>
      <h2 v-for="(item, index) in selectGirl" :key="index">{{ item }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  /**
   * 调试使用的钩子函数
   */
  onRenderTracked, //  状态跟踪
  onRenderTriggered, //  状态触发
} from "vue";
export default {
  name: "Home",
  setup() {
    /**
     * 定义接口
     */
    interface DataProps {
      girls: string[];
      selectGirl: string[];
      indexes: number;
      selectGirlFun: (index: number) => void;
    }
    /**
     * data添加类型注解
     */
    const data: DataProps = reactive({
      girls: [
        "双燕复双燕，双飞令人羡",
        "玉楼珠阁不独栖，金窗绣户长相见。",
        "柏梁失火去，因入吴王宫。",
        "吴宫又焚荡，雏尽巢亦空。",
        "憔悴一身在，孀雌忆故雄。",
        "双飞难再得，伤我寸心中。",
      ],
      selectGirl: [],
      indexes: 0,
      selectGirlFun: () => {
        if (data.indexes > data.girls.length) return
        const number = ++data.indexes;
        console.log(number);
        data.selectGirl.push(data.girls[number]);
      },
    });
    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });
    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()");
    });
    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()");
    });
    /**
     * 只要页面有update的情况，就会跟踪生成一个event对象
     */
    onRenderTracked((event) => {
      console.log("状态跟踪组件----------->");
      console.log(event);
    });
    /**
     * 它不会跟踪每一个值，而是给你变化值的信息，并且新值和旧值都会给你明确的展示出来
     */
    onRenderTriggered((event) => {
      console.log("状态触发组件--------------->");
      console.log(event);
    });
    /**
     * 运用toRefs()函数，便可使用扩展运算符，模板可去掉data
     */
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
