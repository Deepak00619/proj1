import React from "react";
import { Col, ListGroup, Row, Image, Button } from "react-bootstrap";
import icon from "../screen/icon1.svg";
import icon1 from "../screen/icon2.svg";
import styled from "styled-components";

const S = styled.div`
  margin-left: 78px;
`;
const S1 = styled.div`
  margin-left: 60px;
`;

const Data = ({ infos }) => {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col md={2}>
              <img
                className="d-md-block"
                height="75"
                width="170"
                alt="Github Jobs"
                src={icon}
              />
              <S>
                <h3>{infos.voting}</h3>
              </S>

              <img
                className="d-md-block"
                height="75"
                width="170"
                alt="Github Jobs"
                src={icon1}
              />
              <S1>
                <h4>Votes</h4>
              </S1>
            </Col>

            <Col md={2}>
              <Image src={infos.poster} alt="poster" fluid rounded />
            </Col>
            <Col md={7}>
              <h2>{infos.title}</h2>

              <h5>
                <big>
                  <b>Genre:</b>
                </big>{" "}
                {infos.genre}
              </h5>
              <h5>
                <big>
                  <b>Director:</b>
                </big>{" "}
                {infos.director}
              </h5>
              <h5>
                <big>
                  <b>Starring:</b>
                </big>{" "}
                {infos.stars[0]}
              </h5>

              <h5>
                Mins | {infos.language} | {infos.releasedDate}
              </h5>
              <h5 className="text-muted">
                {" "}
                {infos.pageViews} views | voted by {infos.voting} people
              </h5>
            </Col>
            <Button variant="primary" block>
              Watch Trailer
            </Button>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Data;
