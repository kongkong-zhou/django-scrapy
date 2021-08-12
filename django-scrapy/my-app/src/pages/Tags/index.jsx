import React, { Component } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import PubSub from 'pubsub-js'
import 'antd/dist/antd.css'
import Side from '../../components/Side'
import Container from '../../components/Container'

export default class Tags extends Component {
    state = {
        url:`http://localhost:80/api/tags/`,
        pageNum:'',
    }

    getData = (page) => {
        const {tag} = this.props.match.params
        var api = this.state.url  + tag +`/?page=${page}`; 
        axios.get(api)
            .then(response => {
                PubSub.publish(`atguigu`,{isLoading:false,list:response.data.results,count:response.data.count,tag:response.data.results[0].classification[0]});
            })
            .catch(error => {
                PubSub.publish(`atguigu`,{err:error.message});
            })
    }
    componentDidMount() {
        this.getData(1)
        this.token = PubSub.subscribe(`page`,(_,pageObj)=>{
            this.setState(pageObj)
            this.getData(this.state.pageNum)
        })   
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        return (
            <section className="container">
                <div className="content-wrap">
                    <div className="content">
                        <Container/>
                    </div>
                </div> 
                <Side/>     
            </section>
        )
    }
}
