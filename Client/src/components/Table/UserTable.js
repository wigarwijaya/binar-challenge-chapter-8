import "./UserTable.css";

const UserTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {/* <td>ID</td> */}
          <td>Username</td>
          <td>Email</td>
          <td>Experience</td>
          <td>Level</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        {props.players.map((item) => {
          return (
            <tr key={item.id}>
              {/* <td>{item.id}</td> */}
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.experience}</td>
              <td>{item.level}</td>
              <td>
                <button onClick={() => props.onEditPlayer(item)}>Edit</button>
                <button>Delete</button>
                {/* <button onClick={() => props.onDeletePlayer(item)}>Delete</button> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
