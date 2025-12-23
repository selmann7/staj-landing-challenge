import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', form);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>Have questions? We'd love to hear from you.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Get in touch</h3>
            <p className={styles.infoText}>
              Our team is here to help you with any questions you might have. 
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            <div className={styles.details}>
              <p>📍 123 Innovation Street, Tech City</p>
              <p>📧 contact@staj-challenge.com</p>
              <p>📞 +1 (234) 567-890</p>
            </div>
          </div>
          <Card className={styles.formCard}>
            {isSubmitted ? (
              <div className={styles.success}>
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully.</p>
                <Button onClick={() => setIsSubmitted(false)}>Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="John Doe"
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="john@example.com"
                />
                <div className={styles.textareaWrapper}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${styles.textarea} ${errors.message ? styles.errorTextarea : ''}`}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>
                <Button type="submit" fullWidth>Send Message</Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

