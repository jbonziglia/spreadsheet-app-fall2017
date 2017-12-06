let len = text => text.length;
let concatenate = (text1, text2) => text1+text2;
let left = (text,numChars) => text.substring(0,numChars);
let right = (text, numChars) => text.substring(text.length-numChars);
let find = (findText, withinText, startNum) => withinText.indexOf(findText,startNum);
let search = (findText, withinText, startNum) => (withinText.toLowerCase()).indexOf(findText.toLowerCase(), startNum);
let mid = (text,startNum,numChars) => text.substring(startNum,startNum+numChars);
let replace = (oldText,startNum,numChars,newText) => oldText.substring(0,startNum)+newText.substring(0,numChars)+oldText.substring(startNum+numChars);
let getBeforeText = (string, text) => string.substring(0,string.indexOf(text));
let getAfterText = (string, text) => string.substring(string.indexOf(text)+text.length);
let getBetweenText = (string, afterText, beforeText) => getAfterText(getBeforeText(string,beforeText),afterText);
let substitute = (text,oldText,newText) => text.substring(0,text.indexOf(oldText))+newText.substring(0)+text.substring(text.indexOf(oldText)+newText.length);

let getFunctionName = string => getBeforeText(string,"(")
let removeFirstArg = currentArgs => currentArgs.substring(currentArgs.indexOf(",")+1, currentArgs.length);

let removeArgs = (args,num) => {
  if (num === 0)  return args;
  else  return removeFirstArg(removeArgs(args,num-1));
};
let getFirstArg = argList => argList.substring(0,argList.indexOf(","));

let getArgNum = (num,argList) => getFirstArg(removeArgs(argList,num-1));
let getFinalArg = argList => removeArgs(argList, argList.length-1);
let removeEnds = string => string.substring(1, string.length-1);