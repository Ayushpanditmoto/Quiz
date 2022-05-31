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
      "Because it hasn't caught on.",
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
]
