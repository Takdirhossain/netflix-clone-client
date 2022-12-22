import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useRef, useState } from "react";
import Listiteam from "../listiteam/Listiteam";
import "./list.scss";

const List = () => {
  const [ismove, setIsmove] = useState(false)
  const [slide, setSlide] = useState(0)
  const listref = useRef();

  const handaleClick = (direction) => {
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
      <span className="contine">Continue To Watch</span>
      <div className="wraper">
        <ArrowBackIosNewOutlinedIcon
          className="slider left"
          onClick={() => handaleClick("left")}
          style={{display: !ismove && 'none'}}
        />
        <div className="container" ref={listref}>
          <Listiteam index={0} />
          <Listiteam index={1}/>
          <Listiteam index={2}/>
          <Listiteam index={3}/>
          <Listiteam index={4}/>
          <Listiteam index={5}/>
          <Listiteam index={6}/>
          <Listiteam index={7}/>
          <Listiteam index={8}/>
          <Listiteam index={9}/>
          
        </div>
        <ArrowForwardIosOutlinedIcon
          onClick={() => handaleClick("right")}
          className="slider right"
        />
      </div>
    </div>
  );
};

export default List;
