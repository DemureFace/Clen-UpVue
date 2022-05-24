<template>
  <section class="mainSlider">
    <div class="mainSlider__menu" ref="menu">
      <p class="mainSlider__text">Как мы убираем</p>
      <ul class="mainSlider__list">
        <li
          v-for="slide in slider"
          :key="slide.name"
          @click="selectItem(slide.id)"
          :class="[
            'mainSlider__item',
            { mainSlider__item_active: active === slide.id },
          ]"
        >
          <!-- <transition name="show-from-left" mode="out-in"> -->
          <img
            src="@/assets/img/svg/arrow-right.svg"
            alt="arrow"
            class="mainSlider__menuArrow"
          />
          <!-- </transition> -->
          <span>{{ slide.name }}</span>
        </li>
      </ul>
    </div>

    <div class="mainSlider__imgWrap">
      <template v-for="item in slider" :key="item.image">
        <img
          :src="`${require(`@/assets/img/png/bgSlider/${item.image}.png`)}`"
          alt="bg"
          :class="[
            'mainSlider__image',
            { mainSlider__image_active: active === item.id },
          ]"
        />
        <button
          v-tippy="{
            content: pin.text,
            arrow: true,
            theme: 'light',
            animateFill: true,
          }"
          v-for="pin in findPins()"
          :key="pin.text"
          :class="[
            `mainSlider__pin mainSlider__pin_${pin.id}`,
            { mainSlider__pin_active: active === item.id },
          ]"
        >
          <span>+</span>
        </button>
      </template>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { directive } from "vue-tippy";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";

