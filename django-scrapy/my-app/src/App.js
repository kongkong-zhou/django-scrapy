import React, { Component } from 'react'
import {Route,Switch } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Play from './pages/Play'
import Home from './pages/Home'
import Tags from './pages/Tags'
import Movie from './pages/Movie'
import Tele from './pages/Tele'
import Show from './pages/Show'
import Variety from './pages/Variety'
import Cartoon from './pages/Cartoon'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/movie" component={Movie}/>
            <Route path="/television" component={Tele}/>
            <Route path="/dongman" component={Cartoon}/>
            <Route path="/zongyi" component={Variety}/>
            <Route path="/show/:id" component={Show}/>
            <Route path="/play/:id/:idx" component={Play}/>
            <Route exact path="/tags/:tag/" component={Tags}/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}

