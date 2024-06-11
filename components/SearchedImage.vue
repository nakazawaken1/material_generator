<template>
  <div class="SearchedImage" v-if="detail == null">
    <div class="SearchedImage-list" v-for="(item, n) in filterItems(props)" :key="n"
      @click="detail = item, emits('update:isClose', false)">
      <img :src="item.Imagepath" />
      <ul>
        <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
        <li><a href="#"><i class="fa-light fa-tags"></i></a></li>
        <li><a href="#"><i class="fa-light fa-download"></i></a></li>
      </ul>
      <label>{{ item.FabricType }}<span>{{ item.label }}</span></label>
    </div>
  </div>
  <Detail :item="detail" :isOpen="detail != null" @update:isOpen="detail = null, emits('update:isOpen', false)"
    @update:updateParameter="updateParameter" />
</template>

<script lang="ts" setup>
import { Item, filterItems, Items, updateItems, Empty_Items } from "~~/composables/models/Item";
const props = defineProps<{
  labels?: string[];
  searchWord?: string;
}>();
const detail = ref<Item | null>(null);
const emits = defineEmits<{
  (e: "update:isOpen", button: false): void;
  (e: "update:isClose", button: false): void;
}>();

const updateParameter = (label: any, pileheightdata: any, fabricWeightdata: any) => {
  detail.value = updateItems(label, pileheightdata, fabricWeightdata)
  if (!detail.value) {
    detail.value = Empty_Items
  }
}
</script>

<style lang="scss" scoped>
div.SearchedImage {
  padding-right: 1.3rem;
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
    margin-bottom: 50px;

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
      margin-bottom: 20px;


    }

    >ul {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      >li {
        margin: 0 15px;

        >a {
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