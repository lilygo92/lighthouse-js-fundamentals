const chooseStations = function (stations) {
  let station = [];
  for (let i = 0 ; i < stations.length ; i++){
    if (stations[i][1] >= 20 && (stations[i][2] === "school" || stations[i][2] === "community centre")){
      station.push(stations[i][0]);
    }  
  }
  return station;
}

