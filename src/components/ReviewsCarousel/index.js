import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  leftArrowClicking = () => {
    this.setState(prevState => ({index: prevState.index - 1}))
  }

  rightArrowClicking = () => {
    this.setState(prevState => ({index: prevState.index + 1}))
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const personProfile = reviewsList[index]
    console.log(personProfile)
    return (
      <div className="home">
        <h1 className="heading">Reviews</h1>
        <div className="arrow-container">
          <div className="left-arrow-container">
            <button
              className="btn"
              type="button"
              onClick={this.leftArrowClicking}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="image-left"
              />
            </button>
          </div>
          <div className="card-container">
            <img
              src={personProfile.imgUrl}
              alt={personProfile.username}
              className="image"
            />
            <p className="head">{personProfile.username}</p>
            <p className="parag-company">{personProfile.companyName}</p>
            <p className="parag-para">{personProfile.description}</p>
          </div>
          <div className="right-arrow-container">
            <button
              type="button"
              className="btn"
              data-testid="rightArrow"
              onClick={this.rightArrowClicking}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="image-right"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
