import React from 'react'

const TeamCard = ({ collegeData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {collegeData.map((curEle) => {
                    return (
                        <>
                            <div className='card-container'>
                                <div className='card'>
                                    <div className='card-body'>

                                        <h2 className='card-title'>{curEle.name}</h2>
                                        <span className='card-description subtle'>{curEle.country}</span>

                                    </div>

                                </div>
                            </div>

                        </>
                    );
                })}

            </section>
        </>
    );
}

export default TeamCard
