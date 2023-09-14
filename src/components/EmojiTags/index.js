import './index.css'

const EmojiTags = props => {
  const {resources, onClickEvent} = props
  const {name, imageUrl, id} = resources
  const onClickChange = () => {
    onClickEvent(id)
  }
  return (
    <li className="emoji-li">
      <button onClick={onClickChange} className="emj-btn">
        <img className={`emojis`} src={imageUrl} alt={name} />
      </button>
      <p className="emojis-name">{name}</p>
    </li>
  )
}

export default EmojiTags
