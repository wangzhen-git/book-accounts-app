<template>
    <div class="label-list">
        <div class="labels-wrapper">
            <router-link v-for="tag in tags" :key="tag.id" class="label" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span><span><Icon name="right"/></span>
            </router-link>
        </div>
        <Button @click="createTagMix">新建标签</Button>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'
    import {tagListModel} from "@/models/tagListModel";
    import Button from "@/components/common/Button.vue";
    import {mixins} from "vue-class-component";
    import TagHelper from "@/mixins/tagHelper";

    @Component({
        components: {Button},
        computed:{
            tags(){
                return this.$store.state.tagList
            }
        }
    })
    export default class LabelList extends mixins(TagHelper){


        // createTag() {
        //     const tagContent = window.prompt('请输入标签名称：')
        //     if(tagContent){
        //         this.$store.commit('createTag',tagContent)
        //         // store.createTag(tagContent)
        //     }
        // }
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