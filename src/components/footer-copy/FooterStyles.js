import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 0rem auto;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  transition: 0.3s ease;
  position: relative;
  bottom: 0;

  &:hover {
    bottom: 6px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;
