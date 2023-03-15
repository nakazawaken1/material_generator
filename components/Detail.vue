<template>
  <article v-if="item != null">
    <div class="detail-header">
      <div class="detail-title">
        <h1>{{ item?.FabricType }}</h1>
      </div>
      <div class="button-list">
        <div class="close" @click="emits('update:isOpen', false)">
          &lt;back</div>
        <nav>
          <div v-if="normal">View Fabric Motion</div>
          <div @click="normal = false" v-if="normal">View Product Image</div>
          <div v-if="normal">Download Production Details</div>
          <div @click="normal = true" class="backimage" v-else>Back image Details
          </div>
          <div>Composition Check</div>
          <div class="download" v-if="normal">Download File
          </div>
        </nav>
      </div>
    </div>
    <div class="detail-contents">
      <div class=" preview">
        <WebGLViewer :fabricType="normal ? item?.FabricType : item.ClothType" :value="hue" @update:info="info" />
      </div>
      <div class="parameter">
        <template v-if="normal">
          <details>
            <summary>
              Fabric Modify
            </summary>
            <dl>
              <dt> Fabric Weight</dt>
              <dd><input type="range" v-model="item.fabricWeight" :min="item.minfabricWeight" :max="item.maxfabricWeight"
                  :step="item.stepfabricWeight" /><span>{{ item.fabricWeight }}g/m</span></dd>

            </dl>
            <dl>
              <dt>Fabric Height</dt>
              <dd><input type="range" v-model="item.pileheight" :min="item.minpileheight" :max="item.maxpileheight"
                  :step="item.steppileheight" /><span>{{ item.pileheight }}mm</span>
              </dd>
            </dl>
          </details>


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
        <details>
          <summary>
            Color Modify
          </summary>
          <dl>
            <dt>Pantone</dt>
            <dd>
              <input type="range" min="0" max="1" step="0.01" v-model.number="hue" />
              <span>{{ hue }}</span>
            </dd>
          </dl>
        </details>

        <details>
          <summary>Fabric Information</summary>

          <dl>
            <dt>Fabric Number</dt>
            <dd>{{ item.FabricType }}</dd>
          </dl>
          <dl>
            <dt>Modacrylic</dt>
            <dd>{{ item.ghRatio }}%</dd>
          </dl>
          <dl>
            <dt>Recycled polyester</dt>
            <dd>{{ 100 - item.ghRatio }}%</dd>
          </dl>
          <dl>
            <dt>Pile Height</dt>
            <dd>{{ item.pileheight }}mm</dd>
          </dl>
          <dl>
            <dt>Fabric Weight</dt>
            <dd>{{ item.fabricWeight }}g/m(width: {{ item.width }})</dd>
          </dl>
          <dl>
            <dt>Color</dt>
            <dd>
              {{ item.Color }}
            </dd>
          </dl>
        </details>
        <div class="info">
          <footer></footer>
        </div>
      </div>

    </div>
  </article>

  <article class="Detail" v-if="false">
    <CloseButton class="close" @click="emits('update:isOpen', false)" />
    <div class="parameter">
      <header>
        <template v-if="normal">
          <h2>Fabric Modify</h2>
          <dl>
            <dt>Fabric Weight</dt>
            <dd>
              <input type="range" v-model="item.fabricWeight" :min="item.fabricWeightMin" :max="item.fabricWeightMax"
                :step="item.fabricWeightStep" /><span>{{ item.fabricWeight }}</span>
            </dd>

            <dt>Fabric Height</dt>
            <dd>
              <input type="range" v-model="item.fabricHeight" :min="item.fabricHeightMin" :max="item.fabricHeightMax"
                :step="item.fabricHeightStep" /><span>{{ item.fabricHeight }}</span>
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
            <input type="range" v-model="item.ghRatio" :min="0" :max="100" /><span>{{ item.ghRatio }}</span>
          </dd>
          <dt>GH Finess</dt>
          <dd>
            <input type="range" v-model="item.ghFiness" :min="0" :max="100" /><span>{{ item.ghFiness }}</span>
          </dd>
        </template>

        <template v-if="false">
          <ul>
            <li>
              <label><input type="radio" name="type" v-model="item.type" value="Standard" />Standard</label>
            </li>
            <li>
              <label><input type="radio" name="type" v-model="item.type" value="Sustainable" />Sustainable</label>
            </li>
          </ul>
        </template>
      </header>
      <footer>
        <label>Color Modify</label>
        <input type="range" min="0" max="1" step="0.01" v-model.number="hue" />
        <label>Pantone</label>
        <span>{{ hue }}</span>
      </footer>
    </div>
    <div class="preview">
      <WebGLViewer :fabricType="normal ? item.FabricType : item.ClothType" :value="hue" @update:info="info" />
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
    <Button @click="normal = true" class="backimage" v-else>Back image Details</Button>
    <Button class="download" v-if="normal">Download File</Button>
  </article>
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
.detail-title {
  display: flex;
  justify-content: center;

  >h1 {
    font: small-caps bold 24px/1 sans-serif;
  }
}

.button-list {
  padding-bottom: 7.5424rem;

  .close {
    cursor: pointer;
    padding: 0 0 1.32rem 1.32rem;
  }

  >nav {
    display: flex;
    justify-content: space-around;
    background-color: #e2e2e2;
    padding: 10px;
    align-items: center;

    >div {
      background-color: transparent;
      color: #818181;
      cursor: pointer;
    }
  }
}

.detail-contents {
  display: flex;
  padding-left: 1rem;

  .parameter {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 7rem;

    details {
      padding-bottom: 3rem;
      cursor: pointer;

      >dl {
        display: flex;
        padding-top: 2rem;
        margin-left: 2rem;

        >dt {
          padding-left: 2rem;
        }

        >dd {
          padding-left: 1.768rem;
          padding-bottom: 1.234121rem;

          >span {
            padding-left: 1.543rem;
            ;
          }
        }
      }

      .color-modify {
        display: flex;
        flex-direction: column;
      }
    }


  }
}



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

          .clothbutton {}
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
    background-color: #7f7f7f;

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