import styled from "styled-components";

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 16px;
  background: #696969;
  height: 42px;
`;

const MainTitle = styled.h1`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  color: #e8e8e8;
  margin: 0;
`;

export const Header = () => {
  return (
    <TopBar>
      <MainTitle>ADMIN.BIKE-BOOKING.COM</MainTitle>
    </TopBar>
  );
};
