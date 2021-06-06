import React, {useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import Intro from './Intro';

const ShowPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={handlePrint}
      >
        Print Resume
      </button>
      <Intro ref={componentRef} />
    </>
  );
};

export default ShowPrint;
