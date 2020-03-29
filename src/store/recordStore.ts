import clone from "@/lib/clone";

const localStorageKeyName = 'recordList'


const recordStore={
    recordList:[] as RecordItem[],
    fetchRecords(){
        this.recordList= JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
        return this.recordList;
    },
    saveRecord(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
    },
    createRecord(record:RecordItem){
        const cloneRecord:RecordItem = clone(record)
        cloneRecord.createdAt = new Date();
        this.recordList&&this.recordList.push(cloneRecord);
        recordStore.saveRecord()
    }
}

recordStore.fetchRecords()

export default recordStore;
