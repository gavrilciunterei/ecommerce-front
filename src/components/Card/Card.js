import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({
  headerName = 'Header name',
  spacing = '',
  itemsList = [],
  itemsLink = [],
}) => {
  return (
    <div className={'card ' + spacing}>
      <h3 className="card-header">{headerName}</h3>
      <ul className="list-group">
        {itemsList.length > 0 &&
          itemsList.map((title) => {
            return (
              <li className="list-group-item">
                {title.name} : {title.value}
              </li>
            );
          })}
        {itemsLink.length > 0 &&
          itemsLink.map((link) => {
            return (
              <Link className="nav-link" to={link.to}>
                {link.name}
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Card;
