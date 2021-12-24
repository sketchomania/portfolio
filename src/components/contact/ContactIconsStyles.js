import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  display: flex;
  padding: 1rem;
  //   background-color: cyan;

  li {
    width: 3rem;
    margin: 0 1rem;
    // border-radius: 3rem;
    // background-color: brown;
    transition: 0.3s ease;
    &:hover {
    //   background-color: #212d45;
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  @media screen and (min-width: 768px) {
    li {
      margin-left: 2rem;
    }
  }
`;
