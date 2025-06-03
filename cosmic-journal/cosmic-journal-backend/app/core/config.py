import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:Cosmic-journal@localhost:5432/cosmic_journal")
    GEOAPIFY_API_KEY = os.getenv("GEOAPIFY_API_KEY")
    SECRET_KEY = os.getenv("SECRET_KEY")
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 30

settings = Settings()