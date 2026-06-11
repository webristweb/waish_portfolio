// Skills Data
const skillCategories = [
    {
        icon: '🐍',
        title: 'Programming',
        skills: ['Python', 'SQL', 'MySQL', 'PostgreSQL']
    },
    {
        icon: '📊',
        title: 'Data Analysis',
        skills: ['Pandas', 'NumPy', 'Data Cleaning', 'EDA', 'Statistics']
    },
    {
        icon: '📈',
        title: 'Visualization',
        skills: ['Matplotlib', 'Seaborn', 'Power BI', 'Excel']
    },
    {
        icon: '🤖',
        title: 'Machine Learning',
        skills: ['Scikit-learn', 'Regression', 'Classification', 'Model Evaluation', 'Feature Engineering']
    },
    {
        icon: '🧠',
        title: 'Deep Learning',
        skills: ['ANN', 'CNN', 'TensorFlow', 'Keras', 'NLP']
    },
    {
        icon: '🛠️',
        title: 'Tools',
        skills: ['Jupyter Notebook', 'Google Colab', 'VS Code', 'GitHub']
    }
];

const progressBars = [
    { name: 'Python Programming', percentage: 90 },
    { name: 'SQL & Databases', percentage: 85 },
    { name: 'Data Analysis (Pandas/NumPy)', percentage: 88 },
    { name: 'Machine Learning', percentage: 85 },
    { name: 'Data Visualization', percentage: 82 },
    { name: 'Deep Learning (TensorFlow/Keras)', percentage: 78 }
];

// Projects Data
const projects = [
    {
        icon: '🤖',
        status: 'Completed',
        title: 'AI-Based Resume Screening System',
        description: 'Built an NLP-based resume screening system for automated candidate shortlisting. Matched resumes with job descriptions using machine learning algorithms.',
        tech: ['Python', 'NLP', 'Machine Learning', 'Scikit-learn', 'Pandas'],
        codeLink: '#',
        demoLink: '#'
    },
    {
        icon: '💳',
        status: 'Completed',
        title: 'Credit Card Fraud Detection System',
        description: 'Developed an ML model to detect fraudulent credit card transactions. Performed preprocessing and classification on imbalanced datasets with high accuracy.',
        tech: ['Python', 'Scikit-learn', 'Pandas', 'Classification', 'Imbalanced Data'],
        codeLink: '#',
        demoLink: '#'
    },
    {
        icon: '❤️',
        status: 'Completed',
        title: 'Heart Attack Risk Prediction',
        description: 'Built a predictive ML model using patient health data. Applied feature engineering and classification algorithms for accurate risk prediction.',
        tech: ['Python', 'Machine Learning', 'Feature Engineering', 'Classification', 'NumPy'],
        codeLink: '#',
        demoLink: '#'
    },
    {
        icon: '🌐',
        status: 'This Project',
        title: 'Portfolio Website',
        description: 'Personal portfolio site built with HTML, CSS & JavaScript. Features smooth animations, responsive layout, and modern UI design to showcase skills and projects.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
        codeLink: '#',
        demoLink: '#'
    }
];

// Education Data
const educationData = [
    {
        year: '2022 — 2026',
        icon: '🎓',
        degree: 'B.Tech — Computer Science & Engineering',
        institution: 'Baba Banda Singh Bahadur Engineering College, Punjab (IKGPTU)',
        description: 'Currently pursuing Bachelor of Technology in Computer Science & Engineering from I.K. Gujral Punjab Technical University, specializing in Data Science, Machine Learning, and AI.',
        subjects: ['Data Science', 'Machine Learning', 'Python Programming', 'Database Management']
    },
    {
        year: '2020 — 2022',
        icon: '📚',
        degree: 'Intermediate (12th)',
        institution: 'Government Boys High School, Paharpur',
        description: 'Completed Higher Secondary education with 69.2% from E. Champaran, building strong analytical and mathematical foundations.',
        subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
    }
];
