import React from 'react'
import styles from './card.module.scss'
import { IoStar } from "react-icons/io5";
import Like from '../svg/Like/Like';
import TagSnow from '../svg/TagSnow/TagSnow';
import TagThorns from '../svg/TagThorns/TagThorns';
import TagDirt from '../svg/TagDirt/TagDirt';
import Top from '../svg/Top/Top';
import Warranty from '../svg/Warranty/Warranty';
import Discount from '../svg/Discount/Discount';
import Gift from '../svg/Gift/Gift';
import Hit from '../svg/Hit/Hit';

const Card = ({wheel}) => {
  return (
    <article className={styles.container}>
        <div className={styles.imgBlock}>
          <div className={styles.imgBlockSidebar}>
            <div className={styles.sidebarIcon}>
              <Top/>
            </div>
            <div className={styles.sidebarIcon}>
            <Warranty/>
            </div>
            <div className={styles.sidebarIcon}>
            <Discount/>
            </div>
            <div className={styles.sidebarIcon}>
            <Gift/>
            </div>
            <div className={styles.sidebarIcon}>
            <Hit/>
            </div>
          </div >
          <div className={styles.imgContainer}>
            <img className={styles.img} src={`/img/${wheel}.png`} alt="Фотография резины"/>
          </div>
        </div>
        <div className={styles.infoBlock}>
            <div className={styles.title}>
              <p>205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V</p>
            </div>
            <div className={styles.rating}>
              <IoStar size="20px" color="#F3BE00"/>
              <IoStar size="20px" color="#F3BE00"/>
              <IoStar size="20px" color="#F3BE00"/>
              <IoStar size="20px" color="#F3BE00"/>
              <IoStar size="20px" color="#BFBFBF"/>
              <p>10 отзывов</p>
            </div>
            <div className={styles.tags}>
              <div>
                <TagSnow/>
                <p>Зимняя</p>
              </div>
              <div>
                <TagThorns/>
                <p>Шипованная</p>
              </div>
              <div>
                <TagDirt/>
                <p>Грязевая</p>
              </div>
            </div>
            <div className={styles.purchaseBlock}>
                <div className={styles.price}>
                  <p className={styles.oldPrice}>6 750 ₽</p>
                  <p className={styles.newPrice}>6 750 ₽</p>
                </div>
                <div className={styles.addCartBlock}>
                  <div className={styles.counter}>
                    <span className={styles.minus}></span>
                    <p>4</p>
                    <span className={styles.plus}></span>
                  </div>
                  <button>В корзину</button>
                  <Like/>
                </div>
                <button className={styles.buyButton}>
                  Купить в 1 клик
                </button>
            </div>    
        </div>
    </article>
  )
}

export default Card
