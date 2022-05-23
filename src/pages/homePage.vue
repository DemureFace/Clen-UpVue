<template>
  <MainBaner />
  <MainCards />
  <FooterBaner />
  <MainSlider />
</template>

<script>
import MainBaner from "@/components/main/MainBaner.vue";
import MainCards from "@/components/main/MainCards.vue";
import FooterBaner from "@/components/main/FooterBaner.vue";
import MainSlider from "@/components/main/MainSlider.vue";
export default {
  name: "HomePage",

  components: {
    MainBaner,
    MainCards,
    FooterBaner,
    MainSlider,
  },
};
</script>

<style lang="scss" scoped></style>
