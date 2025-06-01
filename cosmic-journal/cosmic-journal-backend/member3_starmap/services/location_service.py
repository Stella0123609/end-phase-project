import requests

class LocationService:
    def get_location(self, city: str):
        response = requests.get(f"https://geocoding-api.open-meteo.com/v1/search?name={city}")
        data = response.json()
        if data['results']:
            return data['results'][0]['latitude'], data['results'][0]['longitude']
        return None, None