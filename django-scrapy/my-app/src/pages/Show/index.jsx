import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Side from '../../components/Side'
import './index.css'

export default class Show extends Component {
    state = {
        movie:{},
        err:'',
        list:[],
        tag:[],
        url:"http://localhost:3000/api1",
      }
      
      updateAppState = (stateObj) => {
          this.setState(stateObj)
      }
    // 获取数据方法函数
    getApiData = (id) => {
        var api = this.state.url + `/api/${id}/`;  //拼接api地址
        axios.get(api)
            .then(response => {
                this.updateAppState({movie:response.data,tag:response.data.classification,list:response.data.movieofvideo});
            })
            .catch(error => {
                this.updateAppState({err:error.message});
            })
    }
    compareUp = (propertyName,data) => {
        if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
            return function(object1, object2) {
                var value1 = object1[propertyName];
                var value2 = object2[propertyName];
                return value1.localeCompare(value2);
            }
        }
        else {
            return function(object1, object2) { // 属性值为数字
                var value1 = object1[propertyName];
                var value2 = object2[propertyName];
                return value1 - value2;
            }
        }
    }
    componentDidMount() {
        const {id} = this.props.match.params
        this.getApiData(id);
    }

    render() {    
        const {movie,list,tag} = this.state
        list.sort(this.compareUp("name","list"))
        return (
            <section className="container">
                <div className="content-wrap">
                    <div className="content">
                        <div className="video-content">
                            <header className="article-header">
                                <h1 className="article-title">
                                    <span className="item-title">{movie.name}</span>
                                    <span className="item-year">({movie.release_time})</span>
                                </h1>
                                <ul className="article-meta">
                                    <li>类型：
                                    {
                                        tag.map((tagObj,index)=>{
                                            return (
                                                <Link to={`tags/${tagObj.classify_tag}`} rel="category tag" key={index}>{tagObj.classify_name}</Link>
                                            )
                                        })
                                    }
                                    </li>
                                    <li>{movie.update_time}最后更新</li>
                                    <li></li>
                                </ul>
                            </header>
                            <article className="article-content">
                                <div className="video_box">
                                    <div className="video_img">
                                        <img src={`/${movie.image_paths}`} alt="雨和你的故事的海报"/>
                                    </div>
                                    <div className="video_info"><strong>导演:</strong>{movie.director}<br/>
                                        <strong>主演:</strong> {movie.actors}<br/>
                                        <strong>类型:</strong> <br/>
                                        <strong>国家/地区:</strong> {movie.area}<br/>
                                        <strong>语言:</strong> {movie.language}<br/>
                                        <strong>上映日期:</strong> {movie.release_time}<br/>
                                        <strong>片长:</strong> 117分钟（韩国）<br/>
                                        <strong>又名:</strong>{movie.other_name}<br/>
                                        <strong>评分:</strong> {movie.score}
                                    </div>
                                    <div className="video_tga" id="video_tga"></div>
                                    <div style={{clear:'both'}}></div>
                                </div>
                                <h4 className="ctitle"><strong>在线播放:</strong></h4>
                                <div id="video_list_li" className="video_list_li">
                                <div className="vlink" style={{margin_left:'10px'}}>
                                    {
                                        list.map((item,index) => {
                                            return (
                                                    <Link to={`/play/${movie.id}/${item.id}`} key={index}>{item.name}</Link>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                                <h4 className="ctitle"><strong>剧情简介:</strong></h4>
                                <p className="jianjie"><span>　{movie.info}</span></p>
                            </article>
                            <div className="article-tags">标签：
                                {
                                    tag.map((tagObj,index)=>{
                                        return (
                                            <Link to={`/tags/${tagObj.classify_tag}`} rel="tag" data-original-title="" title="" key={index}>{tagObj.classify_name}</Link>
                                        )
                                    })
                                }
                            </div>
                                
                        </div>
                    </div>
                </div>
                <Side/>
            </section>
        )
    }
}
