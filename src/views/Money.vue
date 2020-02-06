<template>
    <div class="nav-wrapper">
        <div class="content">
            this is money
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Money"
    };
</script>

<style scoped lang="scss">
.nav-wrapper{
    border: 1px solid red;
    display: flex;
    height: 100vh;
    flex-direction: column;

    .content{
        border: 1px solid blue;
        flex-grow: 1;
        overflow: auto;
    }
}
</style>