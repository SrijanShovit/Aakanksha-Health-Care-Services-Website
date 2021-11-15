import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'


const data = {
    title: "FAQ",
    rows: [
        {
            title: "1.	What makes AAKANKSHA different from other apps in online medical delivery?",
            content: "AAKANKSHA is unique in its way because the company does not deal with medicines by itself. The company is in a tie with many trusted medical shops for the availability of the medicines. The process is the same, the customers can show the prescription and buy the required medicines, but here the only difference is AAKANKSHA Delivery Service will deliver the medicines to their home. It is Customer Centric Company where customers can used many filters to sort out the medicines according to their requirement.",
        },
        {
            title: "2.	Does Aakanksha provide any discounts on the medicines?",
            content:
                "Yes, there are many discounts available for the customers. And will have discounts for a particular period of time. If you will buy medicine from here, you can use the coupon and discounts on all of our other domain also.",
        },
        {
            title: "3.	Is the quality of these medicines assured?",
            content: `Yes, Aakanksha is tied with many trusted medical stores in your locality. `,
        },
        {
            title: "4.	Can we know what medicine is required for a particular illness from Aakanksha?",
            content: "No, Aakanksha Company cannot suggest to the customers what medicines to be used for a particular illness. If the illness persists, Aakanksha has an online consultation facility with doctors that can be used by the customers to consult a trusted doctor for it. ",
        },
        {
            title: "5.	Are prescriptions necessary for all medicines?",
            content: "Yes, prescriptions are necessary, so that you can provide us the list of your required medicines which is need to be delivered. ",
        },
        {
            title: "6.	Is it possible to cancel once ordered?",
            content: "No, you can’t cancel the order after shipping.",
        },
        {
            title: "7.	Will it take long for the medicine to be delivered?",
            content: "The medicine will be available to you within an hour or two, according to the proximity of your address from that of the medical shop. ",
        },
        {
            title: "8.	What to do if I do not receive the medicines on time?",
            content: "You can contact on our helpline desk or you can mail us at contactus.aakanksha@gmail.com .",
        },
        {
            title: "9.	Is it possible to contact the pharmacy after the order is placed?",
            content: "No.",
        },
        {
            title: "10.	Can we choose from which medical shop I want to order from?",
            content: "You need to provide us your list of medicine requirement and that would be delivered.",
        },
        {
            title: "11. What are your hours of operation?",
            content: "You need to provide us your list of medicine requirement and that would be delivered.",
        },
        {
            title: "12.	Are there any shipping charges for Medicine & Healthcare Orders?",
            content: "Yes, delivery charges will be applied based on the value of items purchased and the delivery address. Please add the items that you require to the cart and input or select the appropriate delivery address to see what the delivery charges will be for your order.",
        },
        {
            title: "13.	Can we change the address of delivery?",
            content: "Yes, you can change the address before shipping.",
        },
        {
            title: "14.	Which medicines are not deliverable through your platform?",
            content: "YAs per the guidelines of legal and regulatory authorities of Government of India, Local Government and the company, we do not sell product with the ‘Not for sale’ tag through our website.",
        },
        {
            title: "15.	Why is the image shown on the website different from the item I received?",
            content: "Although we try our best that the product image should be identical to the items you received but sometimes product image colour may vary because of the different system used. Product image are basically for illustrative purpose only.",
        },
        {
            title: "16.	Is AAKANKSHA a pharmacy?",
            content: "No, AAKANKSHA is not a pharmacy. We provide you a platform from where you can get delivered medicine at your home.",
        },
        {
            title: "17.	Can I get medicines delivered in emergency situation?",
            content: "",
        },
        {
            title: "18.	Can I buy a substitute medicine on my prescription?",
            content: "",
        },
        {
            title: "19.	How can I change the phone number linked to my account?",
            content: "",
        },
        {
            title: "20.	How can I change the email address linked to my account?",
            content: "",
        },
      {
          title: "21. Who is a General Physician?",
          content: "A General Physician is a medical specialist who diagnoses common illnesses (such as common cold, flu, and Bronchitis) and gives treatment and advice accordingly. Chat with a general physician today on AAKANKSHA Health care to clear your doubts about any health problems.",
      },
      {
          title: "22. What is the difference between a General Physician / General Medicine doctor? ",
          content: "The terms General Physician and General Medicine doctor can be used interchangeably. For any kind of routine checkup or non-emergency medical care, it is advisable to chat with a General Physician.",
      },
      {
          title: "23. What are the common symptoms for which I can consult a General Physician online?",
          content: "Fever, abdominal pain, eye infection, cold and cough are some of the issues that one could get treated by a General Physician. If you are experiencing any of these symptoms you must connect with a doctor at the earliest. You can use the online doctor consultation feature of AAKANKSHA Health consultant.",
      },
      {
          title: "24. I am unable to understand what is the health problem I am facing? Can I consult a doctor online? How will the General Physician help me here? ",
          content: "Yes! You may consult a doctor online who will accurately be able to assess the symptoms you are experiencing to identify your health problem. Since General Physicians provide a range of non-surgical health care, they will be able to extensively evaluate every one of your concerns. Based on the online evaluation, the doctor would suggest the next course of action.",
      },
      {
          title: "25. What does a General Physician do? ",
          content: ":- A General Physician is a medical specialist who diagnoses illnesses and gives treatment and advice accordingly. It is always recommended to consult a General Physician if you are not sure of the issue you are suffering from.",
      },
      {
          title: "26. Is it safe to consult online? ",
          content: "Your consultation will be absolutely safe. AAKANKSHA Healthcare platform is absolutely safe & private where our customer's information and health data is the most important thing for us.",
      },
      {
          title: "27. How are AAKANKSHA Healthcare's online doctors selected?",
          content: "AAKANKSHA Healthcare doctors are handpicked carefully after a multi-step screening process. Our team verifies necessary documents, registrations and certifications for every doctor.",
      },
      {
          title: "28. Can I share prescriptions/test reports during my consultation?",
          content: "Yes. You have the option to share images during the chat. We also provide you with 24/7 access to your prescriptions/test reports stored in our Digital Health Locker.",
      },
      {
          title: "29. When should you consult a specialist doctor?",
          content: "If your health issues are complex or if your general physician recommends it, you may consult a specialist doctor. Additionally, if you feel as if your treatment/results are not satisfactory after consulting a general physician, you may follow up with a specialist.",
      },
      {
          title: "30. Will I get a refund if I cancel the online doctor consultation?",
          content: "In case you are not satisfied with the consultation for any reason, or choose to cancel it, you can reach out to our customer care on ********with a request for a refund. Our customer care team will process the refund after verifying your case details.",
      },
    ]
};

const styles = {
    bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "Blue",
    rowContentColor: 'grey',
    rowContentPaddingLeft: '1%',
    rowContentPaddingRight: '1%',
    rowTitlePaddingLeft: '1%',
};

const config = {
     animate: true,
     arrowIcon: "V",
     tabFocus: true
};

export default function F() {

    return (
        <div>
          <Popup />
          <Popup1 />
          <Header/>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            <Footer/>
        </div>
    );
}
