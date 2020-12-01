import React, { Component } from 'react';
import axios from 'axios';
import Joi from 'joi-browser';
import { update } from 'lodash';
class AddPost extends Component {
    state = { 
        data:{
            title:"",
            body:""
        }
        ,
        errors:{

        }
     }
     schema={
        title:Joi.string().min(3).required().label('Title'),
        body:Joi.string().required().label('Body')
    }
     handleChange=(e)=>{

        const errors={...this.state.errors};
        const msg=this.validateInput(e.currentTarget);
       
        if(msg!=="")
        {
            errors[e.currentTarget.name]=msg;
        }
        else delete errors[e.currentTarget.name];
       const data={...this.state.data};
       data[e.currentTarget.name]=e.currentTarget.value;
       this.setState({data,errors});

     }
     validateInput=(inp)=>{
         const schema={[inp.name]:this.schema[inp.name]};
         const obj={[inp.name]:inp.value};
         const err=Joi.validate(obj,schema);
         
         if(!err.error) return "";
        else return err.error.details[0].message;
     }
   
     validate=()=>{
        const errors={...this.state.errors};
        const obj =Joi.validate(this.state.data,this.schema,{abortEarly:false});
       
        if(!obj.error) return null;
        const arr=[...obj.error.details];
        arr.forEach(item=>{
            errors[item.path[0]]=item.message;
        });
       return errors;
     }
  
     handleSubmit=(e)=>{
        e.preventDefault();
         const errors=this.validate();
        this.setState({errors:errors||{}});

        ///call server for update
        if(errors) return;
        else
        {
            this.props.onAddPost(this.state.data);
        }
     }
   
    render() { 
        return ( 
            <div className="container">
                <div className="mt-3">
                <h3>Add A post !</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input className="form-control" type="text" name="title" value={this.state.data.title} onChange={this.handleChange} id="title"/>
                        {this.state.errors['title'] && <div className="alert alert-danger">{this.state.errors['title']}</div>}
                    </div>
                   < div className="form-group">
                        <label htmlFor="body">Body</label>
                        <input className="form-control" type="text" name="body" value={this.state.data.body} onChange={this.handleChange} id="body"/>
                        {this.state.errors['body'] && <div className="alert alert-danger">{this.state.errors['body']}</div>}
                    </div>
                    <button disabled={this.validate()}className="btn btn-primary">Submit</button>
                </form>
                </div>
               
            </div>
         );
    }
}
 
export default AddPost;