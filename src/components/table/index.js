import moment from "moment";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Table = () => {
  const [addItem, setAddItem] = useState([]);
  const [formData, setFormData] = useState({
    fname: "",
    lname: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fname.length < 1 && formData.fname.length < 1) {
      return;
    }
    setAddItem([
      ...addItem,
      {
        id: uuidv4(),
        date: moment(new Date()).format("DD-MM-YYYY"),
        time: moment(new Date()).format("hh:mm A"),
        ...formData
      }
    ]);
    setFormData({ fname: "", lname: "" });
  };

  const handleRemove = (id) => {
    const newObj = addItem.filter((i, n) => i.id !== id);
    setAddItem(newObj);
  };

  return (
    <div className="container-fluid mt-4">
      <form className="create-todo-form" onSubmit={handleSubmit}>
        <div className="d-flex">
          <input
            onChange={handleChange}
            name="fname"
            value={formData.fname}
            placeholder="First Name"
            className="form-control me-3"
          />
          <input
            onChange={handleChange}
            name="lname"
            value={formData.lname}
            placeholder="Last Name"
            className="form-control me-3"
          />
          <button className="add_item me-3" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Created at</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {addItem.map((item, n) => {
              return (
                <Tr
                  key={item.id}
                  addItem={addItem}
                  item={item}
                  handleRemove={handleRemove}
                  setAddItem={setAddItem}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;

const Tr = ({ item, addItem, setAddItem, handleRemove }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const ref = useRef();
  const [editForm, setEditForm] = useState({
    fname: item.fname,
    lname: ""
  });
  const ediForm = (id) => {
    if (editForm.fname.length < 1) {
      return setInputVisible(false);
    }
    const newState = addItem.map((obj) => {
      if (obj.id === id) {
        return { ...obj, fname: editForm.fname };
      }
      return obj;
    });
    setAddItem(newState);
    setInputVisible(false);
  };
  return (
    <>
      <tr key={item.id}>
        <th className="serial_no" scope="row">
          {item.id.slice(0, 12) + "..."}
        </th>
        <td
          onDoubleClick={() => {
            setInputVisible(true);
          }}
        >
          {inputVisible === true ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ediForm(item.id);
              }}
            >
              <input
                autoFocus={true}
                onChange={(e) => setEditForm({ fname: e.target.value })}
                value={editForm.fname}
                className="edit-form"
                ref={ref}
              />
            </form>
          ) : (
            item.fname
          )}
        </td>
        <td>{item.lname}</td>
        <td>{item.date.toString()}</td>
        <td>{item.time.toString()}</td>
        <td>
          <button
            className="delete_item btn"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};
