import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'İsim alanı zorunludur';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı zorunludur';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Lütfen geçerli bir e-posta adresi giriniz';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj alanı zorunludur';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Bize Ulaşın</h2>
          <p className={styles.sectionSubtitle}>
            Her türlü iş birliği veya sorunuz için bizimle her zaman iletişime geçebilirsiniz.
          </p>
        </div>
        
        <div className={styles.content}>
          <Card className={styles.formCard} shadow="lg">
            {isSuccess ? (
              <div className={styles.successMessage} role="alert">
                <div className={styles.successIcon} aria-hidden="true">✓</div>
                <h3 className={styles.successTitle}>Mesaj Gönderildi!</h3>
                <p className={styles.successText}>
                  Bizimle iletişime geçtiğiniz için teşekkürler. En kısa sürede size geri döneceğiz.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Yeni Mesaj Gönder
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                  label="Ad Soyad"
                  name="name"
                  placeholder="Ahmet Yılmaz"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  label="E-posta Adresi"
                  name="email"
                  type="email"
                  placeholder="ahmet@ornek.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <div className={styles.textareaWrapper}>
                  <label htmlFor="message" className={styles.textareaLabel}>Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Size nasıl yardımcı olabiliriz?"
                    className={`${styles.textarea} ${errors.message ? styles.hasError : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className={styles.errorMessage} role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>
                <Button type="submit" size="lg" fullWidth>
                  Mesaj Gönder
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
