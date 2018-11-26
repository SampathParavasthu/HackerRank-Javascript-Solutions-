function timeCheck(time){
  var timeArray = time.split(":");
  var hour = timeArray[0];
  var timeWithoutMentions = time.substring(0,8).split(':');
    if(time.includes("AM")){
        hour === "12" ? hour = '00' : hour;
        timeWithoutMentions[0] = hour;
      return timeWithoutMentions.join(':'); 
    }else{
        var hourInt = parseInt(hour) + 12;
        hour = hour === "12" ? hour : hourInt;
        timeWithoutMentions[0] = hour;
      return timeWithoutMentions.join(':'); 
    }
}

var result = timeCheck("07:05:45PM");
result;
