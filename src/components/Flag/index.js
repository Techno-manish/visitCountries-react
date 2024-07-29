import './index.css'

const Flag = prop => {
  const {data, onChangeVisitStatus} = prop
  const {id, name, imageUrl} = data

  const onRemoveCountry = () => onChangeVisitStatus(id)

  return (
    <li className="flagContainer">
      <img src={imageUrl} alt="thumbnail" className="flagImage" />
      <div className="flagInfo">
        <p>{name}</p>
        <button type="button" onClick={onRemoveCountry} className="flagButton">
          Remove
        </button>
      </div>
    </li>
  )
}
export default Flag
