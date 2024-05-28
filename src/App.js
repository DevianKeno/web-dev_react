import logo from './logo.svg';
import './App.css';

const images = document.querySelectorAll(".acc-img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        const card = img.nextElementSibling;
        const isExpanded = card.classList.contains("expand");
        const allCards = document.querySelectorAll(".card");

        allCards.forEach((element) => {
            if (element !== card) {
                element.classList.remove("expand");
                element.classList.add('small');
            }
        });
        if (isExpanded) {
            card.classList.remove("expand");
            card.classList.add("small");
        } else {
            card.classList.remove("small");
            card.classList.add('expand');
        }
    });
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>        
      </header>
    </div>
  );
}

export default App;
