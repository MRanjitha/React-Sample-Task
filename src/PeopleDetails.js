import React from 'react';

class PeopleDetails extends React.Component {                                 
  render() {
    return (
      <div className="people-details">
        <i className="fa fa-user-o"></i>
        <div className="details">
          <div className="row">
            <div className="col-md-2">
             Name     : 
            </div>
            <div className="col-md-10">
            {this.props.people_name}
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              Id     : 
            </div>
            <div className="col-md-10">
              {this.props.people_id}
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              Description      : 
            </div>
            <div className="col-md-10">
              {this.props.people_desc}
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default PeopleDetails
