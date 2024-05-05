import pandas as pd
import pathlib as path

def get_contaminant_avg(measures: pd.DataFrame, station: str) -> pd.DataFrame:
    """
        Obtiene el promedio por día de las mediciones
        hechas para un cierto contaminante en un DataFrame
        con dos columnas: Una para la fecha y otra para el promedio.

        :param measures Las medidas
        :type pd.DataFrame

        :param station Nombre de la estación considerada
        :type str
    """
    filtered = measures[["fecha", station]]

    averages = filtered.groupby(["fecha"]).mean()
    return averages

def get_contaminant_avg_for_hours(measures: pd.DataFrame, station: str) -> pd.DataFrame:
    """
        Obtiene el promedio por hora de las mediciones
        hechas para un cierto contaminante en un DataFrame
        con dos columnas: Una para la hora del día y otra para el promedio.

        :param measures Las medidas
        :type pd.DataFrame

        :param station Nombre de la estación considerada
        :type str
    """
    filtered = measures[["hora", station]]

    averages = filtered.groupby(["hora"]).mean()
    print(averages)
    return averages

DATA_PATH = path.Path('public/data')
OUTPUT_PATH = path.Path('public/data/processed/')

STATIONS = ["centenario", "cordoba", "la_boca", "palermo"]
CONTAMINANTS = ["NO2", "CO", "PM10"]

HOUR_EVOLUTION_PATH = OUTPUT_PATH.joinpath("hour-evolution")
HOUR_EVOLUTION_PATH.mkdir(parents=True, exist_ok=True)
TIME_EVOLUTION_PATH = OUTPUT_PATH.joinpath("time-evolution")
TIME_EVOLUTION_PATH.mkdir(parents=True, exist_ok=True)

START_YEAR = 2019

for contaminant in CONTAMINANTS:
    for station in STATIONS:
        try: 
            raw_data = pd.read_csv(DATA_PATH.joinpath(f'{contaminant}.csv'), delimiter=";")
            print(f'{contaminant} - {station}')
            raw_data["fecha"] = pd.to_datetime(raw_data["fecha"], format="%d/%m/%Y", exact=False)
            raw_data = raw_data[raw_data[station] != "s/d"]
            raw_data = raw_data[raw_data[station] != "S/d"]
            raw_data[station] = raw_data[station].map(lambda measure: str(measure).replace(",", "."))
            raw_data[station] = pd.to_numeric(raw_data[station])
            raw_data["fecha"] = raw_data["fecha"][raw_data["fecha"].dt.year >= START_YEAR]

            average = get_contaminant_avg(raw_data, station=station)
            average_for_hour = get_contaminant_avg_for_hours(raw_data, station=station)

            file_path_plain = f"{contaminant.lower()}_{station}.csv"

            # Escritura de los archivos para los promedios por día
            file_path = TIME_EVOLUTION_PATH.joinpath(file_path_plain)
            with open(file_path, "w") as file:
                file.write(average.to_csv(index=True, columns=[station], header=["average"], index_label="date"))

            # Escritura de los archivos para los promedios por hora del día
            file_path = HOUR_EVOLUTION_PATH.joinpath(file_path_plain)
            with open(file_path, "w") as file:
                file.write(average_for_hour.to_csv(index=True, columns=[station], header=["average"], index_label="hour"))


        except FileNotFoundError as err:
            print("No se pudo encontrar el archivo: ", err.filename)