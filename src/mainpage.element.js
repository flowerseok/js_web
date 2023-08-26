import styled from "styled-components";

export const MainpageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 10vh 0;
`;

export const MainpageTitle = styled.div`
  font-size: 30px;
`;

export const CustomForm = styled.form`
  font-size: 24px;
  margin: 42px 0;
  border: 1px solid black;
  width: 650px;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 16px 0;
  text-align: center;
  align-items: center;
`;

export const RadioIndiv = styled.div`
  font-size: 20px;
  margin: 0 40px;
`;

export const CustomInput = styled.input`
  font-size: 16px;
  width: 420px;
  height: 42px;
  padding: 8px 24px;
  box-sizing: border-box;
  text-align: center;
  margin-right: 24px;
  &:focus {
    outline: none;
  }
`;

export const CustomBtn = styled.button`
  background-color: #ededed;
  font-size: 20px;
  height: 42px;
  width: 66px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchArea = styled.div`
  margin-bottom: 3vh;
`;

export const ResultArea = styled.div`
  border: 1px solid black;
  min-height: 400px;
  width: 650px;
`;

export const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  min-height: 50px;
  text-align: left;
  align-items: stretch;
  max-width: 650px;
`;

export const RankContainer = styled.div`
  /* background-color: yellow; */
  min-width: 50px;
  text-align: center;
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4px 8px;
  width: 600px;
  box-sizing: border-box;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BooknameContainer = styled.div`
  /* background-color: green; */
  display: block;
  text-overflow: ellipsis;
  /* width: 569px; */
  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props) => (props.len <= 48 ? "16px" : "16px")};
`;

export const AuthorContainer = styled.div`
  /* background-color: blue; */
  margin-right: 12px;
`;
export const PublisherContainer = styled.div`
  /* background-color: red; */
  margin-left: 12px;
`;
