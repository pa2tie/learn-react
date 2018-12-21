import React from "react";
import classNames from "classnames";
import styles from "./MercuryButton.css";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  outline: none;
  width: 145px;
  height: 48px;
  border: none;
  border-radius: 100px;
  box-shadow: 0 4px 16px 0 rgba(237, 65, 89, 0.4);
  background-color: #ed4159;
  font-family: Gotham;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #ed4159;
    box-shadow: 0 6px 20px 0 rgba(237, 65, 89, 0.4);
  }

  &:active {
    background-color: #ffffff;
    color: #ed4159;
    box-shadow: 0 2px 10px 0 rgba(237, 65, 89, 0.5);
  }
`;

class MercuryButton extends React.Component {
  render() {
    const { className, children, ...otherProps } = this.props;
    return (
      <Button className={className} {...otherProps}>
        {children}
      </Button>
    );
  }
}

export default MercuryButton;
