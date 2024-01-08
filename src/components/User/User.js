import './User.css'

function User({data}) { // Le props qu'on recoit ici ne contient pas tout l'objet data mais uniquement l'objet created qui est dans data.created
  return (
    <div className="last">
      <img src={data.user.img} alt="" height={50} /> {/* Ici j'accède à l'objet user qui est dans l'objet created*/}
      
      <p>{data.creation} <span>{data.user.name}</span></p> {/* Ici j'accède à l'objet user qui est dans l'objet created*/}
    </div>
  )
}
export default User