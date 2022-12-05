<template>
  <main>
    <dl>
      <dt class="required">Fabric Type</dt>
      <dd class="required">
        <label v-for="value of fabricTypes.filter(i => !i.disabled)" :key="value.label">
          <input type="radio" :value="value" v-model="fabricType" :disabled="value.disabled" />
          {{ value.label }}
        </label>
      </dd>
      <template v-if="false">
        <dt class="required">Knitting Type</dt>
        <dd class="required">
          <label v-for="value of knittingTypes.filter(i => !i.disabled)" :key="value.label">
            <input type="radio" :value="value" v-model="knittingType" :disabled="value.disabled" />
            {{ value.label }}
          </label>
        </dd>
        <dt class="required">Sliver numbers</dt>
        <dd class="required">
          <label v-for="label of silverNumbers" :key="label">
            <input type="radio" :value="label" v-model="silverNumber" :disabled="label != '1'" />
            {{ label }}
          </label>
        </dd>
      </template>
      <dt>シャーリング加工（㎜）</dt>
      <dd>
        <label v-for="label of fabricType.sharings" :key="label">
          <input type="radio" :value="label" v-model="sharing" />
          {{ label }}
        </label>
      </dd>
      <template v-if="false">
        <dt class="disabled">チッププリント</dt>
        <dd class="disabled">
          <label v-for="label of chipPrints" :key="label">
            <input type="radio" :value="label" v-model="chipPrint" :disabled="true" />
            {{ label }}
          </label>
        </dd>
      </template>
      <dt>生地幅（cm）</dt>
      <dd>
        <label v-for="label of kijihabas" :key="label">
          <input type="radio" :value="label" v-model.number="kijihaba" />
          {{ label }}
        </label>
      </dd>
      <dt>Fabric Weight(g/M) 単位：㎡</dt>
      <dd>
        <input type="range" v-model="fablicWeight1" :min="fabricType.min" :max="fabricType.max"
          :step="fablicWeihtStep" />
        <label>{{ fablicWeight1 }}</label>
      </dd>
      <dt>Fabric Weight(g/M) 生地幅に対して</dt>
      <dd>
        <input type="range" v-model="fablicWeight2" :min="calcFablicWeight(fabricType.min! * kijihaba / 100)"
          :max="calcFablicWeight(fabricType.max! * kijihaba / 100)" :step="fablicWeihtStep" />
        <label>{{ fablicWeight2 }}</label>
      </dd>
      <template v-if="false">
        <dt class="disabled">特殊加工</dt>
        <dd class="disabled">
          <dl>
            <dt>タンブリング</dt>
            <dd>
              <label v-for="label of tanblings" :key="label">
                <input type="radio" :value="label" v-model="tanbling" :disabled="true" />
                {{ label }}
              </label>
            </dd>
            <dt>デザインシャーリング</dt>
            <dd>
              <select v-model="designSharing" :disabled="true">
                <option v-for="label of designSharings" :key="label">{{ label }}</option>
              </select>
            </dd>
            <dt>エンボス</dt>
            <dd>
              <select v-model="emboss" :disabled="true">
                <option v-for="label of embosses" :key="label">{{ label }}</option>
              </select>
            </dd>
          </dl>
        </dd>
      </template>
    </dl>
    <table>
      <tr>
        <th colspan="2">Options</th>
        <th>Material</th>
        <th>Spec</th>
        <th>Cross<br />Section</th>
        <th>Lustor</th>
        <th>Finess<br />(dt)</th>
        <th>Cut Length<br />(mm)</th>
        <th>Sliver<br />Ratio(%)</th>
        <th>Color<br />Pantone#<br />TPX TPG</th>
      </tr>
      <tr v-for="n of 3" :key="n">
        <th v-if="(n == 1)" rowspan="3">Sliver① Composition</th>
        <th>Fiber{{ n }}<template v-if="(n == 1)">(GH)</template></th>
        <td>
          <label v-for="label of fabricType.fiber1!.materials" :key="label">
            <input type="radio" :value="label" v-model="fiber1.material" />
            {{ label }}
          </label>
        </td>
        <td>
          <label v-for="label of fabricType.fiber1!.specs" :key="label">
            <input type="radio" :value="label" v-model="fiber1.spec" />
            {{ label }}
          </label>
        </td>
        <td>
          <label v-for="label of fabricType.fiber1!.crossSections" :key="label">
            <input type="radio" :value="label" v-model="fiber1.crossSection" />
            {{ label }}
          </label>
        </td>
        <td>
          <label v-for="label of fabricType.fiber1!.lustors" :key="label">
            <input type="radio" :value="label" v-model="fiber1.lustor" />
            {{ label }}
          </label>
        </td>
        <td>
          <label v-for="label of fabricType.fiber1!.finesses" :key="label">
            <input type="radio" :value="label" v-model.number="fiber1.finess" />
            {{ label }}
          </label>
        </td>
        <td>
          <ul>
            <li v-for="label of fabricType.fiber1!.cutLengths" :key="label">
              <label>
                <input type="radio" :value="label" v-model.number="fiber1.cutLength" />
                {{ label }}
              </label>
            </li>
          </ul>
        </td>
        <td>
          <input type="range" v-model="fiber1.sliverRatio" :min="fabricType.sliverRatioMin"
            :max="fabricType.sliverRatioMax" :step="sliverRatioStep" />
          <label>{{ fiber1.sliverRatio }}%</label>
        </td>
        <td v-if="(n == 1)" rowspan="3">
          <section class="color"><input type="color" v-model="fiber1.color" />
            <label>{{ fiber1.color }}</label>
          </section>
        </td>
      </tr>
    </table>
    <nav>
      <Button @click="(searched = true)">検索</Button>
    </nav>
    <section v-if="searched">
      <nav>
        <label for="composition"><input id="composition" type="radio" name="component" :value="SearchedComposition"
            v-model="component" /> Composition</label>
        <label for="image"><input id="image" type="radio" name="component" :value="SearchedImage" v-model="component" />
          Image</label>
      </nav>
      <component :is="component" />
    </section>
  </main>
