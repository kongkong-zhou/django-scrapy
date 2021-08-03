import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Side extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="widget widget_tag_cloud">
                    <h3 className="title"><strong>热门标签</strong></h3>
                    <div className="cloud">
                        <Link to={'tags/juqingpian'} className="tag-cloud-link" style={{fontSize:'16pt'}}>剧情片</Link>
                        <Link to={'tags/anqingpian'} className="tag-cloud-link" style={{fontSize:'16pt'}}>爱情片</Link>
                        <Link to={'tags/kehuanpian'} className="tag-cloud-link" style={{fontSize:'9pt'}}>科幻片</Link>
                        <Link to={'tags/kongbupian'} className="tag-cloud-link" style={{fontSize:'9pt'}}>恐怖片</Link>
                        <Link to={'tags/fanzuipian'} className="tag-cloud-link" style={{fontSize:'16pt'}}>犯罪片</Link>
                        <Link to={'tags/zhanzhengpian'} className="tag-cloud-link" style={{fontSize:'9pt'}}>战争片</Link>
                        <Link to={'tags/dongmanpian'} className="tag-cloud-link" style={{fontSize:'9pt'}}>动漫片</Link>
                        <Link to={'tags/jilugpian'} className="tag-cloud-link" style={{fontSize:'9pt'}}>记录片</Link>

                        <Link to={'tags/guochanju'} className="tag-cloud-link" style={{fontSize:'13pt'}}>国产剧</Link>
                        <Link to={'tags/xianggangju'} className="tag-cloud-link" style={{fontSize:'9pt'}}>香港剧</Link>
                        <Link to={'tags/taiwanju'} className="tag-cloud-link" style={{fontSize:'12pt'}}>台湾剧</Link>
                        <Link to={'tags/haiwaijuju'} className="tag-cloud-link" style={{fontSize:'9pt'}}>海外剧</Link>
                        <Link to={'tags/ribenju'} className="tag-cloud-link" style={{fontSize:'22pt'}}>日本剧</Link>
                        <Link to={'tags/hanguoju'} className="tag-cloud-link" style={{fontSize:'16pt'}}>韩国剧</Link>

                        <Link to={'tags/daluzongyi'} className="tag-cloud-link" style={{fontSize:'16pt'}}>国产综艺</Link>
                        <Link to={'tags/rihanzongyi'} className="tag-cloud-link" style={{fontSize:'9pt'}}>日韩综艺</Link>
                        <Link to={'tags/gangtaizongyi'} className="tag-cloud-link" style={{fontSize:'12pt'}}>港台综艺</Link>
                        <Link to={'tags/haiwaizongyi'} className="tag-cloud-link" style={{fontSize:'10pt'}}>海外综艺</Link>
                        
                        <Link to={'tags/daludongman'} className="tag-cloud-link" style={{fontSize:'11pt'}}>国产动漫</Link>
                        <Link to={'tags/rihandongman'} className="tag-cloud-link" style={{fontSize:'16pt'}}>日韩动漫</Link>
                        <Link to={'tags/gangtaidongman'} className="tag-cloud-link" style={{fontSize:'14pt'}}>港台动漫</Link>
                        <Link to={'tags/haiwaidongman'} className="tag-cloud-link" style={{fontSize:'10pt'}}>海外动漫</Link>
                    </div>
                </div>
                <div className="widget widget_recent_entries">
                    <h3 className="title"><strong>近期播出</strong></h3>
                    <ul>
                        <li>
                            <Link to={'/show/36/'}>2021港剧《重案行动之连环追凶》高清中字在线观看</Link>
                            <span className="post-date">2021年7月20日</span>
                        </li>
                        <li>
                            <Link to={'/show/37/'}>2021《殖民地2021》 高清中字在线观看</Link>
                            <span className="post-date">2021年6月20日</span>
                        </li>
                        <li>
                            <Link to={'/show/33/'}>2021《热带往事》高清中字在线观看</Link>
                            <span className="post-date">2021年6月19日</span>
                        </li>
                        <li>
                            <Link to={'/show/34/'}>2021《切尔诺贝利》高清中字在线观看</Link>
                            <span className="post-date">2021年6月19日</span>
                        </li>
                        <li>
                            <Link to={'/show/449/'}>2021国产剧剧《九州海上牧云记》高清中字在线观看</Link>
                            <span className="post-date">2021年6月19日</span>
                        </li>
                    </ul>
                </div>
		</aside>
        )
    }
}
