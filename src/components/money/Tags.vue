<template>
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
</template>

<script lang="ts">
    export default {
        name: "Tags"
    };
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";
    .tags {
        font-size: 14px;
        background-color: #fff;
        padding-bottom: 10px;

        .current{
            display: flex;
            min-height: 180px;
            align-items: flex-start;
            padding: 4px 0;

            li{
                border: 1px solid #ccc;
                display: inline-block;
                /*这里我没有直接设置宽度，而是用padding进行撑开*/
                padding: 0 12px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                border-radius: 4px;
                margin-left: 4px;
            }
        }
        .new{
            button{
                background-color: $color-main-tonal;
                padding: 0 10px;
                height: 24px;
                border: none;
                border-radius: 4px;
            }
        }
    }

</style>