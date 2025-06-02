from fastapi import APIRouter, Depends, HTTPException
from app.services.geoapify import get_coordinates
from app.services.starmap import generate_star_map
from app.core.security import verify_token
from datetime import date
from typing import Optional

starmap_router = APIRouter()

@starmap_router.get("/starmap/generate")
async def generate_starmap(
    latitude: Optional[float] = None,
    longitude: Optional[float] = None,
    city: Optional[str] = None,
    date: Optional[str] = None,
    token: str = Depends(verify_token)
):
    # Set default date if not provided
    if not date:
        date = date.today().isoformat()

    # If city is provided, resolve latitude and longitude
    if city:
        if latitude is not None or longitude is not None:
            raise HTTPException(
                status_code=400,
                detail="Provide either 'city' or 'latitude' and 'longitude', not both."
            )
        try:
            coordinates = await get_coordinates(city)
            latitude = coordinates["latitude"]
            longitude = coordinates["longitude"]
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Failed to get coordinates for city '{city}': {str(e)}")
    else:
        # Ensure latitude and longitude are provided if city is not
        if latitude is None or longitude is None:
            raise HTTPException(
                status_code=400,
                detail="Either 'city' or both 'latitude' and 'longitude' must be provided."
            )

    try:
        star_map = generate_star_map(latitude, longitude, date)
        return {
            "city": city if city else "Custom Location",
            "latitude": latitude,
            "longitude": longitude,
            "date": date,
            "star_map": star_map
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating star map: {str(e)}")