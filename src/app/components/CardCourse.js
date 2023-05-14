import '../css/CardCourse.css';
import { AiOutlinePlusCircle } from "react-icons/ai";

const CardCourse = props => {

    return (
        <div class="card">
            <div class="img">
                {/* <img src='https://img.freepik.com/foto-gratis/hombre-toca-primer-plano-guitarra-acustica_169016-20618.jpg?w=360&t=st=1683937411~exp=1683938011~hmac=27371f6b245614c10227673e218fbbf9f7ee1ee1ef4f2ada6becef4465265e42' alt='guitar' /> */}
                <div class="save">
                    <AiOutlinePlusCircle style={{ color: 'grey' }} />
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