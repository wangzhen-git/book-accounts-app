<template>
    <div class="tags">
        <ul class="current">
            <!--这个地方设置class的方式真的很棒啊-->
            <li v-for="tag in tagsContent" @click="toggle(tag)" :class="{selected:selectedTag.indexOf(tag)>=0}">
                {{tag}}
            </li>
        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Tags extends Vue {
        name: "Tags";
        @Prop() tagsContent: string[] | undefined;
        selectedTag: string[] = [];

        toggle(tag: string) {
            const index = this.selectedTag.indexOf(tag);
            if (index >= 0) {
                this.selectedTag.splice(index, 1);
            } else {
                this.selectedTag.push(tag);
            }
        }


    };
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

    .tags {
        font-size: 14px;
        background-color: #fff;
        padding-bottom: 10px;

        .current {
            display: flex;
            min-height: 180px;
            align-items: flex-start;
            padding: 4px 0;

            li {
                border: 1px solid #ccc;
                display: inline-block;
                /*这里我没有直接设置宽度，而是用padding进行撑开*/
                padding: 0 12px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                border-radius: 4px;
                margin-left: 4px;
            }

            li.selected {
                background-color: $color-main-tonal;
            }
        }

        .new {
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