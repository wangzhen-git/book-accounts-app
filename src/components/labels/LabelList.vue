<template>
    <div class="label-list">
        <div class="labels-wrapper">
            <router-link v-for="tag in tags" :key="tag.id" class="label" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span><span><Icon name="right"/></span>
            </router-link>
        </div>
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

        .labels-wrapper {
            margin-top: 6px;
            padding: 0 20px;

            .label{
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