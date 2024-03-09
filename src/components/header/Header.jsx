import Logo from '../../assets/logo.png'
import Contacts from '../Contacts'
import Navigation from '../Navigation'

export default function Header() {
    return (
        <header className="h-[103px] w-full bg-primary justify-between flex flex-row items-center px-[56px] text-white">
            <img src={Logo} alt='АвтоСибПомощь иконка' className='h-[75px] w-[122px]'/>
            <Navigation/>
            <Contacts/>
        </header>
    )
}