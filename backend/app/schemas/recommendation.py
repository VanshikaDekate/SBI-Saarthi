from pydantic import BaseModel


class Recommendation(BaseModel):
    title: str
    confidence: int
    priority: str
    reason: str
    action: str
    requires_customer_consent: bool
