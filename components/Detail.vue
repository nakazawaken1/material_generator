<template>
  <article>
    <div class="detail-title">
      <h1>{{ item.FabricType }}</h1>
    </div>
    <div class="detail-contents">
      <div class="preview">
        <div class="viewer">
          <WebGLViewer2 :fabricType="cloth ? item.ClothType : item.FabricType" :value="rgb2Value"
            @update:info="info" />
        </div>
        <div class="chipcolor" v-if="color">
          <header :style="{ backgroundColor: `rgb(${color.rgb})` }"></header>
          <div>{{ color.code }}</div>
          <label>{{ color.name }}</label>
        </div>
      </div>
      <div class="parameter">
        <details open>
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
              {{ pantoneName }}
            </dd>
          </dl>
        </details>

        <template v-if="!cloth">
          <div v-for="(value, index) in filterItems(item.label)" :key="value.labels">
            <details>
              <summary>
                Fabric Modify
              </summary>
              <dl>
                <dt>Fabric Weight</dt>
                <dd>
                  <RangeSlider v-model:range="IndexOfrangeWeight" :max="value.fabricWeights.length - 1"
                    @update:range="emits('update:updateParameter', value.labels, value.cutLengths[IndexOfrangeHeight], value.fabricWeights[IndexOfrangeWeight])" />
                  {{ value.fabricWeights[IndexOfrangeWeight] }}g/m
                </dd>
              </dl>
              <dl>
                <dt>Fabric Height</dt>
                <dd>
                  <RangeSlider v-model:range="IndexOfrangeHeight" :max="value.cutLengths.length - 1"
                    @update:range="emits('update:updateParameter', value.labels, value.cutLengths[IndexOfrangeHeight], value.fabricWeights[IndexOfrangeWeight])" />
                  {{ value.cutLengths[IndexOfrangeHeight] }}mm
                </dd>
              </dl>
            </details>
          </div>
        </template>
        <details>
          <summary>
            Color Modify
          </summary>
          <dl>
            <dd v-if="useHue">
              <input type="range" min="0" max="1" step="0.01" v-model.number="hue" />
              <span>{{ hue }}</span>
            </dd>
            <dd v-else style="padding-left: 0">
              <PantoneSelector v-model="color" />
            </dd>
          </dl>
        </details>
        <nav>
          <Button @click.stop="emits('update:cloth', !cloth)">{{ cloth ? 'Fabric' : 'Garment' }} simulation</Button>
        </nav>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { Item } from "@/composables/models/Item";

const props = defineProps<{
  cloth: boolean
  modelValue: Item
}>()
const emits = defineEmits<{
  (e: "update:cloth", isCloth: boolean): void;
  (e: "update:modelValue", item: Item | null): void;
  (e: "update:updateParameter", label: string, IndexOfrangeHeight: number, IndexOfrangeWeight: number): void;
}>();

const item = computed(() => props.modelValue)
const hue = ref(0);
const selectedPileHeight = ref(item.value.pileheight);
const selectedFabricWeight = ref(item.value.fabricWeight);
const a = item.value.fabricWeight
const useHue = false;
const colors = useColors()
const color = ref<Color|null>(null);
const pantoneName = ref('PMS 2347 C');
const rgb2Value = computed(() => {
  if(!color.value) return null
  const a = color.value.rgb.split(',').map(i => Number(i) / 255)
  return { r: a[0], g: a[1], b: a[2] }
});
watch(() => item.value, (newValue) => {
  selectedPileHeight.value = newValue?.pileheight
  selectedFabricWeight.value = newValue?.fabricWeight
  IndexOfrangeWeight.value = convertToNumber(rangeItems(newValue?.label)?.fabricWeights.indexOf(newValue?.fabricWeight))
  IndexOfrangeHeight.value = convertToNumber(rangeItems(newValue?.label)?.cutLengths.indexOf(newValue?.pileheight))
})

const info = (e: string) => console.log(e);
const fabricWeights = [1300, 1800, 2300, 500, 1000, 1000, 1500];
const cutLengths = [36, 53, 62, 71, 15, 22, 22, 27];
const FabricDetails = [{
  labels: "Fox",
  cutLengths: [0, 1, 2, 3].map((i) => cutLengths[i]),
  fabricWeights: [0, 1, 2].map((i) => fabricWeights[i]),
}, {
  labels: "Mink",
  cutLengths: [4, 5].map((i) => cutLengths[i]),
  fabricWeights: [3, 4].map((i) => fabricWeights[i]),
}, {
  labels: "Rabbit",
  cutLengths: [6, 7].map((i) => cutLengths[i]),
  fabricWeights: [5, 6].map((i) => fabricWeights[i]),
}]


const filterItems = (label: string) => FabricDetails.filter(i => i.labels.includes(label))

const rangeItems = (label: string) => FabricDetails.find(i => i.labels.includes(label))

const rangeWeight = rangeItems(item.value?.label)?.fabricWeights.indexOf(item.value.fabricWeight)
const rangeHeight = rangeItems(item.value?.label)?.cutLengths.indexOf(item.value.pileheight)
function convertToNumber(value: number | undefined): number {
  if (typeof value === 'number') {
    return value;
  } else {
    // もしくは適切なデフォルト値を返すなどの処理を行う
    return 0; // ここではデフォルト値として0を返していますが、適宜変更してください
  }
}
const convertedRangeWeight: number = convertToNumber(rangeWeight);
const convertedRangeHeight: number = convertToNumber(rangeHeight);

const IndexOfrangeWeight = ref(convertedRangeWeight)
const IndexOfrangeHeight = ref(convertedRangeHeight)
</script>

<style lang="scss" scoped>
.detail-title {
  padding-bottom: 1.5em;
  display: flex;
  justify-content: center;

  >h1 {
    font: small-caps bold 24px/1 sans-serif;
  }
}

.detail-contents {
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;

  nav {
    padding: 14px 0 0 0;
  }

  .viewer {
    display: flex;
    justify-content: center;
  }

  .chipcolor {
    display: inline-flex;
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    left: 20px;
    top: 0;
    zoom: 80%;

    >header {
      height: 80px;
    }

    >div {
      padding: 2px 5px;
      color: #666;
    }

    >label {
      padding: 2px 5px;
    }
  }

  .parameter {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 10px;
    min-width: 460px;
    overflow: auto;
    max-height: 640px;

    details {
      padding-bottom: 3rem;

      >summary {
        cursor: pointer;
      }

      >dl {
        display: flex;
        padding-top: 2rem;
        margin-left: 2rem;

        >dt {
          padding-left: 2rem;
          &::after {
            content: " :";
          }
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
</style>