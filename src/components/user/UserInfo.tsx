import React from 'react';

interface UserInfoProps {
  name: string;
  age?: number;
  profession?: string;
  onClick?: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ profession = 'Programador', ...props }) => {
  return (
    <div>
      <div>Nombre: {props.name}</div>
      <div>Edad: {props.age}</div>
      {profession && <div>Profesión: {profession}</div>}
      {props.onClick && <button onClick={() => props.onClick()}>Click</button>}
    </div>
  );
};

export default UserInfo;
