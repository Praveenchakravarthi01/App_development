import React from 'react'
import logo from '../assets/Images/Dasboard/logo.svg'
import img5 from '../assets/Images/home/img5.png'
import img6 from '../assets/Images/home/img6.png'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Faq = () => {
  const vendorFaq = [
    {
      id: 1,
      question: "What is a Vendor Management System (VMS)?",
      answer: "A Vendor Management System (VMS) is a software solution that helps vendors streamline their interactions with organizations, including procurement, invoicing, and communication."
    },
    {
      id: 2,
      question: "Why should my company use a VMS?",
      answer: "Using a VMS can simplify your relationship with multiple clients, centralize communication, and improve invoice processing, leading to faster payments and reduced administrative burden."
    },
    {
      id: 3,
      question: "How do I get started with a VMS?",
      answer: "Typically, your clients will onboard you onto their VMS platform. You'll receive login credentials and training to use the system.",
    },
    {
      id: 4,
      question: "What are the key benefits of using a VMS as a vendor?",
      answer: "Key benefits include increased efficiency, improved communication, faster payments, and enhanced visibility into your work with different organizations.",
    },
    {
      id: 5,
      question: "Is my data secure within a VMS?",
      answer: "VMS providers prioritize data security. They often use encryption, access controls, and compliance measures to protect your information.",
    },
    {
      id: 6,
      question: "How do I submit invoices through a VMS?",
      answer: "Most VMS platforms have a dedicated portal where you can upload and submit your invoices. You'll receive notifications when invoices are approved or require revisions.",
    },
    {
      id: 7,
      question: "How can I communicate with my clients through a VMS?",
      answer: "VMS platforms typically offer messaging and collaboration features, allowing you to communicate directly with your clients.",
    },
  ]
  const orgFaq = [
    {
      id: 8,
      question: "What is the primary purpose of a Vendor Management System (VMS) for organizations?",
      answer: "A VMS helps organizations efficiently manage their vendor relationships, streamline procurement processes, and ensure compliance.",
    },
    {
      id: 9,
      question: "How does a VMS improve vendor management?",
      answer: "VMS systems provide centralized vendor information, automate workflows, enhance communication, and offer data analytics for better decision-making.",
    },
    {
      id: 10,
      question: "Is it difficult to implement a VMS in our organization?",
      answer: "Implementation complexity varies, but with proper planning and support from the VMS provider, integration can be relatively smooth.",
    },
    {
      id: 11,
      question: "What benefits can organizations expect from using a VMS?",
      answer: "Organizations can expect cost savings, improved vendor performance, reduced risks, better compliance, and enhanced transparency in vendor relationships.",
    },
    {
      id: 12,
      question: "Can we customize a VMS to meet our organization's specific needs?",
      answer: "Yes, many VMS solutions offer customization options to align with your organization's unique requirements and workflows.",
    },
  ]
  return (

    <>
      {/* //navbar// */}
      <div className='border-[1px] fixed w-full z-10 bg-[#ffffff] border-solid border-[#e5e5e5] flex justify-between'>
        <figure className='mxy-5 '>
          <img className='w-40 p-5 ' src={logo} alt='' />
        </figure>

        <div className='font-semibold font-poppins flex text-[#171717] gap-10 items-center'>
          <span className='flex p-2 cursor-pointer'>Product</span>
          <span className='flex p-2 cursor-pointer '>Solutions</span>
          <span className='flex p-2 cursor-pointer'>Customers</span>
          <span className='flex p-2 cursor-pointer '>Partners</span>
          <span className='flex p-2 cursor-pointer'>Resources</span>
          <span className='flex p-2 cursor-pointer '>Company</span>
        </div>
        <div className='m-1 flex items-center   '>
          <span className='text-[#171717] p-5 font-semibold cursor-pointer'>Login</span>
          <button className='flex w-2/3 rounded-lg px-8 py-3 m-3 font-poppins shadow-sm hover:bg-[#240642] text-[#ffffff] font-semibold bg-[#a13dff]'> Start trail</button>
        </div>
      </div>

      <div className=" h-[200px] w-full   flex justify-center">
        <p className='m-32 text-6xl font-semibold text-[#a13dff] flex '>FAQ's</p>
      </div>


      <div className="justify-center items-center mx-32 my-10 ">
        {
          vendorFaq.map((faq) => {
            return (
              <div key={faq.id} className="p-5 flex-col justify-center ">
                <p className='pb-5 text-2xl text-[#a13dff] '>{faq.question}</p>
                <p className='text-lg font-dmsans tracking-normal leading-loose'>{faq.answer}</p>
              </div>
            )
          })
        }
        {orgFaq.map((faq) => {
          return (
            <div key={faq.id} className="p-5 flex-col justify-center">
              <p className='pb-5 text-2xl text-[#a13dff] '>{faq.question}</p>
              <p className='text-lg font-dmsans tracking-normal leading-loose'>{faq.answer}</p>
            </div>
          )
        })}
      </div>


      <Footer />
    </>
  )
}

export default Faq