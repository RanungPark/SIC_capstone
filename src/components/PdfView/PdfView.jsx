import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfView({file, numPages, onDocumentLoadSuccess}) {
  return (
    <div>
      {file && (
        <div className='pdf-image'>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={index + 1} pageNumber={index + 1} style={{width:"500px", height:"500px" }}/>
            ))}
          </Document>
        </div>
      )}
    </div>
  );
}

