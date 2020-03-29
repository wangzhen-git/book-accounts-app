import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class TagHelper extends Vue{
    //使用mixins方法封装createTag
    createTagMix(){
        const name = window.prompt('请输入标签名称：');
        if(!name){
            return window.alert('标签名称不能为空')
        }else{
            this.$store.commit('createTag',name)
        }
    }
}

export default TagHelper;
