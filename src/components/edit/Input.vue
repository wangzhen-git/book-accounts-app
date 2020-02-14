<template>
    <label>
        <span><Icon name="remark"/>{{this.fieldName}}:</span>
        <input type="text" class="input" :placeholder="`点击填写${this.fieldName}...`" v-model="this.tagName">
    </label>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class Input extends Vue {
        name: "Input"
        @Prop({required:true}) fieldName!:  string
        @Prop(String) tagName:  string | undefined
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

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
</style>