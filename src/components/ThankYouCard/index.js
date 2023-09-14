import './index.css'

const ThankYouCard = props => {
  const {resources} = props
  const {loveEmojiUrl} = resources
  return (
    <div className="sub-container">
      <img className="love-img" src={loveEmojiUrl} alt="love emoji" />
      <h1>Thank You!</h1>
      <p className="pass">
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )
}

export default ThankYouCard
