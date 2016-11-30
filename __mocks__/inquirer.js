let answers;
module.exports = {
    prompt(/*questions*/) {
        if (answers && answers.length) {
            return Promise.resolve(answers.shift());
        }
        return Promise.reject('No answers');
    },
    __setAnswers(mockedAnswers) {
        answers = mockedAnswers;
    }
};