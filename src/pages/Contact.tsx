import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [touched, setTouched] = useState<{
    [key in keyof ContactFormData]?: boolean;
  }>({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.match(/^[a-zA-ZÀ-ỹ\s]{2,}$/)) {
      newErrors.name = t("contacts.errors.name");
    }
    if (!formData.email.match(/^[\w.-]+@[\w.-]+\.\w{2,4}$/)) {
      newErrors.email = t("contacts.errors.email");
    }
    if (!formData.phone.match(/^[0-9]{10,13}$/)) {
      newErrors.phone = t("contacts.errors.phone");
    }
    if (!formData.subject || formData.subject.trim().length < 3) {
      newErrors.subject = t("contacts.errors.subject");
    }
    if (!formData.message || formData.message.length < 5) {
      newErrors.message = t("contacts.errors.message");
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(t("contacts.emailSuccess"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTouched({});
      } else {
        alert(t("contacts.emailError"));
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="contact-info mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-800">
          {t("contacts.contactUs")}
        </h2>
        <p className="text-lg mb-2">
          <strong>{t("contacts.address")}:</strong>{" "}
          {t("contacts.companyAddress")}
        </p>
        <p className="text-lg mb-2">
          <strong>{t("contacts.phone")}:</strong> (+84) 90 78 34 697
        </p>
        <p className="text-lg mb-2">
          <strong>{t("contacts.email")}:</strong> ben@bppacking.net
        </p>
        <p className="text-lg mb-4">
          <strong>{t("contacts.workingHours")}:</strong> 8:00 - 17:00 (Thứ 2 -
          Thứ 6), 8:00 - 12:00 (Thứ 7)
        </p>

        <div className="map-container mb-8">
          <iframe
            src="https://maps.google.com/maps?q=10.756667,106.555139&z=15&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-form-container">
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-800">
          {t("contacts.sendRequest")}
        </h2>

        <div className="contact-form bg-white p-6 rounded-lg shadow-lg">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("contacts.namePlaceholder")}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            />
            {touched.name && errors.name && (
              <div className="text-red-500 text-sm mb-2">{errors.name}</div>
            )}

            <input
              type="email"
              name="email"
              placeholder={t("contacts.emailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm mb-2">{errors.email}</div>
            )}

            <input
              type="text"
              name="phone"
              placeholder={t("contacts.phonePlaceholder")}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            />
            {touched.phone && errors.phone && (
              <div className="text-red-500 text-sm mb-2">{errors.phone}</div>
            )}

            <input
              type="text"
              name="subject"
              placeholder={t("contacts.subjectPlaceholder")}
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            />
            {touched.subject && errors.subject && (
              <div className="text-red-500 text-sm mb-2">{errors.subject}</div>
            )}

            <textarea
              name="message"
              placeholder={t("contacts.messagePlaceholder")}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            ></textarea>
            {touched.message && errors.message && (
              <div className="text-red-500 text-sm mb-2">{errors.message}</div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 mt-4 bg-green-800 text-white rounded-lg shadow-md hover:bg-green-900 disabled:bg-gray-400"
            >
              {isSending ? t("contacts.sending") : t("contacts.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
