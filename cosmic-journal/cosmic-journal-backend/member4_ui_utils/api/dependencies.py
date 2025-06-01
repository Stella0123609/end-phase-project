from fastapi import APIRouter
from member4_ui_utils.services.moodUtils import MoodUtils

ui_utils_router = APIRouter()

@ui_utils_router.get("/mood")
async def get_mood_suggestions():
    return MoodUtils().get_mood_suggestions()