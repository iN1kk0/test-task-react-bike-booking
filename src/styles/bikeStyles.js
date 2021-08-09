import styled from "styled-components";

export const BikeItem = styled.div`
  width: 618px;
  max-width: 100%;
  background: #e8e8e8;
  border: 2px solid #6fcf97;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px;
  margin: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-grow: 0;
`;

export const BikeName = styled.span`
  font-family: Saira;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #333333;
  flex-basis: 50%;
  order: 0;
`;

export const BikeDelete = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #333333;
  flex-basis: 50%;
  order: 1;
  justify-content: flex-end;
  cursor: pointer;
`;

export const BikeID = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 13px;
  display: flex;
  align-items: flex-end;
  color: #717171;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 6px 0px;
  flex-basis: 100%;
`;

export const BikeStatus = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #333333;
  flex: none;
  order: 3;
  flex-grow: 0;
  flex-basis: 50%;
`;

export const BikeStatusTitle = styled.span`
  margin-right: 18px;
`;

export const BikePrice = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  display: flex;
  align-items: center;
  flex-basis: 50%;
  order: 4;
  justify-content: flex-end;
`;
