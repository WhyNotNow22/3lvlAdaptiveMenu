import './style.css'

function NavBarLink(props) {
  const { name, childrens } = props;
  return (
    <div className="menu-link">
      <a className='main-link' href={name}>{name}</a>
      <div className='drop-content'>
        {
          Object.entries(childrens).map(([link, subLink], index) => {
            return (
              <ul className="drop-list" key={index}>
                <a className='link' href={link} key={index} >{link}</a>
                {Object.keys(subLink).map((link, index) => <li key={index}><a className='sub-link' href={link} key={index}>{link}</a></li>)}
              </ul>
            )
          })
        }
      </div>
      <div className='blur' />
    </div>
  );
}

export default NavBarLink;