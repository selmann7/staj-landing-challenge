import React, { useState } from 'react';
import styles from './Accordion.module.scss';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <button
            className={styles.trigger}
            onClick={() => toggleItem(item.id)}
            aria-expanded={openIds.includes(item.id)}
            aria-controls={`content-${item.id}`}
          >
            <span className={styles.title}>{item.title}</span>
            <span className={`${styles.icon} ${openIds.includes(item.id) ? styles.rotate : ''}`}>
              ▼
            </span>
          </button>
          <div
            id={`content-${item.id}`}
            className={`${styles.content} ${openIds.includes(item.id) ? styles.open : ''}`}
            role="region"
            aria-labelledby={`trigger-${item.id}`}
          >
            <div className={styles.inner}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

