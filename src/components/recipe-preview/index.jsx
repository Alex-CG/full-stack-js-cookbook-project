  import React from 'react'
import ReactDOM from 'react-dom'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

class RecipePreview extends React.Component {

  constructor(props) {
    super(props)
    this.onClickHidePreview = this.onClickHidePreview.bind(this)
  }

  onClickHidePreview(e){
    e.preventDefault();
    this.props.hidePreview();
  } 

  getTotalTimeWithFormat(){
    const time = this.props.recipe.preparation ? this.props.recipe.preparation.total_time : 0;
    const hours = (time/60 >= 1) ? Math.floor(time/60) : 0.0;
    const mins = time%60;
    return (hours>0? hours+'h ':'')+(mins>0? mins+'m':'');
  }

  render() {

    return (
        <Modal show={this.props.show} onHide={this.onClickHidePreview} >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.recipe.category}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Nationality</ControlLabel>
                <FormControl.Static>{this.props.recipe.nationality}</FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Category</ControlLabel>
                <FormControl.Static>{this.props.recipe.category}</FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Chef</ControlLabel>
                <FormControl.Static>{this.props.recipe.chef}</FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Level</ControlLabel>
                <FormControl.Static>{this.props.recipe.level}</FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Total time</ControlLabel>
                <FormControl.Static>{this.getTotalTimeWithFormat()}</FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Description</ControlLabel>
                <FormControl.Static>{this.props.recipe.preparation ? this.props.recipe.preparation.description: '..'}</FormControl.Static>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.onClickHidePreview}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
  }

}

export default RecipePreview