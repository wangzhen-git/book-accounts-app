<template>
    <div class="edit-label">
        edit-label
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'
    import {tagListModel} from "@/models/tagListModel";

    @Component({
        components: {}
    })
    export default class EditLabel extends Vue {
        name: "EditLabel"

        created(): void {
            const id = this.$route.params.id
            tagListModel.fetch()
            const tags = tagListModel.data
            const editLabel = tags.filter(tag=>tag.id === id )[0]
            if(editLabel){
                console.log(editLabel);
            }else{
                this.$router.replace('/404')
            }

        }
    }
</script>

<style scoped lang="scss">

</style>