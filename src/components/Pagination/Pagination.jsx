import React, { useState } from "react";
import Review from "../ReviewCard/ReviewCard";
// import style from "./pagination.module.scss";
// import ArrowLeft from "../../assets/images/white_arrow_left.svg";
// import ArrowRight from "../../assets/images/white_arrow_right.svg";
// import ArrowDown from "../../assets/images/biege_arrow_down.svg";
import Post from "../Post/Post";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numEachPage, setNumEachPage] = useState(12);

  const data = props.array;

  const totalPages = Math.ceil(data.length / numEachPage);

  const handleClick = (page) => {
    window.scrollTo({ top: 0 });
    setNumEachPage(12);
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * numEachPage;
  let endIndex = startIndex + numEachPage;
  const currentCards = data.slice(startIndex, endIndex);

  let endNum = numEachPage;
  const liveload = () => {
    endNum = numEachPage + 12;
    setNumEachPage(endNum);
  };

  return (
    <>
      <div className={props.wrapper}>
        {currentCards.map((card, index) =>
          card.stars ? (
            <Review
              key={index}
              isLink={false}
              review={card.review}
              name={card.name}
              stars={card.stars}
              date={card.date}
              text={card.text}
            ></Review>
          ) : (
            <Post
              key={index}
              link={card.link}
              image={card.image}
              tag={card.tag}
              title={card.title}
              text={card.text}
              date={card.date}
            ></Post>
          )
        )}
      </div>
    </>
  );
};

export default Pagination;
