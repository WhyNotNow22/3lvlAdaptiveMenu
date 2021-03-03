import NavBar from '../NavBar'
import TextBlock from '../TextBlock'
import './style.css'

function AppContainer() {

    const menuTabs = {
        'Элемент 1': {},
        'Элемент 2': {
            'Элемент 2.1': {},
            'Элемент 2.2': {
                'Элемент 2.2.1': {},
                'Элемент 2.2.2': {},
                'Элемент 2.2.3': {},
            },
            'Элемент 2.3': {},
            'Элемент 2.4': {
                'Элемент 2.4.1': {},
                'Элемент 2.4.2': {},
                'Элемент 2.4.3': {},
                'Элемент 2.4.4': {},
                'Элемент 2.4.5': {},
                'Элемент 2.4.6': {},
                'Элемент 2.4.7': {},
            },
            'Элемент 2.5': {},
            'Элемент 2.6': {},
        },
        'Элемент 3': {},
        'Элемент 4': {
            'Элемент 4.1': {},
            'Элемент 4.2': {},
        },
        'Элемент 5': {},
        'Элемент 6': {},


    }

    return (
        <div className='app-container'>
            <NavBar menuTabs={menuTabs} />
            <TextBlock />
        </div>
    );
}

export default AppContainer;