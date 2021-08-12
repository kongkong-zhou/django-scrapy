import React, { Component } from 'react'
import ReactHlsPlayer from 'react-hls-player';
import axios from 'axios'
import {NavLink,Link} from 'react-router-dom'
import Side from '../../components/Side'
import './index.css'
// import { name } from 'pubsub-js';



export default class Play extends Component {
    state = {
        movie:{},
        err:'',
        list:[],
        list2:[],
        url:"http://localhost:80",
      }
      
      updateAppState = (stateObj) => {
          this.setState(stateObj)
      }
    // 获取数据方法函数
    getApiData = (id) => {
        var api = this.state.url + `/api/${id}/`;
        axios.get(api)
            .then(response => {
                this.updateAppState({movie:response.data,list:response.data.movieofvideo,list2:response.data.movieofvideoyun});
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
        // const movieObj = this.state.movie
        const {movie,list,list2} = this.state
        list.sort(this.compareUp("name","list"))
        list2.sort(this.compareUp("name","list2"))
        return (
            <div className="container">
                <div className="content-wrap">
                    <div className="content">
                    <div className="playerbox" id="playerbox">
                    {
                        this.state.list.map((item) => {
                            return (
                                <div key={item.id} id="player">
                                    <ReactHlsPlayer
                                        src={item.video_url}
                                        autoPlay={false}
                                        controls={true}
                                        width="100%"
                                        height="100%"
                                        />   
                                </div>
                            )
                        })
                    }
				</div>
				<div className="videotitle">
					<h4 className="vtitle">
                        <Link to={`show/${movie.id}`}>{movie.name}<span>BJ高清</span></Link>
                    </h4>
					<p>【警告】请勿相信视频中出现的广告！<br/></p>
				</div>
				<div className="mgplaylist">
					<nav id="playnav">
						<ul>换源：
							<li className="act">
								<NavLink to={`play/${movie.id}}`}>TK资源m3u8</NavLink>
							</li>
                            <li>
                                <NavLink to={`play/${movie.id}}`}>TK资源</NavLink>
                            </li>
						</ul>
					</nav>
					<div id="playcontainer">
						<section className="tab">
                        {   
                            list.map((item,index) => {
                                return (
                                        <Link to={`/play/${movie.id}/${item.id}`} key={index}>{item.name}</Link>
                                        )
                                })
                        }
						</section>
                        <section className="tab" style={{display:'none'}}>
                        {
                            list2.map((item,index) => {
                                return (
                                        <Link to={`/play/${movie.id}/${item.id}`} key={index}>{item.name}</Link>
                                        )
                                }) 
                        }
                        </section>
					</div>
				</div>
                </div>
            </div>
            <Side/>
        </div>
        )
    }
}
