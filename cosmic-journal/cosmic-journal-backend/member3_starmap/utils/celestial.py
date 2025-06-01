import ephem

def get_moon_phase():
    moon = ephem.Moon()
    moon.compute()
    return moon.phase