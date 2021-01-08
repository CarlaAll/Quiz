const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',  () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtonsElement.appendChild(button)
})
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
} else {
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
clearStatusClass(element)
if (correct) {
  element.classList.add('correct')
} else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
element.classList.remove('correct')
element.classList.remove('wrong')
  }

const questions = [
  {
    question: 'Political economy of communication is ',
    answers: [
      { text: 'an agency-oriented conflict approach', correct: false},
      { text: 'an agency-oriented consensus approach', correct: false},
      { text: ' a structure-oriented conflict approach', correct: true},
      { text: 'a structure-oriented consensus approach', correct: false}
    ]
  }, 
  {
    question: 'The perspective on and likely effects of media on social integration and identity according to Gerbner’s cultivation analysis can best be summarized as',
    answers: [
      { text: 'an optimistic perspective on centrifugal effects of media', correct: false},
      { text: 'an optimistic perspective on centripetal effects of media', correct: false},
      { text: ' a pessimistic perspective on centrifugal effects of media', correct: false},
      { text: 'a pessimistic perspective on centripetal effects of media', correct: true}
    ]
  }, 
  {
    question: 'Regarding the double dimension of media, Adorno and Horkheimer’s analysis of the culture industry is an example of which field in the typology of Rosengren?',
    answers: [
      { text: 'Adaptation', correct: false},
      { text: 'Goal-attainment', correct: false},
      { text: 'Integration', correct: true},
      { text: 'Latency', correct: false}
    ]
  }, 
  {
    question: 'Which statement regarding the cultural turn in Marxist thought about the relationship between media and society is incorrect?',
    answers: [
      { text: 'The cultural turn has led to increased attention for individuals’ agency in consuming media texts', correct: false},
      { text: 'The cultural turn has led to increased attention for qualitative research of media consumption', correct: false},
      { text: 'The cultural turn has led to increased attention for popular everyday culture and practices', correct: false},
      { text: ' The cultural turn has led to increased attention for processes within the substructure', correct: true}
    ]
  }, 
  {
    question: 'Which   statement   regarding   action-oriented   approaches   (e.g.   symbolic   interactionism,   phenomenology, etnomethodology) is wrong?',
    answers: [
      { text: 'Action-oriented approaches have been a source of inspiration for communication studies because they clarified how the messages of media companies and other communicating institutions determine the world view of the media audience.', correct: true},
      { text: 'Testing  communication  scientific  theories  that  have  been  inspired  by  action-oriented  approaches,  usually requires qualitative research of the reception of media messages by the audience', correct: false},
      { text: 'Action-oriented approaches have been inspiring for communication studies because they see a central role of symbols and communication in the interpretation and perception of our environment.', correct: false},
      { text: 'Action-oriented  approaches  have  been  inspiring  for  several  important  communication  scientific  concepts, including stereotyping and framing.', correct: false}
    ]
  }, 
  {
    question: 'Which statement regarding basic principles of media economics is wrong?',
    answers: [
      { text: 'Commodification processes are linked to an increased emphasis on the exchange value of the media product.', correct: false},
      { text: 'Economies  of  scale  occur  when  the  average  costs  of  producing  media  products  equal  the  marginal costs.', correct: true},
      { text: 'Economies  of  scope  occur  when  a  diverse  output  of  multiple  products  is  produced  and  distributed  by  a company, enabling the firm to supply these products more cheaply than would be the case were each product being supplied separately by individual firms', correct: false},
      { text: 'The characteristic of non-rivalrous consumption is more strongly present in the case of television programs broadcasted by a public service broadcaster than in the case of magazines published by Newscorp.', correct: false}
    ]
  }, 
  {
    question: 'Media history studies show that the media content (software) often comes a while after the technological invention (hardware),  and  for  new  media  to  become  truly  widespread  and  accepted  by  mass  audiences  often  requires  a  few decades more. Which medium has been an exception to this tendency?',
    answers: [
      { text: 'Daily newspapers', correct: false},
      { text: 'Film', correct: true},
      { text: 'Radio', correct: false},
      { text: 'Television', correct: false}
    ]
  },
  {
    question: 'By and large, two very different views concerning the power of media can be discerned: Dominant Media versus Pluralist Media. Which statement is the most accurate?',
    answers: [
      { text: 'The  Uses  &  Gratifications  approach  is  predominantly  linked  to  a  pluralistic  view  on  the  power  of media. ', correct: true},
      { text: 'Cultivation theory is predominantly linked to a pluralistic view on the power of media.', correct: false},
      { text: 'Structural theoretical approaches of media are always situated within the dominant media perspective.', correct: false},
      { text: ' Marxist inspired theoretical approaches of media are always situated within the dominant media perspective.', correct: false}
    ]
  },
  {
    question: 'Which statement concerning mass society theory is wrong?',
    answers: [
      { text: 'Mass  society  theorists  predict  a  dictatorship  to  restore  order  in  light  of  the  social  chaos  in  society,  partly contributed to by the media.', correct: false},
      { text: 'Mass society theorists see media messages as a series of magic bullets that influence and transform how individuals think in the long term. ', correct: true},
      { text: 'Mass society theory and the analysis of Adorno and Horkheimer regarding the culture industry share a similar view on culture.', correct: false},
      { text: 'Mass  society  theorists  lament  the  demise  of  the  by  F.  Tönnies  described  Gemeinschaft  form  of  societal organization.', correct: false}
    ]
  },
  {
    question: 'In 2016, the then US President Donald Trump said “Brussels? It’s like living in a hellhole” which was picked up by all Belgian newspapers and other news outlets. Which news values according to Galtung en Ruge are applicable in this case of news selection?',
    answers: [
      { text: 'Amplitude and personification', correct: false},
      { text: 'Consonance and amplitude ', correct: false},
      { text: 'Cultural proximity and consonance ', correct: true},
      { text: 'Personification and cultural proximity', correct: false}
    ]
  },
  {
    question: 'Which statement on the concept of genre is incorrect?',
    answers: [
      { text: 'Genres are dependent on the use of a specific ‘code’ or system of meaning on which more or less a consensus exists between users of the code within a certain culture', correct: false},
      { text: 'Genres and changing genre conventions reflect changing societal norms and values', correct: false},
      { text: 'Genres are based on a clear set of rules regarding the goal and form of the content that belongs to a certain genre', correct: true},
      { text: 'Genres  help  media  to  efficiently  and  consistently  link  production  to  certain  patterns  of  expectation  of audiences', correct: false}
    ]
  },
  {
    question: 'The Italian company ‘Mediamagic’ produces movies. A few months ago, it has made several acquisitions. First, it has taken over a small company which casts actresses and actors. Next, Mediamagic has bought a series of cinemas in Bologna, Turin and Milan. Finally, the company acquired a publisher that is specialized in magazines, including a monthly film magazine. Which type of media concentration is NOT applicable in this example?',
    answers: [
      { text: 'Lateral concentration', correct: false},
      { text: 'Horizontal concentration', correct: true},
      { text: 'Vertical concentration', correct: false},
      { text: 'Diagonal concentration', correct: false}
    ]
  },
  {
    question: 'Which statement referring to the terminology of M. McLuhan is wrong?',
    answers: [
      { text: 'A  book  is  a  cool  medium  because  it  usually  transfers  information  precisely  and  requires  little interactivity.', correct: true},
      { text: 'The content of a medium, hot or cool, does not matter that much according to McLuhan, since a medium’s content does not convey real meaning. ', correct: false},
      { text: 'In an increasingly neotribal electronic society, the use of cool media increases. ', correct: false},
      { text: 'Radio is a hot medium because it mainly extends one sense, i.e. hearing.', correct: false}
    ]
  },
  {
    question: 'Which statement concerning the origins, development, and societal context of newspapers is incorrect?',
    answers: [
      { text: 'The first newspapers focused on local political news since it was deemed most relevant for their reading audience as well as easier to obtain the necessary information for daily coverage of events.', correct: true},
      { text: 'The  breakthrough  of  the  bourgeoisie  as  a  new  social  class  contributed  to  the  rapid  development  of newspapers in the 19th century, since newspapers answered its call for providing economic information and a forum for debate to critically discuss state policies.', correct: false},
      { text: 'Since  the  middle  of  the  19th  century,  newspaper  sales  increased  dramatically  in  most  Western  countries because  of  a  decrease  in  price,  increase  in  advertising  revenue,  and  swift  supply  of  news  because  of  then newly established global news agencies. ', correct: false},
      { text: 'The first weekly newspapers were already published around the beginning of the 17th century, but a truly daily newspaper would only come about in the 18th century.', correct: false}
    ]
  },
  {
    question: 'n poststructuralism, the production of meaning is considered dynamic and unpredictable. Which concept entails that words and signs never signify immediately and unambiguously – their meaning will depend on words and signs that follow, resulting in a continuous delay of meaning?',
    answers: [
      { text: 'Polysemy', correct: false},
      { text: 'Différance', correct: true},
      { text: 'Discourse', correct: false},
      { text: 'Simulacra', correct: false}
    ]
  },
  {
    question: 'A television news broadcast on the BBC opens with an item consisting of factual and informative reporting on the World Economic Forum in Davos, Switzerland. The audience sees which world leaders and international business CEO’s, the British Prime Boris Johnson is meeting. After this item, a follow-up interview is held in the BBC News studio with a political scientist of the London School of Economics. She explains how important these meetings are because they will lead to agreements that can have an impact in both the short and long term on issues as various as the UK’s trade relations with international partners, the impact on the UK’s nuclear and climate policy, the number of refugees that will be able to enter Great Britain, and the role of the UK in Europe after Brexit. Which function, as identified by functionalist media theorists, is exercised via the studio interview?',
    answers: [
      { text: 'Conformity function', correct: false},
      { text: 'Surveillance function', correct: false},
      { text: 'Status conferral function', correct: false},
      { text: 'Correlation function', correct: false}
    ]
  }
]