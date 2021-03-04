import './style.css'

function NavBarLink(props) {
  const { name, childrens } = props;

  const openSubLinks = (event) => {
    if (event.target.innerHTML == 'ᐃ') {
      event.target.closest('.menu-link').nextSibling.style.display = 'none';
      event.target.innerHTML = 'ᐁ';
    }
    else {
      event.target.closest('.menu-link').nextSibling.style.display = 'flex';
      event.target.innerHTML = 'ᐃ';
    }
  }

  return (
    <>
      <div className="menu-link">
        <a className='main-link' href={name}>{name}</a>
        <div className='drop-content'>
          {
            Object.entries(childrens).map(([link, subLink], index) => {
              if (link) {
                return (
                  <ul className="drop-list" key={index}>
                    <a className='link' href={link} key={index} >{link}</a>
                    {Object.keys(subLink).map((link, index) => <li key={index}><a className='sub-link' href={link} key={index}>{link}</a></li>)}
                  </ul>
                )
              }
            })
          }
        </div>
        <div className='blur' />
        <div className='open-btn' onClick={openSubLinks}>ᐁ</div>
      </div>
      <div className='sub-menu'>
        {
          Object.entries(childrens).map(([link, subLink], index) => {
            console.log(link)
            return (
              <div className='sub-menu-link' key={index}>
                <a href={link} >{link}</a>
                <div className='open-btn' onClick={openSubLinks}>ᐁ</div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}
//ᐃ
export default NavBarLink;