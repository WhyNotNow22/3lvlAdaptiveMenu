import NavBar from '../NavBar'
import TextBlock from '../TextBlock'
import './style.css'

function AppContainer() {

    const menuTabs = {
        'Элемент 1': {
            'Элемент 1.1': {},
            'Элемент 1.2': {
                'Элемент 1.2.1': {},
                'Элемент 1.2.2': {},
                'Элемент 1.2.3': {},
            },
            'Элемент 1.3': {},
            'Элемент 1.4': {
                'Элемент 1.4.1': {},
                'Элемент 1.4.2': {},
                'Элемент 1.4.3': {},
                'Элемент 1.4.4': {},
                'Элемент 1.4.5': {},
                'Элемент 1.4.6': {},
                'Элемент 1.4.7': {},
            },
            'Элемент 2.5': {},
            'Элемент 2.6': {},
        },
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
        'Элемент 3': {
            'Элемент 3.1': {},
            'Элемент 3.2': {},
        },
        'Элемент 4': {
            'Элемент 4.1': {},
            'Элемент 4.2': {},
        },
        'Элемент 5': {
            'Элемент 5.1': {},
            'Элемент 5.2': {},
            'Элемент 5.3': {},
            'Элемент 5.4': {},
        },
        'Элемент 6': {
            'Элемент 6.1': {},
            'Элемент 6.2': {},
            'Элемент 6.3': {},
        },
    }

    return (
        <div className='app-container'>
            <NavBar menuTabs={menuTabs} />
            <TextBlock />
        </div>
    );
}

export default AppContainer;