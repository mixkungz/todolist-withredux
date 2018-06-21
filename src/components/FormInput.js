import React from 'react'

export default class FormInput extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Add todo
          </button>
        </div>
      </div>
    )
  }
}
