<template>
  <div class="common" v-if="isLoggedIn()">
    <Sidebar v-model:labels="labels" @click="click" />
    <main>
      <div class="loading" :class="{ loaded }"></div>
      <div class="generator">
        <nav class="search-navigation" v-if="!hasCatWalk">
          <div class="button-list" v-if="item">
            <div class="close" @click="item = null">
              &lt; back
            </div>
          </div>
          <div class="search-container">
            <div class="search-bar">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="search" v-model="searchWord" @input="item = null" placeholder="Search material" />
            </div>
          </div>

          <div class="show-button">
            <input id="image" type="radio" :value="false" v-model="isCloth" @change="item = null" />
            <label class="image" for="image">
              <i class="fa-regular fa-border-all" :class="{ checked: !isCloth }"></i>
            </label>

            <input id="composition" type="radio" :value="true" v-model="isCloth" @change="item = null" />
            <label class="composition" for="composition">
              <i class="fa-regular fa-shirt" :class="{ checked: isCloth }"></i>
            </label>
          </div>
        </nav>

        <section class="summary" v-if="!item">
          <div v-if="hasCatWalk">
            <video src="/a.mov" muted autoplay loop></video>
          </div>
          <template v-else>
            <List :cloth="isCloth" :items="filterItems" v-model="item" />
          </template>
        </section>
      </div>
      <Detail v-if="item" v-model="item" v-model:cloth="isCloth" @update:updateParameter="updateParameter" />
    </main>
  </div>

  <main v-else>
    <div class="login">
      <Login />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Item, Filter } from '~/composables/models/Item';
import { emptyItem } from "@/composables/models/Item";

const { isLoggedIn } = useAuth();
const labels = ref<string[]>([]);
const item = ref<Item | null>(null);
const isCloth = ref(false)
const loaded = ref(false)
const searchWord = ref("")

const items = ref<Item[]>([])
const filterItems = computed(() => {
  const a = (searchWord.value
    ? items.value.filter(i => (i.label + "\t" + i.FabricType).toLowerCase().includes(searchWord.value.toLowerCase()))
    : items.value.filter(i => (labels.value.length == 0 || labels.value.includes(i.label)))) || []
  if(isCloth.value) {
    return a.filter(i => i.ClothType && i.Imagepath != i.ClothImagePath)
  } else {
    return a.filter(i => i.FabricType)
  }
})

const updateParameter = (label: string, pileheight: number, fabricWeight: number) => {
  item.value = items.value.find(i => i.label == label && i.pileheight == pileheight && i.fabricWeight == fabricWeight) || null
  if (!item.value) {
    item.value = emptyItem
  }
}

const catWalk = "Cat walk"
const hasCatWalk = computed(() => labels.value.includes(catWalk))

const click = (label: string, on: boolean) => {
  console.log({ label, on })
  item.value = null
  if (label == catWalk) {
    if (on) {
      labels.value = [label]
    } else {
      labels.value = labels.value.filter(i => i != label)
    }
  } else {
    labels.value = labels.value.filter(i => i != catWalk)
  }
}

const sharings = ["Non Cut", "15", "22", "27", "34", "43"];
const materials = ["Modacrylic", "Recycled PET"];
const specs = ["ELP", "RCL", "KP", "AH"];
const crossSections = ["OVAL", "FLAT"];
const lustors = ["Bright", "Semi-Dull"];
const finesses = [17, 18, 27, 33, 35, 44];
const cutLengths = [51, 64, 76, 89, 102];
const colors = ["#ffffff"];
const fabricTypes = [
  {
    label: "Fox",
    min: 850,
    max: 1500,
    sharings: [0].map((i) => sharings[i]),
    sliverRatioMin: 10,
    sliverRatioMax: 50,
    fiber1: {
      materials: [0].map((i) => materials[i]),
      specs: [0, 1].map((i) => specs[i]),
      crossSections: [0, 1].map((i) => crossSections[i]),
      lustors: [0, 1].map((i) => lustors[i]),
      finesses: [0, 1, 2, 3, 4, 5].map((i) => finesses[i]),
      cutLengths: [0, 1, 2, 3, 4].map((i) => cutLengths[i]),
      fiber2: { specs: [2, 3].map((i) => specs[i]) },
      fiber3: { specs: [2, 3].map((i) => specs[i]) },
    },
  },
  {
    label: "Sable",
    disabled: true,
    min: 450,
    max: 1100,
    sharings: [4, 5].map((i) => sharings[i]),
    sliverRatioMin: 10,
    sliverRatioMax: 50,
    fiber1: {
      materials: [0].map((i) => materials[i]),
      specs: [0, 1].map((i) => specs[i]),
    },
  },
  {
    label: "Mink",
    min: 300,
    max: 1000,
    sharings: [1, 2, 3].map((i) => sharings[i]),
    sliverRatioMin: 10,
    sliverRatioMax: 50,
    fiber1: {
      materials: [0].map((i) => materials[i]),
      specs: [0, 1].map((i) => specs[i]),
    },
  },
  {
    label: "Rabbit",
    min: 300,
    max: 1000,
    sharings: [1, 2, 3].map((i) => sharings[i]),
    sliverRatioMin: 30,
    sliverRatioMax: 80,
    fiber1: {
      materials: [0, 1].map((i) => materials[i]),
      specs: [1, 2].map((i) => specs[i]),
    },
  },
  { label: "Racoon" },
  { label: "Mongolian", disabled: true },
  { label: "Chinchilla", disabled: true },
  { label: "Jaquard", disabled: true },
];

const kijihabas = [153, 180];
const fablicWeihtStep = 50;
const sliverRatioStep = 5;
const calcFablicWeight = (n: number) =>
  Math.round(n / fablicWeihtStep) * fablicWeihtStep;
const calcSliverRatio = (n: number) =>
  Math.round(n / sliverRatioStep) * sliverRatioStep;
const fabricType = ref(fabricTypes[0]);
const sharing = ref(sharings[0]);
const kijihaba = ref(kijihabas[0]);
const fablicWeight1 = ref(0);
const fablicWeight2 = ref(0);
const fiber1 = reactive({
  material: materials[0],
  spec: specs[0],
  crossSection: crossSections[0],
  lustor: lustors[0],
  finess: finesses[0],
  cutLength: cutLengths[0],
  sliverRatio: 10,
  color: colors[0],
});
const changeFabricType = () => {
  fablicWeight1.value = calcFablicWeight(
    (fabricType.value.min! + fabricType.value.max!) / 2
  );
  fablicWeight2.value = calcFablicWeight(
    (fablicWeight1.value * kijihaba.value) / 100
  );
};

onMounted(async () => {
  const data: Item[] = await $fetch("data.json")
  items.value = data
})
onMounted(() => changeFabricType());
onMounted(() => setTimeout(() => {
  loaded.value = true
}, 3000));
watch(fabricType, (value) => {
  sharing.value = value.sharings![0];
  fiber1.spec = value.fiber1!.specs[0];
  fiber1.sliverRatio = calcSliverRatio(
    (value.sliverRatioMin! + value.sliverRatioMax!) / 2
  );
});
let changing = false;
watch(fablicWeight1, (value) => {
  if (changing) {
    return;
  }
  changing = true;
  fablicWeight2.value = calcFablicWeight((value * kijihaba.value) / 100);
  nextTick(() => (changing = false));
});
watch(fablicWeight2, (value) => {
  if (changing) {
    return;
  }
  changing = true;
  fablicWeight1.value = calcFablicWeight((value * 100) / kijihaba.value);
  nextTick(() => (changing = false));
});
</script>

