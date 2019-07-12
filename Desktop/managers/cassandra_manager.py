import uuid


def update(session):
    rows = session.execute('SELECT id, weight, lastname FROM deneme')
    for deneme_row in rows:
        print(deneme_row.id, deneme_row.weight, deneme_row.lastname)
        session.execute("update deneme set lastname='VOS2' where id=%s", (deneme_row.id,))
        print('Updated')
        print(deneme_row.id, deneme_row.weight, deneme_row.lastname)


def delete(session):

    rows = session.execute('SELECT id, weight, lastname FROM deneme')
    for deneme_row in rows:
        print(deneme_row.id, deneme_row.weight, deneme_row.lastname)
        session.execute("DELETE lastname FROM deneme WHERE id=%s;", (deneme_row.id,))
        print('Deleted')
        print(deneme_row.id, deneme_row.weight, deneme_row.lastname)


def insert(session):
    print('Insert')

    rows = session.execute('SELECT id, birthday, lastname FROM deneme')
    for deneme_row in rows:
        print (deneme_row.id, deneme_row.birthday, deneme_row.lastname)

    session.execute(
        """
        INSERT INTO deneme (weight,lastname, id)
        VALUES (%s, %s, %s)
        """,
        ("42", "Gold", uuid.uuid1())
    )
    rows = session.execute('SELECT id, weight, lastname FROM deneme')
    for deneme_row in rows:
        print (deneme_row.id, deneme_row.weight, deneme_row.lastname)


