// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackClicked: false,
  }

  setImageClicked = () => this.setState({isFeedbackClicked: true})

  renderQuestionPage = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="list-items-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="un-ordered-list">
          {emojis.map(emoji => (
            <li
              className="list-item"
              onClick={this.setImageClicked}
              key={emoji.id}
            >
              <img src={emoji.imageUrl} className="image" alt={emoji.name} />
              <p className="emojis-name">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackPage = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="list-items-container">
        <img src={loveEmojiUrl} alt="loveEmoji" className="love-emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackClicked} = this.state
    return (
      <div className="main-container">
        <div className="card">
          {isFeedbackClicked
            ? this.renderFeedbackPage()
            : this.renderQuestionPage()}
        </div>
      </div>
    )
  }
}

export default Feedback
