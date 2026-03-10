from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.core.dependencies import get_current_user
from app.notes.schemas import NoteCreate, NoteResponse
from app.notes.service import create_note, get_notes, delete_note
from app.utils.embedding import create_embedding

router = APIRouter()


@router.post("/", response_model=NoteResponse)
def create_note_api(
    data: NoteCreate,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    embedding = create_embedding(data.content)

    note = create_note(
        db,
        user.id,
        data.title,
        data.content,
        embedding
    )

    return note


@router.get("/", response_model=list[NoteResponse])
def get_notes_api(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    return get_notes(db, user.id)


@router.delete("/{note_id}")
def delete_note_api(
    note_id: str,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    return delete_note(db, note_id, user.id)