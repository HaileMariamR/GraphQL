import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const { loading, data, error } = useQuery(gql`
    query GetUsers {
      users {
        name
        email
      }
    }
  `);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div key={error}>{error}</div>;
  }
  console.log(data.users);
  return (
    <div>
      <span>Name</span>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
      <span>Email</span>
      {data.users.map((user) => {
        return (
          <p key={user.email}>
            <span>
              {" "}
              {user.name}:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span></span> {user.email}
            </span>
          </p>
        );
      })}
    </div>
  );
}

export default App;
