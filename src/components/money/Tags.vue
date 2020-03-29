<template>
    <div class="tags">
        <ul class="current">
            <!--这个地方设置class的方式真的很棒啊-->
            <li v-for="tag in tagList" @click="toggle(tag)" :class="{selected:selectedTag.indexOf(tag)>=0}" :key="tag.id">
                {{tag}}
            </li>
        </ul>
        <div class="new">
            <Button @click="createTagMix">创建标签</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import Button from "@/components/common/Button.vue";
    import TagHelper from "@/mixins/tagHelper.ts";
    import {mixins} from "vue-class-component";


    @Component({
        components: {Button},
        computed:{
            tagList(){
                return this.$store.state.tagList
            }
        }
    })
    export default class Tags extends mixins(TagHelper){

        selectedTag: string[] = [];

        created(): void {
            this.$store.commit('fetchTags')
        }

        toggle(tag: string) {
            const index = this.selectedTag.indexOf(tag);
            if (index >= 0) {
                this.selectedTag.splice(index, 1);
            } else {
                this.selectedTag.push(tag);
            }

            //这里是把选中的标签传递到父组件
            this.$emit('update:value',this.selectedTag)
        }

        // create(){
        //     console.log('create');
        //     const name = window.prompt('请输入标签名称：')
        //     if(!name){
        //         return window.alert('标签名称不能为空')
        //     }else{
        //         this.$store.commit('createTag',name)
        //     }
        // }


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
    }

</style>