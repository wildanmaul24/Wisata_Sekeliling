import React from "react"
import Navbar from "../element/Navbar";

class Todo extends React.PureComponent{
    render(){
        return(
            <>
                <Navbar/>
                <h1>Hello World Todo</h1>
            </>
        )
    }
}

export default Todo;