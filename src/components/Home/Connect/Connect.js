import React from 'react'
import './Connect.css'
import {ReactComponent as Intersection} from '../../Images/Intersection-2.svg'
import {ReactComponent as Intersect} from '../../Images/Intersection-1.svg'

const Connect = () => {
  return (
    <div className="max-wrapper connect-wrapper" id="connect">
        <div className="connect">
          <div className="connect-intersection">
            <Intersection/>
          </div>
          <div className="connect-intersect">
            <Intersect/>
          </div>
            <div className="connect-content">
                <div className="connect-content-line"></div>
                <h1 className="connect-content-main">Lets Work Together</h1>
                <div className="connect-content-sub">I am currently available for projects. Please feel free to reach out to me about your project!</div>
                <div className="connect-content-btn">
                    <div className="btn-c">Contact Me</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect