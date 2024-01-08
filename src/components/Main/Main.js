import './Main.css'

function Main({data}) { // Le props qu'on recoit ici ne contient pas tout l'objet data mais uniquement l'objet main qui est dans data.main
  return (
    <div className='main'>
      <h1 className="title">{data.title}</h1>
      <p>{data.txt}</p>
      <div className="sims">
        <div className="left">
          <img src={data.sims.img} alt="" /> {/* Ici j'accède à l'objet sims qui est dans l'objet main*/}
          <p>{data.sims.text}</p> {/* Ici j'accède à l'objet sims qui est dans l'objet main*/}
        </div>
        <div className="right">
          <img src={data.clock.img} alt="" /> {/* Ici j'accède à l'objet clock qui est dans l'objet main*/}
          <p>{data.clock.text}</p> {/* Ici j'accède à l'objet clock qui est dans l'objet main*/}
        </div>
      </div>
    </div>
  )
}

export default Main