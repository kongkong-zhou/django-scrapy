import React, { Component } from 'react'

export default class Pic extends Component {
    state = {
        picture:"",
    }
    render() {
        const {pic} = this.props
        return (
            <div className="list-poster">
                <img alt="tags" className="thumb" src={`/${pic}`} style={{}}/>
            </div>
        )
    }
}