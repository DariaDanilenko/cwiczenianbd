var reducefunc5 = function(key, value) { reducedVal = {count:0, sum:0}; for (var idx=0; idx < value.length; idx++) { reducedVal.sum += value[idx].sum; reducedVal.count += value[idx].count; } return reducedVal; };
var mapfunc5 = function() { if (this.nationality == "Poland" && this.sex == "Female") { for (var idx=0; idx < this.credit.length; idx++) { var key = this.credit[idx].currency; var value = {count:1, sum:this.credit[idx].balance};  emit(key, value); }}};
var finalizefunc5 = function(key, reducedVal) {reducedVal.avg = reducedVal.sum / reducedVal.count; return reducedVal; };
printjson(db.people.mapReduce(mapfunc5, reducefunc5, {out: { merge: "map_reduce_5" }, finalize: finalizefunc5}));
printjson(db.map_reduce_5.find().toArray());
