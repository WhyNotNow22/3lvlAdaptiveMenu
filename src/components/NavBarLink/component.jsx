import './style.css'

function NavBarLink(props) {
  const { name, childrens } = props;
  return (
    <div className="menu-link">
      <a className='main-link' href={name}>{name}</a>
      <div className='drop-content'>
        {
          Object.entries(childrens).map(([link, subLink]) => {
            return (
              <ul className="drop-list">
                <a className='link' href={link}>{link}</a>
                {Object.keys(subLink).map(link => <li><a className='sub-link' href={link}>{link}</a></li>)}
              </ul>
            )
          })
        }
      </div>
    </div>
  );
}

export default NavBarLink;