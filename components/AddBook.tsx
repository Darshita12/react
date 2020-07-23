import React from "react";
import BookService from "../service/BookService";
interface Book {
    id: number;
    name: string;
    author: string;
}
interface AddBookProps {

}
interface AddBookState {

    name: string;
    author: string;

}
export class AddBook extends React.Component<AddBookProps, AddBookState>{
    constructor(props: AddBookProps) {
        super(props);
        this.state = {
            name: '',
            author: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount(){
    //     BookService.addBook().then(res=> console.log(res));
    // }
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
        BookService.addBook(this.state).then(res=> console.log(res));
         event.preventDefault();
        // fetch(`http://localhost:8080/postBook`, {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: this.state.name,
        //         author: this.state.author
        //     })

        // });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
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