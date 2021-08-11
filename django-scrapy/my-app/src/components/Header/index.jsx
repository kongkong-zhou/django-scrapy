// import { getInputClassName } from 'antd/lib/input/Input'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import PubSub from 'pubsub-js'

// import Container from '../../components/Container'

import logo from '../images/logo.png'
import './index.css'



export default class Header extends Component {
    search = () => {
        const {keyWordElement:{value:keyWord}} = this
        var tag = {
            classify_name:`${keyWord}`,
            classify_tag:"movie"
        }
        console.log(keyWord);
        axios.get(`http://localhost:3000/api1/api/?search=${keyWord}`).then(
            response => {
                PubSub.publish(`atguigu`,{isLoading:false,list:response.data.results,count:response.data.count,tag:tag});
            },
            error => {
                console.log(error.message)
            }
        )
    }
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
                </ul>
                {/* <form className="search-form">
                    <input ref={c => this.keyWordElement = c}className="form-control" name="s" type="text" placeholder="请输入关键字" action="http://localhost:3000"></input>
                    <input className="btn" type="submit" value="搜索" onClick={this.search}></input>
                    <button className="btn" onClick={this.search}>搜索</button>
                </form> */}
                <div className="wrap">
                    <div className="search">
                        <input ref={c => this.keyWordElement = c} className="searchTerm" name="s" type="text" placeholder="请输入关键字"></input>
                        <input className="searchButton" type="submit" value="搜索" onClick={this.search}></input>
                    </div>
                </div>
                {/* <Container/> */}
            </div>
        )
    }
}
