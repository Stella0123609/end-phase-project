import requests
from fastapi import HTTPException
from app.core.config import settings

GEOAPIFY_BASE_URL = "https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=f41c9085a4c04e119edaf32574f57cd6"
async def get_coordinates(city: str) -> dict:
    if not settings.GEOAPIFY_API_KEY:
        raise HTTPException(status_code=500, detail="Geoapify API key not configured")
    params = {"text": city, "apiKey": settings.GEOAPIFY_API_KEY, "limit": 1, "type": "city"}
    try:
        response = requests.get(GEOAPIFY_BASE_URL, params=params)
        response.raise_for_status()
        data = response.json()
        if not data.get("features"):
            raise HTTPException(status_code=404, detail=f"City '{city}' not found")
        coordinates = data["features"][0]["geometry"]["coordinates"]
        return {"latitude": coordinates[1], "longitude": coordinates[0]}
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Geoapify API error: {str(e)}")