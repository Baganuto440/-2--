const changeProposal = (proposals) => {
    const result = [];
  
    for (let i = 0; i < proposals.length; i++) {
      const { word, divisibility } = proposals[i];
      let newWord = '';
  
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
        if (divisibility === 'чётный') {
          newWord += j % 2 === 1 ? char.toUpperCase() : char;
        } else if (divisibility === 'нечётный') {
          newWord += j % 2 === 0 ? char.toUpperCase() : char;
        }
      }
  
      result.push(newWord);
    }
  
    return result;
  };
  
  const proposals = [
    { word: 'чётный текст', divisibility: 'чётный' },
    { word: 'нечётный текст', divisibility: 'нечётный' },
    { word: 'этот текст тоже должен быть с каждым большим чётным символом', divisibility: 'чётный' },
    { word: 'а у этого текста должен быть каждый нечётный большой символ', divisibility: 'нечётный' },
  ];
  
  console.log(changeProposal(proposals));
  