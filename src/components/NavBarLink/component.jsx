import React from 'react'
import './style.css'

function NavBarLink(props) {
  const { name, childrens } = props;

  const openSubLinks = (event) => {
    if (event.target.closest('.menu-link') != null) {
      if (event.target.innerHTML === 'ᐃ') {
        event.target.closest('.menu-link').nextSibling.style.display = 'none';
        event.target.innerHTML = 'ᐁ';
      }
      else {
        event.target.closest('.menu-link').nextSibling.style.display = 'flex';
        event.target.innerHTML = 'ᐃ';
      }
    }
    else {
      if (event.target.innerHTML === 'ᐃ') {
        event.target.closest('.sub-menu-link').nextSibling.style.display = 'none';
        event.target.innerHTML = 'ᐁ';
      }
      else {
        event.target.closest('.sub-menu-link').nextSibling.style.display = 'flex';
        event.target.innerHTML = 'ᐃ';
      }
    }
    let blur = document.querySelector('.blur');
    blur.style.top = document.querySelector('.menu-list').clientHeight + 'px';
  }

  return (
    <React.Fragment>
      <div className="menu-link">
        <a className='main-link' href={name}>{name}</a>
        <div className='drop-content'>
          {
            Object.entries(childrens).map(([link, subLink], index) => {
              return (
                <ul className="drop-list" key={index}>
                  <a className='link' href={link}>{link}</a>
                  {Object.keys(subLink).map((link, index) => <li key={index}><a className='sub-link' href={link}>{link}</a></li>)}
                </ul>
              )
            })
          }
        </div>
        <div className='blur' />
        <div className='open-btn' onClick={openSubLinks}>ᐁ</div>
      </div>
      <div className='sub-menu'>
        {
          Object.entries(childrens).map(([link, subLink], index) => {
            return (
              <React.Fragment key={index}>
                <div className='sub-menu-link'>
                  <a href={link}>{link}</a>
                  <div className='open-btn' onClick={openSubLinks}>ᐁ</div>
                </div>
                <div className='third-menu'>
                  {Object.keys(subLink).map((link, index) => {
                    return <a className='third-link' href={link} key={index}>{link}</a>
                  }
                  )}
                </div>
              </React.Fragment>
            )
          })
        }
      </div>
    </React.Fragment>
  );
}

export default NavBarLink;