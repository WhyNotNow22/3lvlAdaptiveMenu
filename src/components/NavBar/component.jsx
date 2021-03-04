import NavBarLink from '../NavBarLink'
import './style.css'

function NavBar(props) {
    const { menuTabs } = props;

    const openMenu = (event) => {
        event.target.closest('.container').classList.toggle("change");
        if (event.target.closest('.container').classList.contains('change')) {
            document.querySelector('.menu-list').style.display = 'block';
        }
        else {
            document.querySelector('.menu-list').style.display = 'none';
        }
        let links = document.querySelectorAll('.link');
        Array.from(links).map(elem => {
            return elem.closest('.menu-link').lastElementChild.style.display = 'block';
        });
        links = document.querySelectorAll('.third-link');
        Array.from(links).map(elem => {
            return elem.closest('DIV').previousElementSibling.lastElementChild.style.display = 'block';
        });
        let blur = document.querySelector('.blur');
        blur.style.top = document.querySelector('.menu-list').clientHeight + 'px';
        blur.style.display = 'block';
    }
    return (
        <div className='menu'>
            <ul className='menu-list'>
                {Object.entries(menuTabs).map(([link, childrens], index) => <NavBarLink name={link} childrens={childrens} key={index} />)}
            </ul>
            <div className="container" onClick={openMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    );
}

export default NavBar;