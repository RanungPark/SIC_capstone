import React, { useState } from 'react';
import PdfView from '../PdfView/PdfView';
import ImageView from '../ImageView/ImageView';
import axios from 'axios';
import { BsFileEarmarkPdf, BsFileEarmarkImage } from 'react-icons/bs';

export default function InputData() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setUploadFile(selectedFile);
    setFileName(selectedFile.name.slice(-3))
    console.log(selectedFile);
    if (selectedFile) {
      setImage(null)
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleimageChange = (event) => {
    const selectedImage = event.target.files[0];
    setFileName(selectedImage.name.slice(-3))
    console.log(selectedImage);
    if(selectedImage) {
      setFile(null)
      setImage(URL.createObjectURL(selectedImage));
    }
  }

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleSubmitFile = (e) => {
    e.preventDefault()

    const formData = new FormData();

    formData.append("file", uploadFile);
    console.log(formData);

    axios.post('http://localhost:9000/file', {
      data:formData,
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  const handleSubmitImage = (e) => {
    e.preventDefault()
    axios.post('https://38b5ce94-4320-4b14-839a-7a5fe5cb629b.mock.pstmn.io/image', {
      data:image
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmitFile}>
        <ul>
          <li>
            <div>
              <div>
                <span><BsFileEarmarkPdf /></span>
                <input type="file" onChange={handleFileChange} id='InputFile' accept='.pdf'/>
              </div>
            </div>
            <div>
              <button type='submit'>submit</button>
            </div>
          </li>
        </ul>
      </form>
      <form onSubmit={handleSubmitImage}>
        <ul>
          <li>
            <div>
              <div>
                <span><BsFileEarmarkImage /></span>
                <input type="file" onChange={handleimageChange} id='InputImage' accept='image/*'/>
              </div>
            </div>
            <div>
              <button type='submit'>submit</button>
            </div>
          </li>
        </ul>
      </form>
      <div>
        {
          fileName === 'pdf' ?  <PdfView file={file} numPages={numPages} onDocumentLoadSuccess={handleDocumentLoadSuccess}/> : <ImageView image={image}/>
        }
      </div>
    </div>
  );
}