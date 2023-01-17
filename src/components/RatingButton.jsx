import'../style/ratingButton.css'

const RatingButton = ({data, sendId}) => {
    const {rating, id} = data;
  return (
    <button className='ratingButton' onClick={()=>sendId(id)}>{rating}</button>
  )
}

export default RatingButton