import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useRef, useState } from "react";
import Listiteam from "../listiteam/Listiteam";
import "./list.scss";

const List = ({list}) => {
  const [ismove, setIsmove] = useState(false)
  const [slide, setSlide] = useState(0)
  const listref = useRef();

  const handleClick = (direction) => {
    setIsmove(true)
    let distance = listref.current.getBoundingClientRect().x - 50
   
    if (direction === "left"  && slide > 0){
      setSlide( slide - 1)
        listref.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slide < 2){
      setSlide( slide + 1)
        listref.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    
  };
  return (
    <div className="list">
    <span className="listTitle">{list.title}</span>
    <div className="wrapper">
      <ArrowBackIosNewOutlinedIcon
        className="sliderArrow left"
        onClick={() => handleClick("left")}
        style={{ display: !ismove && "none" }}
      />
      <div className="container" ref={listref}>
        {list.content.map((item, i) => (
          <Listiteam index={i} item={item} />
        ))}
      </div>
      <ArrowForwardIosOutlinedIcon
        className="sliderArrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  </div>
  );
};

export default List;
