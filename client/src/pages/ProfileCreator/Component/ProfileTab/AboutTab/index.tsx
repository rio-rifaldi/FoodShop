import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'
import EmptyBioDetails from './components/EmptyBioDetails'
import ProfileBioDetails from './components/ProfileBioDetails'

type Props = {

}

const AboutTab = (props: Props) => {

    const dataUser = useRecoilValue(refetchState)
    
    let data = dataUser?.data
    return (
        <>{
            data?.getUser.address ?(
                < ProfileBioDetails  />
                ):(
                < EmptyBioDetails />
            )
        }
        </>
    )
}

export default AboutTab