<template>
  <Popup :isOpen="isOpen">
    <article class="Detail" v-if="(item != null)">
      <CloseButton class="close" @click="emits('update:isOpen', false)" />
      <div class="parameter">
        <header>
          <h2>Fabric Modify</h2>
          <dl>
            <dt>Fabric Weight</dt>
            <dd><input type="range" v-model="item.fabricWeight" :min="0" :max="100" /><span>{{
              item.fabricWeight
            }}</span>
            </dd>
            <dt>Fabric Height</dt>
            <dd><input type="range" v-model="item.fabricHeight" :min="0" :max="100" /><span>{{
              item.fabricHeight
            }}</span>
            </dd>
            <dt>GH Ratio</dt>
            <dd><input type="range" v-model="item.ghRatio" :min="0" :max="100" /><span>{{ item.ghRatio }}</span></dd>
            <dt>GH Finess</dt>
            <dd><input type="range" v-model="item.ghFiness" :min="0" :max="100" /><span>{{ item.ghFiness }}</span>
            </dd>
          </dl>
          <ul>
            <li><label><input type="radio" name="type" v-model="item.type" value="Standard" />Standard</label></li>
            <li><label><input type="radio" name="type" v-model="item.type" value="Sustainable" />Sustainable</label>
            </li>
          </ul>
        </header>
        <footer>
          <label>Color Modify</label>
          <input type="color" />
          <label>Pantone</label>
          <span>#ffffff</span>
        </footer>
      </div>
      <div class="preview">
        <Materialimage :fabricName="fabricNo[numberid]" />
        <!-- <img src="~/assets/fox.jpg" ref="materialimg" /> -->
      </div>
      <div class="info">
        <h2>Fabric Information</h2>
        <dl>
          <dt>Fabric Number</dt>
          <dd>{{ fabricNo[numberid] }}</dd>
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
          <dd>102mm</dd>
          <dt>Fabric Weight</dt>
          <dd>1,800g/wm(width 153cm)</dd>
          <dt>Color</dt>
          <dd>TGX#8888</dd>
        </dl>
        <footer><Button>Composition Check</Button></footer>
      </div>
      <Button>View Fabric Motion</Button>
      <Button>View Product Image</Button>
      <Button>Download Production Details</Button>
      <Button class="download">Download File</Button>
    </article>
  </Popup>
</template>

<script lang="ts" setup>
import { Item } from "~~/composables/models/Item"

export interface Props {
  isOpen: boolean,
  numberid: number,
  item: Item | null,
  fabricNo: String[],
}
export interface Emits {
  (e: "update:isOpen", button: false): void
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
})
const emits = defineEmits<Emits>()


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
}
</style>