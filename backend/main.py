from fastapi import FastAPI, HTTPException, Depends, status
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models 
from fastapi.middleware.cors import CORSMiddleware
import config
import openai
from fastapi.responses import StreamingResponse
import asyncio

openai.api_key = config.API_key

app = FastAPI()

origins = [
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods=['*'],
    allow_headers=['*']
)

class PlanBase(BaseModel):
    location: str
    duration: str
    interests: str
    age: str

class PlanModel(PlanBase):
    id: int

    class Config:
        orm_mode = True

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)



@app.post("/plan/", response_model=PlanModel)
async def create_plan(plan: PlanBase, db: db_dependency):
    db_plan = models.Plan(**plan.dict())
    db.add(db_plan)
    db.commit()
    db.refresh(db_plan)
    
    # Get total number of plans
    total_plans = db.query(models.Plan).count()
    
    # If there are more than 4 plans, delete the excess
    if total_plans > 4:
        excess = total_plans - 4
        for _ in range(excess):
            oldest_plan = db.query(models.Plan).order_by(models.Plan.id).first()
            db.delete(oldest_plan)
            db.commit()

    return db_plan

@app.get("/plan/", response_model=List[PlanModel])
async def read_plan(db: db_dependency, skip: int = 0, limit: int = 100):
    plan = db.query(models.Plan).offset(skip).limit(limit).all()
    return plan

@app.post("/generate_itinerary/")
async def generate_itinerary(db: db_dependency):
    # Fetch the most recent Plan from the database
    latest_plan = db.query(models.Plan).order_by(models.Plan.id.desc()).first()

    # If no plan found, return an error or default response
    if not latest_plan:
        return {"error": "No plan found"}

    location = latest_plan.location
    duration = latest_plan.duration
    interests = latest_plan.interests
    age = latest_plan.age

    journey = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a professional tour guide that has experience around the world at all places from food recommendations, to sight seeing. You like to provide various popular tourist spots depending on age range, interests, and amount of time in the city. You hit the most important spots when generating an itinerary and plan."},
            {"role": "user", "content": f"Provide a full itinerary for {duration} from 9am to 10 pm of what to do when visiting {location}. For each day provide specific food places to eat at, tourist spots, and fun activities to do that are unique to the area. Take into account that I am here to {interests} and I am {age}. Make sure to use the duration to make an itinerary for each day and not just one day alongside providing the hour time stamps."}
        ]
    )

    content = journey.choices[0].message['content']
    return {"itinerary": content}
