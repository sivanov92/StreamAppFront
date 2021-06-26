import {
  Link
} from "react-router-dom";

const ProfileVideosDetails = ({print, limit}) => { 
    var pages_print = [];
    
    let pages = Math.ceil(print.length/limit);

    var current_page = new URL(window.location.href).searchParams.get('page');
    if(!current_page){
      current_page = 1;
    }
    console.log(current_page);
    for(let i = 1;i<=pages;i++){
    
      let disabled_style = '';
      if(i == current_page){
        disabled_style = 'disabled-page';
      }  

      pages_print.push(
       <Link to={`/profile?page=${i}`} key={`link to page ${i}`}>
              <button className={`pages button ${disabled_style}`} key={`page ${i}`}>{ i }</button>
       </Link>
       );
    }
    

    return (
        <div className='profile-elements'>
            <div id='VideosContainer' className='profile-container'>
              <div className='video-row'>
                <div className='video-element profile-videos-add'>
                 <Link to='/add-video'>
                  <button className='button'>Add Video</button>
                  </Link> 
                </div>
              </div>
              <br/>
               { print }
               <br/>
               <div className='paginator'>
                 {pages_print }
              </div>
            </div>

        </div>
    );
}

export default ProfileVideosDetails
