<template>
  <section class="footerBaner">
    <div class="footerBaner__textConteiner">
      <h2 class="footerBaner__title">Как мы убираем</h2>
      <p class="footerBaner__text">
        Клинер приезжает в назначенное время со всем необходимым и сразу
        приступает к делу. Вам остаётся только оценить результат.
      </p>
    </div>
    <img
      ref="img"
      src="@/assets/img/png/footerBaner.png"
      alt="FooterBaner"
      class="footerBaner__img"
    />
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "FooterBaner",

  mounted() {
    this.animateBaner();
  },

  methods: {
    animateBaner() {
      const tl = gsap.timeline();
      const imgPos = (window.innerWidth / 100) * 15;
      // const imgLeft = this.$refs.img.getBoundingClientRect().left;

      tl.to(".footerBaner__img", {
        scrollTrigger: {
          trigger: ".footerBaner__img",
          start: "top center",
          scrub: true,
          toggleActions: "play none none reverse",
          onUpdate: (self) => this.emitFinished(self),
        },
        width: "74vw",
        height: "100vh",
        x: imgPos,
        y: window.innerHeight + 150,
        duration: 1,
      });

      return tl;
    },
    emitFinished(self) {
      if (self.direction === 1 && self.progress === 1) {
        this.emitter.emit("finished", {
          finished: true,
        });
      } else if (self.direction === -1 && self.progress < 1) {
        this.emitter.emit("finished", {
          finished: false,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footerBaner {
  max-width: 1094px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &__title {
    font: 400 44px/52.8px $fontLight;
  }
  &__textConteiner {
    display: flex;
    max-width: 1094px;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 52px;
    justify-content: space-between;
  }
  &__text {
    max-width: 414px;
    font: 400 18px/25.2px $fontLight;
  }
  &__img {
    aspect-ratio: 16/9;
    width: 1094px;
  }
}
</style>
