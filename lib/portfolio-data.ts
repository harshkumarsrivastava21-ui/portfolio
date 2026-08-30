export const portfolio = {
  name: 'Harsh Kumar Srivastava',
  initials: 'Portfolio',
  title: 'B.Tech CSE ',
  availability: 'Open to learning, building & collaborating',
  bio: 'Passionate about programming, artificial intelligence, machine learning, web development, and building real-world projects. Currently learning, experimenting, and improving my skills every day.',
  about: "I'm a 2nd-year B.Tech Computer Science and Engineering student interested in Artificial Intelligence, Machine Learning, software development, and problem solving. I enjoy learning new technologies and turning ideas into practical projects.",
  profileImage: '/projects/Screenshot 2026-08-30 212423.png',
  resumeUrl: 'https://drive.google.com/file/d/1-81W-VoDBG9r9_QmUYpdD9vJx-4QoSHg/view?usp=drive_link',
  email: 'harshkumarsrivastava21@gmail.com',
  location: '[Your Location]',
  socials: { github: 'https://github.com/harshkumarsrivastava21-ui', linkedin: 'https://www.linkedin.com/in/harshhkumarsrivastava/' },
  skills: {
    programming: ['Python', 'C', 'C++', 'JavaScript'],
    web: ['HTML', 'CSS', 'JavaScript'],
    ai: ['Machine Learning', 'Artificial Intelligence', 'NumPy', 'Pandas'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva'],
  },
  learning: [
    ['Data Structures & Algorithms', 'Improving problem-solving and competitive programming skills.'],
    ['Artificial Intelligence', 'Learning AI concepts and applications.'],
    ['Machine Learning', 'Learning algorithms, preprocessing, model training and evaluation.'],
    ['Web Development', 'Building responsive and interactive websites.'],
  ],
  projects: [
    { title: 'Water Quality Awareness Tool', description: 'An interactive web application developed to increase awareness about water quality, common contaminants, and their potential health and environmental impacts.', tags: 'HTML · CSS · JavaScript / React', image: '/Water.png', githubUrl: 'https://github.com/chandrakant8455/waterqualityawarenesstool', demoUrl: 'https://dist-ehusyvpg.devinapps.com/' },
    {  title: 'Weather Application', description: 'A weather application that retrieves real-time weather information using an API.', tags: 'HTML · CSS · JavaScript · Weather API', image: '/Weather.png', githubUrl: 'https://github.com/chandrakant8455/climax-weatherapplication', demoUrl: 'https://climax-weatherapplication.vercel.app/' },
    { title: 'AI Chatbot - StudyX', description: 'StudyX AI is an AI-powered study chatbot that helps students get quick, clear, and interactive answers to academic questions, along with basic conversational support.', tags: 'HTML · CSS · JavaScript · Google Gemini API', image: '/AI Chatbot.png', githubUrl: 'https://github.com/chandrakant8455/studyx-ai', demoUrl: 'https://v0-studyx-ai-byckj.vercel.app/' },
    { title: 'BMI Calculator', description: 'BMI Calculator is a simple web application that calculates Body Mass Index (BMI) based on a user’s height and weight and displays the corresponding BMI category.', tags: 'HTML · CSS · JavaScript', image: '/BMI.png', githubUrl: 'https://github.com/chandrakant8455/bmi-calculator', demoUrl: 'https://bmi-calculatorbyckj-gilt-beta.vercel.app/' },
  ],
  internships: [['Community Development Program(CDP)', '', 'June 2026 – July 2026', 'A community development initiative focused on creating awareness about cyber threats, online scams, data privacy, and safe internet practices. The project encouraged responsible digital behaviour and helped participants learn essential cybersecurity measures to stay safe online.', undefined]],
  education: { degree: 'B.Tech Computer Science & Engineering', university: 'Lovely Professional University', year: '2025 – 2029', status: 'Currently pursuing'},
  educationTimeline: [
    { degree: 'B.Tech Computer Science & Engineering - AI/ML', university: 'Lovely Professional University', year: '2025 – 2029', detail: 'Currently pursuing' },
    { degree: 'Heigher Secondary Education', university: 'Jhadeshwar International School', year: '2022 – 2024', detail: 'CBSE' },
    { degree: 'Secondary Education', university: "St 'James Convent School", year: '2014 – 2022', detail: 'ICSE' },
  ],
  achievements: ['Coding achievements', 'Hackathons', 'SIH participation', 'Certifications', 'Workshops', 'Technical competitions'],
  certificates: [
    { title: 'Cyber Security', issuer: 'Coursera', year: '2026', image: '/CYBER SECURITY_page-0001.jpg', certificateUrl: 'https://drive.google.com/file/d/1SLWkln5ph_Xto5H0Ax0HH3NEHV_KVsvj/view?usp=drive_link' },
    { title: 'Java Fundamentals', issuer: 'TuteDdude', year: '2026', image: '/JAVA_page-0001.jpg', certificateUrl: 'https://drive.google.com/file/d/1_kcGPighgVu_OcY2SR8fLi3W19iPvFv5/view?usp=drive_link' },
    { title: 'Introductio to Python', issuer: 'Infosys SpringBoard', year: '2026', image: '/PYTHON_page-0001.jpg', certificateUrl: 'https://drive.google.com/file/d/1AQYKSWQcxm3EMaECl_NYBZJt-VgNXhLn/view?usp=drive_link' },
    { title: 'C Programming Language', issuer: 'iamneo - An NIIT Venture', year: '2026', image: '/C_page-0001.jpg', certificateUrl: 'https://drive.google.com/file/d/14MOK4PMjRwraZ8pWpRhzfqWtQmeCH21D/view?usp=sharing' },
  ],
} as const

export type Portfolio = typeof portfolio
