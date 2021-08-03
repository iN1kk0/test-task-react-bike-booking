import styled from "styled-components";

const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background: #696969;
`;

const DeveloperLabel = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #cbcaca;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;

const DeveloperName = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;
`;

export const Footer = () => {
  return (
    <BottomBar>
      <DeveloperLabel>Developer: </DeveloperLabel>
      <DeveloperName>Mykola Bychko</DeveloperName>
    </BottomBar>
  );
};
