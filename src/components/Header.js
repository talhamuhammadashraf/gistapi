import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";
import PropTypes from "prop-types";

function Header({ onChange }) {
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search {...{ onChange }} />
    </Wrapper>
  );
}
Header.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header;
