import React, {useState, useEffect} from 'react';
import axios from 'axios';
let API = 'http://localhost:8080/';

export default class Blogg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      entries: [],
      title: "",
      des: "",
      date:"",


    }
  }


  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`${API}api/collections/get/Products?filter[_id]=${id}`)
      .then(res => {
        const data = res.data;
        console.log(data.entries);
        console.log(data);
        this.setState({
          data:res.data.entries
        })
        console.log(data.entries);
      })
  }



  render() {
    if (this.data === null){
      return <h1>There is no Data</h1>;
    }
    const loop = this.state.data.map(data => {
      return (
        <tbody key={data._id}>
          <tr>
             <h1>{data.Name}</h1>
             <textfield>{data.Beskrivning}</textfield>
             <h3>{data.Price}</h3>
          </tr>
         </tbody>
      )

    })

    return (
      <div className="maindiv">
        {loop}
      </div>
    )
  }
}
