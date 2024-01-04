import './Main.css'

function Main({data}) {
  return (
    <div className='main'>
      <h1 className="title">{data.title}</h1>
      <p>{data.text}</p>
      <div className="sims">
        <div className="left">
          <img src={data.sims.img} alt="" />
          <p>{data.sims.text}</p>
        </div>
        <div className="right">
          <img src={data.clock.img} alt="" />
          <p>{data.clock.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Main