<template>
  <Popup :isOpen="isOpen">
    <article class="Detail" v-if="(item != null)">
      <CloseButton class="close" @click="emits('update:isOpen', false)" />
      <div class="parameter">
        <header>
          <h2>Fabric Modify</h2>
          <dl>
            <dt>Fabric Weight</dt>
            <dd><input type="range" v-model="item.fabricWeight" :min="item.fabricWeightMin" :max="item.fabricWeightMax"
                :step="item.fabricWeightStep" /><span>{{
                  item.fabricWeight
                }}</span>
            </dd>

            <dt>
              Fabric Height</dt>
            <dd>
              <input type="range" v-model="item.fabricHeight" :min="item.fabricHeightMin" :max="item.fabricHeightMax"
                :step="item.fabricHeightStep" /><span
                v-for="rangevalue of rangetest(item.label, item.fabricHeight, item.fabricWeight, item.ghFiness, item.ghRatio)"
                :key="rangevalue.id">{{ item.fabricHeight = rangevalue.pileheight }}</span>
            </dd>
            <template v-if="false">
              <dt>GH Ratio</dt>
              <dd><input type="range" v-model="item.ghRatio" :min="0" :max="100" /><span>{{ item.ghRatio }}</span></dd>
              <dt>GH Finess</dt>
              <dd><input type="range" v-model="item.ghFiness" :min="0" :max="100" /><span>{{ item.ghFiness }}</span>
              </dd>
            </template>
          </dl>
          <template v-if="false">
            <ul>
              <li><label><input type="radio" name="type" v-model="item.type" value="Standard" />Standard</label></li>
              <li><label><input type="radio" name="type" v-model="item.type" value="Sustainable" />Sustainable</label>
              </li>
            </ul>
          </template>
        </header>
        <footer>
          <label>Color Modify</label>
          <input type="color" />
          <label>Pantone</label>
          <span>#ffffff</span>
        </footer>
      </div>
      <template v-if="true"
        v-for="rangevalue of rangetest(item.label, item.fabricHeight, item.fabricWeight, item.ghFiness, item.ghRatio)"
        :key="rangevalue.id">
        <div class="preview"
          v-for="fabricItem of filteredImage(item.label, item.fabricWeight, rangevalue.pileheight, item.ghFiness, item.ghRatio)"
          :key="fabricItem.id" v-if="(item != null)">
          <Materialimage :fabricName="item.fabricnumber" :fabricweight="item.fabricWeight" :imageitem="fabricItem"
            :cloth="cloth" />
          <!-- <Changecolor /> -->
          <!-- <img src="~/assets/fox.jpg" ref="materialimg" /> -->
        </div>
        <div class="info">
          <h2>Fabric Information</h2>
          <dl
            v-for="fabricItem of filteredImage(item.label, item.fabricWeight, rangevalue.pileheight, item.ghFiness, item.ghRatio)">
            <dt>Fabric Number</dt>
            <dd>{{ fabricItem.fabricNumber }}</dd>
            <dt>Composition</dt>
            <dd>
              <dl>
                <dt>Modacrylic</dt>
                <dd>70%</dd>
                <dt>Recycled polyester</dt>
                <dd>30%</dd>
              </dl>
            </dd>
            <dt>Pile Height</dt>
            <dd>{{ fabricItem.pileheight }}</dd>
            <dt>Fabric Weight</dt>
            <dd>{{ fabricItem.fabricWeight }}g/m(width: {{ fabricItem.width }})</dd>
            <dt>Color</dt>
            <dd>TGX#8888</dd>
          </dl>
          <footer><Button>Composition Check</Button></footer>
        </div>
      </template>
      <Button v-if="dafault">View Fabric Motion</Button>
      <Button @click="(back = true), (dafault = false), (cloth = false)" v-if="dafault">View Product Image</Button>
      <Button v-if="dafault">Download Production Details</Button>
      <Button @click='(back = false), (dafault = true), (cloth = true)' class="backimage" v-if="back">Back image
        Details</Button>
      <Button class="download" v-if="dafault">Download File</Button>
    </article>
  </Popup>
</template>

<script lang="ts" setup>
import { isTemplateElement, PROPERTY_TYPES } from "@babel/types";
import { Item, filteredImage, fabricTypesTable, example, filteredList, rangetest } from "~~/composables/models/Item"
import Changecolor from "./changecolor.vue";

export interface Emits {
  (e: "update:isOpen", button: false): void
}
interface Props {
  isOpen: boolean,
  item: Item | null,
}


const detail = ref<Item | null>(null)
const props = withDefaults(defineProps<Props>(), {
  isOpen: false
})

const emits = defineEmits<Emits>()

const back = ref(false)
const dafault = ref(true)
const cloth = ref(true)
</script>

<style lang="scss" scoped>
article.Detail {
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  gap: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.4);
  padding: 1rem 2rem;
  position: relative;

  .close {
    position: absolute;
    right: -2rem;
    top: -2rem;
  }

  .parameter {
    display: grid;
    grid-template-columns: 1fr auto;
    border: 1px solid #818181;

    >header {
      padding: 1rem;

      >dl {
        margin: 1rem 0;

        dd {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      }

      >ul {
        display: flex;
        gap: 1rem;
      }
    }

    >footer {
      padding: 1rem;
      border-left: 1px solid #818181;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  .preview {
    border: 1px solid #818181;
    grid-row: 1 / 3;
    grid-column: 2 / 4;
    position: relative;

    >img {
      width: 60rem;
    }

    >ul {
      position: absolute;
      top: 1rem;
      right: 1rem;

      >li {
        >img {
          width: 4rem;
          cursor: pointer;
        }
      }
    }
  }

  .info {
    padding: 1rem;
    border: 1px solid #818181;
    grid-row: 2 / 4;

    >dl {
      margin: 1rem 0;
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 0.5rem;
    }

    >footer {
      text-align: center;
    }
  }

  .download {
    grid-column: 2 / 4;
  }

  .backimage {
    grid-column: 2 / 4;
  }
}
</style>