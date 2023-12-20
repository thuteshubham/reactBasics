import React from 'react';
class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            productName:"sqs",
            productPrice: 0
        }
    }
    render() { 
        return (
            
            <form className='row' onSubmit={(e)=>{
                e.preventDefault();
                this.props.addItem(this.state.productName,Number(this.state.productPrice))
            }}>
            <div className="col-4">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>             
              <input type="text" className="form-control" id="inputName" name="productName" onChange={(e)=>{
                this.setState({productName: e.currentTarget.value})
              }}/>
            </div>
            <div className="col-4">
              <label htmlFor="inputPrice" className="form-label">
                Price
              </label>              
                <input type="number" className="form-control" id="price" name="productPrice" onChange={(e)=>{
                this.setState({productPrice: Number(e.currentTarget.value)})
              }}/>
            </div>
            <button type='submit' className='btn btn-primary col-4' >Add</button>
            </form>
          
        );
    }
}
 
export default AddItem;