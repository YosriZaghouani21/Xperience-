import React, {useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import {Button, Col, Container} from 'reactstrap';
import SideBarTemplate from '../layout/SideBarTemplate';
import Intro from './Intro';
import HistoryList from './HistoryList';
import Footer from '../layout/Footer';

const Historique = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <SideBarTemplate />
      <div className="main-content mt-4">
        <Container fluid>
          <Intro />
          <Col xl="2" className="center mb-5">
            <Button
              type="button"
              onClick={() => {
                handlePrint();
              }}
            >
              Imprimer votre historique
            </Button>
          </Col>
          <HistoryList ref={componentRef} />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Historique;
