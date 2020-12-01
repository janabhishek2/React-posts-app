import './App.css';
import { Component } from 'react';
import PostTable from './components/postTable';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import AddPost from './components/addPost';
import axios from 'axios';
import { srch } from './components/utils/srch';

class App extends Component{
  state = { 
    posts:[],
    currPage:1,
    itemsPerPage:10,
    searchquery:""
 }
 handleAddPost=async (post)=>{
   
   const resp= await axios.post('https://jsonplaceholder.typicode.com/posts',post);
   const {data}=resp;

   const posts=[data,...this.state.posts];
   
   this.setState({posts});
 }
 async componentDidMount() {
     const res=await axios.get('https://jsonplaceholder.typicode.com/posts') ;
     const {data}=res;
     const posts=[...data];
  
     this.setState({posts});
    
  }
  handlePageChange=(page)=>{
      this.setState({currPage:page});
  }
  handleSearchChange=(e)=>{
    const currPage=1;

    const searchquery=e.currentTarget.value;
    this.setState({searchquery,currPage});
  }
  render()
  {
   let newPosts=this.state.posts;
    if(this.state.searchquery)
    {
      newPosts=srch(this.state.posts,this.state.searchquery);
    }
    
    return(<div>
       
    <Navbar/>

      <div className="container">
     

      <div className="form-group m-2">
            <input className="form-control" type="text" onChange={this.handleSearchChange} value={this.state.searchquery} name="search" id="search" placeholder="Search For a post"/>
      </div>
               

        <Switch>
      <Route path="/" exact component={()=>{
        return(      <PostTable posts={newPosts} onPageChange={this.handlePageChange} currPage={this.state.currPage} itemsPerPage={this.state.itemsPerPage} />);

      }}/>
    <Route path="/addPost" component={()=>{
      return (<AddPost onAddPost={this.handleAddPost} />);
    }}/>

        </Switch>
      </div>
      </div>
      

    );
    
  }
}

export default App;
