import React from 'react'

class RecipeForm extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      return (
          <form className="form-horizontal">
            <fieldset>
              <legend>New Recipe</legend>
              <div className="form-group">
                <label htmlFor="inputName" className="col-lg-2 control-label">Name</label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="inputName" placeholder="Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="select" className="col-lg-2 control-label">Category</label>
                <div className="col-lg-10">
                  <select className="form-control" id="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputNationality" className="col-lg-2 control-label">Nationality</label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="inputNationality" placeholder="Nationality" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-2 control-label">Level</label>
                <div className="col-lg-10">
                  <div className="radio">
                    <label>Easy</label>
                  </div>
                  <div className="radio">
                    <label>Intermediate</label>
                  </div>
                  <div className="radio">
                    <label>Hard</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputTime" className="col-lg-2 control-label">Preparation time (in minutes)</label>
                <div className="col-lg-10">
                  <input type="number" className="form-control" id="inputTime" placeholder="Preparation time (in minutes)" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="textArea" className="col-lg-2 control-label">Description</label>
                <div className="col-lg-10">
                  <textarea className="form-control" rows="3" id="textArea"></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-10 col-lg-offset-2">
                  <button type="reset" className="btn btn-default">Cancel</button>
                  <button type="submit" className="btn btn-primary">OK</button>
                </div>
              </div>
            </fieldset>
          </form>
	   )
  }

}

export default RecipeForm