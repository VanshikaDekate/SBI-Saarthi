from pydantic import BaseModel


class ApprovalResult(BaseModel):
    status: str
    message: str
    execution_reference: str
