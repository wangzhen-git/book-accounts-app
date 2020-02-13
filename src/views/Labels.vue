<template>
    <div>
        <Layout>
            <Header/>
            <LabelList/>

        </Layout>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'
    import Header from "@/components/labels/Header.vue";
    import LabelList from "@/components/labels/LabelList.vue";

    @Component({
        components: {LabelList, Header}
    })

    export default class Labels extends Vue {
        name:'Labels';
    }
</script>

<style scoped lang="scss">

</style>