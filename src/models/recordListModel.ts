// 这里使用了MVC的设计思想，该文件主要是用来实现M

const localStorageKeyName = 'recordList'
const recordListModel = {
    clone(data:RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    // 获取数据
    fetch() {
        // 这里需要注意的是，在取数据的时候，就要把数据类型给as掉
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
    },
    // 保存数据
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }

}

//这是一种新的导出方式，你可以选择使用，也可以选择不使用，看你自己
export {recordListModel}
