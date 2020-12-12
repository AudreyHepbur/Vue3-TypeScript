<template>
  <div>
    <h2 @click="data.overAction">{{ data.overText }}</h2>
  </div>
  <h3 v-for="(item, index) in data.list" :key="index">{{ item }}</h3>
</template>
<script lang="ts">
import { ref, toRefs, reactive, watch } from "vue";
export default {
  name: "About",
  setup() {
    interface DataTy {
      overText: string;
      list: string;
      overAction: () => void;
    }
    const container = ref(null);
    const data: DataTy = reactive({
      overText: "临江仙·送钱穆父",
      list: "",
      overAction: () => {
        data.list =
          "一别都门三改火，天涯踏尽红尘。依然一笑作春温。无波真古井，有节是秋筠。惆怅孤帆连夜发，送行淡月微云。尊前不用翠眉颦。人生如逆旅，我亦是行人。";
      },
    });
    watch(data, (newV, oldV) => {
      console.log(`new--->${newV}`);
      console.log(`old--->${oldV}`);
      document.title = newV.overText;
    });
    return {
      data,
    };
  },
};
</script>
<style lang="scss" scoped></style>
