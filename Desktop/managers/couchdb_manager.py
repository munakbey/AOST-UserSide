

def cDelete(couchserver):
    db = couchserver["python-tests"]
    doc = db['johndoe']
    db.delete(doc)


def cUpdate(couchserver):
    dbname = "mydb"
    if dbname in couchserver:
        db = couchserver[dbname]
    else:
        db = couchserver.create(dbname)

    doc = db.get('1')
    doc['id'] = '5'
    db.save(doc)

def cInsert(couchserver):

    dbname = "mydb"
    if dbname in couchserver:
        db = couchserver[dbname]
    else:
        db = couchserver.create(dbname)

    for dbname in couchserver:
        print(dbname)
    #deleting a database
    #del couchserver[dbname]

    #doc_id is the generated document ID,doc_rev is the revision identifier
    doc_id, doc_rev = db.save({'key': 'value'})
    #with a specific ID
    db["2"] = {'key': 'value'}
    #write multiple documents
    docs = [{'key': 'value1'}, {'key': 'value2'}]
    for (success, doc_id, revision_or_exception) in db.update(docs):
        print(success, '2', revision_or_exception)
    doc_id = "1"
    doc = db[doc_id]  # or db.get(doc_id)
    doc=dict()