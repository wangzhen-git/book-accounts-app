<template>
    <div>
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
    import {recordListModel} from "@/models/recordListModel";
    import {tagListModel} from "@/models/tagListModel";

    //提示：下面我注释掉的这一段代码都是做数据库迁移的时候才会用到了，这里我不做数据库迁移，就先删除了。
    // const version = window.localStorage.getItem("version") || "0";
    // const recordList: Record[] = JSON.parse(window.localStorage.getItem("recordList") || "[]");
    // 数据库升级 也叫数据库迁移
    // if (version === "0.0.1") {
    //     recordList.forEach(record => {
    // record.createdAt = new Date(2020, 1, 2);
    // });
    //保存数据
    // window.localStorage.setItem("recordList", JSON.stringify(recordList));
    // }
    //迁移并且保存完了之后把版本号重置为0.0.2

    // window.localStorage.setItem("version", "0.0.1");

    const recordList = recordListModel.fetch()
    const tagList = tagListModel.fetch()


    @Component({
        components: {
            Tags, Header, Calcul
        }
    })
    export default class Money extends Vue {
        name: "Money" | undefined;
        //收集数据，准备进行保存
        recordList: RecordItem[] = recordList;
        tags = tagList


        record: RecordItem = {
            selectedTags: [],
            remark: "",
            type: "outcome",
            sum: 0,

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
            const recordClone: RecordItem = recordListModel.clone(this.record)
            recordClone.createdAt = new Date();

            //保存所有的数据
            this.recordList.push(recordClone);
        }

        //把数据保存到localStorage,只要recordList有变动，我们就保存
        @Watch("recordList")
        onRecordListChange() {
            recordListModel.save(this.recordList);
        }


    };
</script>

<style scoped lang="scss">
    @import '~@/assets/style/color.scss';

    p {
        color: $red;
    }
</style>