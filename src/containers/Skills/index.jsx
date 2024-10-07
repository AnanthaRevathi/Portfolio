import React from 'react';
import PageHeader from '../../components/pageHeader';
import { skillsData } from '../../helpers/Utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './styles.scss'; // Ensure the path is correct

export const Skills = () => {
  return (
    <section id="skills" className='skills'>
      <PageHeader headerText="My skills" /> 
      
      <div className='skills__content__wrapper'>
        {skillsData.map((item, i) => (
          <div key={i} className='skills__content__wrapper__inner__content'>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: 'translateX(-200px)',
              }}
              end={{
                transform: 'translateX(20px)',
              }}
            >
              <h3 className='skills__content__wrapper__inner__content__category__text'>
                {item.label} {/* Use item.label to display the section label */}
              </h3>
              <div className='skills__content__wrapper__inner__content__progressbar__container'>
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={['opacity : 1', 'opacity : 0']}
                    iterationCount="1"
                    key={j}
                  >
                    <div className='progressbar-wrapper'>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={"2"}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
