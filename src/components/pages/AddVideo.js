import {
	BrowserRouter as Router,
	Link,
  } from "react-router-dom";
import  NavigationBar  from '../NavigationBar';

const AddVideo = () => {
    return (
        <div>
            <NavigationBar/>
            <div className='central'>
              <form className='form'>
                <div className='form-elements'>
                  <label htmlFor='title'>
                    Title
                  </label>
                  <input type='text' name='title' required/>
                </div>
                <div className='form-elements'>
                  <br/>
                  <input type='file' name='file' required/>
                  <br/>
                  <input type='submit' value='Add' className='button submit'/>
                </div>
              </form>
            </div>
        </div>
    )
}

export default AddVideo
