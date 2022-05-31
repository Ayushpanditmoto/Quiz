//Array of objects(qustions)

const quiz = [
  {
    q: 'Is HTML a programming language?',
    options: ['Yes', 'No'],
    answer: 1,
  },
  {
    q: 'What is one of the reasons Java is different to Javascript?',
    options: [
      "Java is compiled before it runs and isn't limited to being on a web browser.",
      'Java is just short for javascript',
      'Javascript is barely used anymore since Java came out.',
    ],
    answer: 0,
  },
  {
    q: 'What is the newest version of HTML being developed?',
    options: ['HTML4', 'HTML6', 'HTML5', 'There is only one type of HTML'],
    answer: 2,
  },
  {
    q: 'What does CSS stand for?',
    options: [
      'Complete Sound Sheet',
      'Cascading Style Sheet',
      'Cscading Style Syntax',
    ],
    answer: 1,
  },
  {
    q: "Non animated gifs are usually lower in file size, why don't people use them for photos",
    options: [
      "Because it hasn 't caught on.",
      'You need to pay for a lisencse to use them.',
      'They are distracting and decrease Usability.',
      'None of the above',
    ],
    answer: 2,
  },
  {
    q: 'What happens to a lot of images saved as jpgs when you put them online.',
    options: [
      'Stretching',
      "They'll turn blur",
      'They are too big in file size.',
      'Lower quality and artifacts.',
    ],
    answer: 3,
  },
  {
    q: 'Which is the correct CSS syntax?',
    options: [
      'Body {color: black}',
      '{body;color:black}',
      '{body:color=black(body}',
      'body:color=black',
    ],
    answer: 0,
  },
  {
    q: 'What does a compiler do?   ',
    options: [
      'Makes code start',
      'Tests to see whether the program runs fine',
      'Converts the coding into another computer language, usually to make an executable program.',
    ],
    answer: 2,
  },
  {
    q: 'What is an advantage of having external CSS?',
    options: [
      'It is faster',
      'You can edit one file to edit the base of every page which uses it.',
      'It makes no difference',
    ],
    answer: 1,
  },
  {
    q: 'What does the acronym WWW stand for?',
    options: [
      'Wide Wacky Walter',
      'Web Wide Wave',
      'Wide Wall Web',
      'Web World Wall',
      'World Wide Web',
    ],
    answer: 4,
  },
  {
    q: 'HTML uses______?',
    options: [
      'User defined tags',
      'Pre-specified tags',
      'Fixed tags defined by the language',
      'Tags only for linking',
    ],
    answer: 2,
  },
  {
    q: 'The year in which HTML was first proposed _______?',
    options: ['1993', '2001', '1951', '1890'],
    answer: 0,
  },
  {
    q: 'What is a lint?',
    options: [
      'C compiler',
      'Interactive debugger',
      'Analyzing tool',
      'C interpreter',
    ],
    answer: 2,
  },
  {
    q: 'What is the 16-bit compiler allowable range for integer constants?',
    options: [
      '-32768 to 32767',
      '-2147483648 to 2147483647',
      '-32769 to 32768',
      '-2147483649 to 2147483648',
    ],
    answer: 0,
  },
  {
    q: 'Which of the following is not a valid C variable name?',
    options: ['int number;', 'float rate;', 'int variable_count', 'int $main'],
    answer: 3,
  },
  {
    q: 'All keywords in C are in ____________',
    options: ['Uppercase', 'Lowercase', 'Capitalized', 'None of the above'],
    answer: 1,
  },
  {
    q: 'Which of the following cannot be a variable name in C?',
    options: ['volatile', 'true', 'friend', 'export'],
    answer: 0,
  },
  {
    q: 'Which is short int in C programming language?',
    options: [
      'The basic data type of C ',
      'Qualifier',
      'Short is the qualifier and int is the basic data type',
      'All of the menthioned are correct',
    ],
    answer: 2,
  },
  {
    q: 'Which keyword is used to prevent any changes in the variablewithin a C program?',
    options: ['const', 'static', 'volatile', 'None of the above'],
    answer: 0,
  },
  {
    q: 'Which of the following typecasting is accepted by C language?',
    options: [
      'widening conversions',
      'Narrowing Conversions',
      'Widening & Narrowing conversion',
      'None of the above',
    ],
    answer: 2,
  },
  {
    q: 'Which is an example of iteration in C?',
    options: ['for', 'while', 'do while', 'all the above'],
    answer: 3,
  },
  {
    q: 'Function can return enumeration constants in C?',
    options: ['True', 'False', 'Depends on the function', 'None of the above'],
    answer: 0,
  },
  {
    q: 'What is the sizeof(char) in a 32bit C compiler?',
    options: ['1 bit', '2 bits', '1 Byte', '2 Bytes'],
    answer: 2,
  },
  {
    q: 'HTML stands for -',
    options: [
      'HighText Machine Language',
      'HyperText and links Markup Language',
      'HyperText Markup Language',
      'None of these',
    ],
    answer: 2,
  },
  {
    q: 'The correct sequence of HTML tags for starting a webpage is - ',
    options: [
      'Head, Title, HTML, body',
      'HTML, Body, Title, Head',
      'HTML, Head, Title, Body',
      'HTML, Head, Title, Body',
    ],
    answer: 3,
  },
  {
    q: 'Which of the following element is responsible for making the text bold in HTML?',
    options: ['pre', 'a', 'b', 'br'],
    answer: 2,
  },
  {
    q: 'Which of the following tag is used for inserting the largest heading in HTML?',
    options: ['h3', 'h1', 'h5', 'h6'],
    answer: 1,
  },
  {
    q: 'Which character is used to represent the closing of a tag in HTML?',
    options: [' /', ' ?', ' .', ' !'],
    answer: 0,
  },
  {
    q: 'How to insert an image in HTML?',
    options: [
      'img href = "jtp.png" ',
      'img url = "jtp.png" ',
      'img link = "jtp.png" ',
      'img src = "jtp.png" ',
    ],
    answer: 3,
  },
  {
    q: '<input> is -',
    options: [
      'a format tag.',
      'an empty tag.',
      'All of the above',
      'None of the above',
    ],
    answer: 1,
  },
  {
    q: 'The <hr> tag in HTML is used for -',
    options: [
      'new line',
      'vertical ruler',
      'new paragraph',
      'horizontal ruler',
    ],
    answer: 3,
  },
  {
    q: 'Which of the following option leads to the portability and security of Java?',
    options: [
      'Bytecode is executed by JVM',
      'The applet makes the Java code secure and portable',
      'Use of exception handling',
      'Dynamic binding between objects',
    ],
    answer: 0,
  },
  {
    q: 'Which of the following is not a Java features?',
    options: [
      'Dynamic',
      'Architecture Neutral',
      'Use of pointers',
      'Object-oriented',
    ],
    amswer: 2,
  },
  {
    q: '_____ is used to find and fix bugs in the Java programs.',
    options: ['JVM', 'JRE', 'JDK', 'JDB'],
    answer: 3,
  },
  {
    q: 'Which of the following is a valid declaration of a char?',
    options: [
      "char ch = 'utea';",
      "char ca = 'tea';",
      'char cr = \u0223;',
      "char cc = 'itea';",
    ],
    answer: 0,
  },
  {
    q: 'What is the return type of the hashCode() method in the Object class?',
    options: ['Object', 'int', 'long', 'void'],
    answer: 1,
  },
  {
    q: 'Evaluate the following Java expression, if x=3, y=5, and z=100 ++z + y - y + z + x++',
    options: ['24', '23', '20', '25'],
    answer: 3,
  },
  {
    q: 'Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?',
    options: ['javap tool', 'javaw command', 'Javadoc tool', 'javah command'],
    answer: 2,
  },
  {
    q: 'Which method of the Class.class is used to determine the name of a class represented by the class object as a String?',
    options: ['getClass()', 'intern()', 'getName()', 'toString()'],
    answer: 2,
  },
  {
    q: 'What is C++ ?',
    options: [
      'C++ is an object oriented programming language',
      'C++ is a procedural programming language',
      'C++ supports both procedural and object oriented programming language',
      'C++ is a functional programming language',
    ],
    answer: 2,
  },
  {
    q: 'Which of the following is used for comments in C++?',
    options: [
      '/* comment */',
      '// comment */',
      '// comment',
      'both // comment or /* comment */',
    ],
    answer: 3,
  },
  {
    q: 'Which of the following user-defined header file extension used in c++?',
    options: ['hg', 'cpp', 'h', 'hf'],
    answer: 2,
  },
  {
    q: 'Which of the following type is provided by C++ but not C?',
    options: ['double', 'float', 'int', 'bool'],
    answer: 3,
  },
  {
    q: 'By default, all the files in C++ are opened in _________ mode.',
    options: ['Binary', 'VTC', 'Text', 'ISCII'],
    answer: 2,
  },
  {
    q: 'Which of the following correctly declares an array in C++?',
    options: ['array{10};', 'array array[10];', 'int array;', 'int array[10];'],
    answer: 3,
  },
  {
    q: 'What is the size of wchar_t in C++?',
    options: ['Based on the number of bits in the system', '2 or 4', '4', '2'],
    answer: 0,
  },
  {
    q: ' Which is more effective while calling the C++ functions?',
    options: [
      'call by object',
      'call by pointer',
      'call by value',
      'call by reference',
    ],
    answer: 3,
  },
  {
    q: 'Which of the following is used to terminate the function declaration in C++?',
    options: [';', ']', ')', ':'],
    answer: 0,
  },
  {
    q: 'Which keyword is used to define the macros in c++?',
    options: ['#macro', '#define', 'macro', 'define'],
    answer: 1,
  },
  {
    q: 'What is Inheritance in C++ ?',
    options: [
      'Deriving new classes from existing classes',
      'Overloading of classes',
      'Classes with same names',
      'Wrapping of data into a single class',
    ],
    answer: 0,
  },
]
