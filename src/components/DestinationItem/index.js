// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationList} = props
  const {name, imgUrl} = destinationList

  return (
    <li className="place-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
