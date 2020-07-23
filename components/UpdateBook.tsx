import React from "react";
import BookService from "../service/BookService";
interface Book {
    id: number;
    name: string;
    author: string;
}
interface UpdateBookProps {
    id:number
}
interface UpdateBookState {

    id:number;
    name: string;
    author: string;

}
export class UpdateBook extends React.Component<UpdateBookProps,UpdateBookState>{
    constructor(props:UpdateBookProps){
        super(props);
        this.state={
            id:0,
            name:'',
            author:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event: any) {
        //     let nam = event.target.name;
        // let val = event.target.value;
        const state = this.state;
        this.setState({
            ...state,
            [event.target.name]: event.target.value

        })
    }
    handleSubmit(event: any) {
        BookService.updateBook(this.state).then(res=> console.log(res));
         event.preventDefault(); 
        }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Id</label>
                    <input type="text" placeholder="Id" value={this.props.id} name="id" onChange={this.handleChange} />

                    <label>Name:</label>
                    <input type="text" placeholder="Book name" value={this.state.name} name="name" onChange={this.handleChange} />
                    <label>Author:</label>
                    <input type="text" name="author" placeholder="Author name" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}