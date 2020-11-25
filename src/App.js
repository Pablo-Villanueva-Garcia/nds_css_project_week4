import './reset.css';
import './estructura.css';
import './App.css';

function App() {
  return (
    <div className="App relativo">
      <header className="App-header">
          <div className="xs100 flex just_center  panelcolor menu">
            <div className="centrado just_SB">

              <ul className="xs100 flex just_center just_SB">

                  <li><a href="http://localhost:3000/">CSS LAYOUT</a></li>

                  <li><a href="http://localhost:3000/">CSS LAYOUT</a></li>
                  
                  <li><a href="http://localhost:3000/">CSS </a></li>

                  <li><a href="http://localhost:3000/">CSS LAYOUT</a></li>

                  <li><a href="http://localhost:3000/">CSS LAYOUT</a></li>

              </ul>

            </div>
          
          </div>
      </header>

      <div className="xs100 flex just_center panelbox flex_dir_col ali_center">
        <div className="centrado just_SB flex_frw">
          
          <div className="xs100 m25 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20">

            <h1>THIS IS A CARD</h1>
            <p>React makes it painless to create interactive UIs.
               Design simple views for each state in your application, 
               and React will efficiently update and render just the right 
               components when your data changes.
            </p>

          </div>

          <div className="xs100 m25 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20">

            <h1>THIS IS A CARD</h1>
            <p>React makes it painless to create interactive UIs.
               Design simple views for each state in your application, 
               and React will efficiently update and render just the right 
               components when your data changes.
            </p>

          </div>


          <div className="xs100 m25 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20">

            <h1>THIS IS A CARD</h1>
            <p>React makes it painless to create interactive UIs.
               Design simple views for each state in your application, 
               and React will efficiently update and render just the right 
               components when your data changes.
            </p>

          </div>


         

          
        

        </div>
      
      </div>

      <footer className="xs100 flex just_center ali_end footercolor p20 absoluto" >
             <a>THIS IS A FOOTER</a>
      </footer>

    </div>
  );
}

export default App;
