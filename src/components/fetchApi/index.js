import React, { useEffect, useState } from "react";
import Slider from "../../layouts/Slider";
import { Card, Button, Image } from "../../styles";
import { Link } from "react-router-dom";
import { PictureSkeleton } from "../skeleton-loader";
const FetchApi = () => {
  const [data, setData] = useState();
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const filterdData = newData.length > 0 ? newData : data;
  const filterDataFunction = filterdData?.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  const onDelete = (id) => {
    try {
      const b = data.filter((e) => e.id !== id);
      setData(b);
      setIsMounted(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const Loader = ({ count }) => {
    return [...Array(15)].map((item, i) => {
      return <PictureSkeleton height="14rem" width="100%" />;
    });
  };
  console.log(data, newData);
  return (
    <div className="container-fluid">
      <input
        className="form-control mt-4 mb-4"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={loading}
      />
      {search.length !== 0 && (
        <p>
          <strong>{filterDataFunction?.length}</strong> item matched your search
        </p>
      )}
      <Slider>
        {loading === true ? (
          <Loader />
        ) : (
          filterDataFunction?.map((item, index) => {
            return (
              <>
                <Card key={item.id ?? index} className="card">
                  <div className="card-body">
                    <Link to={`/product-details/${item.id}`}>
                      <Image
                        className="card-img"
                        src={item.image}
                        alt={item.title}
                      />
                    </Link>
                    <div className="card-text">{item.title.slice(0, 50)}</div>
                    <Button className="" onClick={() => onDelete(item.id)}>
                      Delete
                    </Button>
                  </div>
                </Card>
              </>
            );
          })
        )}
      </Slider>
    </div>
  );
};

export default FetchApi;
