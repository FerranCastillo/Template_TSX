import React from 'react';
import UserInfo from './UserInfo';
import { User } from '../Ejercicios';

const UsersList: React.FC<{ users: User[] }> = (props) => {
  return (
    <div className="user-list">
      <hr />
      {props.users.map((user: any, index: number) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={user.name} age={user.age} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
