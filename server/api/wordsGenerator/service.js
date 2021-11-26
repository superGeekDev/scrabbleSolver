const wordsJson = require('../../../words.json');
const scoresJson = require('../../../scores.json');
const axios = require('axios');

const DICTIONARY_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const countScoreForWord = (word, scores) => {
    const letters = word.split('')
    return letters.reduce((acc, letter) => {
        const {value} = scores.find(l => l['letter'] === letter.toUpperCase())
        return acc + value;
    }, 0)
};

const getWordDefinition = (word) => {
    const wordInfo = axios.get(`${DICTIONARY_API_URL}${word}`)
        .then(res => res.data[0]['meanings'][0]['definitions'][0]['definition'])
        .catch(err => {
            if (err.toJSON().status === 404) return 'Definition not found on our resources';
            console.log(err)
        })
    return wordInfo;
}

const fillTheDescriptions = async (topWords) => {
    const words = [...topWords];
    const topFiveWords = words.slice(0,5);
    for (const wordInfo of topFiveWords) {
        const description = await getWordDefinition(wordInfo.word);
        topFiveWords[topFiveWords.indexOf(wordInfo)]['description'] = description;
    }
    return [...topFiveWords, ...words.slice(5, words.length - 1)];
};

const findMatchingWords = (wordsArray, lettersArray) => {
    const resWords = [];
    wordsArray.map(word => {
        const wordCandidate = {word, matchCount: 0};
        lettersArray.forEach(letter => {
            if (word.includes(letter)) {
                wordCandidate['matchCount'] += 1;
            }
        })
        if (wordCandidate.matchCount === lettersArray.length) {
            const score = countScoreForWord(word, scoresJson);
            resWords.push({word: wordCandidate.word, score})
        }
    });
    return resWords.sort((a, b) => b.score - a.score)
};



exports.generateVariants = async (letters) => {
    const wordsArray = wordsJson;
    const lettersArray = letters.split('');
    const wordsMatching = findMatchingWords(wordsArray, lettersArray);
    const topWords = [...wordsMatching].slice(0, 11);
    const wordsWithDescription = await fillTheDescriptions(topWords);
    return wordsWithDescription;
}