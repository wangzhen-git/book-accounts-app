<template>
    <div class="label-list">
        <ul>
            <li>
                <span>衣</span><span><Icon name="right"/></span>
            </li>
            <li>
                <span>食</span><span><Icon name="right"/></span>
            </li>
            <li>
                <span>住</span><span><Icon name="right"/></span>
            </li>
            <li>
                <span>行</span><span><Icon name="right"/></span>
            </li>
        </ul>
        <div class="create-label">
            <button>新建标签</button>
        </div>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class LabelList extends Vue {
        name: "LabelList"
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

    .label-list {
        background-color: $color-sub-color;

        ul {
            margin-top: 6px;
            padding: 0 20px;

            li {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid $color-background-color;
                padding: 4px 0;


                span {
                    display: inline-block;
                }

            }
        }

        .create-label {
            margin-top: 20px;
            button {
                background-color: $color-main-tonal;
                padding: 0 10px;
                height: 24px;
                border: none;
                border-radius: 4px;
            }
        }
    }

</style>