import React, { Component } from 'react';
class Paginate extends Component {
    state = {  }
    render() { 
        const styles={
            cursor:'pointer',
        }
        const arr=[];
        const pages=Math.ceil(this.props.totalItems/this.props.itemsPerPage);
 
        let i=1;
        for(i;i<=pages;i++)
        {
            arr[i]=i;
        }
   
        return ( <div>
            <ul className="pagination">
               
                {arr.map(i=>{
                    return(<li style={styles} key={i} className="page-item"><a onClick={()=>this.props.onPageChange(i)} className="page-link">{i}</a></li>);
                })}
            </ul>
        </div> );
    }
}
 
export default Paginate;