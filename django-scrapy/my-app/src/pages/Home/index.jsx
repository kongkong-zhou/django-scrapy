import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Article from '../../components/Article'

export default class Home extends Component {
    state = {
        url:"http://localhost:3000/api1/api/",
        movie:[],
        tele:[],
        cartoon:[],
    }
    getData = (tag) => {
        var api = this.state.url + `${tag}/`;
        axios.get(api).then(response => {
            if (`${tag}` === 'movie') {
                this.setState({movie:response.data.results.slice(24)});
            } else if (`${tag}` === 'tele') {
                this.setState({tele:response.data.results.slice(24)});
            } else {
                this.setState({cartoon:response.data.results.slice(20)});
            }
        }).catch(error => {
            this.setState({err:error.message});
        })
    }
    componentDidMount() {
        this.getData("movie")
        this.getData("tele")
        this.getData("cartoon")
    }
    render() {
        const {movie,tele,cartoon} = this.state
        return (
            <div className="container">
                <div className="content-wrap">
                    <div className="content">
                        <div className="m-movies clearfix">
                            <h1 className="title">
                                <strong>
                                    <span className="glyphicon glyphicon-stats" style={{color: "#B4CE63"}}></span>
                                    <Link to={'movie/'}>最新电影</Link>
                                </strong>
                                <Link className="more" to={'/movie'}>更多<i>&gt;</i><i>&gt;</i></Link>
                            </h1>
                            <Article list={movie}/> 
                        </div>
                        <div className="m-movies clearfix">
                            <h1 className="title">
                                <strong>
                                    <span className="glyphicon glyphicon-stats" style={{color: "#B4CE63"}}></span>
                                    <Link to={'televison/'}>最新剧集</Link>
                                </strong>
                                <Link className="more" to={'/television'}>更多<i>&gt;</i><i>&gt;</i></Link>
                            </h1>
                            <Article list={tele}/>
                        </div>
                        <div className="m-movies clearfix">
                            <h1 className="title">
                                <strong>
                                    <span className="glyphicon glyphicon-stats" style={{color: "#B4CE63"}}></span>
                                    <Link to={'dongman/'}>最新动漫</Link>
                                </strong>
                                <Link className="more" to={'/dongman'}>更多<i>&gt;</i><i>&gt;</i></Link>
                            </h1>
                            <Article list={cartoon}/>
                        </div> 
                    </div>
                </div>   
            </div>
        )
    }
}
