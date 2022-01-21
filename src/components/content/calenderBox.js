import React, { Component } from "react";




export default class CalenderBox extends Component {
    render() {
        return (
            <div className="calender-box">
                <div className="date">
                    {this.props.date}
                </div>
                <textarea></textarea>
            </div>
        )
    }
}