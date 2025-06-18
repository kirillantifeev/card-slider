import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation'; 
import Card from '../card/Card';
import styles from './slider.module.scss';
import ArrowPrev from '../svg/arrows/ArrowPrev/ArrowPrev';
import ArrowNext from '../svg/arrows/ArrowNext/ArrowNext';

const Slider = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const arrSlides = ['wheel-1', 'wheel-2', 'wheel-1', 'wheel-1', 'wheel-2', 'wheel-1', 'wheel-1', 'wheel-2', 'wheel-1'];

  useEffect(() => {
    const checkEnd = () => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        setIsEnd(swiper.progress >= 0.95); 
      }
    };

    window.addEventListener('resize', checkEnd);
    return () => window.removeEventListener('resize', checkEnd);
  }, []);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.progress >= 0.95);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titleSlider}>Хиты продаж</h2>
      <Swiper
        ref={swiperRef}
        modules={[FreeMode, Navigation]}
        slidesPerView={'auto'}
        spaceBetween={10}
        freeMode={{
          enabled: true,
          momentumBounce: false,
          sticky: true,
        }}
        navigation={{
          nextEl: `.${styles.slideNext}`,
          prevEl: `.${styles.slidePrev}`,
        }}
        onSlideChange={handleSlideChange}
        onInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.progress >= 0.95);
        }}
        onReachEnd={() => setIsEnd(true)} 
        onFromEdge={() => setIsEnd(false)}
        watchSlidesProgress={true} 
      >
        {arrSlides.map((el, index) => (
          <SwiperSlide 
            key={index}
            style={{ 
              width: 'auto',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Card wheel={el}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.buttonSlideBlock}>
        <div className={styles.buttonSlideContainer}>
          <div className={`${styles.slidePrev} ${isBeginning ? styles.disabled : ''}`}>
            <div className={styles.buttonSlidePrev}>
              <ArrowPrev className={`${isBeginning ? styles.disabled : ''}`}/>
            </div>
          </div>
          <div className={`${styles.slideNext} ${isEnd ? styles.disabled : ''}`}>
            <div className={styles.buttonSlideNext}>
              <ArrowNext className={` ${isEnd ? styles.disabled : ''}`}/>
            </div>
          </div>
        </div>
        <button className={styles.buttonCatalog}>
          Смотреть все
        </button>
      </div>
    </div>
  );
};

export default Slider;
