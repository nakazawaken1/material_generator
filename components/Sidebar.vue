<template>
    <aside>
        <header>
            <h1>
                <i class="fa-solid fa-scroll"></i>
            </h1>
        </header>
        <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Menu</a></li>
        </ul>
    </aside>
</template>

<script>

</script>

<style lang="scss" scoped>
aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 270px;
    overflow: hidden;
    background: #f8f8f8;

    header {
        h1 {
            i {
                font-size: 3.5rem;
                color: #1069e0;
                margin-bottom: 50px;
                transform: rotate(-50deg);
                padding-top: 30px;
                padding-left: 13px;

            }

        }
    }

    ul {
        li {
            a {
                display: block;
                padding: 15px 40px;
                text-decoration: none;

                &:hover {
                    background-color: #1069e0;
                    color: #fff;
                }

            }
        }
    }
}
</style>