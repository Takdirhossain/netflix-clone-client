import "./listiteam.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Listiteam = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const movieLists = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/movies/find/" + item,
          {
            headers: {
              token:
                "Bearar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A",
            },
          }
        );

        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    movieLists();
  }, [item]);
  console.log(movie)
  return (
    <Link to="/watch" state={{ from: movie }}>
      <div
        className="listiteam"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgTitle} alt="" />

        {isHovered && (
          <>
            <video src={movie?.trailer} autoPlay loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpIcon className="icon" />
                <ThumbDownIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>{movie?.year}</span>
              </div>
              <div className="desc">{movie?.des}</div>
              <div className="genre">{movie?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Listiteam;
