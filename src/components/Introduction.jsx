import Avatar from '../assets/avatar.png';

function Introduction () {
    return (
        <div className="introduction">
            <img className="introduction__img"src={Avatar} alt="Photo of manager of the group" />
            <div>
                <h2 className='introduction__hdl'>Dr. FirstName LastName</h2>
                <p className='introduction__text'>Welcome to our research group website!</p>
            </div>
        </div>
    )
}

export default Introduction;