/*
 * @Author: xiewenhao
 * @Date: 2023-05-30 16:52:13
 * @LastEditTime: 2023-05-31 16:44:49
 * @Description:
 */
import React from "react";
import styles from "./Carousel.module.css";
import { Carousel as AntCarousel, Image } from "antd";

import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";
const images = [carouselImage1, carouselImage2, carouselImage3];

export const Carousel: React.FC = () => {
  return (
    <AntCarousel autoplay className={styles.slider} >
      {images.map((item) => {
        return <Image src={item} key={item} height={250} width={'100%'} preview={false} />;
      })}
    </AntCarousel>
  );
};
