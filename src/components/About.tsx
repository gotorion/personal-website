const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer who loves creating amazing digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full transform rotate-6"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                  <img
                    src="/me.jpeg"
                    alt="Junhui Li"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* 将文字移到照片下方 */}
                <div className="text-center mt-8">
                  <p className="text-gray-600 font-medium">Junhui Li</p>
                  <p className="text-sm text-gray-500">Full-Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Turning Ideas Into Reality
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience creating 
              beautiful, functional, and user-centered digital experiences. I am always looking 
              for new and innovative ways to bring my clients' visions to life.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I believe that design is about more than just making things look pretty – it's 
              about solving problems and creating intuitive, enjoyable experiences for users.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">What I do:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Web Development (React, Node.js, TypeScript)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  UI/UX Design & Prototyping
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile App Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Database Design & Management
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About