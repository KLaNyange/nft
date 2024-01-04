import './ImgCard.css'

function ImgCard({data}) {
    return (
        <div className="img">
            <img src={data.img} alt="" height={350} />
            <div className="active">
                <img src={data.view} alt="" className="view" />
            </div>
        </div>
    )
}

export default ImgCard