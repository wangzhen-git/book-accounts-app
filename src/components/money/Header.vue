<template>
    <div class="header">
        <ul>
            <li class="selected">
                收入
            </li>
            <li>
                支出
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Header"
    };
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

    .header {
        font-family: $font-kai;
        background-color: $color-main-tonal;
        font-size: $font-size-title1;

        ul {
            display: flex;

            li {
                flex-grow: 1;
                font-size: $font-kai;
                position: relative;

                /*这个地方学到了*/
                &.selected::after{
                    content:'';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background-color: #f2f2f2;
                    height: 2px;
                    width: 100%;
                }
                padding: 6px 0;
            }
        }
    }

</style>