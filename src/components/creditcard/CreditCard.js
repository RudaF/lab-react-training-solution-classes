import React from 'react';
import './CreditCard.css';
import BoxColor from '../boxcolor/BoxColor';

const CreditCard = (props) => {
  return (
    <div
      className="col-md-4 card-width text-right"
      style={{ color: props.color }}
    >
      <BoxColor class="rounded-3 m-1 p-2" hex={props.bgColor}>
        <div>
          <header className="p-2 d-flex flex-row-reverse">{props.type}</header>
          <h2 className="p-1"> •••• •••• •••• {props.number.substr(-4)}</h2>
          <div>
            <div>
              <span>
                Expires: {props.expirationMonth}/{props.expirationYear}
              </span>
              <span className="ms-5">{props.bank}</span>
            </div>
            <div>
              <span>{props.owner}</span>
            </div>
          </div>
        </div>
      </BoxColor>
    </div>
  );
};

export default CreditCard;
