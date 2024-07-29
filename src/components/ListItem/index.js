import './index.css'

const ListItem = prop => {
  const {data, onChangeVisitStatus} = prop
  const {id, name, isVisited} = data
  const visitStatus = isVisited ? 'Visited' : 'Visit'
  const visitButtonStyle = isVisited ? 'listButtonV' : 'listButtonNV'

  const changeVisitStatus = () => onChangeVisitStatus(id)

  return (
    <li className="listItem">
      <p>{name}</p>
      {isVisited === true ? (
        <p className={visitButtonStyle}>{visitStatus}</p>
      ) : (
        <button
          type="button"
          className={visitButtonStyle}
          onClick={changeVisitStatus}
        >
          {visitStatus}
        </button>
      )}
    </li>
  )
}
export default ListItem
