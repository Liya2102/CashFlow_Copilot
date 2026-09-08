from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def root():

    return {
        "application": "CashFlow Copilot",
        "version": "1.0.0",
        "status": "running"
    }