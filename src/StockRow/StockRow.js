import React from 'react'
//import react icons
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export const StockRow = (props) => {
    return (

        //display stock data using card
        <div className='col-md-4 py-3'>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.ticker}</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">{props.price}</h6>
                <p className="card-text">{props.change}</p>
                <p className="card-text">{props.changePercent}</p> 
                <p className="card-text">{props.marketTime}</p> */}
                    <p className="card-text">Day High : {props.dayHigh}</p>
                    <p className="card-text">Day Low : {props.dayLow}</p>
                    {/* <p className="card-text">Change : {props.change}</p> */}
                    {/* //show change in badge tag with color as green if change is positive else red */}
                    {/* <p className="card-text">  <span className="badge bg-primary">Change : {props.change}</span></p> */}
                    {/* <p className='card-text'>Change : <span style={{ color: props.change < 0 ? "red" : "green" }}>{props.change}</span></p> */}
                    {/* //modify below line success for uparrow icon and danger for downarrow icon */}
                     {/* <p className='card-text'>Change : <span className={props.change < 0 ? "badge bg-danger" : "badge bg-success" }>{props.change}</span></p>  */}
                     {/* //indications with up and down arrow using react icons */}
                        <p className='card-text'>Change : <span className={props.change < 0 ? "badge bg-danger" : "badge bg-success" }>{props.change.toFixed(2)} {props.change < 0 ? <FaArrowDown /> : <FaArrowUp />}</span></p>
                        

                    {/* <p className='card-text'>Change : <span className={props.change < 0 ? "badge bg-danger" : "badge bg-success" }>{props.change.toFixed(2)}</span></p>  */}
                    {/* //chage percentage limit to 2 decimal places */}

                {/* //show me stock day line chart
                //show me stock year line chart
                //show me stock day candlestick chart
                //show me stock year candlestick chart
                //show me stock day bar chart
                //show me stock year bar chart
                //show me stock day area chart */}

                {/* //show me stock day line chart using react google charts
                //show me stock year line chart using react google charts
                //show me stock day candlestick chart using react google charts
                //show me stock year candlestick chart using react google charts
                //show me stock day bar chart using react google charts
                //code for stock day bar chart using react google charts
                //display stock daily data in line chart using react google charts
                //display stock daily data in candlestick chart using react google charts
                 */}



                </div>
            </div>
        </div>

        // <div>
        //     <table className="table table-striped">
        //     <thead>
        //         <tr>
        //             <th>Symbol</th>
        //             <th>Price</th>
        //             <th>Change</th>
        //             <th>Change %</th>
        //             <th>Market Time</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>MSFT</td>
        //             <td>123.45</td>
        //             <td style={{ color: "green" }}>+0.12</td>
        //             <td style={{ color: "green" }}>+0.12%</td>
        //             <td>11:00 AM</td>
        //         </tr>
        //         <tr>
        //             <td>FB</td>
        //             <td>123.45</td>
        //             <td style={{ color: "red" }}>-0.12</td>
        //             <td style={{ color: "red" }}>-0.12%</td>
        //             <td>11:00 AM</td>
        //         </tr>
        //         <tr>
        //             <td>AMZN</td>
        //             <td>123.45</td>
        //             <td style={{ color: "green" }}>+0.12</td>
        //             <td style={{ color: "green" }}>+0.12%</td>
        //             <td>11:00 AM</td>
        //         </tr>
        //         <tr>
        //             <td>GOOG</td>
        //             <td>123.45</td>
        //             <td style={{ color: "red" }}>-0.12</td>
        //             <td style={{ color: "red" }}>-0.12%</td>
        //             <td>11:00 AM</td>

        //         </tr>
        //         <tr>
        //             <td>AAPL</td>
        //             <td>123.45</td>
        //             <td style={{ color: "green" }}>+0.12</td>
        //             <td style={{ color: "green" }}>+0.12%</td>
        //             <td>11:00 AM</td>
        //         </tr>
        //     </tbody>
        // </table>
        // </div>
    )
}
