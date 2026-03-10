from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.core.dependencies import get_current_user
from app.utils.embedding import create_embedding
from app.search.service import semantic_search
from app.search.schemas import SearchRequest

router = APIRouter()


@router.post("/")
def search_notes(
    data: SearchRequest,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    embedding = create_embedding(data.query)

    return semantic_search(db, user.id, embedding)