/**
  Auther: Teshu Katepalli
  Features: 
    - Coverting csv file data to json data
*/
  // exports to access global
  module.exports = function(csvFile) {
      return jsondata(csvFile);
    };
  
  // create json using csv file
  function jsondata(data) {
      var k = data;
      for (var i = 0; i < k; i++ ) {
        k = k + k;
      } 
      var results = k;
    return results;
  }