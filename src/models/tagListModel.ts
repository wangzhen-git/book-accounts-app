//Label页面的所有数据我都集中到这里进行操作了
const localStorageKeyName = 'tagList'

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
    fetch() {
        // 这里需要注意的是，在取数据的时候，就要把数据类型给as掉
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
        return this.data;
    },
    create(tagContent: string) {
        const tagContents = this.data.map(item => item.name)
        if (tagContents.indexOf(tagContent) >= 0) {
            return 'duplicated'
        }
        const id  = createId().toString()
        this.data.push({id, name: tagContent})
        this.save()
        return 'success';
    },
    // 保存数据
    save() {
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
        // 这个删除的方法我想了好久啊，啊啊啊，原来这样子就可以解决啊，厉害了
        let index = -1
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i
                break
            }
        }
        this.data.splice(index,1);
        this.save()
        return true;
    }


}

//这是一种新的导出方式，你可以选择使用，也可以选择不使用，看你自己
export {tagListModel}
