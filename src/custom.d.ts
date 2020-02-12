

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
