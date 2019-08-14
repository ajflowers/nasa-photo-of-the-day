import React from "react";

const Header = props => {
    return (
        <div className="App-header">
            <p>Hello. Today is {props.thisMonth} {props.thisDate}, {props.thisYear}. For the API, we call today "{props.thisISO}."</p>
        </div>
    );
}

export default Header;