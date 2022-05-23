<template>
  <TheHeader />

  <main>
    <router-view />
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  name: "LayoutDefault",
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
