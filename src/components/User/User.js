import './User.css'

function User({data}) {
  return (
    <div className="last">
      <img src={data.user.img} alt="" height={50} />
      <p>{data.creation} <span>{data.user.name}</span></p>
    </div>
  )
}
export default User