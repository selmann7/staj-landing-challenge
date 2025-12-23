import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  footer?: React.ReactNode;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  image,
  imageAlt = '',
  imageWidth,
  imageHeight,
  footer,
  shadow = 'sm',
  className = '',
}) => {
  const cardClasses = [
    styles.cardWrapper,
    styles[`shadow${shadow.charAt(0).toUpperCase() + shadow.slice(1)}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {image && (
        <div className={styles.cardImageWrapper}>
          <img 
            src={image} 
            alt={imageAlt} 
            width={imageWidth} 
            height={imageHeight} 
            className={styles.cardImage} 
            loading="lazy" 
          />
        </div>
      )}
      <div className={styles.cardBody}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {description && <p className={styles.cardDescription}>{description}</p>}
        {children && <div className={styles.cardContent}>{children}</div>}
      </div>
      {footer && <div className={styles.cardFooter}>{footer}</div>}
    </div>
  );
};
