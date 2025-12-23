import React from 'react';
import styles from './FAQ.module.scss';
import { Accordion } from '../../components/ui/Accordion';

const FAQ_DATA = [
  {
    id: 'faq-1',
    title: 'Bu kütüphaneyi kullanmak ücretsiz mi?',
    content: 'Evet, temel bileşenler açık kaynaklıdır ve kişisel ya da ticari projeler için ücretsizdir.'
  },
  {
    id: 'faq-2',
    title: 'Bileşenleri nasıl kurabilirim?',
    content: 'Paketi npm veya yarn aracılığıyla yükleyebilirsiniz. Tam kurulum kılavuzu için dokümantasyonumuza göz atın.'
  },
  {
    id: 'faq-3',
    title: 'Karanlık Mod desteği var mı?',
    content: 'Kesinlikle! Tüm bileşenler CSS değişkenleri ile oluşturulmuştur ve sorunsuz karanlık/aydınlık mod geçişlerini destekler.'
  },
  {
    id: 'faq-4',
    title: 'Temaları özelleştirebilir miyim?',
    content: 'Evet, marka kimliğinize uyması için SCSS değişkenlerini kolayca geçersiz kılabilirsiniz.'
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Sıkça Sorulan Sorular</h2>
          <p className={styles.sectionSubtitle}>Platformumuz hakkında en çok merak edilen soruların yanıtlarını bulun.</p>
        </div>
        <div className={styles.accordionWrapper}>
          <Accordion items={FAQ_DATA} />
        </div>
      </div>
    </section>
  );
};
