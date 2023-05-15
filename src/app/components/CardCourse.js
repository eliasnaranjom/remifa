import '../css/CardCourse.css';
import { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

const CardCourse = props => {

    const [hovering, setHovering] = useState(false);

    return (
        <div class="courseCard">
            <div class="img">
                {/* <img src='https://img.freepik.com/foto-gratis/hombre-toca-primer-plano-guitarra-acustica_169016-20618.jpg?w=360&t=st=1683937411~exp=1683938011~hmac=27371f6b245614c10227673e218fbbf9f7ee1ee1ef4f2ada6becef4465265e42' alt='guitar' /> */}
                <div class="save"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                >
                    {hovering ? <AiFillPlusCircle style={{ color: 'grey' }} /> : <AiOutlinePlusCircle style={{ color: 'grey' }} />}
                </div>
            </div>

            <div class="text">
                <p class="h3">{props.Title}</p>
                <p class="p">{props.Description}</p>
            </div>
        </div>
    );
}

export default CardCourse;