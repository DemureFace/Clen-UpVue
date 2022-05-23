<template>
  <section class="mainBaner">
    <img
      src="@/assets/img/png/mainBaner.png"
      alt="baner"
      class="mainBaner__img"
    />

    <div class="mainBaner__info">
      <h1 class="mainBaner__title">
        Уборка квартир <br />
        в Киеве
      </h1>
      <p class="mainBaner__text">
        Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и
        проведем генеральную уборку.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainBaner",
};
</script>

<style lang="scss" scoped>
.mainBaner {
  width: 100%;
  height: 100vh;
  padding-bottom: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__img {
    max-width: 50%;
    aspect-ratio: 16/9;
  }

  &__info {
    max-width: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $black;
  }
  &__title {
    max-width: 401px;
    font: 400 76px/110% $fontRegular;
  }
  &__text {
    max-width: 397px;
    font: 400 18px/140% $fontRegular;
  }
}
</style>
