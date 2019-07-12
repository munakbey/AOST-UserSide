from elasticsearch import Elasticsearch

es = Elasticsearch('http://elastic:changeme@192.168.9.45:9200')


def eUpdate():
    es = Elasticsearch('http://elastic:changeme@192.168.9.45:9200')

    es.update(index='megacorp',doc_type='employee',id=2,
                    body={"doc": {"about": 'changed', "age": 36,"interests" : ['changed'],'first_name':'changed','last_name':'changedL' }})
    res=es.get(index='megacorp',doc_type='employee',id=2)
    print("print :")
    print (res)
    print("actual document")
    print (res['_source'])


def eDelete():
    res = es.search(index='megacorp')
    for doc in res['hits']['hits']:
        print(doc['_id'], doc['_source'])

def eInsert(es):
    e1={
        "first_name":"nitin",
        "last_name":"panwar",
        "age": 27,
        "about": "Love to play cricket",
        "interests": ['sports','music'],
    }
    print (e1)
    res = es.index(index='megacorp',doc_type='employee',id=1,body=e1)
    e2={
        "first_name" :  "Jane",
        "last_name" :   "Smith",
        "age" :         32,
        "about" :       "I like to collect rock albums",
        "interests":  [ "music" ]
    }
    e3={
        "first_name" :  "Douglas",
        "last_name" :   "Fir",
        "age" :         35,
        "about":        "I like to build cabinets",
        "interests":  [ "forestry" ]
    }
    res=es.index(index='megacorp',doc_type='employee',id=2,body=e2)

    res=es.index(index='megacorp',doc_type='employee',id=3,body=e3)
    res=es.get(index='megacorp',doc_type='employee',id=3)
    print("print :")
    print (res)
    print("actual document")
    print (res['_source'])

