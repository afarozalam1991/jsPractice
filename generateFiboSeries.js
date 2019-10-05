function generateFiboSeries(){
  var fiboArray=[];
  fiboArray[0]=0;
  fiboArray[1]=1;
  for(let i=2; i<10; i++){
  let sum=fiboArray[i-2]+ fiboArray[i-1];
  fiboArray.push(sum);
  }
  return fiboArray;
} generateFiboSeries();
