import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { PictureSkeleton } from "../skeleton-loader";
import "./store-style.css";
const ProductDetail = () => {
  const params = useParams();
  const [loading, setLoading] = useState();
  const [error, setError] = useState({
    state: false,
    message: ""
  });
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError({
          state: true,
          message: "Something went wrong !!!"
        });
        console.log(err);
      });
  }, [params]);

  return (
    <>
      {error.state === true ? (
        <>{error.message}</>
      ) : (
        <div>
          <div class="container my-5">
            <Link to={() => navigate(-1)}>Go Back</Link>
            <div class="row">
              <div class="col-md-5">
                <div class="main-img">
                  {loading ? (
                    <PictureSkeleton height="15em" width="100%" />
                  ) : (
                    <img
                      class="img-fluid product-image"
                      src={data?.image}
                      alt="ProductS"
                    />
                  )}
                </div>
              </div>
              <div class="col-md-7">
                <div class="main-description px-2">
                  <div class="category text-bold">
                    {loading === true ? (
                      <PictureSkeleton height="1em" width="50%" />
                    ) : (
                      ` Category: ${data?.category}`
                    )}
                  </div>
                  {loading === true ? (
                    <PictureSkeleton height="1em" width="80%" />
                  ) : (
                    <div class="product-title text-bold my-3">
                      {data?.title}
                    </div>
                  )}

                  <div class="price-area my-4">
                    {loading === true ? (
                      <PictureSkeleton height="1em" width="20%" />
                    ) : (
                      <p class="new-price text-bold mb-1">${data?.price}</p>
                    )}
                    <p class="text-secondary mb-1">
                      (Additional tax may apply on checkout)
                    </p>
                  </div>
                </div>

                <div class="product-details my-4">
                  <p class="details-title text-color mb-1">Product Details</p>
                  {loading === true ? (
                    <>
                      <PictureSkeleton height="0.5em" width="100%" />
                      <PictureSkeleton height="0.5em" width="100%" />
                      <PictureSkeleton height="0.5em" width="100%" />
                    </>
                  ) : (
                    <p class="description">{data?.description}</p>
                  )}
                </div>

                <div class="row questions bg-light p-3">
                  <div class="col-md-1 icon">
                    <i class="fa-brands fa-rocketchat questions-icon"></i>
                  </div>
                  <div class="col-md-11 text">
                    Have a question about our products at E-Store? Feel free to
                    contact our representatives via live chat or email.
                  </div>
                </div>

                <div class="delivery my-4">
                  <p class="font-weight-bold mb-0">
                    <span>
                      <i class="fa-solid fa-truck"></i>
                    </span>{" "}
                    <b>Delivery done in 3 days from date of purchase</b>{" "}
                  </p>
                  <p class="text-secondary">
                    Order now to get this product delivery
                  </p>
                </div>
                <div class="delivery-options my-4">
                  <p class="font-weight-bold mb-0">
                    <span>
                      <i class="fa-solid fa-filter"></i>
                    </span>{" "}
                    <b>Delivery options</b>{" "}
                  </p>
                  <p class="text-secondary">View delivery options here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
