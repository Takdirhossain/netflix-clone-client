import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import './fetured.scss'

const Fetured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>
                {type === "Movie"? "Movie" : "Series"}
                </span>
                <select name="genre" id="genre">
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
      <img
        width="100%"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/f50d36f6-4e0f-491c-9b60-3a289f610e2f/BD-en-20221214-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe
          dolores dignissimos nihil praesentium perferendis, dolorum unde, autem
          omnis consequatur quae reiciendis dicta suscipit eius! Alias ut
          tenetur et distinctio. <br />
        </span>
        <div className="buttons">
          <button className="play">
            
            <PlayArrowIcon /> <span>Play</span>
          </button>
          <button className="more">
            
            <InfoOutlinedIcon /><span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
