import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='imageForm'>Search for faces in images by pasting in a URL!</p>
      <div>
        <input className='inputForm' type='text'></input>
        <button className='buttonForm'>Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkForm;