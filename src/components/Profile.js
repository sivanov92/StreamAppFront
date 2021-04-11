import ProfileDetails from './ProfileDetails/ProfileDetails'
import ProfileStreamDetails from './ProfileDetails/ProfileStreamDetails'
import ProfileVideosDetails from './ProfileDetails/ProfileVideosDetails'

const Profile = () => {
    return (
        <div className='ProfileDetailsLayout'>
            <ProfileDetails/>
            <ProfileStreamDetails/>
            <ProfileVideosDetails/>
        </div>
    )
}

export default Profile
