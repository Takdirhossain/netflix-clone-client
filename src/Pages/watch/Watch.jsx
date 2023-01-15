import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";

import "./watch.scss";
const Watch = () => {
 const data = useLocation()
const {from} = data.state
  return (
    <div className="watch">
     <Link to="/"> <div className="back">
        <ArrowBackIcon />
        Home
      </div></Link>
      <div >
        <video className="video" autoPlay progress controls src={from.video} />
      </div>
    </div>
  );
};

export default Watch;
