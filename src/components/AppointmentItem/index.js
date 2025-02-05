// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title"> {title} </p>
        <button
          type="button"
          onClick={onClickStar}
          data-testid="star"
          className="star-btn"
        >
          <img src={imgUrl} alt="star" className="star" />
        </button>
      </div>
      <p className="date"> Date: {date} </p>
    </li>
  )
}

export default AppointmentItem
