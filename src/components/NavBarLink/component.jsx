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
        let shouldClose = document.querySelectorAll('.menu-link');
        Array.from(shouldClose).map(elem => {
          if (elem.lastElementChild.innerHTML === 'ᐃ') {
            elem.lastElementChild.innerHTML = 'ᐁ';
            elem.nextSibling.style.display = 'none';
          }
          return 1;
        })
        event.target.closest('.menu-link').nextSibling.style.display = 'flex';
        event.target.closest('.menu-link').nextSibling.scrollIntoView();
        event.target.innerHTML = 'ᐃ';
      }
    }
    else {
      if (event.target.innerHTML === 'ᐃ') {
        event.target.closest('.sub-menu-link').nextSibling.style.display = 'none';
        event.target.innerHTML = 'ᐁ';
      }
      else {
        let shouldClose = document.querySelectorAll('.sub-menu-link');
        Array.from(shouldClose).map(elem => {
          if (elem.lastElementChild.innerHTML === 'ᐃ') {
            elem.lastElementChild.innerHTML = 'ᐁ';
            elem.nextSibling.style.display = 'none';
          }
          return 1;
        })
        event.target.closest('.sub-menu-link').nextSibling.style.display = 'flex';
        event.target.closest('.sub-menu-link').nextSibling.scrollIntoView();
        event.target.innerHTML = 'ᐃ';
      }
    }
    let listHeight = document.querySelector('.menu-list').clientHeight;
    let menuHeight = document.querySelector('.menu').clientHeight;
    let appHeight = window.screen.height;
    let blur = document.querySelector('.blur');
    let list = document.querySelector('.menu-list');
    blur.style.top = listHeight + menuHeight + 'px';
    if (appHeight <= menuHeight + listHeight) {
      blur.style.display = 'none';
      list.style.overflowY = 'auto';
    }
    else {
      blur.style.display = 'block';
      list.firstElementChild.scrollIntoView();
      list.style.overflowY = 'hidden';
    }
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