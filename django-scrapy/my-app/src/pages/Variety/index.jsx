import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import 'antd/dist/antd.css'
// import './index.css'
import Container from '../../components/Container'
import Side from '../../components/Side'



export default class Movie extends Component {
    state = {
        url:`http://localhost:80/api/variety?page=`,
        pageNum:''
    }

    getData = (page) => {
        var api = this.state.url +`${page}`; 
        var tag = {
            classify_name:"综艺",
            classify_tag:"variety"
        }
        axios.get(api)
            .then(response => {
                PubSub.publish(`atguigu`,{isLoading:false,list:response.data.results,count:response.data.count,tag:tag});
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
