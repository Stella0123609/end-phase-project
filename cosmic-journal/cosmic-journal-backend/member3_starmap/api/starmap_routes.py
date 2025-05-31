from fastapi import APIRouter
from member3_starmap.services.starmap_service import StarMapService
import ephem

starmap_router = APIRouter()

@starmap_router.get("/generate")
async def generate_starmap(latitude: float, longitude: float):
    return StarMapService().generate_starmap(latitude, longitude)