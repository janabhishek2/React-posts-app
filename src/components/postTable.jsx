import React, { Component } from 'react';

import { paginate } from './utils/pg';
import Paginate from './paginate';


class PostTable extends Component {
 
 
    render() { 
         
            let posts=[...this.props.posts];
            
            const paginatedPosts=paginate(posts,this.props.currPage,this.props.itemsPerPage,posts.length);

          return ( 
            <div>
                
              
            

            <div className="container">
               <h3>Posts</h3> 
               <table className="table">
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Comment</th>
                       </tr>
                   </thead>
                   <tbody>
                        {paginatedPosts.map((item)=>{
                            return(<tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <div className="card">
                                        <div className="card-header ">
                                            {item.title}
                                        </div>
                                        <div className="card-body">
                                            <div className="ml-3">
                                                    {item.body}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>);
                        })}
                   </tbody>
               </table>
               <Paginate itemsPerPage={this.props.itemsPerPage} onPageChange={this.props.onPageChange} currPage={this.props.currPage} totalItems={posts.length}/>
            </div>
</div>
            
         );
    }
}
 
export default PostTable;