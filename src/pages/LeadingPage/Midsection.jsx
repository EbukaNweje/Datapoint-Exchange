import React from "react";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import BigImg from "../../assets/slider-img.png";
import Giftcard from "../../assets/giftcard.jpeg";
import Ticket from "../../assets/ticket.jpeg";
import PayBill from "../../assets/payBill.jpeg";
import Ebook from "../../assets/Ebook.jpeg";

// Features Data
const data = [
  {
    id: 1,
    headingText: "Empowering Crypto Merchants",
    features: [
      { title: "Seamless Integration", description: "Easily incorporate crypto payments into your business." },
      { title: "Lower Transaction Costs", description: "Reduce fees compared to traditional payment methods." },
      { title: "Global Reach", description: "Accept payments from customers worldwide without currency barriers." }
    ],
    img: BigImg
  },
  {
    id: 2,
    headingText: "Revolutionizing Gift Card Purchases",
    features: [
      { title: "Fast and Secure Transactions", description: "Get instant payouts with trusted processing." },
      { title: "Best Market Rates", description: "Maximize your returns with competitive exchange rates." },
      { title: "Wide Range of Accepted Cards", description: "Trade popular brands and international gift cards." }
    ],
    img: Giftcard
  },
  {
    id: 3,
    headingText: "Seamless and Secure Ticketing",
    features: [
      { title: "Secure Transactions", description: "Protect your sales with advanced fraud prevention." },
      { title: "Multiple Payment Options", description: "Accept crypto and traditional payments with ease." },
      { title: "Easy Ticket Management", description: "Streamlined tools to manage inventory and pricing." },
      { title: "Instant Payouts", description: "Get paid faster with seamless processing." }
    ],
    img: Ticket
  },
  {
    id: 4,
    headingText: "Fast, Easy, and Secure Bill Payments",
    features: [
      { title: "One-Click Payments", description: "Settle your bills quickly, without navigating multiple platforms." },
      { title: "Secure Transactions", description: "Your payments are processed securely with encryption, ensuring peace of mind." },
      { title: "Payment Reminders", description: "Never miss a payment with our automatic reminders and due date alerts." },
      { title: "Flexible Payment Methods", description: "Pay using traditional methods or cryptocurrency for faster transactions." }
    ],
    img: PayBill
  },
  {
    id: 5,
    headingText: "The Future of Digital Publishing",
    features: [
      { title: "Easy Publishing", description: "Upload and publish your eBook in minutes, with a simple and user-friendly interface." },
      { title: "Global Distribution", description: "Reach a worldwide audience with our extensive network of readers and platforms." },
      { title: "Monetization Options", description: "Set your price and keep a significant portion of the revenue with competitive royalty rates.." },
    ],
    img: Ebook
  }
];

// Reusable Feature Component
const Feature = ({ title, description }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <RiVerifiedBadgeLine className="text-red-600 text-xl" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Midsection = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Enabling Seamless <span className="text-red-600">Digital Transactions</span> for Merchants and Buyers with Crypto
        </h1>
        <p className="text-gray-600 mt-4">
          At DataPoint Exchange, we are more than just a platform—we are your strategic partner in the evolving world of digital commerce. Whether you're a forward-thinking merchant or a discerning buyer, our commitment is to provide you with secure, efficient, and seamless crypto-powered solutions that enhance your online experience.
        </p>
      </div>

      {/* Dynamic Feature Sections */}
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-12`}
        >
          {/* Image Section (Always First on Mobile) */}
          <div className={`w-full h-[300px] md:h-[400px] ${index % 2 === 0 ? "" : "md:order-last"}`}>
            <img src={item.img} alt={item.headingText} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">{item.headingText}</h3>
            {item.features.map((feature, i) => (
              <Feature key={i} {...feature} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Midsection;
