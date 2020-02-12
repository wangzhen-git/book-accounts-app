// 这里使用了MVC的设计思想，该文件主要是用来实现M

const localStorageKeyName = 'recordList'
const model = {

    // 获取数据
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
    },
    // 保存数据
    save(data) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }

}

//这是一种新的导出方式，你可以选择使用，也可以选择不使用，看你自己
export {model}
