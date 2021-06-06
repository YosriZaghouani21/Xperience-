import React from 'react';
import FlouciComponent from './FlouciComponent';

const flouci = () => {
  const client = {
    app_secret: '90c78dad-85fb-4236-9d8b-3bc40ef93e01',
    app_public: '66837a87-c4e0-48f0-9f94-258acd8a4127',
    payment_amount: '1000',
  };

  return (
    <div>
      <FlouciComponent client={client} />
    </div>
  );
};

export default flouci;
