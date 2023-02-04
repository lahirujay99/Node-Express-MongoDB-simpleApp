const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://lahirujay99:abcd1234A@cluster0.ljlytwk.mongodb.net/products?retryWrites=true&w=majority';

const createproduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({ mesage: 'Could not store data' });
  }
  //client.close(); // close connection
  res.json({ newProduct });
};

const getproduct = async (req, res, next) => {
  const client = new MongoClient(url);
  let product;
  try {
    await client.connect();
    const db = client.db();
    product = await db.collection('products').find().toArray();
  } catch (error) {
    return res.json({ message: 'Could not retrive products' });
  }
  client.close();
  res.json({ products: product });
};

exports.createproduct = createproduct;
exports.getproduct = getproduct;
