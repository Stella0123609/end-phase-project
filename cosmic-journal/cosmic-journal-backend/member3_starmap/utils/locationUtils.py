def validate_coordinates(latitude: float, longitude: float):
    if not (-90 <= latitude <= 90) or not (-180 <= longitude <= 180):
        raise ValueError("Invalid coordinates")
    return True