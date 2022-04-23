import styled from "styled-components";

export const FirstPage = styled.div`
  background: #29335c;
  position: absolute;
  width: 99%;
  height: 2100px;
  top: 10px;
`;

export const SearchField = styled.input``;
export const SearchButton = styled.button``;
export const SearchFieldContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  position: absolute;
  top: 25px;
  gap: 5px;
`;

export const ListPreviewImages = styled.img`
  &.bigger {
    width: 350px;
    height: 350px;
  }
  &.smaller {
    width: 450px;
    height: 250px;
    margin-left: 30px;
  }
`;

export const ListContainer = styled.div`
  &.lower {
    width: 150px;
    height: 100px;
    margin-top: 500px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    position: absolute;
    top: -405px;
    left: 950px;
    width: 35%;
    height: 1000px;
    overflow: scroll;
    border: 3px solid white;
  }

  &.top {
    width: 350px;
    height: 350px;
    margin-top: 3px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    position: absolute;
    top: 5%;
    left: 5%;
    width: 100%;
    height: 1800px;
    overflow: scroll;
  }
`;

export const VideoFrame = styled.iframe`
  position: absolute;
  width: 750px;
  height: 398px;
  top: 95px;
  left: 100px;
`;

export const TitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const VideoTitle = styled.p`
  &.rowTitle {
    position: absolute;
    padding: 0 0 0 10px;
    font-size: 40px;
    overflow: hidden;
    width: 520px;
  }
  &.columnTitle {
    postion: absolute;
    font-size: 25px;
    overflow: hidden;
    width: 250px;
    padding: 0 0 0 30px;
  }
`;
export const VideoDuration = styled.p`
  &.rowDuration {
    position: absolute;
    left: 1150px;
    top: 37.5px;
    font-size: 22.5px;
  }

  &.columnDuration {
    position: absolute;
    left: 420px;
    top: 265px;
    font-size: 18px;
  }
`;
export const VideoViews = styled.p`
  &.rowViews {
    position: absolute;
    left: 375px;
    top: 317px;
    font-size: 15px;
  }
  &.columnViews {
    position: absolute;
    left: -150px;
  }
`;
export const VideoPublishedAt = styled.p`
  position: absolute;
  left: 1105px;
  top: 315px;
  font-size: 15px;
`;
export const InnerDetails = styled.p`
  &.row {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 1277px;
    :hover {
      background-color: gray;
    }
  }
  &.column {
    position: relative;
    display: flex;
    flex-direction: column;
    :hover {
      background-color: gray;
    }
  }
`;
