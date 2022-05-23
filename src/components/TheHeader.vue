<template>
  <header
    class="header"
    :class="{
      header_hide: direction === 'Down',
      header_show: direction === 'Up' && startY > 0,
    }"
  >
    <div class="header__logo">
      <router-link to="/">
        <img src="@/assets/img/svg/logo.svg" alt="img" class="header__logo" />
      </router-link>

      <BaseSwitch class="header__switch" />
    </div>

    <nav class="nav">
      <router-link
        v-for="link in links"
        v-bind:key="link.name"
        class="nav__link"
        :to="link.link"
      >
        {{ link.name }}
      </router-link>
    </nav>

    <div class="header__contacts">
      <a href="tel:+380 67 401 69 77" class="header__phone">
        <span>+380 67 401 69 77</span>
      </a>
      <span class="header__time">24/7</span>
      <img src="@/assets/img/svg/menu.svg" alt="" class="header__menu" />
    </div>
  </header>
</template>

<script>
import BaseSwitch from "@/components/base/BaseSwitch.vue";

export default {
  name: "TheHeader",
  components: {
    BaseSwitch,
  },

  data() {
    return {
      direction: null,
      startY: 0,
      links: [
        {
          name: "После ремонта",
          link: "/catalog",
        },
        {
          name: "Генеральная уборка",
          link: "/catalog",
        },
        {
          name: "Регулярная уборка",
          link: "/catalog",
        },
        {
          name: "Мойка окон",
          link: "/catalog",
        },
      ],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      const scrollY = window.scrollY;

      if (scrollY > this.startY) {
        this.direction = "Down";
      } else {
        this.direction = "Up";
      }

      this.startY = scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  width: calc(100vw - 90px);
  position: fixed;
  padding: 16px 36px 17px 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;

  &_hide {
    transform: translateY(-100%);
  }

  &_show {
    transform: translateY(0);
    background-color: $light;
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__contacts {
    display: flex;
    justify-content: space-between;
    font: 500 16px/19px $fontMedium;
  }

  &__time {
    margin-right: 38px;
  }

  &__phone {
    padding-right: 15px;
    margin-right: 15px;
    color: $black;
    border-right: 1.7px solid $black;
    text-decoration: none;
  }
}

.nav {
  &__link {
    text-decoration: none;
    color: $black;
    letter-spacing: 0.2px;
    font: 500 16px/1.2 $fontMedium;

    @media (any-hover: hover) {
      &:hover {
        color: $purple;
        cursor: pointer;
      }
    }

    &:not(:last-of-type) {
      margin-right: 32px;
    }
  }
}
</style>
