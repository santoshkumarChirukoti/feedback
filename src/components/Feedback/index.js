// Write your React code here.
import {Component} from 'react'
import EmojiTags from '../EmojiTags'
import ThankYouCard from '../ThankYouCard'
import './index.css'

class Feedback extends Component {
  state = {isTrue: false}
  onClickEvent = isTrue => {
    if (2 === isTrue) {
      this.setState({isTrue: true})
    }
  }
  render() {
    const {isTrue} = this.state
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="container">
        {isTrue ? (
          <div className="happy-container sub-container">
            <ThankYouCard resources={resources} />
          </div>
        ) : (
          <div className="sub-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emoji-ul">
              {emojis.map(each => (
                <EmojiTags
                  key={each.id}
                  onClickEvent={this.onClickEvent}
                  resources={each}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
