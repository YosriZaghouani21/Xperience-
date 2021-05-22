import React from 'react';
import {Link} from 'react-router-dom';

const AddSession = ({id}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className="m-2">
      <Link to={`/session/${id}`} className="btn btn-secondary p-1">
        Ajouter une session
      </Link>
    </div>
  );
};

export default AddSession;
