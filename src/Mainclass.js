import React, { Component } from 'react'

export class Mainclass extends Component {
    constructor(){
        
        super();
        this.state={mobiles: [{
          id:"001",
          name :"oneplus11",
          price : 56999,
          isPurchased: true},
          {
          id:"002",
          name : "Vivi Y100",
          price : 24999,
          isPurchased: false},
          {
          id:"003",
          name : "Redmi 10",
          price : 56999,
          isPurchased : true},
          {
          id:"004",
          name : "iphone 13",
          price : 62990,
          isPurchased : false},
          {
          id:"005",
          name : "Nokia",
          price : 12000,
          isPurchased : true},
          {
          id:"006",
          name : "Poco M4",
          price : 13999,
          isPurchased : true}]}
        
    }

     sortMobilesLTH = () => {
        const sortedMobilesLTH = this.state.mobiles.sort((a, b) => a.price - b.price);
           this.setState(sortedMobilesLTH);
        };
     sortMobilesHTL = () => {
        const sortedMobilesHTL =this.state.mobiles.sort((a, b) => a.price - b.price);
           this.setState(sortedMobilesHTL.reverse());
        };
        filtermobiles = () => {
          this.setState({mobiles:this.state.mobiles.filter((elm)=>{
             if(elm.isPurchased===true){
                 return elm.name;
             }
             })})
         };
     sortMobilesAsc=()=>{
            const sortedAsc=this.state.mobiles.sort((a, b) =>{
             if (a.name < b.name) {
               return -1;
             }
             if (a.name > b.name) {
               return 1;
             }
             return 0;
           });
           console.log(sortedAsc)
           this.setState(sortedAsc)
          }
         sortMobilesDes=()=>{
           const sortedDes=this.state.mobiles.sort((a, b) =>{
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          this.setState(sortedDes.reverse())
         }
       
  render() {
    return (
      <div>Mainclass
          {this.state.mobiles.map((n,i) => (
          <div key={i}>
            <h3>Mobile name:{n.name}</h3>
            <p>Price: {n.price}</p>
            <p>isPurchased:{n.isPurchased?"yes":"no"}</p>
          </div>
                ))}
         <button onClick={this.sortMobilesAsc}>Sort By Asc</button>
        <button  onClick={this.sortMobilesDes}>Sort By Des</button>
        <button  onClick={this.sortMobilesLTH}>LTH</button>
        <button onClick={this.sortMobilesHTL}>HTL</button>
        <button onClick={this.filtermobiles}>Filter</button>
      </div>
    )
  }
}

export default Mainclass