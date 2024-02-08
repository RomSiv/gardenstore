import React from 'react'
import s from './SocialNetwork.module.css'
import instagram_logo from '../../images/instagram_logo.png'
import instagram from '../../images/instagram.png'
import whatsapp_logo from '../../images/whatsapp_logo.png'
import whatsapp from '../../images/whatsapp.png'

export default function SocialNetwork() {
  return (
    <div className={s.social_network}>
        <div>
            <a href="https://www.instagram.com/" className={s.insta}>
            <img src={instagram_logo} alt="instagram" />
            <img src={instagram} alt="instagram" />
            </a>
        </div>
        <div>
            <a href="https://www.whatsapp.com" className={s.whatsapp} >
            <img src={whatsapp_logo} alt="whatsapp" className={s.logo} />
            <img src={whatsapp} alt="whatsapp" className={s.wsapp}/>
            </a>
        </div>
    </div>
  )
}
