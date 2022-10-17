db.produtos.find({
  vendidos: { $ne: 50 },
  tags: { $not: { $exists: true } },
},
{ _id: 0, nome: 1, vendidos: 1 });