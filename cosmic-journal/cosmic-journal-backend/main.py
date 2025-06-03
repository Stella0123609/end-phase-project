from fastapi import FastAPI
from app.api.auth import auth_router
from app.api.starmap import starmap_router
from app.api.journal import journal_router
from app.api.geo import geo_router
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def add_corp_header(request, call_next):
    response = await call_next(request)
    response.headers["Cross-Origin-Resource-Policy"] = "cross-origin"
    return response

app.include_router(auth_router, prefix="/api")
app.include_router(starmap_router, prefix="/api")
app.include_router(journal_router, prefix="/api")
app.include_router(geo_router, prefix="/api")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/favicon.ico")
async def favicon():
    return FileResponse("static/favicon.ico")

@app.get("/")
async def read_root():
    return {"message": "Welcome to Cosmic Journal API", "docs": "/docs"}