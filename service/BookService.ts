
const Url='http://localhost:8080'
class BookService{
    getBook(){
        return fetch(`${Url}/book`,
        {
            method:'get',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then((res=>res.json()));
    }
    addBook(value:any){
        return fetch(`${Url}/postBook`,
        {
            method:'POST',
            body: JSON.stringify(value),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then((res=>res.json()));
    }
    deleteBook(id:number){
        return fetch(`${Url}/delBook/${id}`,
        {
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        }).then((res=>res.json()));
    }
    getBookById(id:number){
        return fetch(`${Url}/getById/${id}`,{
            method: 'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then((res=>res.json()));
    }
    updateBook(value:any){
        return fetch(`${Url}/update`,
        {
            method:'PUT',
            body: JSON.stringify(value),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then((res=>res.json()));
    }
}
export default new BookService();