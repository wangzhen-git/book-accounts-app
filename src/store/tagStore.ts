import createId from "@/lib/idCreator";

const localStorageKeyName = 'tagList'


const tagStore={
    tagList:[] as Tag[],
    fetchTags(){
        this.tagList= JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
        return this.tagList;
    },
    findTag(id:string){
        return this.tagList.filter(tag => tag.id === id)[0]
    },
    createTag(tagContent:string){

        const tagContents =this.tagList.map(item => item.name)
        if (tagContents.indexOf(tagContent) >= 0) {
            window.alert('标签名重复')
            return 'duplicated'
        }
        const id  = createId().toString()
        this.tagList.push({id, name: tagContent})
        this.saveTag()
        window.alert('添加成功')
        return 'success';
    },
    deleteTag(id:string){
        // 这个删除的方法我想了好久啊，啊啊啊，原来这样子就可以解决啊，厉害了
        let index = -1
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i
                break
            }
        }
        this.tagList.splice(index,1);
        this.saveTag()
        return true;
    },
    updateTag(id:string,name:string){
        const idList = this.tagList.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const nameList = this.tagList.map(item => item.name)
            if (nameList.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0]
                tag.name = name
                this.saveTag()
                return 'success'
            }
        } else {
            return 'not found'
        }
    },
    saveTag(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(tagStore.tagList));
    }

}

tagStore.fetchTags();

export  default tagStore;