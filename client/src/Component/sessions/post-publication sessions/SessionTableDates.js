import React from 'react';
import {Table} from 'reactstrap';

const SessionTableDates = ({el}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <Table bordered>
      <tr className="text-center">
        {el.isLaunched ? (
          <></>
        ) : (
          <th>
            <i className="fas fa-rocket text-danger" />
            Limite de lancement
          </th>
        )}
        <th>
          <i className="fas fa-credit-card text-info" />
          Limite de paiement
        </th>
        <th>
          <i className="fas fa-battery-full text-success" />
          Jour de repos
        </th>
        <th>
          <i className="fas fa-bell text-yellow" />
          Jour de déroulement
        </th>
      </tr>
      <tr className="text-center">
        {el.isLaunched ? (
          <></>
        ) : (
          <td>{new Date(el.launchLimit).toLocaleDateString('fr-EG', options)}</td>
        )}
        <td>{new Date(el.paymentLimit).toLocaleDateString('fr-EG', options)}</td>
        <td>{new Date(el.restDate).toLocaleDateString('fr-EG', options)}</td>
        <td>{new Date(el.sessionDate).toLocaleDateString('fr-EG', options)}</td>
      </tr>
    </Table>
  );
};

export default SessionTableDates;
