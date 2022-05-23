<template>
  <div class="mainCards" ref="mainCards">
    <BaseCard
      v-for="card in cards"
      :key="card.title"
      :text="card.text"
      :title="card.title"
      :image="card.img"
      class="card"
    />
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BaseCard from "@/components/base/BaseCard.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "MainCards",

  components: {
    BaseCard,
  },

  data() {
    return {
      cards: [
        {
          text: "Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.",
          title: "Тщательно отобранный персонал",
          img: "card01",
        },
        {
          text: "Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.",
          title: "Качественная эко-химия",
          img: "card02",
        },
        {
          text: "Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.",
          title: "Контролируем качество",
          img: "card03",
        },
        {
          text: "Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.",
          title: "Работаем круглосуточно",
          img: "card04",
        },
      ],
    };
  },

  mounted() {
    this.showCards();
  },

  methods: {
    showCards() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.mainCards,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
      const allCards = document.querySelectorAll(".card");

      for (let i = 0; i < allCards.length; i += 1) {
        tl.fromTo(
          allCards[i],
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          }
        );
      }
      return tl;
    },
  },
};
</script>

<style lang="scss" scoped>
.mainCards {
  max-width: 1320px;
  height: 328px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  gap: 40px;
}
</style>
