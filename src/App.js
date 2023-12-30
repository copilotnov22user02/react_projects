//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { StockRow } from './StockRow/StockRow';
import { getAllStocks } from './APIs/apis';

function App() {

  //create usestate with empty array name as stocks
  const [stocks, setStocks] = useState([]);
  //create useEffect to fetch all stocks data from apis.js
  useEffect(() => {
    //call getAllStocks function from apis.js
    // getAllStocks().then((response) => {console.log('second',response)});
    getAllStocks()
      .then((response) => {
        //set stocks with response data
        setStocks(response);
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  return (
    <div className="container">
      <h1>Welcome to Stock Tracker</h1>
      {/* //wrirte h3 tag with rainbow color text as hello world */}
      {/* <h3 style={{ color: "red" }}>Hello World</h3> */}
      {/* //table to display stock data */}
      {/* <table className="table table-striped">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change %</th>
            <th>Market Time</th>
          </tr>
        </thead>
        <tbody>
          {stocks?.map((stock) => {  //map through stocks array  
          //return <StockRow key={stock.symbol} ticker={stock.symbol} /> //return StockRow component with key as stock symbol and ticker as stock symbol
          return (<>
          <tr>
            <td>{stock.symbol}</td>
            <td>{stock.price}</td>
            <td style={{ color: stock.change < 0 ? "red" : "green" }}>{stock.change}</td>
            <td style={{ color: stock.change < 0 ? "red" : "green" }}>{stock.changePercent}</td>
            <td>{stock.marketTime}</td>
          </tr>
          </>)
            })}
        </tbody>
      </table> */}

      {/* <StockRow ticker="MSFT" price="123.45" change="0.12" changePercent="0.12%" marketTime="11:00 AM" /> */}
{/* 
      //display stocks data display flex direction column */}


      <div className='row'>
      {stocks?.map((stock) => {  //map through stocks array   
        //return <StockRow key={stock.symbol} ticker={stock.symbol} /> //return StockRow component with key as stock symbol and ticker as stock symbol
        return <StockRow key={stock.symbol} ticker={stock.symbol} price={stock.price} 
        change={stock.change}  marketTime={stock.marketTime} 
        dayHigh={stock.dayHigh} dayLow={stock.dayLow} yearHigh={stock.yearHigh} yearLow={stock.yearLow}
        />
      })} 
      </div>
{/* //changePercent={stock.changePercent} */}
      {/* <StockRow ticker="" /> */}
      {/* <StockRow /> */}
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
