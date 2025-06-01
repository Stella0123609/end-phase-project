def get_mood_color(mood: str):
    return {"happy": "yellow", "calm": "blue", "excited": "red"}.get(mood, "gray")