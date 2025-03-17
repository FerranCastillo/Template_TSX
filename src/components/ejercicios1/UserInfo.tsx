import React from 'react';

const UserInfo: React.FC = (props) => {
  return (
    <div>
      <div>Nombre: {props.name}</div>
      <div>Edad: {props.age}</div>
      {props.profession && <div>Profesión: {props.profession}</div>}
      {props.onClick && <button onClick={() => props.onClick()}>Click</button>}
    </div>
  );
};

export default UserInfo;
