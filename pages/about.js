// pages/about.js
import Head from 'next/head';
import { useState } from 'react';

export default function About() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    // Add logic to submit feedback to your backend or storage
    alert('Feedback submitted: ' + feedback);
    setFeedback('');
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      <Head>
        <title>About Us - NEXT READ</title>
      </Head>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
        <img
          src="/Your_next_read_podcast_cover99wod.png"
          alt="About Us"
          className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg"
        />
        <div className="max-w-lg">
          <p className="text-lg text-gray-600 mb-4">
          Welcome to NEXT READ, your number one source for all things books. We're dedicated to giving you the very best of book recommendations, research papers, Courses, Vedios with a focus on quality, uniqueness, and customer satisfaction.
          </p>
          <p className="text-lg text-gray-600 mb-4">
          Next Read offers a powerful tool for learners and researchers to access a wide array of educational resources instantly. By integrating cutting-edge technologies and focusing on user-friendly design, the platform ensures valuable learning experiences that are both efficient and effective
          </p>
          <p className="text-lg text-gray-600">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any
            questions or comments, please don't hesitate to contact us.
          </p>
          <form onSubmit={handleSubmitFeedback} className="mt-6">
            <label htmlFor="feedback" className="block text-sm font-semibold text-gray-800">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#ff7e5f] transition duration-300"
              placeholder="Share your thoughts..."
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-[#ff7e5f] text-white py-2 rounded-md hover:bg-[#feb47b] transition duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
