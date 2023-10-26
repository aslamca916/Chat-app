import "./Documents.css";

function Documents() {
  return (
    <div className="container">
      <h2>My Uploads</h2>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Label</th>
            <th scope="col">Filename</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <a>Edit</a>| <a>Delete</a>
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <a>Edit</a>| <a>Delete</a>
            </td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <a>Edit</a>| <a>Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btn-container">
        <button className="btn btn-primary">Add Upload</button>
      </div>
    </div>
  );
}

export default Documents;
