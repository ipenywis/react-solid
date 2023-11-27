import React, { useState } from "react";
import { PrivacyPolicyDialogProps } from "./privacyPolicy";

export function PrivacyPolicyDialog({
  onAccept,
  onDeny,
}: PrivacyPolicyDialogProps) {
  const [isOpen, setIsOpen] = useState(true);

  const accept = () => {
    onAccept("USX11V2");
    setIsOpen(false);
  };

  const deny = () => {
    onDeny();
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            isOpen ? "sm:scale-100" : "sm:scale-95"
          }`}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900 font-black">
                  General Privacy Policy
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <p>
                      This Privacy Policy describes how [Your Company
                      Name] ("we," "us," or "our") collects, uses,
                      discloses, and protects the personal information
                      you provide to us through our website, mobile
                      applications, and other online services
                      (collectively, the "Service").
                    </p>
                    <h2>Information We Collect</h2>
                    <p>
                      We may collect the following categories of
                      personal information:
                    </p>
                    <ul>
                      <li>
                        <strong>Contact Information:</strong> We may
                        collect your name, email address, phone
                        number, or postal address when you provide it
                        to us.
                      </li>
                      <li>
                        <strong>User Account Information:</strong> If
                        you create an account with us, we may collect
                        your username, password, and other account
                        information.
                      </li>
                      <li>
                        <strong>Payment Information:</strong> When you
                        make purchases through our Service, we collect
                        your payment card details and other
                        transaction information.
                      </li>
                      <li>
                        <strong>Usage Data:</strong> We collect
                        information about your interactions with our
                        Service, such as your IP address, device type,
                        browser type, the pages you visit, and the
                        time and date of your visits.
                      </li>
                      <li>
                        <strong>
                          Cookies and Similar Technologies:
                        </strong>{" "}
                        We may use cookies, web beacons, and other
                        tracking technologies to collect information
                        about your usage of our Service.
                      </li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>
                      We use your personal information for the
                      following purposes:
                    </p>
                    <ul>
                      <li>
                        <strong>Provide Our Services:</strong> To
                        deliver the services and products you request,
                        such as processing orders and responding to
                        inquiries.
                      </li>
                      <li>
                        <strong>
                          Improve and Personalize Our Services:
                        </strong>{" "}
                        To understand your preferences and provide a
                        customized experience, including tailoring
                        content and offers to you.
                      </li>
                      <li>
                        <strong>Communicate with You:</strong> To send
                        you updates, promotional materials, and other
                        information about our services.
                      </li>
                      <li>
                        <strong>Protect Our Legal Rights:</strong> To
                        prevent, investigate, and address fraud and
                        other illegal activities and protect our
                        rights and interests.
                      </li>
                    </ul>

                    <h2>Sharing Your Information</h2>
                    <p>
                      We may share your personal information with
                      third parties, including:
                    </p>
                    <ul>
                      <li>
                        <strong>Service Providers:</strong> We may
                        engage third-party service providers to
                        perform functions on our behalf, such as
                        processing payments, delivering products, and
                        providing customer support.
                      </li>
                      <li>
                        <strong>Legal Compliance:</strong> We may
                        share your information as required by law,
                        including in response to a valid court order,
                        subpoena, or government request.
                      </li>
                    </ul>

                    <h2>Your Choices</h2>
                    <p>
                      You can control how we use your personal
                      information:
                    </p>
                    <ul>
                      <li>
                        You can opt-out of receiving promotional
                        communications from us by following the
                        instructions provided in the messages.
                      </li>
                      <li>
                        You may have choices regarding the use of
                        cookies. Most web browsers are set to accept
                        cookies by default, but you can usually modify
                        your browser settings to decline cookies if
                        you prefer.
                      </li>
                    </ul>

                    <h2>Data Security</h2>
                    <p>
                      We take reasonable measures to protect your
                      personal information from unauthorized access
                      and disclosure.
                    </p>

                    <h2>Changes to this Privacy Policy</h2>
                    <p>
                      We may update this Privacy Policy to reflect
                      changes to our practices or for other
                      operational, legal, or regulatory reasons. The
                      updated policy will be effective upon posting,
                      and we will indicate the effective date at the
                      beginning of the policy.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                      If you have any questions or concerns about this
                      Privacy Policy or our data practices, please
                      contact us at [Your Contact Information].
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={accept}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Accept & Continue
            </button>
            <button
              onClick={deny}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Deny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
