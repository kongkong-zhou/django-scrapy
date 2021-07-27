import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Article extends Component {
    render() {
        const {list} = this.props
        return (
            <div className="m-movies clearfix">
            {
                list.map((listObj)=>{
                    return (
                        <article className="u-movie" key={listObj.id}>
                            <Link to={`show/${listObj.id}`}>
                                <div className="list-poster">
                                    <img alt="tags" className="thumb" src={listObj.image_paths} style={{}}/>
                                </div>
                            </Link>
                            <div className="pingfen"><span>{listObj.score}</span></div>
                            <div className="zhuangtai"><span></span></div>
                            <h2>
                                <Link to={`show/${listObj.id}`}>{listObj.name}</Link>
                            </h2>
                            <div className="meta">
                            <span className="tags">
                                    {listObj.classification.map((classObj,index)=>{
                                        return (
                                            <Link to={`tags/${classObj.classify_tag}`} key={index}>{classObj.classify_name}</Link>
                                            
                                        )
                                    })}
                                
                            </span>
                        </div>
                        </article>
                    )
                })
            }
        </div>
        )
    }
}
