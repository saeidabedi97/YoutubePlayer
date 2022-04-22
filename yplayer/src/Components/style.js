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
    width: 150px;
    height: 150px;
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
display: flex
gap:55px;

`;

export const VideoTitle = styled.p``;
export const VideoDuration = styled.p``;
export const VideoViews = styled.p``;
export const VideoPublishedAt = styled.p``;
