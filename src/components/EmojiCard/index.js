// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {details, onEmoji} = props
  const {emojiUrl, emojiName} = details

  const onSelect = () => {
    onEmoji(details)
  }

  return (
    <li>
      <button type="button" onClick={onSelect} className="emoji">
        {' '}
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
