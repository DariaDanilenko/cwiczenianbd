var mapfunc2 = function() {  for (var idx = 0; idx < this.credit.length; idx++) { var key = this.credit[idx].currency; var value = this.credit[idx].balance;  emit(key, value); } };
var reducefunc2 = function(key, value) { var reducedVal = 0; for (var idx=0; idx < value.length; idx++) { reducedVal += value[idx]; } return reducedVal; };
printjson(db.people.mapReduce(mapfunc2, reducefunc2, {out: { merge: "map_reduce_2" }}));
printjson(db.map_reduce_2.find().toArray());
