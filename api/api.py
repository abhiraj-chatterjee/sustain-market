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

peopleDB = client.get_database("People")
vendors = peopleDB.vendors
clients = peopleDB.clients

# @app.route("/")
# def hello():
#     return "Hello World"

# ======== Clients API ========

@app.route("/api/people/clients/new-user", methods=["POST"])
def registerUser():
    userDetails = request.json
    clients.insert_one(userDetails)
    return '', 200

@app.route("/api/people/clients/remove-user/<id>", methods=["DELETE"])
def removeUser(id):
    query = { "_id" : ObjectId(id) }
    clients.delete_one(query)
    return '', 200

@app.route("/api/people/clients/update-user/<id>", methods=["PUT"])
def updateUser(id):
    newUserDetails = request.json
    query = { "_id" : ObjectId(id) }
    updateQuery = { "$set" : newUserDetails }
    clients.update_one(query,updateQuery)
    return '', 200

@app.route("/api/people/clients", methods=["GET"])
def getUsers():
    allUsers = []
    for user in clients.find():
        allUsers.append(user)
    return jsonify(json.loads(json_util.dumps(allUsers))), 200

# ======== Vendors API ========

@app.route("/api/people/vendors/new-vendor", methods=["POST"])
def registerVendor():
    vendorDetails = request.json
    vendors.insert_one(vendorDetails)
    return '', 200

@app.route("/api/people/vendors/remove-vendor/<id>", methods=["DELETE"])
def removeVendor(id):
    query = { "_id" : ObjectId(id) }
    vendors.delete_one(query)
    return '', 200

@app.route("/api/people/vendors/update-vendor/<id>", methods=["PUT"])
def updateVendor(id):
    newVendorDetails = request.json
    query = { "_id" : ObjectId(id) }
    updateQuery = { "$set" : newVendorDetails }
    vendors.update_one(query,updateQuery)
    return '', 200

@app.route("/api/people/vendors", methods=["GET"])
def getVendors():
    allVendors = []
    for vendor in vendors.find():
        allVendors.append(vendor)
    return jsonify(json.loads(json_util.dumps(allVendors))), 200

# ======== Products API ========

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