import React, { Component } from 'react'

export default class Side extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="widget widget_tag_cloud">
                    <h3 className="title"><strong>热门标签</strong></h3>
                    
                </div>
                <div className="widget widget_recent_entries">
                    <h3 className="title"><strong>近期播出</strong></h3>
                    <ul>
                        <li>
                            <a href="https://www.hmtv.me/show/1110">2021韩剧《直到疯狂》全集中字在线观看</a>
                            <span className="post-date">2021年6月24日</span>
                        </li>
                        <li>
                            <a href="https://www.hmtv.me/show/1108">2021韩剧《无法抗拒的他》全集高清中字在线观看</a>
                            <span className="post-date">2021年6月20日</span>
                        </li>
                        <li>
                            <a href="https://www.hmtv.me/show/1107">2021韩剧《后罗曼史》全集中字在线观看</a>
                            <span className="post-date">2021年6月19日</span>
                        </li>
                        <li>
                            <a href="https://www.hmtv.me/show/1106">2021韩剧《明天不要来》全集中字在线观看</a>
                            <span className="post-date">2021年6月19日</span>
                        </li>
                        <li>
                            <a href="https://www.hmtv.me/show/1105">2021韩剧《Voice4》全集高清中字在线观看</a>
                            <span className="post-date">2021年6月19日</span>
                        </li>
                    </ul>
                </div>
		</aside>
        )
    }
}
