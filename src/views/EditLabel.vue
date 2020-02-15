<template>
    <Layout>
        <div class="edit-label">
            <Header :editLabel="editLabel"/>
            <FromItem :fieldName="fieldName" :tagName="editLabel[0].name"/>
            <Button>删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'
    import {tagListModel} from "@/models/tagListModel";
    import Header from '@/components/edit/Header.vue'
    import FromItem from "@/components/common/FromItem.vue";
    import Button from "@/components/common/Button.vue";

    type Tag = {
        id: string
        name: string
    }

    @Component({
        components: {Button, FromItem, Header}
    })
    export default class EditLabel extends Vue {
        editLabel: Tag[] = []
        fieldName = '标签名'


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

        deleteTag() {
            const that = this
            tagListModel.data.forEach(function (current_value, index, value) {

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
</style>