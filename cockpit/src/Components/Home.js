import React from 'react';
import {BrowserRouter, Route } from "react-router";
import {Link} from "react-router-dom";


import './style.css';
import axios from 'axios';

let API = 'http://localhost:8080/';



export default class Forum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      entries: [],
      Article:[],
      currentPage: 0,
      perPage: 3,
      term: "",
    }



  }





  componentDidMount() {
    axios.get(`${API}api/collections/get/Products`)
      .then(res => {
        const data = res.data;

        console.log(data.entries);
        this.setState
          ({
          data:res.data.entries,

        })
      })
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      const skip = this.state.currentPage * this.state.perPage;
      axios.get(`${API}api/collections/get/Product`)
        .then(res => {
          const data = res.data;

          console.log(data);
          this.setState
            ({
            data:res.data.entries,
          })
        })
    }
  }



  render() {
    const loop = this.state.data.map(data => {
      console.log();
      return (
        <tbody key={data._id}>
           <tr>
            <td> <Link to={`/Product/${data._id}`} className="title">{data.Name}</Link> <br></br></td>
            <p ><img src={`${API}`+ data.Image.path} alt="picture" className="picture" /> </p>
            <td> <h3>{data.Price}</h3></td>
            <button className="addtocart"> add to cart </button>
           </tr>


         </tbody>
      )

    })
    return (
      <div className="maindiv">
        <input  type="text" onChange={this.handleChange} />
        <table className="main-tr">
          {loop}
        </table>
      <button className="next" onClick={() => this.setState({ currentPage: Math.max(0, this.state.currentPage - 1) })}>Prev</button>
      <button className="next" onClick={() => this.setState({ currentPage: this.state.currentPage + 1 })}>Next</button>
      <p>Page {this.state.currentPage + 1}</p>
    </div>
    )
  }
}
