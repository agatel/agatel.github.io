var QuizData = {
    DEFAULT_QUESTION_ID: 'root',
    BIND_TO_RESULT: 'end',
    questions: [],
    results: []
};

QuizData.questions = [{
        id : QuizData.DEFAULT_QUESTION_ID,
        question : 'What is your age ?',
        options : [
            {value : '< 20', bind : 'question1'},
            {value : '20 - 40', bind : 'question2'},
            {value : '> 40', bind : 'question3'}
        ]
    },{
        id : 'question1',
        question : 'Do you have a pet?',
        options : [
            {value : 'yes', bind : 'question4'},
            {value : 'no', bind : 'question5'}
        ]
    },{
        id : 'question2',
        question : 'Are you at work ?',
        options : [
            {value : 'yes', bind : 'question6'},
            {value : 'no', bind : 'question7'},
            {value : 'I have no job', bind : 'question8'}
        ]
    },{
        id : 'question3',
        question : 'Are you married ?',
        options : [
            {value : 'yes', bind : 'question9'},
            {value : 'no', bind : 'question10'}
        ]
    },{
        id : 'question4',
        question : 'What is it?',
        options : [
            {value : 'cat', bind : QuizData.BIND_TO_RESULT},
            {value : 'dog', bind : QuizData.BIND_TO_RESULT}
        ]
    },{
        id : 'question5',
        question : 'Would you like to sign some?',
        options : [
            {value : 'yes', bind : QuizData.BIND_TO_RESULT},
            {value : 'no', bind : 'question11'}
        ]
    },{
        id : 'question6',
        question : 'Do you like your colleagues',
        options : [
            {value : 'yes', bind : 'question12'},
            {value : 'no', bind : QuizData.BIND_TO_RESULT}
        ]
    },{
        id : 'question7',
        question : 'Do you like an active rest',
        options : [
            {value : 'yes', bind : QuizData.BIND_TO_RESULT},
            {value : 'no', bind : 'question11'}
        ]
    },{
        id : 'question8',
        question : 'Do you like movies ?',
        options : [
            {value : 'yes', bind : QuizData.BIND_TO_RESULT},
            {value : 'no', bind : 'question7'}
        ]
    },{
        id : 'question9',
        question : 'Do you have kids',
        options : [
            {value : 'yes', bind : QuizData.BIND_TO_RESULT},
            {value : 'no', bind : QuizData.BIND_TO_RESULT}
        ]
    },{
        id : 'question10',
        question : 'Do you have close friends',
        options : [
            {value : 'yes', bind : QuizData.BIND_TO_RESULT},
            {value : 'no', bind : QuizData.BIND_TO_RESULT}
        ]
    },{
        id : 'question11',
        question : 'Do you have a game console?',
        options : [
            {value : 'yes', bind : QuizData.BIND_TO_RESULT},
            {value : "no, I don't like games", bind : QuizData.BIND_TO_RESULT},
            {value : "no, but I'd like to play", bind : QuizData.BIND_TO_RESULT}
        ]
    },{
        id : 'question12',
        question : 'Do you like beer?',
        options : [
            {value : 'yes', bind : QuizData.BIND_TO_RESULT},
            {value : "not much", bind : QuizData.BIND_TO_RESULT},
            {value : "no, absolutely", bind : QuizData.BIND_TO_RESULT}
        ]
    }
];

QuizData.results = [{
        history : [[1, 1, 1]],
        message : 'Pat the cat'
    },{
        history : [[1, 1, 2]],
        message : 'Pat the dog'
    },{
        history : [[1, 2, 1]],
        message : 'Sign a cat'
    },{
        history : [[1, 2, 2, 1], [2, 2, 2, 1], [2, 3, 2, 2, 1]],
        message : 'Play some action game'
    },{
        history : [[1, 2, 2, 2], [2, 2, 2, 2]],
        message : 'Ok, just have a rest'
    },{
        history : [[1, 2, 2, 3], [2, 3, 2, 2, 3]],
        message : 'Go to some video games center'
    },{
        history : [[2, 1, 1, 1]],
        message : 'Drink some bear with colleagues'
    },{
        history : [[2, 1, 1, 2]],
        message : 'Drink just some drinks that you like with colleagues'
    },{
        history : [[2, 1, 1, 3]],
        message : 'Invite them to play some games'
    },{
        history : [[2, 1, 2]],
        message : 'Go home and have a rest'
    },{
        history : [[2, 2, 1], [2, 3, 2, 1], [3, 2, 1]],
        message : 'Call your friends and go out'
    },{
        history : [[2, 2, 2, 3]],
        message : 'Buy either Sony Playstation or XBox'
    },{
        history : [[2, 3, 1]],
        message : 'Go to cinema'
    },{
        history : [[2, 3, 2, 2, 2]],
        message : 'Try to find an interesting job'
    },{
        history : [[3, 1, 1]],
        message : 'Have a picnic with family'
    },{
        history : [[3, 1, 2]],
        message : 'Have a romantic night with your wife'
    },{
        history : [[3, 2, 2]],
        message : 'Try to find friends on dating sites'
    }
];