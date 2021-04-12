import React, { useState } from "react";
import { Alert } from "reactstrap";

const UpdateAlert = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss}>
      Votre profil a été mis à jour{" "}
    </Alert>
  );
};

export default UpdateAlert;
