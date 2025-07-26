import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);

      // Try with the original template first
      await emailjs.send(
        "service_0avvh7l",
        "template_sknlb5r",
        {
          from_name: formData.name,
          to_name: "Pras",
          from_email: formData.email,
          to_email: "pras.ari69@gmail.com",
          message: formData.message,
        },
        "XXs-fK2Iw3tz0pUV3"
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS Error:", error);

      // More specific error messages
      if (error.status === 400) {
        showAlertMessage("danger", "Template configuration error. Please check EmailJS settings.");
      } else if (error.status === 401) {
        showAlertMessage("danger", "Authentication error. Please check your EmailJS keys.");
      } else {
        showAlertMessage("danger", "Failed to send message. Please try again later.");
      }
    }
  };
  return (
    <section id="contact" className="relative c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-heading mb-4">Let&apos;s Talk</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-6">
          Ready to bring your ideas to life? Let&apos;s discuss your project and create
          something amazing together. I&apos;m here to help turn your vision into reality.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">24h</span>
            <span className="text-sm text-neutral-400">Response Time</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">Free</span>
            <span className="text-sm text-neutral-400">Consultation</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">100%</span>
            <span className="text-sm text-neutral-400">Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-16 h-[1px] w-full" />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="flex-1 max-w-lg">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-neutral-300 leading-relaxed">
                Whether you&apos;re looking to build a new website, improve your existing
                platform, or bring a unique project to life, I&apos;m here to help.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-aqua to-mint rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-neutral-400">prasetyo@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-royal to-lavender rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-neutral-400">Kediri, Jawa Timur, Indonesia</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-mint to-aqua rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Availability</h4>
                  <p className="text-neutral-400">Available for new projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 max-w-lg">
          <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-storm/50 to-indigo/50 backdrop-blur-sm">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
              <p className="text-neutral-400">Fill out the form below and I&apos;ll get back to you soon.</p>
            </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
