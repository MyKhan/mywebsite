<template>
  <slot name="statImg"></slot>
  <h3>{{ capitalizedProperty }}: {{ stat.value }}</h3>
</template>

<script>
import { computed } from "vue";

export default {
  name: "CardComponent",
  props: ["stat"],

  setup(props) {
    const capitalize = (word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const remainingLetters = word.substring(1);

      return firstLetter + remainingLetters;
    };

    const capitalizedProperty = computed(() => {
      return capitalize(props.stat.property);
    });

    return { capitalizedProperty };
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
