import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import { Image } from "../../styles/index";
import styled from "styled-components";
const RedditMemes = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    loadMoreImages();
  }, []);

  function loadMoreImages() {
    setLoading(true);
    axios
      .get(`https://meme-api.com/gimme/50`)
      .then((res) => {
        console.log(res);
        setData(res.data.memes);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }
  console.log(image);
  return loading === true ? (
    <p>loading...</p>
  ) : (
    <>
      <Container fluid>
        <Row>
          {data.map((item, index) => {
            return (
              <Col md={3}>
                <Image
                  onClick={() => {
                    setIsVisible(true);
                    setImage(item?.url);
                  }}
                  className="mb-4"
                  src={item?.url}
                  alt={item.title}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal centered show={isVisible} onHide={() => setIsVisible(false)}>
        <Modal.Body>
          <ModalImage className="mb-4" src={image} alt="meme" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RedditMemes;

const ModalImage = styled.img`
  object-fit: contain;
  height: auto;
  width: 100%;
`;
