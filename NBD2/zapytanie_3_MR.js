var mapfunc3 = function() { var key = this.job; var value = 1; emit(key, value); };
var reducefunc3 = function(key, value) { return key; };
printjson(db.people.mapReduce(mapfunc3, reducefunc3, {out: { merge: "map_reduce_3" }}));
printjson(db.map_reduce_3.find({}, {_id: 1}).toArray());
