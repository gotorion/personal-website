const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-400 to-blue-500' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'C++', level: 80, color: 'from-gray-600 to-gray-700' },
        { name: 'Python', level: 75, color: 'from-blue-500 to-purple-600' },
        { name: 'MySQL', level: 70, color: 'from-blue-400 to-blue-600' },
        { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-600' },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, color: 'from-orange-500 to-red-600' },
        { name: 'Docker', level: 70, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 65, color: 'from-orange-400 to-orange-600' },
        { name: 'Figma', level: 80, color: 'from-purple-500 to-pink-500' },
        { name: 'Jest', level: 75, color: 'from-red-500 to-red-600' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies to create amazing digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Other Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Next.js', 'Vue.js', 'Angular', 'Svelte', 'GraphQL', 'REST API',
              'Redux', 'Zustand', 'Prisma', 'TypeORM', 'JWT', 'OAuth',
              'Webpack', 'Vite', 'ESLint', 'Prettier', 'Storybook', 'Cypress',
              'Firebase', 'Vercel', 'Netlify', 'Heroku', 'Linux', 'Nginx'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 