<template>
    <aside>
        <header>
            <h1>
                <i><img src="~/assets/icon/logo.png" alt=""></i>
            </h1>
        </header>
        <ul>
            <li><a href="#" :class="{ active: isActive }">Marketplace</a></li>
            <li><a href="#">Menu</a></li>
        </ul>
    </aside>
</template>

<script lang="ts" setup>
const isActive = ref(true)
</script>

<style lang="scss" scoped>
aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 280px;
    overflow: hidden;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
    background-color: #c4bfb9;

    header {
        h1 {
            background-color: #c4bfb9;

            i {
                font-size: 3.5rem;
                color: #1069e0;
                margin-bottom: 50px;
                transform: rotate(-50deg);
                padding-top: 30px;
                padding-left: 13px;
                background-color: transparent;

                img {
                    background-color: transparent;
                }
            }

        }
    }

    ul {


        li {


            a {
                display: block;
                padding: 15px 40px;
                text-decoration: none;
                background-color: #c4bfb9;
                color: rgb(68, 68, 68);

                &.active {
                    background-color: rgb(68, 68, 68);
                    color: #f6f1ed;
                }

                &:hover {
                    background-color: rgb(68, 68, 68);
                    color: #f6f1ed;
                }

            }
        }
    }
}
</style>