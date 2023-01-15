import { useEffect } from "react";
import { useState } from "react";
import Fetured from "../../components/fetured/Fetured";
import List from "../../components/list/List";
import Nav from "../../components/nav/Nav";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/list${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzIwMzE4NSwiZXhwIjoxNjczNjM1MTg1fQ.vi7iGzyz5LzqtYgiz4QAQKis1tog_ruQPSOx2W8y3no",
            },
          }
        );
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [genre, type]);
  return (
    <div className="home">
      <Nav></Nav>
      <Fetured type={type} />
      {list?.map((list, i) => (
        <List key={i} list={list} />
      ))}
    </div>
  );
};

export default Home;
