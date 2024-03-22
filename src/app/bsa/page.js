'use client'
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintContent = () => {
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  return (
    <>

      <div>
        
      </div>
      <div ref={contentToPrint}>
        <p className='text-red-400 text-center text-4xl'>So is that true</p>
      </div>
      <button onClick={() => {
        handlePrint(null, () => contentToPrint.current);
      }}>
        PRINT
      </button>
    </>
  )
}

export default PrintContent;