import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <ul className="nav">
                    <Link to="/">首页</Link>
                    <Link to="/movie">电影</Link>
                    <Link to="/television">电视剧</Link>
                    <Link to="/dongman">动漫</Link>
                    <Link to="/zongyi">综艺</Link>
                    <Link to="/show"></Link>     
                </ul>
            </div>
        )
    }
}
