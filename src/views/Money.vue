<template>
    <div>
        <!--Layout是一个插槽-->
        <Layout>
            <!--因为，你这里要传入的是一个number，所以这个我在propA前面加了引号-->
            <Header :propA="222"/>
            <Tags/>
            <Remarks/>


            <!--把要传入插槽的内容放在这个地方，另一端使用slot进行接收-->
        </Layout>
    </div>
</template>

<script lang="ts">
    import Tags from '@/components/money/Tags.vue';
    import Header from '@/components/money/Header.vue';
    import Remarks from '@/components/money/Remarks.vue';
    export default {
        name: "Money",
        components: { Remarks, Header, Tags}
    };
</script>

<style scoped lang="scss">
    @import '~@/assets/style/color.scss';

    p {
        color: $red;
    }
</style>