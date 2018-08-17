import React from 'react'

class NewPerson extends React.Component {
  render() {
    return (
      <div>
        <button className="glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#exampleModal"></button>
            {/* Modal start */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="header-modal">
                  <i className="fa fa-user-o"></i>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div className="body">
                    <form>
                      <div className="form-group row">
                        <div className="col-md-3">
                        <label className="form-label">Name</label>
                        </div>
                        <div className="col-md-7">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-3">
                        <label className="form-label">Id</label>
                        </div>
                        <div className="col-md-7">
                        <input type="text" className="form-control" name="id" id="id" placeholder="Id"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-3">
                        <label className="form-label">Desciption</label>
                        </div>
                        <div className="col-md-7">
                        <textarea  rows="4" className="form-control" name="description"  id="description" placeholder="Description"/>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="footer">
                    <button type="button" className="btn btn-secondary" id="closebtn" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary " id="addbtn" data-dismiss="modal">Add User</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal end */}
      </div>
    )
  }
}
export default NewPerson