export default {
  name: "MainSlider",
  directives: {
    tippy: directive,
  },

  data() {
    return {
      active: 1,
      finished: false,
      scrollY: 0,
      slider: [
        {
          name: "Кухня",
          image: "01",
          pins: [
            {
              text: "Чистим фасад вытяжки",
              id: 1,
            },
            {
              text: "Чистим плиту",
              id: 2,
            },
            {
              text: "Моем фасады кухонных гарнитуров",
              id: 3,
            },
            {
              text: "Моем пол",
              id: 4,
            },
            {
              text: "Выносим мусор",
              id: 5,
            },
            {
              text: "Моем посуду",
              id: 6,
            },
            {
              text: "Протираем столешницу",
              id: 7,
            },
          ],
          id: 1,
        },
        {
          name: "Комнаты",
          image: "02",
          pins: [
            {
              text: "Чистим фасад вытяжки",
              id: 1,
            },
            {
              text: "Чистим плиту",
              id: 2,
            },
            {
              text: "Моем фасады кухонных гарнитуров",
              id: 3,
            },
            {
              text: "Моем пол",
              id: 4,
            },
          ],
          id: 2,
        },
        {
          name: "Ванная",
          image: "03",
          pins: [
            {
              text: "Чистим фасад вытяжки",
              id: 1,
            },
            {
              text: "Чистим плиту",
              id: 2,
            },
            {
              text: "Моем фасады кухонных гарнитуров",
              id: 3,
            },
            {
              text: "Моем пол",
              id: 4,
            },
            {
              text: "Выносим мусор",
              id: 5,
            },
          ],
          id: 3,
        },
        {
          name: "Прихожая",
          image: "04",
          pins: [
            {
              text: "Чистим фасад вытяжки",
              id: 1,
            },
            {
              text: "Чистим плиту",
              id: 2,
            },
            {
              text: "Моем фасады кухонных гарнитуров",
              id: 3,
            },
          ],
          id: 4,
        },
      ],
    };
  },

  mounted() {
    this.emitter.on("finished", this.setFinished);
    this.animateMenu().reverse();
    document.addEventListener("scroll", this.setScrollY);
  },

  beforeUnmount() {
    this.emitter.off("finished", this.setFinished);
    document.removEventListener("scroll", this.setScrollY);
  },

  computed: {
    innerHeight() {
      return window.innerHeight;
    },
    offsetHeight() {
      return document.body.offsetHeight;
    },
  },

  watch: {
    finished(newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      } else if (newValue) {
        this.animateMenu();
      } else {
        this.animateMenu().reverse(0);
      }
    },
  },

  methods: {
    findPins() {
      return this.slider.find((el) => el.id === this.active).pins;
    },
    selectItem(id) {
      this.active = id;
      setTimeout(() => this.changeSlide(), 100);
    },
    changeSlide() {
      const tl = gsap.timeline();
      const activeImage = this.$el.querySelector(".mainSlider__image_active");

      tl.fromTo(
        activeImage,
        { opacity: 0, x: "100%", scale: 1.3 },
        {
          opacity: 1,
          x: "0",
          scale: 1,
          duration: 1,
          ease: "power3.out",
          onComplete: () => this.showPins(),
          onStart: () => this.hidePins(),
        }
      );

      return tl;
    },
    showPins() {
      const tl = gsap.timeline();
      const activePins = this.$el.querySelectorAll(".mainSlider__pin_active");

      for (let i = 0; i < activePins.length; i += 1) {
        tl.fromTo(
          activePins[i],
          { opacity: 0, scale: 1.3 },
          { opacity: 1, scale: 1, duration: 0.2, ease: "bounce.out" }
        );
      }

      return tl;
    },
    hidePins() {
      const tl = gsap.timeline();
      const activePins = this.$el.querySelectorAll(".mainSlider__pin");

      for (let i = 0; i < activePins.length; i += 1) {
        tl.to(activePins[i], {
          opacity: 0,
          scale: 1,
          duration: 0,
          ease: "bounce.out",
        });
      }

      return tl;
    },
    setFinished({ finished }) {
      this.finished = finished;
    },
    animateMenu() {
      const tl = gsap.timeline({ duration: 0.5 });

      tl.fromTo(
        this.$refs.menu,
        { x: "-100%" },
        {
          x: 0,
        }
      );
      return tl;
    },
    setScrollY() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.mainSlider {
  height: 100vh;
  display: flex;
  width: 100vw;
  overflow: hidden;

  &__menu {
    padding: 35px 55px;
    background-color: $purple;
    width: 24vw;
    max-height: 100%;
  }

  &__list {
    margin-top: 200px;
    font: 400 44px/52.8px $fontLight;
    color: $light;
    overflow: hidden;
  }

  &__item {
    transition: all 0.5s ease;
    transform: translateX(-70px);
    display: flex;
    align-items: center;
    opacity: 0.7;

    &:not(:last-child) {
      margin-bottom: 22px;
    }

    @media (any-hover: hover) {
      &:hover {
        font-style: italic;
        cursor: pointer;
        opacity: 1;
      }
    }

    &_active {
      font-style: italic;
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__menuArrow {
    width: 50px;
    margin-right: 20px;
  }

  &__text {
    font: 500 16px/20.8px $fontMedium;
    color: $light;
  }

  &__imgWrap {
    position: relative;
    width: 76vw;
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    object-fit: cover;
    display: flex;
    z-index: 1;
    opacity: 0;

    &_active {
      z-index: 2;
    }
  }

  &__pin {
    width: 30px;
    height: 30px;
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
    background-color: $purple;
    border: none;
    transition: all 0.3s ease 0s;
    box-shadow: 0px 0px 15px $purple;
    z-index: 5;

    @media (any-hover: hover) {
      &:hover {
        transform: rotate(-180deg);
        box-shadow: none;
      }
    }

    &_active {
      // opacity: 1;
    }
    span {
      z-index: 2;
      color: #fff;
      font-size: 14px;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &_1 {
      top: 250px;
      left: 335px;
    }

    &_2 {
      top: 445px;
      left: 260px;
    }

    &_3 {
      top: 475px;
      left: 470px;
    }
    &_4 {
      top: 367px;
      left: 620px;
    }
    &_5 {
      top: 490px;
      left: 820px;
    }
    &_6 {
      top: 575px;
      left: 580px;
    }
    &_7 {
      top: 705px;
      left: 290px;
    }
  }
}
</style>
