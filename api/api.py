from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
from bson import ObjectId, json_util
import json


connectionURL = "mongodb+srv://abhiraj-chatterjee:paglaabu2001@sustain-market.3pjmj.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority"
app = Flask(__name__)
client = pymongo.MongoClient(connectionURL)

productDB = client.get_database("Products")
allProducts = productDB.allProducts

# @app.route("/")
# def hello():
#     return "Hello World"

@app.route("/api/vendor/add-product", methods=["POST"])
def addProduct():
    productDetails = request.json
    allProducts.insert_one(productDetails)
    return '', 200

@app.route("/api/vendor/remove-product/<id>", methods=["DELETE"])
def removeProduct(id):
    query = { "_id" : ObjectId(id) }
    allProducts.delete_one(query)
    return '', 200

@app.route("/api/vendor/update-product/<id>", methods=["PUT"])
def updateProduct(id):
    newProductDetails = request.json
    query = { "_id" : ObjectId(id) }
    updateQuery = { "$set" : newProductDetails }
    allProducts.update_one(query,updateQuery)
    return '', 200

@app.route("/api/vendor/products", methods=["GET"])
def getProducts():
    products = []
    for product in allProducts.find():
        products.append(product)
    return jsonify(json.loads(json_util.dumps(products))), 200

if __name__ == "__main__":
    app.run(debug=True)