<template>
  <Popup :isOpen="isOpen">
    <article class="Detail" v-if="item != null">
      <CloseButton class="close" @click="emits('update:isOpen', false)" />
      <div class="parameter">
        <header>
          <template v-if="normal">
            <h2>Fabric Modify</h2>
            <dl>
              <dt>Fabric Weight</dt>
              <dd>
                <input
                  type="range"
                  v-model="item.fabricWeight"
                  :min="item.fabricWeightMin"
                  :max="item.fabricWeightMax"
                  :step="item.fabricWeightStep"
                /><span>{{ item.fabricWeight }}</span>
              </dd>

              <dt>Fabric Height</dt>
              <dd>
                <input
                  type="range"
                  v-model="item.fabricHeight"
                  :min="item.fabricHeightMin"
                  :max="item.fabricHeightMax"
                  :step="item.fabricHeightStep"
                /><span>{{ item.fabricHeight }}</span>
              </dd>
            </dl>
          </template>
          <template v-else>
            <h2>Product image Choose product design</h2>
            <dl>
              <dt></dt>
              <dd>
                <img :src="item.ClothImagePath" :width="50" />
              </dd>
            </dl>
          </template>
          <template v-if="false">
            <dt>GH Ratio</dt>
            <dd>
              <input
                type="range"
                v-model="item.ghRatio"
                :min="0"
                :max="100"
              /><span>{{ item.ghRatio }}</span>
            </dd>
            <dt>GH Finess</dt>
            <dd>
              <input
                type="range"
                v-model="item.ghFiness"
                :min="0"
                :max="100"
              /><span>{{ item.ghFiness }}</span>
            </dd>
          </template>

          <template v-if="false">
            <ul>
              <li>
                <label
                  ><input
                    type="radio"
                    name="type"
                    v-model="item.type"
                    value="Standard"
                  />Standard</label
                >
              </li>
              <li>
                <label
                  ><input
                    type="radio"
                    name="type"
                    v-model="item.type"
                    value="Sustainable"
                  />Sustainable</label
                >
              </li>
            </ul>
          </template>
        </header>
        <footer>
          <label>Color Modify</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            v-model.number="hue"
          />
          <label>Pantone</label>
          <span>{{ hue }}</span>
        </footer>
      </div>
      <div class="preview">
        <WebGLViewer
          :fabricType="normal ? item.FabricType : item.ClothType"
          :value="hue"
          @update:info="info"
        />
      </div>
      <div class="info">
        <h2>Fabric Information</h2>
        <dl>
          <dt>Fabric Number</dt>
          <dd>{{ item.FabricType }}</dd>
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
          <dd>{{ item.pileheight }}</dd>
          <dt>Fabric Weight</dt>
          <dd>{{ item.fabricWeight }}g/m(width: {{ item.width }})</dd>
          <dt>Color</dt>
          <dd>
            {{ item.Color }}
          </dd>
        </dl>
        <footer><Button>Composition Check</Button></footer>
      </div>
      <Button v-if="normal">View Fabric Motion</Button>
      <Button @click="normal = false" v-if="normal">View Product Image</Button>
      <Button v-if="normal">Download Production Details</Button>
      <Button @click="normal = true" class="backimage" v-else
        >Back image Details</Button
      >
      <Button class="download" v-if="normal">Download File</Button>
    </article>
  </Popup>
</template>

<script lang="ts" setup>
import { Item } from "~~/composables/models/Item";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    item: Item | null;
  }>(),
  {
    isOpen: false,
  }
);
const detail = ref<Item | null>(null);
const hue = ref(0);
const emits = defineEmits<{
  (e: "update:isOpen", button: false): void;
}>();

const normal = ref(true);
const info = (e: string) => console.log(e);
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

    > header {
      padding: 1rem;

      > dl {
        margin: 1rem 0;

        dd {
          display: flex;
          align-items: center;
          gap: 1rem;

          .clothbutton {
          }
        }
      }

      > ul {
        display: flex;
        gap: 1rem;
      }
    }

    > footer {
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
    background-color: #7f7f7f;

    > img {
      width: 60rem;
    }

    > ul {
      position: absolute;
      top: 1rem;
      right: 1rem;

      > li {
        > img {
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

    > dl {
      margin: 1rem 0;
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 0.5rem;
    }

    > footer {
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