import BannerBackground from '../../assets/banner_car.png'
import Headline from '../common/Headline'
import Button from '../common/Button'

export default function Banner() {
    return (
        <div className='h-[471px] w-full bg-[#343434] flex flex-row justify-between relative items-center'>
            <div className='z-[1] px-[74px] text-white h-[329px] flex flex-col justify-between'>
                <Headline>Отогрев Авто <br/>в Новосибирске</Headline>
                <label className='font-medium'>Профессиональные услуги отогрева и технической<br/>помощи для легковых и грузовых автомобилей</label>
                <Button className='w-1/2 h-[53px] mt-9'>Заказать сейчас</Button>
            </div>
            <img src={BannerBackground} alt='Чёрная мазда Н007ХХ' className='absolute object-cover h-full z-0'/>
        </div>
    )
}