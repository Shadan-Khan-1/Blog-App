import React from 'react'

function CheckBox() {
  return (
    <div className="input-group mb-3 mt-3">
        <div className="input-group-prepend">
             <div className="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input"/>
             </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with checkbox"/>
    </div>
  )
}

export default CheckBox
