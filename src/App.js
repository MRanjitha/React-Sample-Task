import React, { Component } from 'react';
import './App.css';
import { Route,Link,withRouter } from 'react-router-dom'
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import {people} from './People'
import PeopleDetails from './PeopleDetails'
import NewPerson from './NewPerson'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      people_name:"",
      people_id:"",
      people_desc:""
    }
  }
  viewDetails(people_name){
    people.map((people)=>{
      if(people_name===people.name)
      {
        this.setState({people_name:people.name})
        this.setState({people_id:people.id})
        this.setState({people_desc:people.Description})
      }
      return this.state.people_name
    })  
  }
  render() {
    return (
      <div className="main">
        <div className="App">
          <h3 className="text-center">Sample Task</h3>
          <div className="Add">
            <NewPerson/>
          </div> 
          <div className="border">
          <div className="col-md-2 sidenav">
                <div className="h4"> 
                  <input type="checkbox" value=""/>
                  People
                  <button><i className="fa fa-trash-o"></i></button>
                </div>
                {
                  people.map((people,key)=>{
                    return(
                      <div className="people-name " key={key}>
                        <hr/>
                        <input type="checkbox" value=""/>
                        <Link to={`/PersonDetail/${people.name}`} className="cursor-pointer" name ="people_name" value={people.name} onClick={() => this.viewDetails(people.name)}>{people.name}</Link>
                        <hr/>
                      </div>
                    ) 
                  })
                }
                </div>
              <div className="col-md-10 people-details">
                <Route path={`${this.props.match.url}PersonDetail/:id`} render={()=>
                  <PeopleDetails
                  people_name={this.state.people_name}
                  people_id={this.state.people_id}
                  people_desc={this.state.people_desc}/>}
                  exact={true}/>
              </div> 
            </div>       
        </div>
      </div>
    );
  }
}

export default withRouter(App);
