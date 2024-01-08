import './ImgCard.css'

function ImgCard({data}) { // Le props qu'on recoit ici ne contient pas tout l'objet data mais uniquement l'objet imgCard qui est dans data.imgCard
    return (
        <div className="img">
            <img src={data.img} alt="" height={350} />
            <div className="eye">
                <img src={data.view} alt="" className="view" />
            </div>
        </div>
    )
}

export default ImgCard