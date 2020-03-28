<template>
    <div class="new">
<!--        这个地方我思考了很久，就是如果每一个调用button的地方都需要执行一个事件应该怎么办？-->
<!--        难道每一个父组件都传一个事件过来吗？-->
<!--        下面这句代码解决了我的问题，小button如果被点击了，就触发大Button的click事件-->
        <button @click="$emit('click',$event)">
            <slot/>
        </button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class Button extends Vue {
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";
    .new {
        button {
            background-color: $color-main-tonal;
            padding: 0 10px;
            height: 24px;
            border: none;
            border-radius: 4px;
        }
    }
</style>