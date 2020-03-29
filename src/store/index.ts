import Vue from 'vue'
import Vuex, {mapState} from 'vuex'
import clone from "@/lib/clone";
import createId from "@/lib/idCreator";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList:[] as RecordItem[],
    tagList:[] as Tag[]
  },
  mutations: {
    createRecord(state,record:RecordItem){
      const cloneRecord:RecordItem = clone(record)
      cloneRecord.createdAt = new Date();
      state.recordList.push(cloneRecord);
      console.log(state.recordList);
      store.commit('saveRecord')
    },
    saveRecord(state){
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchRecords(state){
      state.recordList= JSON.parse(window.localStorage.getItem('recordList') || "[]") as RecordItem[];
    },
    fetchTags(state){
      return state.tagList= JSON.parse(window.localStorage.getItem('tagList') || "[]");
    },
    createTag(state,tagContent){
      const tagContents =state.tagList.map(item => item.name)
      if (tagContents.indexOf(tagContent) >= 0) {
        window.alert('标签名重复')
        return 'duplicated'
      }
      const id  = createId().toString()
      state.tagList.push({id, name: tagContent})
      store.commit('saveTag')
      window.alert('添加成功')
      return 'success';
    },
    saveTag(state){
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    findTag(state,id){
      return state.tagList.filter(tag => tag.id === id)[0]
    },
    deleteTag(state,id:string){
      // 这个删除的方法我想了好久啊，啊啊啊，原来这样子就可以解决啊，厉害了
      let index = -1
      for (let i = 0; i < this.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i
          break
        }
      }
      state.tagList.splice(index,1);
      store.commit('saveTag')
      return true;
    },




  },
  actions: {
  },
  modules: {
  }
})

export default store;
