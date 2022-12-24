import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'
import EmptyBioDetails from './components/EmptyBioDetails'
import ProfileBioDetails from './components/ProfileBioDetails'
import DialogDelete from './components/ProfileBioDetails/utils/DialogDelete'

type Props = {

}

const AboutTab = (props: Props) => {
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)

    const dataUser = useRecoilValue(refetchState)
    const setOpen = () => setIsDeleteOpen(true);
    const setClose = () => setIsDeleteOpen(false) 
    let userDetail = dataUser?.data?.getUser.UserDetail
    let username = dataUser?.data?.getUser.username
    let loading = dataUser?.loading
    console.log(userDetail?.address);
    return (
        <>
              < DialogDelete isDeleteOpen={isDeleteOpen} username={loading ? "": username} setClose={setClose}/>  
        {
            userDetail?.address ?
            (
                < ProfileBioDetails delete={{setOpen}} />
                ):
                (
                 < EmptyBioDetails delete={{setOpen}}/>
                )
        }
        </>
    )
}

export default AboutTab