<template>
    <!--
    Layout：插槽

    因为money、labels和statistics三个页面除了要插入的内容不同之外，其他的东西都是相同的，
    所示我们把相同的东西提取出来做成一个槽，把不同的东西插到这个槽里面，这样的处理方式大大
    增加了组件的复用性，减少了重复代码的数量
    -->

    <div class="nav-wrapper">
        <div class="content">
            <slot/>
        </div>
        <Nav/>
    </div>

</template>

<script lang="ts">


    export default {
        name: "Layout"
    };
</script>

<style scoped lang="scss">
    .nav-wrapper {
        display: flex;
        height: 100vh;
        flex-direction: column;

        .content {
            flex-grow: 1;
            overflow: auto;
        }
    }

</style>