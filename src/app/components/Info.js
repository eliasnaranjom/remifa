import '../css/Info.css';

const Info = ({ClassNameDirection, Img, Title, Description}) => {

    return (
        <section className={ClassNameDirection} id='Info'>
            <div className='InfoImg'>
                <img src={`../${Img}`} alt='Guitar' />
            </div>
            <div className='InfoText'>
                <h1>{Title}</h1>
                <p>{Description}</p>
            </div>
        </section>
    );
}

export default Info;