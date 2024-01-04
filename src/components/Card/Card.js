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
    return (
        <div className="card">
            <ImgCard img={img} view={view} data={data.imgCard} />
            <Main data={data.main} />
            <hr />
            <User data={data.created} />
        </div>
        // <div className="card">
        //     <div className="img">
        //         <img src={img} alt="" height={350} />
        //         <div className="active">
        //             <img src={view} alt="" className="view" />
        //         </div>
        //     </div>
        //     <h1>Equilibrium #3429</h1>
        //     <p>Our Equilibrium collection promotes balance calm</p>
        //     <div className="sims">
        //         <div className="left">
        //             <img src={sims} alt="" />
        //             <p>0,041 ETH</p>
        //         </div>
        //         <div className="right">
        //             <img src={clock} alt="" />
        //             <p>3 days left</p>
        //         </div>
        //     </div>
        //     <hr />
        //     <div className="last">
        //         <img src={user} alt=""  height={50}/>
        //         <p>Creation of <span>Jules Wyverin</span></p>
        //     </div>
        // </div>
    )
}

export default Card;