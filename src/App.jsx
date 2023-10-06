import React, { useRef} from 'react';
import './App.css';
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport } from '@progress/kendo-react-pdf';
import CrimeGraph from './components/CrimeGraph'; // Import the CrimeGraph component

const App = () => {
  const pdfExportComponent = useRef(null);
  
  const handleExportWithComponent = () => {
    pdfExportComponent.current.save();
  };

  
  return (
    <div id="example">
      {/* <div className="box wide hidden-on-narrow"> */}
        <div className="box-col">
          <Button primary={true} onClick={handleExportWithComponent} className='p-2 m-6 text-white bg-black rounded-md'>
            Download PDF
          </Button>
        </div>
      {/* </div> */}
      <div className="page-container hidden-on-narrow">
        <PDFExport ref={pdfExportComponent}>
          <div className={`pdf-page size-a4`}>
            <div className="inner-page">
              <div className='flex justify-between'>
                <span>
                  <img className="w-300 h-300 object-contain p-2" src="images/logo.png" alt="Logo" /> 
                </span>
                <span className="text-sm font-bold p-2">123 Main Street, Dover, NH 03820-4667</span>
              </div>
              <div className="pdf-footer flex justify-between text-sm">
                <p className='text-blue-600 font-bold'>
                Report Genereted on September 26, 2023
                </p>
                <p className='text-black font-bold'>
                RealAssist Property Report | Page 1 of 25
                </p>
              </div>
              <div className="pdf-chart">
                {/* Include the CrimeGraph component here */}
                <CrimeGraph />
              </div>
              
            </div>
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

export default App;
