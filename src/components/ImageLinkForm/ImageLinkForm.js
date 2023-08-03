import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='imageForm'>Search for faces in images by pasting in a URL!</p>
      <div className='inputContainer'>
        <input className='inputForm' type='text' onChange={ onInputChange }></input>
        <button className='buttonForm' onClick={ onButtonSubmit }>Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkForm;