<template>
    <div class="calculator">
        <label>
            <span><Icon name="remark"/>备注:</span>
            <input type="text" class="input" placeholder="点击填写备注...">
            <!--这里学到了，给它一个默认值-->
            <span class="number">{{sum}}</span>
        </label>
        <div class="keyboard">
            <button @click="onCalcul">1</button>
            <button @click="onCalcul">2</button>
            <button @click="onCalcul">3</button>
            <button>今天</button>
            <button @click="onCalcul">4</button>
            <button @click="onCalcul">5</button>
            <button @click="onCalcul">6</button>
            <button>+</button>
            <button @click="onCalcul">7</button>
            <button @click="onCalcul">8</button>
            <button @click="onCalcul">9</button>
            <button>-</button>
            <button @click="onCalcul">.</button>
            <button @click="onCalcul">0</button>
            <button @click="onRemove">删除</button>
            <button>完成</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component

    export default class Calcul extends Vue {
        sum = "0";

        // methods
        //指定时间名称为鼠标时间
        onCalcul(event: MouseEvent) {
            //强制指定类型，避免ts因为各种原因持续报错，导致代码无法正常继续
            //强制指定类型我们可能会经常用到，主要就是用在 event.target 上面
            const button = (event.target as HTMLButtonElement);
            //在这里强制指定类型是为了避免后面的无效报错
            const input = button.textContent as string;

            //这句话后面加感叹号的意思是，把"空"给排除，其他的还是保留原来的
            // const input = button.textContent!;
            if (this.sum.length >= 15) {
                return;
            } else {
                if (this.sum === "0") {
                    if ("0123456789".indexOf(input) >= 0) {
                        this.sum = input;
                        return;
                    } else {
                        this.sum += input;
                    }
                    return;
                }
                if (this.sum.indexOf(".") >= 0 && input === ".") return;
                this.sum += input;
            }


        }

        onRemove() {
            if (this.sum.length === 1) {
                this.sum = "0";
            } else {
                this.sum = this.sum.slice(0, -1);
            }

        }


    }
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

    .calculator {
        background-color: #f1f1f1;
        border-top: 1px solid #e1e1e1;

        label {

            display: flex;

            span {
                padding-left: 4px;
                display: flex;
                align-items: center;
                font-size: 14px;

                .icon {
                    color: $color-main-tonal;
                    padding-right: 4px;
                    width: 24px;
                    height: 24px;
                    text-align: center;
                    justify-content: center;
                }
            }

            input {
                background: transparent;
                box-shadow: none;
                border: none;
                flex-grow: 2;
                margin: 0 4px;
            }

            .number {
                flex-grow: 1;
            }

        }

        .keyboard {
            display: flex;
            flex-wrap: wrap;

            button {
                display: block;
                border: none;
                /*这句代码是我在编程的时候没有想到的*/
                width: 25%;
                height: 50px;
                background-color: transparent;

            }

            :nth-child(1), :nth-child(3), :nth-child(6), :nth-child(8), :nth-child(9), :nth-child(11), :nth-child(14) {
                border: 1px solid #e1e1e1;

            }

            :nth-child(16) {
                background-color: $color-main-tonal;
            }
        }


    }

</style>