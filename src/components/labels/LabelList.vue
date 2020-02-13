<template>
    <div class="label-list">
        <ul>
            <li v-for="tag in tags" :key="tag">
                <span>{{tag}}</span><span><Icon name="right"/></span>
            </li>
        </ul>
        <div class="create-label">
            <button @click="createTag">新建标签</button>
        </div>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'
    import {tagListModel} from "@/models/tagListModel";

    tagListModel.fetch()

    @Component({
        components: {}
    })
    export default class LabelList extends Vue {
        name: "LabelList"
        tags = tagListModel.data;

        createTag() {
            const tagContent = window.prompt('请输入标签名称：')
            if (tagContent) {
                const success = tagListModel.create(tagContent)
                if (success === 'duplicated') {
                    window.alert('标签名重复')
                }
            }
        }
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