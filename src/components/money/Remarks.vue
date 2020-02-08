<template>
    <div class="calculator">
        <label>
            <span><Icon name="remark"/>备注:</span>
            <input type="text" class="input" placeholder="点击填写备注...">
            <span class="number">0.00</span>
        </label>
        <div class="keyboard">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>今天</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button>删除</button>
            <button>完成</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Remarks"
    };
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

        .keyboard{
            display: flex;
            flex-wrap: wrap;

            button{
                display: block;
                border: none;
                /*这句代码是我在编程的时候没有想到的*/
                width: 25%;
                height: 50px;
                background-color: transparent;

            }

            :nth-child(1),:nth-child(3),:nth-child(6),:nth-child(8),:nth-child(9),:nth-child(11),:nth-child(14){
                border: 1px solid #e1e1e1;

            }
            :nth-child(16){
                background-color: $color-main-tonal;
            }
        }


    }

</style>