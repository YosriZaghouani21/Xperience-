import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {
  Card,
  CardBody,
  Toast,
  ToastBody,
  ToastHeader,
  UncontrolledCollapse,
  Button,
  Input,
  Row,
} from 'reactstrap';
import ReclamationModal from './ReclamationModal';

const ReclamationAdminTemplate = reclamation => {
  const [showContent, setShowContent] = useState(false);
  const [message, setMessage] = useState(' ');

  return (
    <div>
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>{`Réclamation ${reclamation.index}`}</ToastHeader>
          <ToastBody className="p-4">
            <b> Les coordonnées du réclameur :</b> <br />
            <i className="fas fa-phone-alt" /> {reclamation.reclamation.userNumber}
            <br />
            <i className="fas fa-at" /> {reclamation.reclamation.userEmail}
            <div>
              <Row>
                <Button
                  color="info"
                  id={`toggle${reclamation.index}`}
                  size="sm"
                  className="m-2 ml-3 col-xl-5"
                  style={{marginBottom: '1rem'}}
                  onClick={() => {
                    setShowContent(!showContent);
                  }}
                >
                  {showContent ? 'Cacher le contenu' : 'Voir le contenu'}
                </Button>
                <div className="col-xl-5">
                  <ReclamationModal
                    buttonLabel="Contacter"
                    modalTitle="Envoi d'un mail au réclameur"
                    modalBody={
                      <Input
                        type="textarea"
                        onChange={e => {
                          setMessage(e.target.value);
                        }}
                      />
                    }
                    firstButton="Envoyer"
                    click={() => {
                      emailjs
                        .send(
                          'service_e08ayoj',
                          'template_rbsid7f',
                          {
                            user_email: reclamation.reclamation.userEmail,
                            reclamation_content: reclamation.reclamation.content,
                            message: message,
                          },
                          'user_6c0VKKc5FB0gf7GLfF2Qu'
                        )
                        .then(
                          result => {
                            console.log(result.text);
                          },
                          error => {
                            console.log(error.text);
                          }
                        );
                    }}
                  />
                </div>
              </Row>
              <UncontrolledCollapse toggler={`#toggle${reclamation.index}`}>
                <Card>
                  <CardBody>{reclamation.reclamation.content}</CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ReclamationAdminTemplate;
