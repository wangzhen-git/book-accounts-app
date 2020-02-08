<template>
    <div class="header">
        <ul>
            <li :class="type === `income` && `selected`" @click="changeType('income')">
                收入
            </li>
            <li :class="type === `outcome` && `selected`" @click="changeType('outcome')">
                支出
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    //要想知道这个 Component 怎么使用，直接看vue-property-decorator  文档
    import {Component, Prop} from "vue-property-decorator";

    //这里的意思就是告诉ts，下面的这个东西是一个组件，加了这个的好处就是，下面的数据会自动的被放到data里面，函数会自动的被放到方法里面

    @Component

    export default class Header extends Vue {
        type = "income";

        //@prop 告诉 Vue 这个 propA 不是 data，而是 props
        //Number 告诉 Vue propA 是个  number,运行时类型
        //number | undefined; 编译时类型
        //注意，当你这里写 propA 可以是 undefined ，那么你任何时候都要去检查这个值是不是undefined
        @Prop(Number) propA: number | undefined;

        changeType(type: string) {
            if (type !== "income" && type !== "outcome") {
                throw  new Error("type is not right");
            }

            this.type = type;

            console.log(this.propA);
        }

    }


    // export default {
    //     name: "Header",
    //     data(){
    //         return{
    //             type:'income'
    //         }
    //     },
    //     methods:{
    //         changeType(type){
    //             if(type!== 'income' && type!== 'outcome'){
    //                 throw  new  Error('type is not right')
    //             }
    //
    //             this.type = type
    //         }
    //     }
    //
    // };
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

    .header {
        font-family: $font-kai;
        background-color: $color-main-tonal;
        font-size: $font-size-title1;

        ul {
            display: flex;

            li {
                flex-grow: 1;
                font-size: $font-kai;
                position: relative;

                /*这个地方学到了*/
                &.selected::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background-color: #f2f2f2;
                    height: 2px;
                    width: 100%;
                }

                padding: 6px 0;
            }
        }
    }

</style>