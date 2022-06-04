var mapfunc4 = function() {  var key = this.nationality; var value = {count:1, bmi:this.bmi, sum:0, max:this.bmi, min:this.bmi};  emit(key, value); };
var finalizefunc4 = function(key, reducedVal) {reducedVal.avg = reducedVal.sum / reducedVal.count; return reducedVal; };
var reducefunc4 = function(key, value) { reducedVal = {count:0, bmi:0, sum:0, max:value[0].max, min:value[0].min}; for (var idx=0; idx < value.length; idx++) { reducedVal.count += value[idx].count; if(value[idx].sum === 0) { if(value[idx].bmi < reducedVal.min ) reducedVal.min = value[idx].bmi; if( value[idx].bmi > reducedVal.max) reducedVal.max = value[idx].bmi;  reducedVal.sum += value[idx].bmi; } else {reducedVal.sum += value[idx].sum;}   } return reducedVal; };
printjson(db.people.mapReduce(mapfunc4, reducefunc4, {out: { merge: "map_reduce_4" }, finalize: finalizefunc4}));
printjson(db.map_reduce_4.find().toArray());
