// Load the data into URL
d3.json("samples.json").then(function(data){
    console.log(data)
});
// Filter to the Patient information for Weekly washing frequency
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq)
});
// Filter to the Patient info - in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    console.log(wfreq)
});
// Filter to the Patient info - in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq)
});

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value])=> {console.log(key + ':' + value);});
});