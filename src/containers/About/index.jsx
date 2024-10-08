import React from 'react';
import PageHeader from '../../components/pageHeader'; // Correct import
import {Animate} from "react-simple-animate";
import {FaReact} from 'react-icons/fa'

import {DiDatabase} from 'react-icons/di'
import { VscGithub } from "react-icons/vsc";
import { VscVscode } from "react-icons/vsc";
import './styles.scss';
const personalDetails=[
  {
    label:"Name",
    value:"Anantha Revathi",
  },
  {
    label:"Age",
    value:"30",
  },
  {
label:"email",
value:"revatalks@gmail.com",
  },{
    label:"phone no",
    value:"8870543838"
  }
];
const jobSummary = `Over the past 6 months, I've gained valuable experience in frontend development
                    working primarily with Reactjs to build dynamic,
                    user-friendly web applications. I’ve become proficient in JavaScript, HTML, and CSS, 
                    utilizing modern libraries and frameworks like Bootstrap for responsive design. 
                    My experience includes developing components, managing state with Context API, 
                    implementing client-side routing, and integrating APIs to fetch and display data. 
                    I’ve worked on projects involving complex UI interactions, form validation, 
                    and enhancing user experiences, while consistently improving my skills in debugging, 
                    optimizing page load times, and ensuring cross-browser compatibility.`;

export const About = () => {
  return (
    <section id="about" className='about'>
      <PageHeader headerText="About Me" /> 
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
        <Animate play duration={1.5} delay={1} start={{
  transform:"translateX(-900px)",
}}
end={{
  transform: "translatex(0px)",
}}>
<h3>Frontend developer</h3>
<p>{jobSummary}</p>
</Animate>

<Animate play duration={1.5} delay={1} start={{
  transform:"translateX(500px)",
}}
end={{
  transform: "translatex(0px)",
}}>
<h3 className='personalInformationHeaderText'>Personal Information</h3>
<ul>
  {
    personalDetails.map((item,i)=>(
      <li key={i}>
        <span className='title'>{item.label}</span>
        <span className='value'>{item.value}</span>
      </li>
    ))
  }
</ul>
</Animate>
        </div>
        <div className='about__content__servicesWrapper' >
        <Animate play duration={1.5} delay={1} start={{
  transform:"translateX(600px)",
}}
end={{
  transform: "translatex(0px)",
}}>
        <div className='about__content__servicesWrapper__innerContent' >
<div>
  <FaReact size={60} color= "var( --yellow-theme-main-color)"/>
  
</div>


<div>
  <DiDatabase size={60} color= "var( --yellow-theme-main-color)"/>
  
</div>
<div>
  <VscGithub size={60} color= "var( --yellow-theme-main-color)"/>
  
</div>
<div>
  <VscVscode size={60} color= "var( --yellow-theme-main-color)"/>
  
</div>
</div>
</Animate>
        </div>
      
      </div>
    </section>
  );
};
