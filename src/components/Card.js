import React from "react";
import aliFres from "../assets/AlimentosFrescos.jpg";

function Card() {
    return (
        <div className="card">
            <img src={aliFres} alt=""></img>
            <div className="card-body">
                <h4 className="card-title">
                    My title
                </h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet. Et ratione natus ad enim nesciunt qui quia autem qui quas rerum a voluptas accusantium et eaque soluta qui illum rerum. Qui molestiae quia ab minus temporibus non sequi ducimus hic autem quam ut magni beatae!
                </p>
            </div>
        </div>
    )
}

export default Card;