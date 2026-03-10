from sqlalchemy.orm import Session
from sqlalchemy import text


def semantic_search(db: Session, user_id, embedding):

    query = text("""
        SELECT id, title, content
        FROM notes
        WHERE user_id = :user_id
        ORDER BY embedding <-> CAST(:embedding AS vector)
        LIMIT 5
    """)

    result = db.execute(
        query,
        {
            "user_id": str(user_id),
            "embedding": embedding
        }
    )

    rows = result.fetchall()

    return [
        {
            "id": row.id,
            "title": row.title,
            "content": row.content
        }
        for row in rows
    ]