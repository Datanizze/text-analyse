javascript:
var highlightedText = window.getSelection().toString();
highlightedText = highlightedText.replace("?",".");
highlightedText = highlightedText.replace("!","."); 
highlightedText = highlightedText.replace(/\.\.*/g,".");
var sentances = highlightedText.split(".");
var sentanceCount = (highlightedText.match(/\.\s/g) != null) ? highlightedText.match(/\.\s/g).length : 0;
sentanceCount += (highlightedText.slice(-1) == ".") ? 1:0;
var wordCount = highlightedText.split(" ").length;
var avgWordsPerSentance = (wordCount/sentanceCount).toFixed(2);
var commasCount = highlightedText.split(",").length;
var avgCommasPerSentance = (commasCount/sentanceCount).toFixed(2);
console.log("\n\n\n\n\n\n");
var analysis = "ANALYZED TEXT!\n";
analysis += "Sentances: "+sentanceCount+"\n";
analysis += "Words: "+wordCount+"\n";
analysis += "Avg words/sentance: "+avgWordsPerSentance+"\n";
analysis += "commasCount: "+commasCount+"\n";
analysis += "Avg commas/sentance: "+avgCommasPerSentance+"\n";
console.log(analysis); alert(analysis);
