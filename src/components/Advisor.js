import React from 'react'

const AdvisorCard = ({ advisorData }) => {
    return (
        <>
            <section className='main-card--container'>
                {
                    advisorData.map((curEle) => {
                        if (curEle.category === "mentor") {
                            return (
                                <>
                                    <div className='card-container'>
                                        <div className='mentor-card'>
                                            <div className='card-body'>

                                                <img src={curEle.image} alt='' className='card-media'></img>


                                                <h2 className='mentor-card-title'>{curEle.name}</h2>
                                                <h4 className='mentor-title'>{curEle.profession}</h4>
                                                <h4 className='mentor-title'>{curEle.college}</h4>

                                            </div>

                                        </div>
                                    </div>

                                </>
                            );
                        }
                        else {
                            return (
                                <>
                                    <div className='card-container'>
                                        <div className='mentor-card'>
                                            <div className='card-body'>

                                                <img src={curEle.image} alt='' className='card-media'></img>


                                                <h2 className='mentor-card-title'>{curEle.name}</h2>
                                                <button className='btn'>Message Him Now</button>

                                            </div>

                                        </div>
                                    </div>
                                </>
                            )

                        }
                    })}

            </section>
        </>
    );
}

export default AdvisorCard
