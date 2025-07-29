import { useEffect, useState } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Creative Thinker'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 头像 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full transform rotate-6"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                <img
                  src="/me.jpeg"
                  alt="Junhui Li"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-600 font-medium">Junhui Li</p>
              <p className="text-sm text-gray-500">Full-Stack Developer</p>
            </div>
          </div>
          {/* 自我介绍 */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Junhui Li</span>
            </h1>
            <div className="h-16 sm:h-20 flex items-center justify-center md:justify-start mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
                I'm a{' '}
                <span className="gradient-text transition-all duration-500">
                  {texts[currentText]}
                </span>
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              I love turning ideas into reality through code and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-3"
              >
                Get In Touch
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-secondary text-lg px-8 py-3"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero