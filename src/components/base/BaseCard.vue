<template>
  <div class="card">
    <p class="card__text">{{ text }}</p>
    <h5 class="card__title">{{ title }}</h5>
    <img :src="imageSrc" alt="cardImg" class="card__img" />
  </div>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    text: {
      type: String,
      default: "Card Text",
    },
    title: {
      type: String,
      default: "Card Title",
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return `${require(`@/assets/img/png/${this.image}.png`)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 100%;
  width: 300px;
  padding: 20px 40px 0px;
  background-color: $lightGrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media (hover: hover) {
    &:hover {
      background-color: $purple;

      .card__title {
        opacity: 0;
      }

      .card__img {
        opacity: 0;
      }
      .card__text {
        opacity: 1;
      }
    }
  }

  &__text {
    color: $light;
    opacity: 0;
    position: absolute;
    font: 400 16px/22.4px $fontLight;
    padding: 10px 30px;
    transition: opacity 0.4s ease 0.1;
  }

  &__img {
    max-width: 211px;
    transition: opacity 0.4s ease;
  }
  &__title {
    font: 500 24px/130% $fontMedium;
    text-align: center;
    color: $black;
    transition: opacity 0.4s ease;
  }
}
</style>
