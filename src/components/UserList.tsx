import React, { FC } from "react";

import { UserData } from "src/types";

interface UserListProps {
  data: UserData[];
}

const UserList: FC<UserListProps> = ({ data }) => {
  return (
    <ul>
      {data.map(({ first_name, last_name }, index) => (
        <li key={index}>{`${first_name} ${last_name}`}</li>
      ))}
    </ul>
  );
};

export default UserList;
