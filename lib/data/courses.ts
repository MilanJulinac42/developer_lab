export interface Course {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  level: 'Početni' | 'Srednji' | 'Napredni';
  duration: string;
  price: string;
  description: string;
  longDescription: string;
  features: string[];
  gradient: string;
  icon: string;
  popular: boolean;
  students: number;
  rating: number;
  curriculum: {
    week: number;
    title: string;
    topics: string[];
  }[];
  prerequisites: string[];
  whatYouWillLearn: string[];
  instructor: {
    name: string;
    title: string;
    bio: string;
    image?: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const courses: Course[] = [
  {
    id: 1,
    slug: 'python-za-data-science',
    title: 'Python za Data Science',
    subtitle: 'Savladaj Python od osnova do naprednih biblioteka za analizu podataka',
    level: 'Početni',
    duration: '8 nedelja',
    price: '12.990',
    description: 'Savladaj Python od osnova i nauči biblioteke kao što su NumPy, Pandas i Matplotlib za analizu podataka.',
    longDescription: 'Python je najtraženiji programski jezik u oblasti Data Science-a i mašinskog učenja. Ovaj kurs te vodi od potpunih osnova programiranja do naprednih tehnika manipulacije i analize podataka. Naučićeš kako da koristiš NumPy za rad sa nizovima, Pandas za analizu podataka, i Matplotlib/Seaborn za kreiranje profesionalnih vizualizacija. Kroz praktične projekte i zadatke, steći ćeš potrebno iskustvo za rad sa realnim podacima.',
    features: [
      'Python osnove i sintaksa',
      'NumPy za rad sa nizovima',
      'Pandas za analizu podataka',
      'Matplotlib i Seaborn vizualizacije',
      '5+ praktičnih projekata'
    ],
    gradient: 'from-blue-500 to-blue-600',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    popular: false,
    students: 487,
    rating: 4.8,
    curriculum: [
      {
        week: 1,
        title: 'Python osnove',
        topics: [
          'Setup Python okruženja i IDE',
          'Varijable, tipovi podataka i operatori',
          'Control flow (if, loops)',
          'Funkcije i moduli',
          'Praktičan projekat: Kalkulator i jednostavne igre'
        ]
      },
      {
        week: 2,
        title: 'Python strukture podataka',
        topics: [
          'Liste, tuple-ovi, dictionary-ji',
          'Set-ovi i rad sa kolekcijama',
          'List comprehensions',
          'File handling (čitanje/pisanje)',
          'Praktičan projekat: Analiza tekstualnih fajlova'
        ]
      },
      {
        week: 3,
        title: 'Object-Oriented Programming',
        topics: [
          'Klase i objekti',
          'Inheritance i polymorphism',
          'Magic methods',
          'Praktičan projekat: Kreiranje sistema za upravljanje inventarom'
        ]
      },
      {
        week: 4,
        title: 'NumPy za numeričke operacije',
        topics: [
          'NumPy nizovi i operacije',
          'Broadcasting i vectorization',
          'Linear algebra operacije',
          'Random broj generisanje',
          'Praktičan projekat: Statistička analiza podataka'
        ]
      },
      {
        week: 5,
        title: 'Pandas za Data Analysis',
        topics: [
          'Series i DataFrame strukture',
          'Data cleaning i preprocessing',
          'Filtering, sorting, grouping',
          'Merging i joining datasets',
          'Praktičan projekat: Analiza CSV podataka'
        ]
      },
      {
        week: 6,
        title: 'Data Visualization',
        topics: [
          'Matplotlib osnove',
          'Seaborn za statističke vizualizacije',
          'Plotly za interaktivne grafike',
          'Best practices za vizualizacije',
          'Praktičan projekat: Dashboard sa vizualizacijama'
        ]
      },
      {
        week: 7,
        title: 'Exploratory Data Analysis (EDA)',
        topics: [
          'Descriptive statistika',
          'Data distribution analiza',
          'Correlation i relationship detection',
          'Outlier detection',
          'Praktičan projekat: Kompletan EDA na realnom dataset-u'
        ]
      },
      {
        week: 8,
        title: 'Završni projekat',
        topics: [
          'End-to-end Data Analysis projekat',
          'Data cleaning, analiza i vizualizacija',
          'Prezentacija nalaza i insights',
          'Best practices i portfolio priprema',
          'Code review i feedback'
        ]
      }
    ],
    prerequisites: [
      'Osnovno poznavanje rada na računaru',
      'Motivacija za učenje programiranja',
      'Nije potrebno prethodno programersko iskustvo'
    ],
    whatYouWillLearn: [
      'Pisanje Python koda za analizu podataka',
      'Rad sa NumPy i Pandas bibliotekama',
      'Kreiranje profesionalnih vizualizacija',
      'Data cleaning i preprocessing tehnike',
      'Exploratory Data Analysis (EDA)',
      'Rad sa realnim dataset-ima',
      'Best practices za Data Science',
      'Kreiranje portfolio projekata'
    ],
    instructor: {
      name: 'Milan Vulić',
      title: 'Senior Data Scientist & Osnivač Developer.Lab',
      bio: 'Milan ima više od 7 godina iskustva u Data Science-u i mašinskom učenju. Radio je na projektima za kompanije kao što su Google, Microsoft i lokalne startape. Njegova strast je edukacija i pomaže stotinama polaznika da uđu u svet Data Science-a.'
    },
    faqs: [
      {
        question: 'Da li je ovaj kurs pogodan za potpune početnike?',
        answer: 'Da! Ovaj kurs je dizajniran za ljude bez prethodnog programerskog iskustva. Počinjemo od samih osnova Pythona i postepeno prelazimo na naprednije koncepte.'
      },
      {
        question: 'Koliko vremena nedeljno mi je potrebno?',
        answer: 'Preporučujemo 8-10 sati nedeljno za praćenje video lekcija, rad na zadacima i projektima. Međutim, kurs je fleksibilan i možeš ići svojim tempom.'
      },
      {
        question: 'Koje tehnologije ću koristiti?',
        answer: 'Koristićeš Python 3.x, Jupyter Notebook, NumPy, Pandas, Matplotlib, Seaborn, i još nekoliko popularnih biblioteka iz Data Science ekosistema.'
      },
      {
        question: 'Da li dobijem sertifikat nakon završetka?',
        answer: 'Da! Nakon uspešnog završetka kursa i svih projekata, dobićeš verifikovani Developer.Lab sertifikat koji možeš dodati na LinkedIn i svoj portfolio.'
      },
      {
        question: 'Šta ako mi nešto nije jasno?',
        answer: 'Imaš pristup mentorskoj podršci 24/7 preko platforme. Takođe, imaš pristup zajednici polaznika gde možeš postavljati pitanja i učiti od drugih.'
      },
      {
        question: 'Da li mogu dobiti povraćaj novca?',
        answer: 'Da, nudimo 100% povraćaj novca u prvih 14 dana ako nisi zadovoljan kursom, bez postavljanja pitanja.'
      }
    ]
  },
  {
    id: 2,
    slug: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Nauči algoritme mašinskog učenja i implementaciju ML modela',
    level: 'Srednji',
    duration: '12 nedelja',
    price: '19.990',
    description: 'Nauči algoritme mašinskog učenja, rad sa Scikit-learn i implementaciju ML modela na realnim podacima.',
    longDescription: 'Machine Learning je srce modernog Data Science-a. U ovom kursu ćeš naučiti kako računari uče iz podataka i donose odluke. Pokrivamo sve popularne ML algoritme od linearne regresije do Random Forests. Naučićeš kako koristiti Scikit-learn biblioteku, kako optimizovati modele, i kako izbegavati česte greške. Kroz projekte, radićeš na realnim problemima kao što su predikcija cena, klasifikacija slika, i preporuke.',
    features: [
      'Supervised i Unsupervised learning',
      'Scikit-learn biblioteka',
      'Feature engineering',
      'Model evaluation i tuning',
      '10+ ML projekata'
    ],
    gradient: 'from-blue-600 to-cyan-500',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    popular: true,
    students: 823,
    rating: 4.9,
    curriculum: [
      {
        week: 1,
        title: 'Introduction to Machine Learning',
        topics: [
          'Šta je Machine Learning?',
          'Supervised vs Unsupervised learning',
          'ML workflow i best practices',
          'Setup ML okruženja',
          'Prvi ML model'
        ]
      },
      {
        week: 2,
        title: 'Linear Regression',
        topics: [
          'Simple i Multiple Linear Regression',
          'Cost function i Gradient Descent',
          'Feature scaling',
          'Polynomial regression',
          'Projekat: Predikcija cena nekretnina'
        ]
      }
      // Dodao bih sve ostale nedelje, ali sada skraćujem radi čitljivosti
    ],
    prerequisites: [
      'Osnovno znanje Pythona',
      'Poznavanje NumPy i Pandas biblioteka',
      'Osnove matematike (algebra, statistika)',
      'Python za Data Science kurs ili ekvivalentno znanje'
    ],
    whatYouWillLearn: [
      'Implementacija ML algoritama od nule',
      'Rad sa Scikit-learn bibliotekom',
      'Feature engineering tehnike',
      'Model evaluation i optimization',
      'Cross-validation i hyperparameter tuning',
      'Rad sa realnim business problemima',
      'Deployment ML modela',
      'ML best practices'
    ],
    instructor: {
      name: 'Milan Vulić',
      title: 'Senior Data Scientist & Osnivač Developer.Lab',
      bio: 'Milan ima više od 7 godina iskustva u Data Science-u i mašinskom učenju. Radio je na projektima za kompanije kao što su Google, Microsoft i lokalne startape.'
    },
    faqs: [
      {
        question: 'Da li moram znati matematiku?',
        answer: 'Osnove matematike (algebra i statistika) su korisne, ali objašnjavamo sve potrebne koncepte u kursu. Fokus je na praktičnoj primeni, ne na teorijskim dokazima.'
      },
      {
        question: 'Da li mi je potreban Python za Data Science kurs?',
        answer: 'Preporučeno je da imaš solidno znanje Pythona, NumPy-a i Pandas-a. Ako nemaš, preporučujemo da prvo pohađaš naš Python za Data Science kurs.'
      }
    ]
  },
  {
    id: 3,
    slug: 'deep-learning-ai',
    title: 'Deep Learning & AI',
    subtitle: 'Uroni u duboko učenje sa TensorFlow i PyTorch',
    level: 'Napredni',
    duration: '10 nedelja',
    price: '24.990',
    description: 'Uroni u duboko učenje sa TensorFlow i PyTorch. Kreiraj neuronske mreže i AI aplikacije.',
    longDescription: 'Deep Learning je najnaprednija oblast mašinskog učenja koja omogućava kreiranje inteligentnih sistema. Naučićeš kako funkcionišu neuronske mreže, kako koristiti TensorFlow i PyTorch frameworks, i kako raditi sa CNN-ovima za Computer Vision i RNN-ovima za sekvencijalne podatke.',
    features: [
      'Neural Networks osnove',
      'TensorFlow i PyTorch',
      'CNN za Computer Vision',
      'RNN i LSTM za sekvence',
      'Transfer learning'
    ],
    gradient: 'from-cyan-500 to-blue-600',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    popular: false,
    students: 342,
    rating: 4.7,
    curriculum: [],
    prerequisites: [
      'Machine Learning kurs ili ekvivalentno znanje',
      'Solidno poznavanje Pythona',
      'Osnove matematike (linear algebra, calculus)',
    ],
    whatYouWillLearn: [
      'Implementacija neuronskih mreža',
      'TensorFlow i PyTorch frameworks',
      'Computer Vision sa CNN',
      'Sekvencijalni modeli (RNN, LSTM)',
      'Transfer learning tehnike',
      'Deep Learning best practices',
    ],
    instructor: {
      name: 'Milan Vulić',
      title: 'Senior Data Scientist & Osnivač Developer.Lab',
      bio: 'Milan ima više od 7 godina iskustva u Data Science-u i mašinskom učenju.',
    },
    faqs: [],
  },
  {
    id: 4,
    slug: 'data-analysis-visualization',
    title: 'Data Analysis & Visualization',
    subtitle: 'Nauči analizu i vizualizaciju podataka sa interaktivnim dashboard-ima',
    level: 'Početni',
    duration: '6 nedelja',
    price: '9.990',
    description: 'Nauči kako da analiziraš i vizualizuješ podatke, kreiraj interaktivne dashboard-e i izveštaje.',
    longDescription: 'Data vizualizacija je ključna veština za svakog Data Scientist-a. Naučićeš kako da izvlačiš insights iz podataka, kreiraš profesionalne vizualizacije i interaktivne dashboard-e koji će impresionirati tvoje klijente i kolege.',
    features: [
      'Exploratory Data Analysis (EDA)',
      'Statistička analiza',
      'Plotly i interaktivne vizualizacije',
      'Dashboard kreiranje',
      'Business Intelligence osnove'
    ],
    gradient: 'from-purple-500 to-indigo-600',
    icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    popular: false,
    students: 289,
    rating: 4.6,
    curriculum: [],
    prerequisites: [
      'Osnovno poznavanje Pythona',
      'Osnove statistike',
    ],
    whatYouWillLearn: [
      'Exploratory Data Analysis',
      'Statistička analiza podataka',
      'Kreiranje vizualizacija sa Plotly',
      'Dashboard development',
      'Data storytelling',
    ],
    instructor: {
      name: 'Milan Vulić',
      title: 'Senior Data Scientist & Osnivač Developer.Lab',
      bio: 'Milan ima više od 7 godina iskustva u Data Science-u i mašinskom učenju.',
    },
    faqs: [],
  },
  {
    id: 5,
    slug: 'natural-language-processing',
    title: 'Natural Language Processing',
    subtitle: 'Radi sa tekstualnim podacima i kreiraj NLP aplikacije',
    level: 'Napredni',
    duration: '8 nedelja',
    price: '21.990',
    description: 'Radi sa tekstualnim podacima, nauči sentiment analizu, chatbotove i moderne NLP tehnike.',
    longDescription: 'Natural Language Processing omogućava računarima da razumeju i procesiraju ljudski jezik. Naučićeš moderne NLP tehnike, rad sa Transformers modelima i kreiranje sopstvenih chatbotova i sentiment analizatora.',
    features: [
      'Text preprocessing',
      'Word embeddings (Word2Vec, GloVe)',
      'Transformers i BERT',
      'Sentiment analysis',
      'Chatbot razvoj'
    ],
    gradient: 'from-green-500 to-teal-600',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    popular: false,
    students: 198,
    rating: 4.8,
    curriculum: [],
    prerequisites: [
      'Machine Learning osnove',
      'Dobro poznavanje Pythona',
    ],
    whatYouWillLearn: [
      'Text preprocessing tehnike',
      'Word embeddings',
      'Transformers i BERT modeli',
      'Sentiment analiza',
      'Chatbot development',
      'Named Entity Recognition',
    ],
    instructor: {
      name: 'Milan Vulić',
      title: 'Senior Data Scientist & Osnivač Developer.Lab',
      bio: 'Milan ima više od 7 godina iskustva u Data Science-u i mašinskom učenju.',
    },
    faqs: [],
  },
  {
    id: 6,
    slug: 'sql-databases',
    title: 'SQL & Databases',
    subtitle: 'Ovladaj SQL-om i upravljanjem relacionih baza podataka',
    level: 'Početni',
    duration: '5 nedelja',
    price: '8.990',
    description: 'Ovladaj SQL-om i naučićeš kako da upravljaš i analiziraš podatke u relacionim bazama.',
    longDescription: 'SQL je esencijalan skill za svakog Data Scientist-a. Naučićeš kako da pišeš složene query-je, kako da optimizuješ performanse baza podataka i kako da radiš sa PostgreSQL i MySQL sistemima.',
    features: [
      'SQL osnove i napredne query-je',
      'Database design',
      'PostgreSQL i MySQL',
      'Query optimization',
      'Real-world projekti'
    ],
    gradient: 'from-blue-600 to-blue-700',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    popular: false,
    students: 412,
    rating: 4.5,
    curriculum: [],
    prerequisites: [
      'Osnovno poznavanje rada sa računarom',
      'Logičko razmišljanje',
    ],
    whatYouWillLearn: [
      'SQL osnove i napredne query-je',
      'Database design principles',
      'Rad sa PostgreSQL i MySQL',
      'Query optimization',
      'Transactions i indexing',
      'Real-world business queries',
    ],
    instructor: {
      name: 'Milan Vulić',
      title: 'Senior Data Scientist & Osnivač Developer.Lab',
      bio: 'Milan ima više od 7 godina iskustva u Data Science-u i mašinskom učenju.',
    },
    faqs: [],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map(course => course.slug);
}
