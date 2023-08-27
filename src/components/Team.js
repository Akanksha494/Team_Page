
import TeamCard from './TeamCard'
import Details from './CollegeApi'
import './style.css'
import React, { useState } from 'react'


export default function Team() {
    const [collegeData, setCollegeData] = useState(Details)
    return (
        <>
            <div className='DIV-1'>
                <h1>Team Page</h1>
                <h2>Learn from Scientist, Research scholars from the top universities in the world.</h2>
                <TeamCard collegeData={collegeData} />
            </div>

        </>
    )
}
