import React from 'react'
import logo from '../assets/Images/Dasboard/logo.svg'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
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
                <p className='m-32 text-6xl font-semibold text-[#a13dff] flex '>Privacy & Policy</p>
            </div>

            <div className="h-full w-full flex justify-center  flex-col my-10  ">

                <p className='mx-32 text-2xl font-dmsans justify-start  flex text-midnight font-semibold my-10'>Privacy Policy - Building Trust with You</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>1. Data Collection and Use</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> We collect and use only the information that is necessary to provide our services. This includes personal information such as your name, contact details, and transaction data. We use this data to enhance your experience and improve our services.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>2. Data Protection</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>We take data protection seriously. Your information is stored securely, and we employ industry-standard measures to safeguard it from unauthorized access, disclosure, alteration, and destruction. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>3. Consent</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> By using our website and services, you consent to the collection, use, and sharing of your data as outlined in this policy and in accordance with applicable laws.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>4. Transparent Practices</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> We believe in transparency. Our privacy policy and terms and conditions are readily available on our website, and we encourage you to review them to understand how your data is handled.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>5. Data Security</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> We implement strict security measures to protect your data. This includes encryption, access controls, and regular security audits to ensure the highest level of protection.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>6. Third-Party Disclosure</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>We do not sell or share your personal information with third parties for marketing purposes. Any sharing of data with trusted partners is solely for the purpose of providing and improving our services. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>7. Opt-Out</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>You have the right to opt out of receiving marketing communications from us. We provide clear and easy-to-follow instructions for unsubscribing from such communications. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>8. Your Rights</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> You have rights concerning your data, including the right to access, correct, or delete your information. You can exercise these rights by contacting us at [insert contact information].</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>9. Data Retention</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>We retain your data only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable laws. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>10. Children's Privacy</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>Our services are not intended for children under the age of 13. We do not knowingly collect or maintain personal information from children under 13 years of age. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>11. Changes to the Policy</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>We may update this policy to reflect changes in our practices or legal requirements. We will notify you of any material changes, and the updated policy will be posted on our website. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>12. Contact Information</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> If you have any questions or concerns about your privacy or our data practices, please contact us at [insert contact information]. We are here to assist you and address any inquiries you may have.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>13. Trust and Commitment</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>Your trust is of utmost importance to us. We are committed to ensuring the security and privacy of your data and providing you with a reliable and trustworthy experience. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>14. Compliance with Laws</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>We adhere to all applicable data protection laws and regulations to protect your rights and privacy. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>15. Accessibility and Accountability</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> We are accountable for our data practices and are committed to making our privacy policy and practices easily accessible to you.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>16. International Data Transfers</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> If your data is transferred internationally, we ensure that it is adequately protected in accordance with applicable data protection laws.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>17. Data Breach Notification</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>In the event of a data breach that affects your personal information, we will notify you promptly as required by law.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>18. Cross-Border Data Transfers</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>Your data may be transferred across borders to provide our services. We take steps to ensure your data is protected during these transfers. </p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>19. Effective Date</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> This privacy policy is effective as of [insert date] and applies to all data collected from that date forward.</p>

            </div>
            <Footer/>
    </>
  )
}

export default PrivacyPolicy