</template>

<script lang="ts" setup>
const SearchedComposition = shallowRef(resolveComponent("SearchedComposition"))
const SearchedImage = shallowRef(resolveComponent("SearchedImage"))
const component = ref(SearchedComposition)
const searched = ref(false)
const sharings = [
  'Non Cut',
  '15',
  '22',
  '27',
  '34',
  '43',
]
const materials = [
  'Modacrylic',
  'Recycled PET',
]
const specs = [
  'ELP',
  'RCL',
  'KP',
  'AH',
]
const crossSections = [
  'OVAL',
  'FLAT',
]
const lustors = [
  'Bright',
  'Semi-Dull',
]
const finesses = [
  17,
  18,
  27,
  33,
  35,
  44,
]
const cutLengths = [
  51,
  64,
  76,
  89,
  102,
]
const colors = [
  '#ffffff',
]
const fabricTypes = [
  {
    label: 'Fox', min: 850, max: 1500, sharings: [0].map(i => sharings[i]), sliverRatioMin: 10, sliverRatioMax: 50, fiber1: {
      materials: [0].map(i => materials[i]),
      specs: [0, 1].map(i => specs[i]),
      crossSections: [0, 1].map(i => crossSections[i]),
      lustors: [0, 1].map(i => lustors[i]),
      finesses: [0, 1, 2, 3, 4, 5].map(i => finesses[i]),
      cutLengths: [0, 1, 2, 3, 4].map(i => cutLengths[i]),
      fiber2: { specs: [2, 3].map(i => specs[i]) },
      fiber3: { specs: [2, 3].map(i => specs[i]) }
    }
  },
  {
    label: 'Sable', min: 450, max: 1100, sharings: [4, 5].map(i => sharings[i]), sliverRatioMin: 10, sliverRatioMax: 50, fiber1: {
      materials: [0].map(i => materials[i]),
      specs: [0, 1].map(i => specs[i])
    }
  },
  {
    label: 'Mink', min: 300, max: 1000, sharings: [1, 2, 3].map(i => sharings[i]), sliverRatioMin: 10, sliverRatioMax: 50, fiber1: {
      materials: [0].map(i => materials[i]),
      specs: [0, 1].map(i => specs[i])
    }
  },
  {
    label: 'Rabbit', min: 300, max: 1000, sharings: [1, 2, 3].map(i => sharings[i]), sliverRatioMin: 30, sliverRatioMax: 80, fiber1: {
      materials: [0, 1].map(i => materials[i]),
      specs: [1, 2].map(i => specs[i])
    }
  },
  { label: 'Racoon', disabled: true },
  { label: 'Mongolian', disabled: true },
  { label: 'Chinchilla', disabled: true },
  { label: 'Jaquard', disabled: true },
]

