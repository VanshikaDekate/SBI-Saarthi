from fastapi import APIRouter

from app.services.static_data import DATA

router = APIRouter(tags=["demo"])


@router.get("/dashboard")
def dashboard():
    return DATA["dashboard"]


@router.get("/customer")
def customer():
    return DATA["customer"]


@router.get("/financial-health")
def financial_health():
    return DATA["financial_health"]


@router.get("/recommendation")
def recommendation():
    return DATA["recommendation"]


@router.get("/timeline")
def timeline():
    return DATA["timeline"]


@router.get("/events")
def events():
    return DATA["events"]


@router.get("/executive-dashboard")
def executive_dashboard():
    return DATA["executive_dashboard"]


@router.post("/approve")
def approve():
    return {
        "status": "approved",
        "message": "Customer consent captured. Dummy execution queued.",
        "execution_reference": "DEMO-AUTOSAVE-2026-0001",
    }
