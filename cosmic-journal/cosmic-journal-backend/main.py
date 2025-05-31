from fastapi import FastAPI
from member1_auth.api.auth_routes import auth_router
from member2_journal.api.journal_routes import journal_router
from member3_starmap.api.starmap_routes import starmap_router
from member4_ui_utils.api.dependencies import ui_utils_router

app = FastAPI(title="Cosmic Journal API")

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(journal_router, prefix="/journal", tags=["journal"])
app.include_router(starmap_router, prefix="/starmap", tags=["starmap"])
app.include_router(ui_utils_router, prefix="/utils", tags=["utils"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)