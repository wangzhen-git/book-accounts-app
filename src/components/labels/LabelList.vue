<template>
    <div class="label-list">
        <div class="labels-wrapper">
            <router-link v-for="tag in tags" :key="tag.id" class="label" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span><span><Icon name="right"/></span>
            </router-link>
        </div>
        <Button @click="createTag">新建标签</Button>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'
    import {tagListModel} from "@/models/tagListModel";
    import Button from "@/components/common/Button.vue";

    tagListModel.fetch()

    @Component({
        components: {Button}
    })
    export default class LabelList extends Vue {
        name: "LabelList"
        tags = tagListModel.data;

        createTag() {
            console.log('new tag');
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
    }

</style>