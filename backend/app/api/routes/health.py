from fastapi import APIRouter
from sqlalchemy import text

from app.database.connection import engine

router = APIRouter()


@router.get("/health")
def health():

    try:

        with engine.connect() as connection:

            connection.execute(text("SELECT 1"))

        db_status = "healthy"

    except Exception:

        db_status = "unhealthy"

    return {
        "application": "CashFlow Copilot",
        "database": db_status,
        "service": "healthy"
    }