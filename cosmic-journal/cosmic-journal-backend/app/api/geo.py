from fastapi import APIRouter, Query

geo_router = APIRouter()

@geo_router.get("/geo/city")
async def get_city(name: str = Query(...)):
    return {"city": name, "info": "Geo data here"}