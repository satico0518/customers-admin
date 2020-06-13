import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorTag = styled.div`
  background-color: crimson;
  color: white;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin: 10px 0;
`;

const Error = ({ message }: { message: string }) => (
  <ErrorTag>{message}</ErrorTag>
);

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error;

