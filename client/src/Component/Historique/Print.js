import React, {useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import Historique from './Historique';

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="bg-gray-200 p-6">
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={handlePrint}
      >
        Print Resume
      </button>
      <Historique ref={componentRef} />
    </div>
  );
};

export default Print;
