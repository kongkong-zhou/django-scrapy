import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Link to='/about'>关于我们</Link>-
                <Link to='/about'>免责声明</Link>-
                <Link to='/about'>联系我们</Link>-
                <Link to='/guest'>求片留言</Link>-
                <Link to='/sitemap.xml'>网站地图</Link>
                <br/>
                <br/>
                <span>本站不提供任何视听上传服务，所有内容均来自视频分享站点所提供的公开引用资源。<br/>Copyright © 2021 MJW. 保留所有权利</span>
            </footer>
        )
    }
}
