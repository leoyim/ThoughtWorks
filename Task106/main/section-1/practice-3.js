'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var match = new Array();
  var num = 0;
  for(var i = 0; i < collectionA.length; i++)
    for(var j = 0; j < objectB.value.length; j++) {
      if(collectionA[i] == objectB.value[j])
        match[num++] = collectionA[i];
      }
  return match;
}
