import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PubSub from 'pubsub-js'
import { Pagination } from 'antd'
// import Pic from '../Pic'
import './index.css'

export default class Container extends Component {
    state = {
        list:[],
        err:'',
        isLoading:false,
        count:'',
        tag:'',
    }
    componentDidMount() {
        this.token = PubSub.subscribe(`atguigu`,(_,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    onChangePage = page => {
        PubSub.publish(`page`,{pageNum:page})
    }
    render() {
        const {list,err,isLoading,count,tag} = this.state
        // console.log(list)
        return (
            <div className="list-content">
                <h1 className="title">
                    <Link to={`/tags/${tag.classify_tag}`}>{tag.classify_name}</Link>
                </h1>
                <div className="m-movies clearfix">
                {
                    isLoading ? <h2>isLoading</h2> :
                    err ? <h2>{err}</h2> :
                    list.map((listObj)=>{
                        return (
                            <article className="u-movie" key={listObj.id}>
                                <Link to={`show/${listObj.id}`}>
                                    <div className="list-poster">
                                        <img alt="tags" className="thumb" src={`/${listObj.image_paths}`} style={{}}/>
                                    </div>
                                </Link>
                                <div className="pingfen"><span>{listObj.score}</span></div>
                                <div className="zhuangtai"><span></span></div>
                                <h2>
                                    <Link to={`/show/${listObj.id}`}>{listObj.name}</Link>
                                </h2>
                                <div className="meta">
                                <span className="tags">
                                        {listObj.classification.map((classObj,index)=>{
                                            return (
                                                <Link to={`/tags/${classObj.classify_tag}`} key={index}>{classObj.classify_name}</Link>
                                                
                                            )
                                        })}
                                    
                                </span>
                            </div>
                            </article>
                        )
                    })
                }
                <div className="paginations">
                    <Pagination onChange={this.onChangePage} total={count/3} />
                </div> 
            </div>
            </div>
        )
    }
}

