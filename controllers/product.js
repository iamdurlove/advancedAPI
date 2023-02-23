const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const { company, name, featured, sort, select } = req.query;
        const queryObject = {};
        let apiData = Product.find(queryObject);


        if (company) {
            queryObject.company = company;
            // console.log(queryObject);
        }

        if (featured) {
            queryObject.featured = featured;
        }

        if (name) {
            queryObject.name = { $regex: name, $options: 'i' };
        }

        if (sort) {
            let sortFix = sort.split(",").join(" ");
            apiData = apiData.sort(sortFix);
            queryObject.sort = sortFix;
        }

        if (select) {
            let selectFix = select.split(",").join(" ");
            apiData = apiData.select(selectFix);
        }

        //pagination
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;
        let skip = (page - 1) * limit;

        apiData = apiData.skip(skip).limit(limit);

        // console.log(queryObject);

        const myData = await apiData;

        res.status(200).json({ myData });
    } catch (err) {
        res.status(400).send(err);
    }
};

const getAllProductsTesting = async (req, res) => {
    try {
        const myData = await Product.find(req.query).select('name company');
        res.status(200).json({ myData });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = { getAllProducts, getAllProductsTesting };
