<template>
    <div>
        <!--Layout是一个插槽-->
        <Layout>
            <!--因为，你这里要传入的是一个number，所以这个我在propA前面加了引号-->
            <!--<Header @update:value="onTypeChange" :type="record.type"/>-->
            <!--上面那行代码就可以简化为下面这一行代码，只要出现了value和update：value这种形式，都可以用sync来进行简化-->
            <!--如何你想在一个组件初始化的时候给他一个初始值，在他更新的时候拿到最新的值，那么你就可以使用sync-->
            <Header :type.sync="record.type"/>
            <Tags />
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



    @Component({
        components: {
            Tags, Header, Calcul
        },
        computed:{
            recordList(){
                return this.$store.state.recordList;
            },
        }
    })
    export default class Money extends Vue {
        name: "Money" | undefined;


        record: RecordItem = {
            selectedTags: [],
            remark: "",
            type: "outcome",
            sum: 0,

        };

        created(): void {
            this.$store.commit('fetchRecords')
        }

        onUpdateRemark(value: string) {
            this.record.remark = value;
        }

        saveRecord() {
            this.$store.commit('createRecord',this.record)
        }




    };
</script>

<style scoped lang="scss">
    @import '~@/assets/style/color.scss';

    p {
        color: $red;
    }
</style>