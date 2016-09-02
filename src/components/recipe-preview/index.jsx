import React from 'react'
import ReactDOM from 'react-dom'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'

class RecipePreview extends React.Component {

  constructor(props) {
    super(props)
    this.onClickHidePreview = this.onClickHidePreview.bind(this)
  }

  onClickHidePreview(e){
    e.preventDefault();
    this.props.hidePreview();
  } 

  render() {

    return (
        <Modal show={this.props.show} onHide={this.onClickHidePreview} >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onClickHidePreview}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
  }

}

export default RecipePreview