(function(){function randint(max){return Math.floor(Math.random()*max)}const QUOTES=['“','”'];const CHANGE_CHANCE=2;const MIN_WORDLEN=2;const targetElements=['p','h1','h2','h3','h4','h5','h6','button','ul','ol'];const IGNORE=['the','to'];let allElements=[];for(let t=0;t<targetElements.length;t+=1){let zoink=document.getElementsByTagName(targetElements[t]);for(let x=0;x<zoink.length;x+=1){allElements.push(zoink[x])}}for(let i=0;i<allElements.length;i+=1){if(randint(CHANGE_CHANCE)==0){continue}let cElement=allElements[i];if(!cElement.innerText){continue}let text=cElement.innerText;let words=text.split(' ');function addScareQuote(wordList){if(!wordList){return wordList}let n=0;for(const w in wordList){n+=wordList[w].startsWith(QUOTES[0])?1:0}if(!(n<wordList.length)){return wordList}let choice=randint(wordList.length);let changeWord=wordList[choice];if(changeWord.length<=MIN_WORDLEN&&changeWord.startsWith(QUOTES[0])&&IGNORE.contains(changeWord)){try{return addScareQuote(wordList)}catch(InternalError){return wordList}}wordList.splice(choice,1,QUOTES[0]+changeWord+QUOTES[1]);return wordList}let wordsNew=addScareQuote(words.copyWithin());cElement.innerText=wordsNew.join(' ')}})();
