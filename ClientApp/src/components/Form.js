import React, {Component} from "react";

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            author: "",
        }
    }

    handleChange(e) {

    }

    handleSubmit(e) {
        this.preventDefault()
    }
    render() {
        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input onChange={(e) => this.handleChange(e)} name="title" placeholder="title" type="text"/>
                <input onChange={(e) => this.handleChange(e)} name="author" placeholder="author" type="text"/>
                <input type="submit"/>
            </form>
        )
    }
}