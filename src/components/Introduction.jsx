import Avatar from '../assets/avatar.png';

function Introduction () {
    return (
        <div className="introduction">
            <img className="introduction__img"src={Avatar} alt="Photo of manager of the group" />
            <div>
                <h2>Dr. FirstName LastName</h2>
                <p>Welcome to our research group!</p>
            </div>
        </div>
    )
}

export default Introduction;