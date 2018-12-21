import React from "react";
import classNames from "classnames";
import styles from "./MercuryInput.css";
import styled from "styled-components";

const Input = styled.input`
  color: black;
  border: none;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 14px 16px;
  margin-bottom: 24px;
  width: 100%;

  opacity: 0.8;
  font-family: Gotham;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #262626;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(151, 151, 151, 0.25);
  }

  ${props =>
    !props.valid &&
    css`
      box-shadow: 0 0 0 1px #ed4159 !important;
      color: #ed4159 !important;
    `}
`;

class MercuryInput extends React.Component {
  render() {
    const { className, valid = true, ...otherProps } = this.props;
    return <Input className={className} valid required {...otherProps} />;
  }
}

export default MercuryInput;
