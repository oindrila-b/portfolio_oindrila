import React from 'react'

const Links = () => {

    const links = [
        "Homepage",
        "About Me",
        "Projects",
        "Contact"
    ]

    return (
        <div className='links'>{links.map(link => (
            <a href={`#${link}`} key={link}>
                {link}
            </a>
        ))}
        </div>
    )
}

export default Links