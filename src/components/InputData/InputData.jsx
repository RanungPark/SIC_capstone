import React, { useState } from 'react';
import PdfView from '../PdfView/PdfView';
import ImageView from '../ImageView/ImageView';

export default function InputData() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [image, setImage] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile.name.slice(-3))
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleimageChange = (event) => {
    const selectedImage = event.target.files[0];
    setFileName(selectedImage.name.slice(-3))
    if(selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
    }
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="InputFile">PDF파일</label>
        <input type="file" onChange={handleFileChange} id='InputFile' accept='.pdf'/>
        <button>submit</button>
      </form>
      <form action="">
        <label htmlFor="InputImage">png/jpg파일</label>
        <input type="file" onChange={handleimageChange} id='InputImage' accept='image/*'/>
        <button>submit</button>
      </form>
      {
        fileName === 'pdf' ?  <PdfView file={file} numPages={numPages} onDocumentLoadSuccess={onDocumentLoadSuccess}/> : <ImageView image={image}/>
      }
    
    </div>
  );
}

