<template>
  <aside>
    <header>
      <h1>
        <a @click.stop="emits('top')"><img src="~/assets/icon/logo.png" alt=""></a>
      </h1>
    </header>
    <ul>
      <li><a href="#" class="header">Menu</a></li>
      <li v-for="item of menuItems">
        <a href="#" :class="{ level1: true, active: actives.includes(item.label), children: item.children }"
          @click.stop="actives = actives.includes(item.label) ? actives.filter(i => i != item.label) : [...actives, item.label]">{{
            item.label }}</a>
        <ul v-if="item.children && actives.includes(item.label)">
          <li v-for="child of item.children">
            <a href="#" :class="{ level2: true, active: actives.includes(child.label), children: child.children }"
              @click.stop="actives = actives.includes(child.label) ? actives.filter(i => i != child.label) : [...actives, child.label]">{{
                child.label }}</a>
            <ul v-if="child.children && actives.includes(child.label)">
              <li v-for="c of child.children">
                <a href="#" :class="{ level3: true, active: actives.includes(c.label) }"
                  @click.stop="actives = actives.includes(c.label) ? actives.filter(i => i != c.label) : [...actives, c.label]">{{
                    c.label }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
const props = defineProps<{
  labels: string[];
}>();
const emits = defineEmits<{
  (e: "top"): void;
  (e: "update:labels", labels: string[]): void;
}>();
type MenuItem = {
  label: string;
  children?: MenuItem[];
}
const menuItems: MenuItem[] = [{
  label: "Fabric", children: [
    { label: "Fox" },
    { label: "Mink" },
    { label: "Rabbit" },
    { label: "Mongolia" },
    { label: "Sherpa" },
    { label: "Cheetah" },
    {
      label: "Others", children: [
        { label: "Raccoon" },
        { label: "Marmot" }]
    }]
},
{
  label: "Garment", children: [
    {
      label: "Outerwear", children: [
        { label: "Long coat" },
        { label: "Half coat" },
      ]
    },
    { label: "Tops" },
    { label: "Bottoms" },
    { label: "Goods・Accessory" }]
},
{ label: "Cat walk" },
]
const actives = computed({
  get() {
    return props.labels
  },
  set(value) {
    emits("update:labels", value)
  }
})
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 280px;
  overflow: auto;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
  background-color: #c4bfb9;

  header {
    h1 {
      background-color: #c4bfb9;
      cursor: pointer;

      img {
        width: 70px;
        margin: 4px;
        background-color: transparent;
      }
    }
  }

  ul {
    background-color: #c4bfb9;

    li {
      a {
        display: block;
        padding: 15px 40px;
        text-decoration: none;
        color: rgb(68, 68, 68);

        &.level2 {
          padding-left: 80px;
        }

        &.level3 {
          padding-left: 120px;
        }

        &.header {
          background-color: rgb(137, 137, 137);
          color: #f6f1ed;
        }

        &.active:not(.children) {
          background-color: rgb(68, 68, 68);
          color: #f6f1ed;
        }

        &:not(&.header) {
          :hover {
            background-color: rgb(68, 68, 68);
            color: #f6f1ed;
          }

          &.children {
            &::before {
              content: "▶";
              margin-right: 10px;
            }

            &.active::before {
              content: "▼";
            }
          }
        }
      }
    }
  }
}
</style>