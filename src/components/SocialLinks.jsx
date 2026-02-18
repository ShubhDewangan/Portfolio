import React from 'react'
// import githubLogo from '../assets/socialLogos/github_logo.jpg'
import instaLogo from '../assets/socialLogos/instagramLogo.png'
import linkedinLogo from '../assets/socialLogos/linkedin_logo.png'
import xLogo from '../assets/socialLogos/X_logo.png'

const socials = [
    // {name: 'Github', link: 'https://www.github.com/Shubh24Dewangan', icon: githubLogo},
    {name: 'Instagram', link: 'https://www.instagram.com/meishubhhoon', icon: instaLogo},
    {name: 'X', link: 'https://www.x.com/ShubhDwngn', icon: xLogo},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/shubh-dewangan-profile', icon: linkedinLogo}
]

const SocialLinks = (props) => {
  return (
    <div className='flex -translate-y-5 gap-5 md:gap-10 items-center justify-center'>
      <h4 className='font-semibold text-nowrap'>{props.text}</h4>
      <ul className='flex gap-5 md:gap-10'>
        {
            socials.map((social, index) => {
                return (
                    <a className='cursor-pointer block items-center' key={index + 1} href={social.link} target='_blank' rel='noopener noreferrer'>
                        <img className='max-h-7 max-w-7' src={social.icon} alt={social.name} />
                    </a>
                )
            })
        }
      </ul>
    </div>
  )
}

export default SocialLinks
