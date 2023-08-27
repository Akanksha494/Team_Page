import React from 'react'

const MentorCard = ({ mentorData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {
                    mentorData.map((curEle) => {

                        return (
                            <>
                                <div className='card-container'>
                                    <div className='mentor-card'>
                                        <div className='card-body'>

                                            <img src={curEle.image} alt='' className='card-media'></img>


                                            <h2 className='mentor-card-title'>{curEle.name}</h2>
                                            <h4 className='mentor-title'>{curEle.university}</h4>

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

export default MentorCard
