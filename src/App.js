import {  Routes, Route } from 'react-router-dom';
import ShowAll from './ShowAll';
import CardDetails from './CardDetails';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowAll />} />
          <Route path="/showall" element={<ShowAll />} />
          <Route path="/CardDetails" element={<CardDetails/>}>
					<Route path=":id" element={<CardDetails/>} />
				</Route>
        </Routes>
      </div>
    </>
	
	/*<BrowserRouter>
			<nav className="btn">
				<Link to="/">Show All Cards</Link> 
				
			</nav>

			<Routes>
				<Route path="/" element={<ShowAll/>} />
				

				<Route path="/CardDetails" element={<CardDetails/>}>
					<Route path=":id" element={<CardDetails/>} />
				</Route>

				<Route path="*" element={<p>找不到頁面</p>}/>
			</Routes>
	</BrowserRouter>*/
   
  );
}

export default App;
