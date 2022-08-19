import styled from "styled-components";
import Colors from "../../constants/colors";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1040px;
  min-height: 80vh;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "62px" : "56px")};
  line-height: ${(props) => (props.main ? "62px" : "56px")};
  width: max-content;
  max-width: 100%;
  letter-spacing: -2px;
  color: ${(props) => props.theme.bg.textNoHover};
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};
  &:hover {
    color: ${(props) => props.theme.bg.textHover};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "32px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${(props) => props.theme.bg.sectionText};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionSubText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: ${(props) => props.theme.bg.sectionSubText};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  color: ${(props) => props.theme.bg.sectionText};
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
  padding-bottom: ${(props) => (props.pb ? "2rem" : "")};
`;

export const LinkText = styled.a`
  color: ${(props) => props.theme.bg.gradStart};
  /* color: ${(props) => props.theme.bg.gradEnd}; */
  transition: 0.3s ease;
  position: relative;
  cursor: pointer;
  bottom: 0;
  &:hover {
    bottom: 5px;
  }
`;

export const GradBorder = styled.div`
  text-align: center;
  border: 2px solid transparent;
  border-image: linear-gradient(
      90deg,
      ${(props) => props.theme.bg.gradStart} 0%,
      ${(props) => props.theme.bg.gradEnd} 100%
    )
    1;
  transition: 0.4s;
`;

export const GradText = styled.span`
  background-color: cyan;
  background-size: 100%;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.bg.gradStart} 0%,
    ${(props) => props.theme.bg.gradEnd} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const UnderlineGrow = styled.span`
  position: relative;
  margin-bottom: 5px;
  max-width: max-content;
  ::after {
    content: "";
    width: 0%;
    left: 0;
    text-align: center;
    position: absolute;
    border-bottom: ${({ sml }) =>
        sml ? "2px" : ({ lar }) => (lar ? "6px" : "4px")}
      solid transparent;
    border-image: linear-gradient(
        90deg,
        ${(props) => props.theme.bg.gradStart} 0%,
        ${(props) => props.theme.bg.gradEnd} 100%
      )
      1;
    transition: 0.4s;
  }
  :hover::after {
    width: 100%;
  }
`;

export const SecondaryBtn = styled.button`
  color: ${Colors.white};
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: ${Colors.white};
    border: 1px solid ${Colors.white};
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.div`
  border-radius: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${({ alt }) => (alt ? "150px" : "262px")};
  height: ${({ alt }) => (alt ? "52px" : "64px")};
  font-weight: 600;
  font-size: ${({ alt }) => (alt ? "20px" : "24px")};
  margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
  color: ${Colors.white};
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
      : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.5s ease;
  cursor: pointer;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "150px" : "184px")};
    height: ${({ alt }) => (alt ? "52px" : "48px")};
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
    margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: ${({ alt }) => (alt ? "20px" : "24px")};
  color: ${Colors.white};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.bg.gradStart} 0%,
    ${(props) => props.theme.bg.gradEnd} 100%
  );
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.4s ease;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
      : "none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? "16px" : "8px")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? "0" : "8px")};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? "32px" : "24px")};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? "16px" : "24px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => (large ? "32px" : "16px")};
  }
`;
