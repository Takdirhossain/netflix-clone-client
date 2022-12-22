import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import video from "../../assets/backgreound.mp4";
import "./watch.scss";
const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <div >
        <video className="video" autoPlay progress controls src={video} />
      </div>
    </div>
  );
};

export default Watch;
