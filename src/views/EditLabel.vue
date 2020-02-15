<template>
    <Layout>
        <div class="edit-label">
            <Header :editLabel="editLabel"/>
            <FromItem :fieldName="fieldName" :tagName="editLabel.name" @changeInput="changeInput"/>
            <Button @onclick="deleteTag">删除标签</Button>
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
        editLabel?: { id: string, name: string } = undefined
        fieldName = '标签名'


        created(): void {
            const id = this.$route.params.id
            tagListModel.fetch()
            const tags = tagListModel.data
            const editLabel = tags.filter(tag => tag.id === id)[0]
            if (editLabel) {
                this.editLabel = editLabel
            } else {
                this.$router.replace('/404')
            }

        }

        deleteTag() {
            if(this.editLabel){
                tagListModel.remove(this.editLabel.id)
                this.$router.push('/labels')
            }
        }

        changeInput(name: string) {
            if (this.editLabel) {
                tagListModel.edit(this.editLabel.id, name)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";
</style>