import img from "../../img/image-equilibrium.jpg"
import view from "../../img/icon-view.svg"
import sims from "../../img/icon-ethereum.svg"
import clock from "../../img/icon-clock.svg"
import user from "../../img/image-avatar.png"
import ImgCard from "../ImgCard/ImgCard"
import Main from "../Main/Main"
import User from "../User/User"
import './Card.css'


function Card() {
    let data = {
        imgCard:{
            img:img,
            view:view
        },
        main: {
            title: 'Equilibrium #3429',
            text: 'Our Equilibrium collection promotes balance calm',
            sims: {
                img:sims,
                text:'0,041 ETH',
            },
            clock: {
                img:clock,
                text:'3 days left'
            },
        },
        created: {
            creation: 'Creation of',
            user: {
                img:user,
                name:'Jules Wyverin'
            }
        }
    }
    console.log(data);
    return (
        <div className="card">
            <ImgCard data={data.imgCard} /> {/* je passe en props uniquement les informations de l'objet imgCard*/}
            
            <Main data={data.main} /> {/* je passe en props uniquement les informations de l'objet main*/}
            <hr />
            <User data={data.created} /> {/* je passe en props uniquement les informations de l'objet created*/}
        </div>
    )
}

export default Card;