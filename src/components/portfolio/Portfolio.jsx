import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/COVER.png'
import IMG2 from '../../assets/login.png'
import IMG3 from '../../assets/meddy.png'
import IMG4 from '../../assets/brail.png'
import IMG5 from '../../assets/tracer.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'UI/UX Design Music Concert',
    github: 'https://github.com/Widraaa/Baby-sFood.git',
    demo: '#'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Babys Food',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Meddy',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Brail Polibatam',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Tracer Study Alumni ',
    github: 'https://github.com',
    demo: '#'
  },

]

const Portfolio = () => {
  return (
    <section id='Portfolio '>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio