// pages/contact.js
import Head from 'next/head';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <Head>
        <title>Contact Us - NEXT READ</title>
      </Head>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Name</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#ff7e5f] transition duration-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#ff7e5f] transition duration-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-800">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#ff7e5f] transition duration-300"></textarea>
        </div>
        <button type="submit" className="bg-[#ff7e5f] text-white px-4 py-2 rounded-md hover:bg-[#feb47b] transition duration-300">Submit</button>
      </form>
    </div>
  );
}
