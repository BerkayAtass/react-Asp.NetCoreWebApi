import React from 'react'

function wallpapers(props) {
    const { id, title, description, image } = props.wallpapers;
    return (
        <div className=''>
            <div style={{ margin: 10 }}>
                <img src={image} alt={id} width={400} height={300} />
                <h4 style={{ textAlign: 'center' }} >{title}</h4>
                <h5 style={{ textAlign: 'center' }} >{description}</h5>
            </div>
        </div >
    )
}

export default wallpapers