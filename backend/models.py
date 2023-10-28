from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float

class Plan(Base):
    __tablename__ = 'travel-plan'

    id = Column(Integer, primary_key=True, index=True)
    location = Column(String)
    duration = Column(String)
    interests = Column(String)
    age = Column(String)
    plan = Column(String)