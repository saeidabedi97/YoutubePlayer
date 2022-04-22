import styled from "styled-components";

export const FirstPage = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  width: 99%;
  height: 100%;
  top: 104px;
`;
export const YoutubeHeader = styled.h1`
  color: white;
  font-size: 35px;
  position: absolute;
  top: 25px;
  left: 250px;
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