const knittingTypes = [
  { label: 'High Pile (Plain)' },
  { label: 'High Pile (Jaquard)', disabled: true },
  { label: 'Boa', disabled: true },
  { label: 'Russel', disabled: true },
]
const silverNumbers = [
  '1',
  '2',
  '3',
  '4',
]
const chipPrints = [
  '無',
  '有',
]
const kijihabas = [
  153,
  180,
]
const tanblings = [
  'なし',
  '弱',
  '中',
  '強',
]
const designSharings = [
  'なし',
  'パターン①',
  'パターン②',
  'パターン③',
  'パターン④',
]
const embosses = [
  'なし',
  'パターン①',
  'パターン②',
  'パターン③',
  'パターン④',
]
const fablicWeihtStep = 50
const sliverRatioStep = 5
const calcFablicWeight = (n: number) => Math.round(n / fablicWeihtStep) * fablicWeihtStep
const calcSliverRatio = (n: number) => Math.round(n / sliverRatioStep) * sliverRatioStep

const fabricType = ref(fabricTypes[0])
const knittingType = ref(knittingTypes[0])
const silverNumber = ref(silverNumbers[0])
const sharing = ref(sharings[0])
const chipPrint = ref(chipPrints[0])
const kijihaba = ref(kijihabas[0])
const fablicWeight1 = ref(0)
const fablicWeight2 = ref(0)
const tanbling = ref(tanblings[0])
const designSharing = ref(designSharings[0])
const emboss = ref(embosses[0])
const fiber1 = reactive({
  material: materials[0],
  spec: specs[0],
  crossSection: crossSections[0],
  lustor: lustors[0],
  finess: finesses[0],
  cutLength: cutLengths[0],
  sliverRatio: 10,
  color: colors[0],
})

const changeFabricType = () => {
  fablicWeight1.value = calcFablicWeight((fabricType.value.min! + fabricType.value.max!) / 2)
  fablicWeight2.value = calcFablicWeight(fablicWeight1.value * kijihaba.value / 100)
}
onMounted(() => changeFabricType())
watch(fabricType, (value) => {
  sharing.value = value.sharings![0]
  fiber1.spec = value.fiber1!.specs[0]
  fiber1.sliverRatio = calcSliverRatio((value.sliverRatioMin! + value.sliverRatioMax!) / 2)
})
let changing = false
watch(fablicWeight1, (value) => {
  if (changing) { return }
  changing = true
  fablicWeight2.value = calcFablicWeight(value * kijihaba.value / 100)
  nextTick(() => changing = false)
})
watch(fablicWeight2, (value) => {
  if (changing) { return }
  changing = true
  fablicWeight1.value = calcFablicWeight(value * 100 / kijihaba.value)
  nextTick(() => changing = false)
})
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Symbols+2&display=swap");

main {
  --radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98rem;
  margin: 0 auto;


  >dl {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;

    dt,
    dd {
      margin: 5px 0;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      background-color: #dddddd;
      box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);

      &.required {
        background-color: lightgoldenrodyellow;
      }
    }

    dt {
      border-radius: var(--radius) 0 0 var(--radius);
    }

    dd {
      border-radius: 0 var(--radius) var(--radius) 0;
    }
  }

  label {
    display: flex;
    gap: 0.5rem;
    margin-left: 1rem;
  }

  select {
    flex-grow: 1;
    appearance: none;
    border: none;
    background-color: transparent;
    position: relative;
  }

  input[type="range"] {
    flex-grow: 1;
  }

  input[type="range"]+label {
    width: 3em;
    text-align: right;
  }

  .disabled {
    opacity: 0.5;
  }

  >table {
    width: 100%;
    margin: 0.5rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);

    th,
    td {
      border: 1px solid #818181;
      padding: 5px 10px;
    }

    th {
      font-weight: normal;
      background-color: #dddddd;
    }

    td {
      vertical-align: top;

      .color {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }

  >section {
    >nav {
      width: 100%;
      display: flex;
    }
  }
}
</style>
