from py2neo import Node,Graph
from py2neo import Relationship

def deleteNode(graph,id):
    node = graph.evaluate("MATCH (n) where id(n) = {} RETURN n".format(id))
    graph.delete(node)

def nInsert(graph):

    tx = graph.begin()

    Node1 =Node("Employee",Name="Emma",Surname="Lee",Gender="M")
    tx.create(Node1)
    tx.commit()

    print(len(graph.nodes))
    print(len(graph.relationships))


def nRelation(graph):
    query = "create(e:Employee{Name:'Emma'})-[:WORK_IN]->(c:Company{Name:'SCI'}); "

    data = graph.run(query)


def nUpdate(graph):

    # optionally clear the graph
    # graph.delete_all()
    query = "MATCH (n { Name: 'Emma' }) SET n.Surname = 'Taylor' RETURN n.Name, n.Surname; "

    data = graph.run(query)

    for d in data:
        print(d)
