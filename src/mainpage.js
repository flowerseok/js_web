import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  AuthorContainer,
  BookDataContainer,
  BookInfoContainer,
  BooknameContainer,
  CardContainer,
  CustomBtn,
  CustomForm,
  CustomInput,
  MainpageContainer,
  MainpageTitle,
  PublisherContainer,
  RadioContainer,
  RadioIndiv,
  RankContainer,
  ResultArea,
  SearchArea,
} from "./mainpage.element";

const Mainpage = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searchOption, setSearchOption] = useState("bookname");
  const [bookList, setBookList] = useState([]);
  const [enterVal, setEnterVal] = useState("");
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/book/get", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.tmp);
        setBookList(res.data.tmp);
      });
  }, []);

  const SearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const ChangeHandler = (e) => {
    setSearchOption(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setEnterVal(searchVal);
    if (searchVal !== "") {
      axios
        .post(
          "http://localhost:4000/book/search",
          {
            searchVal: searchVal,
            searchOption: searchOption,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data.ret_list);
          setFilterList(res.data.ret_list);
        })
        .catch((err) => console.log(err));
    }
  };

  const bookCard = (data) => {
    return (
      <CardContainer key={data._id}>
        <RankContainer>{data.rank}위</RankContainer>
        <BookDataContainer>
          <BooknameContainer len={data.bookname.length}>
            {data.bookname}
          </BooknameContainer>
          <BookInfoContainer>
            <AuthorContainer>작가 : {data.author}</AuthorContainer>|
            <PublisherContainer>출판사 : {data.publisher}</PublisherContainer>
          </BookInfoContainer>
        </BookDataContainer>
      </CardContainer>
    );
  };

  return (
    <MainpageContainer>
      <MainpageTitle>📚 알라딘 책 순위 📘</MainpageTitle>
      <CustomForm onSubmit={onSubmitForm}>
        <RadioContainer>
          검색옵션
          <RadioIndiv>
            <input
              type="radio"
              id="bookname"
              name="searchopt"
              value="bookname"
              defaultChecked
              onChange={ChangeHandler}
              style={{ marginRight: "8px" }}
            />
            <label htmlFor="bookname">책 이름</label>
          </RadioIndiv>
          <RadioIndiv>
            <input
              type="radio"
              id="author"
              name="searchopt"
              value="author"
              onChange={ChangeHandler}
              style={{ marginRight: "8px" }}
            />
            <label htmlFor="author">저자</label>
          </RadioIndiv>
          <RadioIndiv>
            <input
              type="radio"
              id="publisher"
              name="searchopt"
              value="publisher"
              onChange={ChangeHandler}
              style={{ marginRight: "8px" }}
            />
            <label htmlFor="publisher">출판사</label>
          </RadioIndiv>
        </RadioContainer>
        <SearchArea>
          <CustomInput
            type="text"
            name="searchtext"
            onChange={SearchChange}
            value={searchVal}
            placeholder="검색어를 입력하세요"
          ></CustomInput>
          <CustomBtn type="submit">검색</CustomBtn>
        </SearchArea>
      </CustomForm>
      <ResultArea>
        {filterList.length === 0 || enterVal === ""
          ? bookList.map((data, index) => bookCard(data))
          : filterList.map((data, index) => bookCard(data))}
      </ResultArea>
    </MainpageContainer>
  );
};

export default Mainpage;
