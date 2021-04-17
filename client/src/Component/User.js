import React from "react";
import { Link } from "react-router-dom";
import { Badge, Media, Button } from "reactstrap";

const User = ({ user }) => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">
            <Media className="align-items-center">
              <a
                className="avatar rounded-circle mr-3"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              ></a>
            </Media>
          </th>
          <td>{user.name}</td>
          <td>
            {user.role === "admin" ? (
              <Badge className="badge-dot mr-3">
                <i className="bg-warning" />
              </Badge>
            ) : (
              <Badge className="badge-dot mr-3">
                <i className="bg-success" />
              </Badge>
            )}

            {user.role}
          </td>
          <td>
            <div className="avatar-group">{user.phoneNumber}</div>
          </td>

          <td>
            <div className="d-flex align-items-center">
              <span className="mr-20">{user.email}</span>
            </div>
          </td>
          <td>
            <Link to={`/user/${user._id}`} className=" btn btn-info">
              Voir tout
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default User;
