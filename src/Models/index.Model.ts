export class IndexModel {

    //!fields
    id: number = 0;

    static mapDataApi(formData) {
        const item = new IndexModel();

        //! map fields
        item.id = formData['id'] == null ? 0 : formData['id'];
        
        return item;
    }
}