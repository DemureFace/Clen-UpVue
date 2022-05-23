<template>
  <div class="switch">
    <button
      v-for="SwitchItem in switchs"
      v-bind:key="SwitchItem.name"
      class="switch__item"
      :class="{ switch__item_active: active == SwitchItem.id }"
      @click="switchElement(SwitchItem.id)"
    >
      {{ SwitchItem.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseSwitch",

  data() {
    return {
      active: 1,
      switchs: [
        {
          name: "Дом",
          id: 1,
        },
        {
          name: "Офис",
          id: 2,
        },
      ],
    };
  },

  methods: {
    switchElement(id) {
      this.active = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  background-color: $light;
  display: flex;
  margin-left: 21px;
  padding: 3px;
  border: 1px solid $middleGrey;
  border-radius: 48px;
  align-items: center;

  &__item {
    border: none;
    border-radius: 34px;
    background-color: $light;
    color: $textSecondary;
    padding: 8px 12px;
    font: 500 14px/15.4px $fontMedium;

    @media (hover: hover) {
      &:hover {
        color: $light;
        background-color: rgba($purple, 0.3);
        cursor: pointer;
      }
    }

    &_active {
      pointer-events: none;
      color: $light;
      background-color: $purple;
    }
  }
}
</style>
