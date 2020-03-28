

//这个文件夹里面放的是一个全局的声明,在这个地方声明之后，不需要引用，就可以全局使用了
//收集子组件所传递过来的数据,在这个地方做数据类型的声明
type RecordItem = {
    selectedTags: string[]
    remark: string
    type: string
    sum: number
    //注意，你除了可以写一个数据类型之外，你还，可以写一个类，在js里面，类也叫构造函数
    //这里加问号的意思是说这个createdAt可以不存在，也就是可以为undefined
    createdAt?: Date
}

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

interface  Window {
    tagList:Tag[];
    createTag:(tagContent: string) => void;
    deleteTag:(id:string)=>boolean;
    updateTag:TagListModel['edit'];
    findTag:(id:string)=>Tag|undefined;
}