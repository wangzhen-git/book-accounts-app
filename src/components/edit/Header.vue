<template>
    <div class="header">
        <div class="tab-bar">
            <router-link to="/labels" class="back" @click="saveTagContent"><span @click="saveTagContent"><Icon name="left"/></span>
            </router-link>
            <h1>类别设置</h1>
        </div>
        <ul>
            <li>
                收入
            </li>
            <li>
                支出
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";
    import {tagListModel} from "@/models/tagListModel";

    type Tag = {
        id: string
        name: string
    }

    @Component
    export default class Header extends Vue {

        @Prop() editLabel!: Tag[];

        saveTagContent() {
            tagListModel.edit(this.editLabel)
        }

    }

</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

    .header {
        font-family: $font-kai;
        background-color: $color-main-tonal;
        font-size: $font-size-title1;

        .tab-bar {
            position: relative;
            padding-top: 4px;

            .back {
                position: absolute;
                left: 10px;
            }


            h1 {
                font-size: 18px;
            }
        }

        ul {
            display: flex;

            li {
                flex-grow: 1;
                font-size: $font-kai;
                position: relative;

                /*这个地方学到了*/
                &.selected::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background-color: #f2f2f2;
                    height: 2px;
                    width: 100%;
                }

                /*padding: 6px 0;*/
            }
        }
    }

</style>