<style lang="scss" scoped>
.common {
  display: flex;
  background-color: #f6f1ed;

  video {
    margin-left: 20px;
    margin-top: 40px;
  }

  >main {
    width: 100%;
    height: 100%;
    padding-left: 210px;

    /* ローディング画面 */
    .loading {
      position: fixed;
      width: 100%;
      height: 100vh;
      z-index: 555;
      opacity: 1;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url("~/assets/icon/logo.png");
      animation: loading 3s none;

      @keyframes loading {
        0% {
          opacity: 1;
        }

        100% {
          opacity: 0;
          display: none;
        }
      }
    }

    .loaded {
      display: none;
    }

    .search-container {
      margin: 0 auto;
    }

    .search-navigation {
      padding: 0.7rem 0;
      top: 0;
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      margin: 30px;

      .close {
        cursor: pointer;
        padding-left: 1em;
      }

      .search-container {
        display: flex;
        align-items: center;
        justify-content: center;

        .container {
          .select-btn {
            width: 118px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
            cursor: pointer;
            background: #f8f8f8;
            border: none;
            border-radius: 5px 0 0 5px;

            &::before {
              content: "";
              display: inline-block;
              margin-right: 5px;
              border-style: solid;
              border-color: transparent;
              border-width: 0.64952em 0.375em;
              border-top-color: currentColor;
              border-bottom: 0;

            }
          }

          .select-btn .btn-text {
            font-family: system-ui;
          }

          .select-btn.open .arrow-dwn {
            transform: rotate(-180deg);
          }

          .select-btn.open~.list-items {
            display: block;
            z-index: 999;
          }
        }

        .search-bar {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 10px;
          width: 35vw;
          height: 35px;
          background: #f8f8f8;
          border-top: none;
          border-right: none;
          border-left: 1.3px solid #dedddd;
          border-bottom: none;
          border-radius: 0px 5px 5px 0px;

          input[type="search"] {
            width: 100%;
            height: 100%;
            flex: 1;
            padding-left: 10px;
            padding-right: 10px;
            background-color: transparent;
            border: none;
            font-size: 1.2rem;
            font-style: italic;

            &:focus {
              outline: none;
            }
          }

          >i {
            color: #a9a9a9;
            font-size: 1.5rem;
          }
        }

        .create {
          margin-left: 10px;

          .Button {
            box-shadow: none;
            border: 1.3px solid #4d5156;
            background-color: #fff;
            padding: 0.7rem 1rem;

          }
        }
      }

      >.show-button {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-right: 3rem;

        input {
          display: none;
        }

        label {
          i {
            color: #999999;
            font-size: 2.2rem;
            font-weight: 600;
            cursor: pointer;
          }

          .checked {
            color: #4070f4;
          }
        }
      }
    }

    .list-items {
      position: absolute;
      margin-top: 15px;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      display: none;
    }

    .list-items .item {
      display: flex;
      align-items: center;
      list-style: none;
      height: 50px;
      cursor: pointer;
      transition: 0.3s;
      padding: 0 15px;
      border-radius: 8px;
    }

    .list-items .item:hover {
      background-color: #e7edfe;
    }

    .item .item-text {
      font-size: 16px;
      font-weight: 400;
      color: #333;
    }

    .item .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 16px;
      width: 16px;
      border-radius: 4px;
      margin-right: 12px;
      border: 1.5px solid #c0c0c0;
      transition: all 0.3s ease-in-out;
    }

    .item.checked .checkbox {
      background-color: #4070f4;
      border-color: #4070f4;
    }

    .checkbox .check-icon {
      color: #fff;
      font-size: 11px;
      transform: scale(0);
      transition: all 0.2s ease-in-out;
    }

    .item.checked .check-icon {
      transform: scale(1);
    }

    .generator {
      --radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
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

      .summary {
        width: 100%;
      }

    }

    .gifAnimation {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: black url('~/assets/gif/a2kef-yjo8s.gif') center center / cover no-repeat fixed;
      z-index: 555;
      opacity: 1;
      top: 0;
      left: 0;
      display: none;
      justify-content: center;
      align-items: center;
    }

    .active {
      display: block;
    }
  }
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  main {
    flex-direction: column-reverse;
  }

  .login {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>