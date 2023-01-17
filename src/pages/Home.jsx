import React, { useState } from "react";
import { Link } from "react-router-dom";
import RatingButton from "../components/RatingButton";
import '../style/home.css'
import star from "../assets/Path.svg";
export const ratings = [
  {
    id: 1,
    rating: 1,
  },
  {
    id: 2,
    rating: 2,
  },
  {
    id: 3,
    rating: 3,
  },
  {
    id: 4,
    rating: 4,
  },
  {
    id: 5,
    rating: 5,
  },
];
const Home = () => {
  const [score, setScore] = useState(0);
  const sendId = (id) => {
    setScore(id);
    console.log(score);
  };
   const linkStyle = {
    width: '100%'
   }
   if(score===0){
    linkStyle.pointerEvents = "none"
   }
  return (
    <div className="container">
      <img src={star} alt="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratingButtons">
              {ratings.map((rating) => (
        <RatingButton key={rating.id} data={rating} sendId={sendId} />
      ))}
      </div>
        <Link
          to="rating"
          className="submit"
          state={{ score: score }}
          style={linkStyle}
        >
          SUBMIT
        </Link>
    </div>
  );
};

export default Home;

//to= permite acceder al enlace
//state= por medio state podemos pasar datos al enlace, tiene sinergia con el hook useLocation()
//style={{pointerEvents: "none"}} desactiva  la propiedad del link que permite abrir unn nuevo enlace
