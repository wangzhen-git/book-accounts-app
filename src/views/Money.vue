<template>
    <div>
        {{record}}
        <!--Layout是一个插槽-->
        <Layout>
            <!--因为，你这里要传入的是一个number，所以这个我在propA前面加了引号-->
            <!--<Header @update:value="onTypeChange" :type="record.type"/>-->
            <!--上面那行代码就可以简化为下面这一行代码，只要出现了value和update：value这种形式，都可以用sync来进行简化-->
            <!--如何你想在一个组件初始化的时候给他一个初始值，在他更新的时候拿到最新的值，那么你就可以使用sync-->
            <Header :type.sync="record.type"/>
            <Tags :tags-content.sync="tags" @update:value="onUpdateTag"/>
            <Calcul @update:value="onUpdateRemark" :sumValue.sync="record.sum" @submit="saveRecord"/>


            <!--把要传入插槽的内容放在这个地方，另一端使用slot进行接收-->
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Tags from "@/components/money/Tags.vue";
    import Header from "@/components/money/Header.vue";
    import Calcul from "@/components/money/Calcul.vue";
    import {Component, Prop, Watch} from "vue-property-decorator";


    //收集子组件所传递过来的数据,在这个地方做数据类型的声明
    type Record = {
        selectedTags: string[]
        remark: string
        type: string
        sum: number
    }

    @Component({
        components: {
            Tags, Header, Calcul
        }
    })
    export default class Money extends Vue {
        name: "Money";
        //收集数据，准备进行保存
        recordList: Record[] = [];
        tags: string[] = ["衣", "食"];


        record: Record = {
            selectedTags: [],
            remark: "",
            type: "outcome",
            sum: 0
        };

        //获取子组件选中的标签
        onUpdateTag(value: string[]) {
            this.record.selectedTags = value;
        }

        onUpdateRemark(value: string) {
            this.record.remark = value;
        }

        saveRecord() {
            //为了避免直接操作对象出现问题，我们先对原对象进行深拷贝
            const recordClone = JSON.parse(JSON.stringify(this.record))
            //保存所有的数据
            this.recordList.push(recordClone);
        }

        //把数据保存到localStorage,只要recordList有变动，我们就保存
        @Watch("recordList")
        onRecordListChange() {
            window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
            console.log(this.recordList);
        }


    };
</script>

<style scoped lang="scss">
    @import '~@/assets/style/color.scss';

    p {
        color: $red;
    }
</style>