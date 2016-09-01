import React from 'react'
import ReactDOM from 'react-dom'

class RecipePreview extends React.Component {

  constructor(props) {
    super(props);
    this.onClickHidePreview = this.onClickHidePreview.bind(this);
  }

  componentDidMount(){
      ReactDOM.findDOMNode(this).modal('show');
      ReactDOM.findDOMNode(this).on('hidden.bs.modal', this.props.hidePreview);
  }

  onClickHidePreview(e){
    e.preventDefault();
    this.props.hidePreview();
  }

  render() {
      return (


            <div className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">

                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">{this.props.name}</h4>
                  </div>

                  <div className="modal-body">
                    
                     <form className="form-horizontal">
                        <fieldset>
                          <div className="form-group">
                            <label htmlFor="inputNationality" className="col-lg-2 control-label">{this.props.nationality}</label>
                          </div>
                        </fieldset>
                      </form>

                  </div>
                  
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">close</button>
                  </div>

                </div>
              </div>
            </div>

      )
  }

}

export default RecipePreview