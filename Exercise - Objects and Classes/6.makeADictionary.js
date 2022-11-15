function makeADictionary(input){
  let dict = {};
  for (let element of input){
      let obj = JSON.parse(element);
      dict = Object.assign(dict, obj);        
  } 
      
  let sortedKeys = Object.keys(dict);
  sortedKeys.sort((a, b) => a.localeCompare(b));   
   
  for (let term of sortedKeys) {
      let definition = dict[term];             
      console.log(`Term: ${term} => Definition: ${definition}`);
  }
}

makeADictionary([
'{"Coffee":"A hot drink madefrom the roasted and groundseeds (coffee beans) of atropical shrub."}','{"Bus":"A large motor vehiclecarrying passengers  road,typically one serving the publicon a fixed route and for a fare."}'
,'{"Boiler":"A fuel-burning apparatus or container forheating water."}',
'{"Tape":"A narrow strip ofmaterial, typically used to holdor fasten something."}',
'{"Microphone":"An instrumentfor converting sound waves into electrical energy variationswhich may then be amplified,transmitted, or recorded."}'
])