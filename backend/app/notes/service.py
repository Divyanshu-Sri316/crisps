from sqlalchemy.orm import Session
from app.database.models import Note


def create_note(db: Session, user_id, title, content, embedding):

    note = Note(
        user_id=user_id,
        title=title,
        content=content,
        embedding=embedding
    )

    db.add(note)
    db.commit()
    db.refresh(note)

    return note


def get_notes(db: Session, user_id):

    return db.query(Note).filter(Note.user_id == user_id).all()


def delete_note(db: Session, note_id, user_id):

    note = db.query(Note).filter(
        Note.id == note_id,
        Note.user_id == user_id
    ).first()

    if note:
        db.delete(note)
        db.commit()

    return {"message": "Note deleted"}