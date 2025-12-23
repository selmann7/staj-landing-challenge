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
    <div className={styles.accordionContainer}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const triggerId = `accordion-trigger-${item.id}`;
        const contentId = `accordion-content-${item.id}`;

        return (
          <div key={item.id} className={`${styles.accordionItem} ${isOpen ? styles.isOpen : ''}`}>
            <button
              id={triggerId}
              className={styles.accordionTrigger}
              onClick={() => toggleItem(item.id)}
              /* Accessibility: Aria states for screen readers */
              aria-expanded={isOpen}
              aria-controls={contentId}
              type="button"
            >
              <span className={styles.accordionTitle}>{item.title}</span>
              <span className={`${styles.accordionIcon} ${isOpen ? styles.rotate : ''}`} aria-hidden="true">
                ▼
              </span>
            </button>
            <div
              id={contentId}
              className={styles.accordionContentWrapper}
              role="region"
              aria-labelledby={triggerId}
              style={{ maxHeight: isOpen ? '1000px' : '0' }}
            >
              <div className={styles.accordionContent}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
