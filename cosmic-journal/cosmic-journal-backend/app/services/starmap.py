import ephem
from datetime import datetime
from typing import List, Dict

def generate_star_map(latitude: float, longitude: float, date: str) -> List[Dict]:
    try:
        observer = ephem.Observer()
        observer.lat = str(latitude)
        observer.lon = str(longitude)
        observer.date = datetime.strptime(date, "%Y-%m-%d")
        constellations = [
            ("Orion", "Betelgeuse"),
            ("Ursa Major", "Dubhe"),
            ("Cassiopeia", "Schedar"),
            ("Scorpius", "Antares")
        ]
        visible_constellations = []
        for name, star_name in constellations:
            star = ephem.star(star_name)
            star.compute(observer)
            if star.alt > 0:  # Check if above horizon
                visible_constellations.append({
                    "name": name,
                    "key_star": star_name,
                    "altitude": float(star.alt) * 180 / 3.14159,
                    "azimuth": float(star.az) * 180 / 3.14159
                })
        return visible_constellations
    except Exception as e:
        raise Exception(f"Error generating star map: {str(e)}")