import NavBarLink from '../NavBarLink'
import './style.css'

function NavBar(props) {
    const { menuTabs } = props;
    return (
        <div className='menu'>
            <ul className='menu-list'>
                {Object.entries(menuTabs).map(([link, childrens]) => <NavBarLink name={link} childrens={childrens} />)}
            </ul>
        </div>
    );
}

export default NavBar;