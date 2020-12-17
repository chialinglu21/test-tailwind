import './styles/main.scss';
import { displayButton, nameParagraph} from './js/dom-loader';

let showName = false;

displayButton.addEventListener('click', toggleDisplayState);
updateNameParagraph();

function toggleDisplayState(){
    showName = !showName;
    updateDisplayButton();
    updateNameParagraph();
}

function updateDisplayButton(){
    displayButton.textContent = showName ? `Hide Author's Name`: `Show Author's Name`;
}

function updateNameParagraph(){
    nameParagraph.style.display = showName ? 'block': 'none';
}