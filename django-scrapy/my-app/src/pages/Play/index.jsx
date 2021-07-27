import React, { Component } from 'react'
import ReactHlsPlayer from 'react-hls-player';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Side from '../../components/Side'
import './index.css'



export default class Play extends Component {
    state = {
        movie:{},
        err:'',
        list:[],
        url:"http://localhost:3000",
      }
      
      updateAppState = (stateObj) => {
          this.setState(stateObj)
      }
    // 获取数据方法函数
    getApiData = (id) => {
        var api = this.state.url + `/api/${id}`;
        axios.get(api)
            .then(response => {
                this.updateAppState({movie:response.data,list:response.data.movieofvideo});
            })
            .catch(error => {
                this.updateAppState({err:error.message});
            })
    }
    componentDidMount() {
        const {id} = this.props.match.params
        this.getApiData(id);
    }
      
    render() {
        const movieObj = this.state.movie
        
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
					<h4 className="vtitle"><a href="https://www.hmtv.me/show/1099">{movieObj.name}</a><span>BJ高清</span></h4>
					<p>【警告】请勿相信视频中出现的广告！<br/></p>
				</div>
				<div className="mgplaylist">
					<nav id="playnav">
						<ul>换源：
							<li className="act">
								<Link to={`play/${movieObj.id}}`}>主线：</Link>
							</li>
						</ul>
					</nav>
					<div id="playcontainer">
						<section className="tab">
                        {
                            this.state.list.map((item,index) => {
                                return (
                                        <Link key={item.id} to={`/play/${movieObj.id}/${item.id}`}>{item.name}</Link>
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
