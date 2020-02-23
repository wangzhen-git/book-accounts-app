// 这里使用了MVC的设计思想，该文件主要是用来实现M

import clone from "@/lib/clone";

const localStorageKeyName = 'recordList'
const recordListModel = {
    data:[] as RecordItem[],
    // 封装创建的操作
    create(record:RecordItem){
        const cloneRecord:RecordItem = clone(record)
        cloneRecord.createdAt = new Date()
        this.data.push(cloneRecord)
    },
    // 获取数据
    fetch() {
        // 这里需要注意的是，在取数据的时候，就要把数据类型给as掉
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
        return this.data;
    },
    // 保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }

}

//这是一种新的导出方式，你可以选择使用，也可以选择不使用，看你自己
export {recordListModel}
