import ephem
from datetime import datetime

class StarMapService:
    def generate_starmap(self, latitude: float, longitude: float):
        observer = ephem.Observer()
        observer.lat = str(latitude)
        observer.lon = str(longitude)
        observer.date = datetime.utcnow()
        sun = ephem.Sun(observer)
        return {"sun_altitude": sun.alt, "sun_azimuth": sun.az}