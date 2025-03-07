import React from "react";

const Contact = () => {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Contact
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Reach out via{" "}
        <a
          href="mailto:me@example.com"
          className="text-turquoise font-medium hover:underline"
        >
          email
        </a>
      </p>
    </div>
  );
};

export default Contact;

