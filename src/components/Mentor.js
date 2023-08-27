
import Advisor from './Advisor'
import { Mentors, Advisors } from './CollegeApi'

import MentorCard from './MentorCard'
import './style.css'
import React, { useState } from 'react'


export default function Team() {
    const [mentorData, setmentorData] = useState(Mentors)
    const [advisorData, setadvisorData] = useState(Advisors)
    return (
        <>

            <div>
                <h1>Meet Your Mentors</h1>
                <MentorCard mentorData={mentorData} />
            </div>
            <div>
                <h3>Mentors and Advisor</h3>
                <Advisor advisorData={advisorData} />
            </div>

        </>
    )
}
