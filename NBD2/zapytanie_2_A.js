printjson(db.people.aggregate([ {$unwind: "$credit"}, {$group: {_id: "$credit.currency", sum_balance:{$sum:"$credit.balance"} }} ]).toArray())
