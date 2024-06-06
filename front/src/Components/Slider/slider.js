import React from 'react'
import Flickity from "react-flickity-component";
import './Flickity.css';
import './slider.css'
const Slider = () => {
    const flicktyOptions = {
        intialIndex: 2
    }
    const brand = {
        id: [1, 2, 3],
        title: ["New Balance", "Nike", "Adidas"],
        image: [
            "https://www.comfortorthotics.ca/wp-content/uploads/2020/09/NB_Stckd_logo_PMS-186-1.jpg",
            "https://th.bing.com/th/id/OIP.I08Vr2CbX0YxeC1eEhB6dQAAAA?rs=1&pid=ImgDetMain",
            "https://stickersworks.co.uk/wp-content/uploads/2019/11/adidas-1-red.png"
        ]
    }
    return (
        <div>
            <Flickity className='Slider' elementType='div' disableImagesLoaded={false} options={flicktyOptions} reloadOnUpdate static>
                {brand['id'].map((index) => {
                    return (
                        <div key={index} className='Plate'>
                            <div style={{
                                backgroundImage: `url(${brand['image'][index - 1]})`,
                                width: "100%",
                                height: "500px",
                                backgroundSize: "cover",
                                backgroundPosition: "center"

                            }} title={`${brand['title'][index - 1]}`
                            } ></div>
                        </div>
                    )

                })}
            </Flickity>

        </div>
    )
}

export default Slider