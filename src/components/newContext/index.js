import React, { createContext, useEffect, useState } from "react";
const Ctx = createContext(null);
const NewContext = () => {
  return (
    <Ctx.Provider value={"some_value"}>
      <A />
    </Ctx.Provider>
  );
};
export default NewContext;

const A = () => {
  return (
    <div>
      <B />
    </div>
  );
};
const B = () => {
  return (
    <div>
      <C />
    </div>
  );
};
const C = () => {
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: ""
  });
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.first_name.length > 0 && credentials.last_name.length > 0) {
      setData([...data, credentials]);
      setCredentials({ first_name: "", last_name: "" });
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCredentials((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="first_name"
          className="form-control mt-2"
          value={credentials.first_name}
          onChange={handleChange}
        />
        <input
          name="last_name"
          className="form-control mt-2"
          value={credentials.last_name}
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
      {data.map((item, n) => {
        return (
          <div className="d-flex" key={n}>
            <p className="me-5">{item.first_name}</p>
            <p>{item.last_name}</p>
          </div>
        );
      })}
      <D />
    </div>
  );
};
const D = () => {
  const data = [
    {
      country: "India",
      cities: ["Mumbai", "Chennai", "Banglore"]
    },
    {
      country: "USA",
      cities: ["Florida", "NYC"]
    },
    {
      country: "Thailand",
      cities: ["Pataya", "Bangkok"]
    }
  ];
  const [select, setSelect] = useState({
    selected: data[0].country,
    selectData: []
  });

  useEffect(() => {
    data.forEach((item, n) => {
      if (select.selected === item.country) {
        setSelect({ selectData: item.cities });
      }
    });
    // eslint-disable-next-line
  }, [select.selected]);

  return (
    <div className="m-auto w-50">
      <br />
      <select
        className="me-2"
        onChange={(e) =>
          setSelect({ selected: e.target.value, selectData: [] })
        }
      >
        {data.map((item, index) => {
          return (
            <option key={index} value={item.country}>
              {item.country}
            </option>
          );
        })}
      </select>

      {
        <select>
          {select.selectData.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      }
    </div>
  );
};
