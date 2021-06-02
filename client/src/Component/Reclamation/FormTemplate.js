import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Col, Fade, Form, FormGroup, Input, Label} from 'reactstrap';
import {addReclamation} from '../../JS/actions';
import AlertInfo from '../layout/AlertInfo';
import {useForm} from 'react-hook-form';

const FormTemplate = props => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {register, handleSubmit, errors} = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      addReclamation({
        userEmail: email,
        userNumber: phoneNumber,
        content: content,
        type: props.labelText === 'Question' ? 'question' : 'problem',
      })
    );
    setShowAlert(true);
    setFadeIn(false);
  };

  const toggle = () => {
    setFadeIn(!fadeIn);
    setShowAlert(false);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle} className="mb-2">
        {fadeIn ? 'Annuler' : 'Commencer'}
      </Button>
      {showAlert ? (
        <AlertInfo content="Votre message a été envoyé. Nous vous contacterons par email dans les brefs délais" />
      ) : (
        <></>
      )}
      <Fade in={fadeIn} tag="h5" className="mt-3">
        <Form role="form" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                invalid={errors['email']}
                innerRef={register({
                  required: 'Le contenu de la réclamation est obligatoire.',
                })}
                onChange={e => setEmail(e.target.value)}
                id="exampleEmail"
                placeholder="Entrez votre adresse email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleNumber" sm={2}>
              Téléphone
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="number"
                invalid={errors['number']}
                innerRef={register({
                  required: 'Le contenu de la réclamation est obligatoire.',
                })}
                onChange={e => setPhoneNumber(e.target.value)}
                id="exampleNumber"
                placeholder="Entrez votre numéro de téléphone"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              {props.labelText}
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="text"
                invalid={errors['text']}
                innerRef={register({
                  required: 'Le contenu de la réclamation est obligatoire.',
                })}
                onChange={e => setContent(e.target.value)}
                id="exampleText"
                placeholder={props.placeholderText}
              />
            </Col>
          </FormGroup>
          <Button className="float-right" color="danger" size="sm" type="submit">
            Envoyer
          </Button>
        </Form>
      </Fade>
    </div>
  );
};

export default FormTemplate;
