if (process.env.NODE_ENV!="production") {
    require("dotenv").config({ path: "../.env" });
}

const dbUrl = process.env.ATLASDB_URL;
const mongoose = require('mongoose');
const Listing = require('../models/listing.js');
const initdata = require('./data.js');

main().then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
});

async function  main() {
    await mongoose.connect(dbUrl);
};

async function init() {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({...obj,owner : "67e40ed21540bdf2aeef9cd1"}));
    await Listing.insertMany(initdata.data);
    console.log('Data was initialied.')
};

init();