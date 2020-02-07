<template>
    <!--我在这里直接封装了一个Icon组件，为了方便在每个组件中引入svg图片-->
    <svg class="icon">
        <!--这里props的书写方式你需要注意一下-->
        <use :xlink:href="`#`+ name"/>
    </svg>
</template>

<script lang="ts">
    //这段代码的主要作用是引入某一目录下的所有后缀相同的文件
    let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {
        //经验告诉我，这个代码在单元测试的时候可能会有问题，于是我就加了一个try catch
        importAll(require.context("../assets/icons", true, /\.svg$/));
    } catch (error) {
        console.log(error);
    }
    export default {
        name: "Icon",
        props:['name']
    };
</script>

<style scoped lang="scss">
    .icon{
        /*这个地方我真的学到了，我不关心一个icon到底是多大，我就知道，一个icon放到一个字旁边，应该是和这个字差不多大*/
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>