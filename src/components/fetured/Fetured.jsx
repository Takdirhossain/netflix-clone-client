import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./fetured.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Fetured = ({ type, setGenre }) => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/movies/random?type=${type}`,
          {
            headers: {
              token:
                "Bearar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A",
            },
          }
        );
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "movie" : "series"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="" />
      <div className="info">
        <img src={content.imgsm} alt="" />
        <span className="des">
          {content.title}
          <br />
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon /> <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
