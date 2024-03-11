import Logo from '../../assets/logo.png'
import Navigation from './Navigation'
import Button from '../common/Button'

export default function Header() {
    return (
        <header className="h-[103px] w-full bg-primary justify-between flex flex-row items-center px-[56px] text-white">
            <img src={Logo} alt='АвтоСибПомощь лого' className='h-[75px] w-[122px]'/>
            <Navigation/>
            <Button>+7 913 062-14-07</Button>
        </header>
    )
}