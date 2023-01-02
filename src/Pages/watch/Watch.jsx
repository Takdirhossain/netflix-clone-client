import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import video from "../../assets/backgreound.mp4";
import "./watch.scss";
const Watch = () => {
  return (
    <div className="watch">
     <Link to="/"> <div className="back">
        <ArrowBackIcon />
        Home
      </div></Link>
      <div >
        <video className="video" autoPlay progress controls src={video} />
      </div>
    </div>
  );
};

export default Watch;
