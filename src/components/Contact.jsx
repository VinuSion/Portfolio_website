import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { BrowserView, MobileView } from 'react-device-detect'
import { slideIn } from '../utils/motion'
import { usePopup } from '../PopupContext'

const Contact = () => {
  const { openModal } = usePopup()

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const ong = document.getElementById('ongod').value

    if (ong != '') {
      alert('Thank you for submitting :)')
      setLoading(false)
    } else {
      if (form.name == '' || form.email == '' || form.message == '') {
        openModal(
          '🤔Forgot Something?',
          'Please fill in the form to send a message!'
        )
        setLoading(false)
      } else {
        try {
          await emailjs.send(
            'service_ukoe9ye',
            'template_55y0cab',
            {
              from_name: form.name,
              to_name: 'William',
              from_email: form.email,
              to_email: 'williamgc250@gmail.com',
              message: form.message,
            },
            'FzQsrzlyUFlXDvyQP'
          )

          setLoading(false)
          openModal(
            '✅Message Sent!',
            'Thank you! I will get back to you as soon as possible.'
          )

          setForm({
            name: '',
            email: '',
            message: '',
          })
        } catch (error) {
          setLoading(false)
          console.error(error)
          openModal(
            '⛔What! An Error?!',
            'It appears something went wrong... :('
          )
        }
      }
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 0.65)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          id="ddown"
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <input
            type="text"
            name="website"
            id="ongod"
            className="hidden invisible"
            tabIndex="-1"
            autoComplete="nope"
          ></input>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className={`transition-all duration-[450] bg-gradient-to-t from-g1 via-g2 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 border-2 border-border h-[50px] rounded-full w-fit px-4 flex flex-row gap-x-2 justify-center items-center cursor-pointer ${
              loading && 'opacity-50 cursor-not-allowed hover:bg-pos-0'
            } rounded-xl p-[1px] w-[200px] flex`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex flex-row items-center justify-center font-bold">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex flex-row items-center justify-center font-bold">
                Send Message
              </span>
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 0.65)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[450px]"
      >
        <BrowserView className="h-full">
          <EarthCanvas />
        </BrowserView>
        <MobileView className="flex items-center justify-center h-full">
          <img
            src="https://media4.giphy.com/media/e0Uiyu70TXQAALdKP9/giphy.gif?cid=ecf05e47tshuudji04o80rf0u54b1f048e7bm70nxbpvrauz&ep=v1_stickers_search&rid=giphy.gif&ct=e"
            alt="earth_spinning"
          />
        </MobileView>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
