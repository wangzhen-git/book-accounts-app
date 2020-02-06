<template>
    <div>
        <!--Layout是一个插槽-->
        <Layout>
            <!--把要传入插槽的内容放在这个地方，另一端使用slot进行接收-->
            <p>this is money,sloted by slot</p>
        </Layout>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Money"
    };
</script>

<style scoped lang="scss">
</style>