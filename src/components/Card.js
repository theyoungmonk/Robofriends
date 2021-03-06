import React from 'react'

const Card = ({name, email, id}) => {

  
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw-2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}}?size=200x200`} />
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>

        </div>

    );
}

export default Card;
