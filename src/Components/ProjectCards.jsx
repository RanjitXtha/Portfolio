import React from 'react'

const ProjectCards = ({image , title ,url}) => {
  return (
      <div className="project1 project">
            <div className='project-left'>
                <div><img src={image} alt="project1"/></div>
            </div>
            <div className='project-right'>
              <h1>{title}</h1>
                <button className='round-button'>
                  <a href={url} target="_blank"><button> View</button></a>
                <div className='eff'></div>
                </button>
          </div>
        </div>
  )
}

export default ProjectCards