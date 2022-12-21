import React from "react"
import Navbar from "../element/Navbar";

class Event extends React.PureComponent{
    render(){
        return(
            <>
                <Navbar/>
                <h1>Hello World Event</h1>
            </>
        )
    }
}

export default Event;