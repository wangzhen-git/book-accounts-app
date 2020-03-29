//Label页面的所有数据我都集中到这里进行操作了

import  createId from '@/lib/idCreator'

type Tag = {
    id: string
    name: string
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    // 联合类型：success 表示成功 duplicated表示文件名重复，如果你的返回值只有几个的话，你就直接在返回类型的时候，把返回值放上去好了,这样可以避免调用的人拼错单词，导致捕获不到错误
    create: (tagContent: string) => 'success' | 'duplicated'
    save: () => void
    edit: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
}

const tagListModel: TagListModel = {
    data: [],
    // 获取数据
    fetchRecords() {
        // 这里需要注意的是，在取数据的时候，就要把数据类型给as掉
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
        return this.data;
    },
    create(tagContent: string) {
    },
    // 保存数据
    saveRecord() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    edit(id, name) {
        const idList = this.data.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const nameList = this.data.map(item => item.name)
            if (nameList.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name
                this.save()
                return 'success'
            }
        } else {
            return 'not found'
        }
    },
    remove(id) {
    }


}

//这是一种新的导出方式，你可以选择使用，也可以选择不使用，看你自己
export {tagListModel}
