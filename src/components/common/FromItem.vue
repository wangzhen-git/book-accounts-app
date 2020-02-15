<template>
    <label>
        <span><Icon name="remark"/>{{this.fieldName}}:</span>
        <input :value="this.tagName" type="text" class="input" :placeholder="this.tagName" @change="changeInput" >
    </label>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'

    @Component({
        components: {}
    })

    export default class FromItem extends Vue {
        @Prop({required:true}) fieldName!:  string
        @Prop(String) tagName:  string | undefined

        changeInput(){
            console.log(this.tagName);
        }


    }
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

    label {
        display: flex;
        background-color: white;
        margin-top: 6px;
        margin-bottom: 6px;
        padding: 0 10px;

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
</style>