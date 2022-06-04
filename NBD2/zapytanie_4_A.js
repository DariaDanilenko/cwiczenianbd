db.people.find().forEach( function(x) { var bmi = x.weight / Math.pow(x.height/100, 2); x.bmi = bmi;  db.people.save(x); });
printjson(db.people.aggregate([ {$group: {_id: "$nationality", avg_bmi:{$avg:"$bmi"}, max_bmi:{$max:"$bmi"}, min_bmi:{$min:"$bmi"} }} ]).toArray());
