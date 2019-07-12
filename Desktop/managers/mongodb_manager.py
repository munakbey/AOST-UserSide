import pymongo

client = pymongo.MongoClient('192.168.9.45', 27017)
db = client['python']
collection = db['pyhton']
def mUpdate(collection):

    myquery = { "name": "nilufer" }
    newvalues = { "$set": { "name": "Canyon" } }

    collection.update_one(myquery, newvalues)

    #print "customers" after the update:
    for x in collection.find():
      print(x)

def mInsert(collection):

    #print(collection.count())

    emp_rec1 = {
        "name": "Mr.w3",
        "lastname": "delhi",
        "age": 24,
    }
    emp_rec2 = {
        "name": "Mr.Murdorck",
        "lastname": "shaurya",
        "age": 14
    }

    # Insert Data
    rec_id1 = collection.insert_one(emp_rec1)
    rec_id2 = collection.insert_one(emp_rec2)
    print("Data inserted with record ids", rec_id1, " ", rec_id2)

    # Printing the data inserted
    cursor = collection.find()
    for record in cursor:
        print(record)
def mDelete(client,db,collection):
    db = client["python"]
    collection = db["python"]

    myquery = {"name": "Mr.Shaurya"}

    collection.delete_one(myquery)
