import '../css/Info.css';

const Info = props => {

    return (
        <section className={props.classNameDirection} id='Info'>
            <div className='InfoImg'>
                <img src={`../${props.Img}`} alt='Guitar' />
            </div>
            <div className='InfoText'>
                <h1>{props.Title}</h1>
                <p>{props.Description}</p>
            </div>
        </section>
    );
}

export default Info;