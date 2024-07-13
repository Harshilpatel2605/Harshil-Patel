import React from 'react'
import '../Styles/about.css'
import uidesign from '../Assets/ui-design.png'
import webdesign from '../Assets/website-design.png'

function About() {
    return (
        <div id='about'>
            <div className='whatido'>What I Do</div>
            <div className='content'>"I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, Javascript, React Library, Material UI, Vite Framework as well as design software such as Adobe photoshop and Illustrator."</div>
            <div className='cards'>
                <div className='card'>
                    <img src={uidesign} alt='UI-UX'/>
                    <div className='card-content'>
                        <div className='card-title'>UI/UX Design</div>
                        <div className='card-detail'>Using Figma for UI/UX and Adobe Illustrator. </div>
                    </div>
                </div>
                <div className='card'>
                    <img src={webdesign} alt='Website'/>
                    <div className='card-content'>
                        <div className='card-title'>Website Design</div>
                        <div className='card-detail'>Using Javascript, React Library, Vite Framework.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About