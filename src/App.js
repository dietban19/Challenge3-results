import logo from "./logo.svg";
import memory from "./assets/images/icon-memory.svg";
import reaction from "./assets/images/icon-reaction.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

function App() {
  return (
    <div>
      <body>
        <div className="card">
          <div className="card-header">
            <div className="card-header-result">Your Result</div>
            <div className="card-header-grade-container">
              <h1 className="card-header-acc-score">76</h1>
              <span className="card-header-total-score">of 100</span>
            </div>
            <div className="card-header-text">
              {" "}
              <h1 className="card-header-feedback">Great</h1>
              <p>
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-summary">Summary</div>
            <div className="card-body-container">
              <div className="card-body-reaction summary-container">
                <div className="card-result-head">
                  <img src={reaction} alt="Lightning Bolt" />
                  <h4 className="card-title-reaction">Reaction</h4>
                </div>
                <span className="card-body-score">
                  {" "}
                  <span className="card-body-acc-grade">80</span>
                  <span className="card-body-total-grade"> / 100</span>
                </span>
              </div>
              <div className="card-body-memory summary-container">
                <div className="card-result-head">
                  <img src={memory} alt="Clock" />
                  <h4 className="card-title-memory">Memory</h4>
                </div>
                <span className="card-body-score">
                  {" "}
                  <span className="card-body-acc-grade">92</span>
                  <span className="card-body-total-grade"> / 100</span>
                </span>
              </div>
              <div className="card-body-verbal summary-container">
                <div className="card-result-head">
                  <img src={verbal} alt="Chatbubble" />
                  <h4 className="card-title-verbal">Verbal</h4>
                </div>
                <span className="card-body-score">
                  <span className="card-body-acc-grade">61</span>
                  <span className="card-body-total-grade"> / 100</span>
                </span>
              </div>

              <div className="card-body-visual summary-container">
                <div className="card-result-head">
                  <img src={visual} alt="Eye" />
                  <h4 className="card-title-visual">Visual</h4>
                </div>
                <span className="card-body-score">
                  <span className="card-body-acc-grade">72 </span>
                  <span className="card-body-total-grade"> / 100</span>
                </span>
              </div>
            </div>
            <div className="card-button-container">
              {" "}
              <button>Continue</button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
