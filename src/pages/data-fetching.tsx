import { NextPage, GetStaticProps } from "next";
import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "src/api/user";
import { RootState } from "src/redux/reducer";
import { fetchUserById } from "src/redux/slices/userSlice";
import UserList from "src/components/UserList";
import { UserData } from "src/types";

interface DataFetchingPageProps {
  staticGeneratedData: UserData[];
}

const DataFetchingPage: NextPage<DataFetchingPageProps> = ({
  staticGeneratedData,
}) => {
  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { data, error, isValidating } = useSWR("/api/users", fetchUsers);

  const handleClick = () => dispatch(fetchUserById(1));

  return (
    <div>
      <h1>DataFetchingPage</h1>

      <h2>Client Side</h2>
      <h3>SWR</h3>
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {!error && isValidating && <div>Loading...</div>}
      {!error && !isValidating && data && <UserList data={data.data} />}

      <h3>Async(Thunk)</h3>
      {<div>Loading: {user.loading}</div>}
      <button onClick={handleClick}>Fetch data</button>
      {user.loading === "succeeded" && (
        <div>first_name: {user.data.first_name}</div>
      )}

      <hr />
      <h2>Server Side</h2>
      <h3>Static Generation(Pre Render)</h3>
      <UserList data={staticGeneratedData} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await fetchUsers();

  return {
    props: { staticGeneratedData: data },
    revalidate: 1, // In seconds
  };
};

export default DataFetchingPage;
