// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationPlace} = props
  const {name, imgUrl} = destinationPlace

  return (
    <li className="place-container">
      <img src={imgUrl} alt={name} className="image" />
      <h1 className="place-name">{name}</h1>
    </li>
  )
}

export default DestinationItem
