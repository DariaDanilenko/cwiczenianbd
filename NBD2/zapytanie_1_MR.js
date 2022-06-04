var mapfunc1 = function(){ var key = this.sex; var value = { count: 1, weight: this.weight, height: this.height }; emit(key, value);};
var reducefunc1 = function(key, value) { reducedVal = {count:0, weight: 0, height:0}; for (var idx=0; idx < value.length; idx++) { reducedVal.count += value[idx].count; reducedVal.weight += value[idx].weight; reducedVal.height += value[idx].height; } return reducedVal; };
var finalizefunc1 = function(key, reducedVal) {reducedVal.avgweight = reducedVal.weight / reducedVal.count; reducedVal.avgheight = reducedVal.height / reducedVal.count; return reducedVal; };
printjson(db.people.mapReduce(mapfunc1, reducefunc1, {out: { merge: "map_reduce_1" }, finalize: finalizefunc1}));
printjson(db.map_reduce_1.find().toArray())
