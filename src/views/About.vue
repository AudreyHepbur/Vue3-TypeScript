<template>
  <div><button @click="overAction">点餐完毕</button></div>
  <div>{{ overText }}</div>
</template>
<script lang="ts">
import { ref, toRefs, reactive, watch } from "vue";
export default {
  name: "About",
  setup() {
    const overText = ref("迪奥娜");
    const overAction = () => {
      overText.value = overText.value + "点餐完成 |";
      // document.title = overText.value;
    };

    watch(overText, (newV, oldV) => {
      console.log(`new--->${newV}`);
      console.log(`old--->${oldV}`);
      document.title = newV;
    });

    return {
      overText,
      overAction,
    };
  },
};
</script>
<style lang="scss" scoped></style>
