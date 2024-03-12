import './nestedComponent/nestedComponent.css'
import {
  Link,
  // Outlet,
} from 'react-router-dom'

function Pages() {
  return (
    <div className='Pages'>
      <div className='child-navbar'>
          <Link className='link' to="first-page">First-Page</Link>
          <Link className='link' to="second-page">Second-Page</Link>
          <Link className='link' to="third-page">Third-Page</Link>
      </div>
      {/* <div>
          <Link to="first-page">First-Page</Link> &nbsp; &nbsp;
          <Link to="second-page">Second-Page</Link> &nbsp; &nbsp;
          <Link to="third-page">Third-Page</Link>
          <Outlet />
      </div> */}
    </div>
  )
}

export default Pages
