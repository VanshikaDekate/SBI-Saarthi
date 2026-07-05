from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import demo

app = FastAPI(
    title="SBI Saarthi API",
    description="Static JSON API for the SBI Saarthi hackathon prototype.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(demo.router)


@app.get("/")
def root():
    return {
        "name": "SBI Saarthi",
        "message": "AI Decision Layer demo backend is running.",
        "mode": "prototype",
    }
