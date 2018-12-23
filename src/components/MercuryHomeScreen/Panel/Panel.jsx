import React from "react";
import styled from "styled-components";

const PanelStyled = styled.div`
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  padding: 32px 40px;
  border-radius: 8px;
  margin: 0 0 10vh 0;
`;

class Panel extends React.Component {
  render() {
    const { className, children, ...otherProps } = this.props;
    return (
      <PanelStyled className={className} {...otherProps}>
        {children}
      </PanelStyled>
    );
  }
}

export default Panel;
