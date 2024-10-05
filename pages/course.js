// pages/course.js
import Head from 'next/head';

export default function Course() {
  const availableCourses = [
    { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.', price: '$49.99' },
    { id: 2, title: 'Advanced JavaScript', description: 'Master JavaScript with this advanced course.', price: '$79.99' },
    { id: 3, title: 'Full-Stack Development', description: 'Become a full-stack developer with this comprehensive course.', price: '$99.99' },
  ];

  const futureCourses = [
    { id: 1, title: 'Machine Learning Basics', description: 'An introduction to machine learning concepts.', launchDate: 'Coming Soon' },
    { id: 2, title: 'Data Science with Python', description: 'Learn data science using Python.', launchDate: 'Coming Soon' },
    { id: 3, title: 'Cloud Computing Fundamentals', description: 'Understand the basics of cloud computing.', launchDate: 'Coming Soon' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Courses - NEXT READ</title>
      </Head>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {availableCourses.map(course => (
            <div key={course.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-gray-800 font-bold mt-4">{course.price}</p>
              <button className="mt-4 w-full bg-[#ff7e5f] text-white py-2 rounded-md hover:bg-[#feb47b] transition duration-300">
                Buy Now
              </button>
            </div>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Future Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureCourses.map(course => (
            <div key={course.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-gray-800 font-bold mt-4">{course.launchDate}</p>
              <button className="mt-4 w-full bg-gray-300 text-gray-600 py-2 rounded-md cursor-not-allowed" disabled>
                {course.launchDate}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
