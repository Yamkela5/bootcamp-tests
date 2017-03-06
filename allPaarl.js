function allPaarl(regNumbr){
  var list = regNumbr.split(', ');
  var number =[];

  for(var i=0;i<list.length;i++){

      if(list[i].startsWith('CJ')){
        number.push(list[i]);
 }
}
return number;
};
