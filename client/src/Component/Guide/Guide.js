import React from 'react';
import Logo from '../../Assets/img/brand/angry.png';
import Announcement from 'react-announcement';

const Guide = () => {
  return (
    <Announcement
      title="Here is your component"
      subtitle="The best announcement component for React is finally here. Install it in all your projects."
      link="https://github.com/kristofferandreasen/react-announcement"
      imageSource={Logo}
    />
  );
};

export default Guide;
