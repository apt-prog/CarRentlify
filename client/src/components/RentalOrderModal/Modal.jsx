import React, { useState, useEffect, useRef } from "react";
import { User, Mail, Phone, BadgeCheck, CreditCard, X } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import IsLogin from "../../utils/IsLogin";
import CarBookForRental from "../../utils/CarBook";

const RentalModal = ({ theme, onClose }) => {
  const { carsId } = useParams();
  const navigate = useNavigate();
  const hasCheckedLogin = useRef(false);

  useEffect(() => {
    if (hasCheckedLogin.current) return;
    hasCheckedLogin.current = true;

    const checkLogin = async () => {
      const response = await IsLogin();

      if (response !== 200) {
        toast.error("You must be logged in to continue.", {
          toastId: "login-required",
        });
        navigate("/");
      }
    };

    checkLogin();
  }, [navigate]);

  const [paymentType, setPaymentType] = useState("upi");
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientAadhar: "",
    clientDL: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const {
      clientName,
      clientEmail,
      clientPhone,
      clientAadhar,
      clientDL,
      price,
    } = formData;

    if (
      !clientName ||
      !clientEmail ||
      !clientPhone ||
      !clientAadhar ||
      !clientDL ||
      !paymentType ||
      !price
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const bookingData = {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      aadhar: clientAadhar,
      drivingLicence: clientDL,
      paymentMethod: paymentType,
      price,
      carCardId: carsId,
    };

    const responseBook = await CarBookForRental(bookingData);

    if (responseBook === 200) {
      toast.success("Car Booked Successfully!");
      onClose();
    } else if (responseBook === 400) {
      toast.error("Car Already On Rented");
    } else {
      toast.error("Internal Server Error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-zinc-100/30 dark:bg-black/30 backdrop-blur-sm p-4 overflow-y-auto">
      <div
        className={`w-[97%] lg:max-w-[80vw] max-h-[90vh] overflow-y-auto rounded-lg shadow-lg flex flex-col relative border-2 border-blue-600 ${
          theme === "dark" ? "bg-zinc-900 text-white" : "bg-blue-200 text-black"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm"
        >
          <X />
        </button>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row Exo">
          {/* Left */}
          <div className="w-full lg:w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">
              Client Details
            </h2>
            {[
              {
                id: "clientName",
                label: "Client Name",
                icon: <User />,
                type: "text",
                placeholder: "Enter name",
              },
              {
                id: "clientEmail",
                label: "Client Email",
                icon: <Mail />,
                type: "email",
                placeholder: "Enter email",
              },
              {
                id: "clientPhone",
                label: "Contact Number",
                icon: <Phone />,
                type: "tel",
                placeholder: "Enter number",
              },
              {
                id: "clientAadhar",
                label: "Aadhar Number",
                icon: <BadgeCheck />,
                type: "text",
                placeholder: "Enter Aadhar",
              },
              {
                id: "clientDL",
                label: "Driving Licence",
                icon: <CreditCard />,
                type: "text",
                placeholder: "Enter Licence",
              },
            ].map((field) => (
              <div key={field.id} className="flex flex-col">
                <label
                  htmlFor={field.id}
                  className="flex items-center gap-2 text-sm mb-1"
                >
                  {field.icon} {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                    theme === "dark"
                      ? "bg-zinc-800 text-white"
                      : "bg-white text-black"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 p-6 space-y-4 border-t lg:border-t-0 lg:border-l border-gray-300 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">
              Payment Method & Budget Discus
            </h2>

            <div className="flex flex-col">
              <label htmlFor="paymentType" className="text-sm mb-1">
                Select Payment Option
              </label>
              <select
                id="paymentType"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                  theme === "dark"
                    ? "bg-zinc-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                <option value="upi">Pay with UPI</option>
                <option value="cash">Pay with Cash</option>
              </select>
            </div>

            {/* Only Amount Field for both UPI & Cash */}
            <div className="flex flex-col">
              <label htmlFor="price" className="text-sm mb-1">
                Amount (₹)
              </label>
              <input
                id="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                placeholder="Max Your Budget"
                className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                  theme === "dark"
                    ? "bg-zinc-800 text-white"
                    : "bg-white text-black"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center p-6 border-t border-gray-300 dark:border-gray-700">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm"
          >
            Book Your Rental Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalModal;
