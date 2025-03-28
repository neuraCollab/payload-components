'use client'

import React from 'react'
import { Form } from '@/payload-types'

export type ContactUsFormBlockType = {
  blockType: 'contact-us-form'
  label: string
  title: string
  form: Form
}

export const ContactUsFormBlock: React.FC<ContactUsFormBlockType> = ({ label, title, form }) => {
  const [formData, setFormData] = React.useState({
    subject: 'Buy Property',
    fullName: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: form.id,
          submissionData: formData,
        }),
      })

      if (response.ok) {
        // Очищаем форму после успешной отправки
        setFormData({
          subject: 'Buy Property',
          fullName: '',
          phone: '',
          email: '',
          message: '',
        })
        alert('Форма успешно отправлена!')
      } else {
        throw new Error('Ошибка при отправке формы')
      }
    } catch (error) {
      console.error('Ошибка:', error)
      alert('Произошла ошибка при отправке формы')
    }
  }

  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="text-sm text-primary mb-2">{label}</div>
          <h2 className="text-4xl font-normal">
            {title.split('get in touch').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">get in touch</span>}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Форма */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Тема */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Subject*</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              >
                <option value="Buy Property">Buy Property</option>
                <option value="Rent Property">Rent Property</option>
                <option value="Sell Property">Sell Property</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Имя */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Full Name*</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Mitchell"
                required
              />
            </div>

            {/* Телефон */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number*</span>
              </label>
              <input
                type="tel"
                className="input input-bordered w-full"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+123 456 789 00"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email Address*</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="test@gmail.com"
                required
              />
            </div>

            {/* Сообщение */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Message*</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Explain it in details..."
                required
              />
            </div>

            {/* Кнопка отправки */}
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
