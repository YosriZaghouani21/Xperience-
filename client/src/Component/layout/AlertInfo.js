import React, {useState} from 'react';
import {Alert} from 'reactstrap';

const AlertInfo = props => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss}>
      {props.content}
    </Alert>
  );
};

export default AlertInfo;
