<template>
    <div>
        <!--Layout是一个插槽-->
        <Layout>
            <div class="tags">
                <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <div class="new">
                    <button>新增标签</button>
                </div>
            </div>
            <div class="remarks">
                <label>
                    <spna>备注</spna>
                    <input type="text">
                </label>

            </div>
            <div class="budget">
                <ul>
                    <li class="selected">收入</li>
                    <li>支出</li>
                </ul>
            </div>
            <div class="calculator">
                <div class="monitor">
                    100
                </div>
                <div class="keyboard">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>

            </div>

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
    @import '~@/assets/style/color.scss';

    p {
        color: $red;
    }
</style>