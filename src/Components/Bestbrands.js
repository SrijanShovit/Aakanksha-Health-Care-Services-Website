import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {makeStyles} from '@material-ui/core';
import { Container } from '@material-ui/core';

// import brand1 from "../../public/images/brand/brand-1.png"
// import brand2 from "../../public/images/brand/brand-2.jpg"
// import brand3 from "../../public/images/brand/brand-3.png"
// import brand4 from "../../public/images/brand/brand-4.png"
// import brand5 from "../../public/images/brand/brand-5.jpg"
// import brand6 from "../../public/images/brand/brand-6.jpg"
// import brand7 from "../../public/images/brand/brand-7.jpg"

import brand1 from "./brand/brand-1.png"
import brand2 from "./brand/brand-2.jpg"
import brand3 from "./brand/brand-3.png"
import brand4 from "./brand/brand-4.png"
import brand5 from "./brand/brand-5.jpg"
import brand6 from "./brand/brand-6.jpg"
import brand7 from "./brand/brand-7.jpg"


// import "./App.css"



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
       // optional, default to 1.
      
      
    }
  };
const useStyle = makeStyles({
    image: {
        height:150,
        width:180,
        
        
    }
   
})





const Bestbrands = ( )=>{
    const classes = useStyle();




    
    return(
        <>
        <Container>
            <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true}
            
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // centerMode={true}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // d
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            
            <div><img src={brand1} className={classes.image} alt="" /></div>
            <div><img src={brand2}  className={classes.image} alt="" /></div>
            <div><img src={brand3} className={classes.image} alt="" /></div>
            <div><img src={brand4} className={classes.image} alt="" /></div>
            <div><img src={brand5} className={classes.image} alt="" /></div>
            <div><img src={brand6} className={classes.image} alt="" /></div>
            <div><img src={brand7} className={classes.image} alt="" /></div>
            
            </Carousel>
            </Container>
        </>
    )

   
    }

export default Bestbrands;