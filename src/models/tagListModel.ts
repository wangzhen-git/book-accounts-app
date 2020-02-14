//Label页面的所有数据我都集中到这里进行操作了
const localStorageKeyName = 'tagList'

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
    edit: (obj:Tag[]) => void
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
        this.data.push({id: tagContent, name: tagContent})
        this.save()
        return 'success';
    },
    // 保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    edit(obj) {
        console.log('123');
        console.log(obj);
        const index = this.data.indexOf(obj[0])
        this.data[index].id = obj[0].name
        this.data[index].name = obj[0].name
        console.log(this.data[index]);
        this.save()
    }


}

//这是一种新的导出方式，你可以选择使用，也可以选择不使用，看你自己
export {tagListModel}
