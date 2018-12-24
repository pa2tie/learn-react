import React from "react";
import styled from "styled-components";
import logoImg from "./assets/w-mercury-development.svg";

const MercuryLogoDiv = styled.div`
  padding: 50px 0;
`;

const LogoDiv = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 315px;
  width: 100%;
  text-align: center;
`;

const LogoA = styled.a`
  display: inline-block;
  height: 69px;
  background: url(${logoImg}) no-repeat center center;
  background-size: contain;
  width: 100%;
`;

const MercuryLogo = props => {
  return (
    <MercuryLogoDiv>
      <LogoDiv>
        <LogoA href={props.href} />
      </LogoDiv>
    </MercuryLogoDiv>
  );
};

export default MercuryLogo;
