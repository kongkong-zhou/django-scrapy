import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <a rel="noreferrer" href="https://mjw21.com/about" target="_blank" title="关于我们">关于我们</a> -
                <a rel="noreferrer" href="https://mjw21.com/about" target="_blank" title="免责声明">免责声明</a> -
                <a rel="noreferrer" href="https://mjw21.com/about" target="_blank" title="联系我们">联系我们</a> -
                <a rel="noreferrer" href="https://mjw21.com/guestbook" target="_blank" title="留言求片">留言求片</a> -
                <a rel="noreferrer" href="https://mjw21.com/guestbook" target="_blank" title="网站地图">网站地图</a>
                <br/>
                <br/>
                <span>本站不提供任何视听上传服务，所有内容均来自视频分享站点所提供的公开引用资源。<br/>Copyright © 2021 MJW. 保留所有权利</span>
            </footer>
        )
    }
}
