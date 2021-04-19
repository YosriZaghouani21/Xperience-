import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Progress,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import {
  getExperienceDetails,
  updateExperience,
  deleteExperience,
  getExperiences,
} from '../../JS/actions/index';
import ExperienceUploader from './ExperienceUploader';
import Loader from '../layout/Loader';
import Advice6 from '../layout/Advice6';

import {Link, Redirect} from 'react-router-dom';
import ExperienceUploader2 from './ExperienceUploader2';
import ExperienceUploader3 from './ExperienceUploader3';
import ExperienceUploader4 from './ExperienceUploader4';

const ImagesStep = ({
  match: {
    params: {id},
  },
}) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    dispatch(getExperienceDetails(id));
  }, [dispatch, id]);
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  const experience = useSelector(state => state.experiencesReducers.experience);
  const [photo, setphoto] = useState();
  const [photo2, setphoto2] = useState();
  const [photo3, setphoto3] = useState();
  const [photo4, setphoto4] = useState();

  useEffect(() => {
    if (experience) {
      setphoto(experience.photo);
      setphoto2(experience.photo2);
      setphoto3(experience.photo3);
      setphoto4(experience.photo4);

      console.log(experience);
    }
  }, [experience]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div style={{backgroundColor: '#f8f9fe'}}>
        <Advice6 />

        <div className="main-content">
          <Container fluid>
            <div>
              <Progress className="mt-2" style={{height: '21px'}} value="100">
                100%
              </Progress>
            </div>
            <Col lg="12" md="12">
              <Button
                onClick={toggle}
                style={{
                  padding: '0.5% 0.5% 0%',
                  float: 'right',
                }}
              >
                <i className="ni ni-fat-remove" />
              </Button>

              {/* end button exit */}
              {/* Modal */}
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Abandonner la création ?</ModalHeader>
                <ModalBody>
                  Si vous abandonner la création, vous perderz toutes les informations saisies.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Continuer
                  </Button>
                  <Link
                    className="btn"
                    to={'/experiences'}
                    color="secondary"
                    onClick={() => {
                      dispatch(deleteExperience(id));
                      toggle();
                      dispatch(getExperiences());
                    }}
                  >
                    Abandonner
                  </Link>
                </ModalFooter>
              </Modal>
              {/* endModal */}
              {/* step title  */}
              <Col lg="6" md="10">
                <h2 style={{color: '#32325d'}}>
                  <i className="far fa-images" style={{padding: '2%'}} /> Les photos de l'expérience{' '}
                </h2>
              </Col>
              {/* end step title */}
              <div className="header-body border-0" style={{padding: '2%', margin: '1%'}}>
                <Row>
                  <Col xl="6">
                    <img
                      alt=""
                      className="border rounded mt-5"
                      src={photo2}
                      style={{height: '350px', width: '350px'}}
                    />
                    <div className="mt-1">
                      <ExperienceUploader2
                        exp={experience}
                        image2={photo2}
                        setImage2={setphoto2}
                        id={id}
                      />
                    </div>
                    <p>Montrez vous en pleine activité.</p>
                  </Col>
                  <Col>
                    <img
                      alt=""
                      className="border rounded mt-5"
                      src={photo3}
                      style={{height: '350px', width: '350px'}}
                    />
                    <div className="mt-1">
                      <ExperienceUploader3
                        exp={experience}
                        image3={photo3}
                        setImage3={setphoto3}
                        id={id}
                      />
                    </div>
                    <p>Mettez l'activité en avant.</p>
                  </Col>
                  <Col>
                    <img
                      alt=""
                      className="border rounded mt-5"
                      src={photo}
                      style={{height: '300px', width: '230px'}}
                    />
                    <div className="mt-1">
                      <ExperienceUploader
                        exp={experience}
                        image={photo}
                        setImage={setphoto}
                        id={id}
                      />
                    </div>
                    <p>Choisissez une photo qui représente l'expérience dans son ensemble.</p>
                  </Col>
                  <Col>
                    <p className="mt-8">
                      {' '}
                      <i className="fas fa-arrow-left" /> C'est la photo de couverture de votre
                      expérience. Veillez à ce qu'elle soit claire et bien cadré.
                    </p>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Link
                    to={`/fifth/${id}`}
                    className="btn"
                    style={{color: '#5e72e4', backgroundColor: '#fff'}}
                  >
                    Précédent
                  </Link>
                  <Link to={`/experiences`} className="btn btn-primary">
                    Enregistrer
                  </Link>
                </div>
              </div>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ImagesStep;
