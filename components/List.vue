<template>
  <div class="SearchedImage">
    <div class="SearchedImage-list" v-for="(item, n) in items" :key="n"
      @click="emits('update:modelValue', item)">
      <img :src="cloth ? item.ClothImagePath : item.Imagepath" />
      <ul v-if="false">
        <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
        <li><a href="#"><i class="fa-light fa-tags"></i></a></li>
        <li><a href="#"><i class="fa-light fa-download"></i></a></li>
      </ul>
      <label>{{ item.FabricType || item.ClothType }}<span>{{ item.label }}</span></label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Item } from "@/composables/models/Item";
const props = defineProps<{
  cloth: boolean;
  items: Item[];
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: Item): void;
}>();
</script>

<style lang="scss" scoped>
div.SearchedImage {
  padding-left: 2.23213rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;


  &-list {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    position: relative;
    margin-bottom: 30px;

    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffff88;
        opacity: 0.5;
      }
    }

    >img {
      width: 16rem;
    }

    >ul {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      >li {
        margin: 0 15px;

        >a {
          text-decoration: none;
          >i {
            font-size: 1.6rem;
            font-weight: 600;
            font-family: Font Awesome\ 6 Free;
            color: #b8b8b8;
          }
        }
      }
    }

    >label {
      font-size: 1.6rem;

      span {
        display: block;
        font-size: 1.2rem;
        color: #b8b8b8;
      }
    }
  }
}
</style>