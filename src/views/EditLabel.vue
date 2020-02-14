<template>
    <div class="edit-label">
        <Header :editLabel="editLabel"/>
        <Input :fieldName="fieldName" :tagName="editLabel[0].name"/>
        <div class="button">
            <button @click="deleteTag">删除标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'
    import {tagListModel} from "@/models/tagListModel";
    import Header from '@/components/edit/Header.vue'
    import Input from "@/components/edit/Input.vue";

    type Tag = {
        id: string
        name: string
    }

    @Component({
        components: {Input, Header}
    })
    export default class EditLabel extends Vue {
        name: "EditLabel"
        editLabel: Tag[] = []
        fieldName = '标签'


        created(): void {
            const id = this.$route.params.id
            tagListModel.fetch()
            const tags = tagListModel.data
            this.editLabel.push(tags.filter(tag => tag.id === id)[0])
            if (this.editLabel) {
            } else {
                this.$router.replace('/404')
            }

        }

        deleteTag(){
            const that = this
            tagListModel.data.forEach(function(current_value,index,value){

                console.log('11');
                console.log(tagListModel.data);
                console.log(current_value);
                console.log('22');
                // if(tagListModel.data[index].id === that.editLabel[0].id){
                //     tagListModel.data.splice(index,1)
                //     tagListModel.save
                // }

            })
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";
    .edit-label {
        .button {
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