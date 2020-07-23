import React from "react";
import BookService from "../service/BookService";
interface Book{
    id:number;
    name:string;
    author:string;
}
interface BookDetailProps{
    id:number;
  
}
interface BookDetailState{

    book:Book;
  
}
export class BookDetail extends React.Component<BookDetailProps,BookDetailState>{

    constructor(props:BookDetailProps){
        super(props);
        this.state={
            book:{id:0,name:'',author:''},
    
        }
       
    }
    // componentDidMount(){
    //     BookService.getBookById(book.id).then((res)=>{
    //         this.setState({book:res,isLoading:false})
    // });
    //}
    componentDidMount(){
       const id=this.props.id;
         BookService.getBookById(id).then((res)=>{
            this.setState({book:res})
    });
    
}
    render(){
        
        return(

            <div>
                <label>Name:</label>
                {this.state.book.name}
                <label>Author:</label>
                {this.state.book.author}
            </div>
        );
    }
}
export default BookDetail