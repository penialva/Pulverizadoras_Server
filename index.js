var express =require("express");
var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(corsOptions));


var aplicaciones =[
  {
    "id": "1",
    "operario": "023",
    "pulverizadora": "003",
    "receta_espendio": "0368",
    "receta_aplicacion": "0285",
    "datos_aplicacion": [
      {"fecha": "2019-10-31", "hora": "07:12:49", "temperatura": 21.68 , "humedad": 83.46 , "velocidad": 12 , "direccion": 325 , "latitud": -31.849775 , "longitud": -60.5349083333333 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:12:54", "temperatura": 21.73 , "humedad": 83.41 , "velocidad": 12 , "direccion": 335 , "latitud": -31.8497222222222 , "longitud": -60.534875 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:12:59", "temperatura": 21.77 , "humedad": 83.37 , "velocidad": 14 , "direccion": 325 , "latitud": -31.8498138888889 , "longitud": -60.5347305555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:04", "temperatura": 21.82 , "humedad": 83.29 , "velocidad": 11 , "direccion": 340 , "latitud": -31.8498666666667 , "longitud": -60.53455 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:09", "temperatura": 21.83 , "humedad": 83.27 , "velocidad": 13 , "direccion": 335 , "latitud": -31.8499 , "longitud": -60.5344 , "caudal": 180 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:14", "temperatura": 21.88 , "humedad": 83.17 , "velocidad": 18 , "direccion": 330 , "latitud": -31.8499277777778 , "longitud": -60.534275 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:19", "temperatura": 21.87 , "humedad": 83.05 , "velocidad": 13 , "direccion": 325 , "latitud": -31.8499611111111 , "longitud": -60.5341555555555 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:24", "temperatura": 21.87 , "humedad": 82.88 , "velocidad": 11 , "direccion": 305 , "latitud": -31.8499944444444 , "longitud": -60.53405 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:29", "temperatura": 21.87 , "humedad": 82.77 , "velocidad": 10 , "direccion": 330 , "latitud": -31.8500361111111 , "longitud": -60.5339416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:34", "temperatura": 21.88 , "humedad": 82.72 , "velocidad": 12 , "direccion": -315 , "latitud": -31.8500694444444 , "longitud": -60.5338416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:39", "temperatura": 21.86 , "humedad": 82.60 , "velocidad": 15 , "direccion": 330 , "latitud": -31.8500944444444 , "longitud": -60.5337388888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:44", "temperatura": 21.90 , "humedad": 82.58 , "velocidad": 13 , "direccion": 325 , "latitud": -31.8501305555556 , "longitud": -60.5336444444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:49", "temperatura": 21.87 , "humedad": 82.49 , "velocidad": 12 , "direccion": 320 , "latitud": -31.8501527777778 , "longitud": -60.5335333333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:54", "temperatura": 21.91 , "humedad": 82.44 , "velocidad": 14 , "direccion": 330 , "latitud": -31.8501916666667 , "longitud": -60.5334027777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:13:59", "temperatura": 21.92 , "humedad": 82.42 , "velocidad": 13 , "direccion": 320 , "latitud": -31.850225 , "longitud": -60.5333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:14:04", "temperatura": 21.90 , "humedad": 82.33 , "velocidad": 10 , "direccion": 295 , "latitud": -31.8502833333333 , "longitud": -60.5332027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:14:09", "temperatura": 21.88 , "humedad": 82.27 , "velocidad": 4 , "direccion": 270 , "latitud": -31.8503527777778 , "longitud": -60.5331361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:14:14", "temperatura": 21.90 , "humedad": 82.27 , "velocidad": 2 , "direccion": 235 , "latitud": -31.8504527777778 , "longitud": -60.5331166666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:14:19", "temperatura": 21.89 , "humedad": 82.21 , "velocidad": 3 , "direccion": 295 , "latitud": -31.8505388888889 , "longitud": -60.5331305555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:14:24", "temperatura": 21.93 , "humedad": 82.20 , "velocidad": 4 , "direccion": 290 , "latitud": -31.8506611111111 , "longitud": -60.5330861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:14:29", "temperatura": 21.93 , "humedad": 82.23 , "velocidad": 1 , "direccion": 295 , "latitud": -31.8507611111111 , "longitud": -60.5330611111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:14:34", "temperatura": 22.00 , "humedad": 82.21 , "velocidad": 2 , "direccion": -315 , "latitud": -31.8508527777778 , "longitud": -60.5330416666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:15:36", "temperatura": 22.28 , "humedad": 81.57 , "velocidad": 2 , "direccion": 355 , "latitud": -31.8516111111111 , "longitud": -60.5327194444445 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:15:41", "temperatura": 22.28 , "humedad": 81.48 , "velocidad": 3 , "direccion": 15 , "latitud": -31.8517 , "longitud": -60.5327638888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:15:46", "temperatura": 22.31 , "humedad": 81.49 , "velocidad": 2 , "direccion": 245 , "latitud": -31.8517916666667 , "longitud": -60.5327916666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:15:51", "temperatura": 22.29 , "humedad": 81.46 , "velocidad": 3 , "direccion": 235 , "latitud": -31.8518694444444 , "longitud": -60.532825 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:15:56", "temperatura": 22.31 , "humedad": 81.38 , "velocidad": 2 , "direccion": 250 , "latitud": -31.8519444444444 , "longitud": -60.53285 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:01", "temperatura": 22.36 , "humedad": 81.33 , "velocidad": 1 , "direccion": 325 , "latitud": -31.852025 , "longitud": -60.5328888888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:06", "temperatura": 22.39 , "humedad": 81.31 , "velocidad": 4 , "direccion": 345 , "latitud": -31.8521277777778 , "longitud": -60.5329277777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:11", "temperatura": 22.47 , "humedad": 81.33 , "velocidad": 6 , "direccion": 335 , "latitud": -31.8522083333333 , "longitud": -60.5329583333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:16", "temperatura": 22.52 , "humedad": 81.31 , "velocidad": 5 , "direccion": -310 , "latitud": -31.8522944444444 , "longitud": -60.5329944444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:21", "temperatura": 22.56 , "humedad": 81.29 , "velocidad": 4 , "direccion": 320 , "latitud": -31.8523805555556 , "longitud": -60.5330194444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:26", "temperatura": 22.62 , "humedad": 81.24 , "velocidad": 3 , "direccion": 340 , "latitud": -31.8524638888889 , "longitud": -60.5330583333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:31", "temperatura": 22.68 , "humedad": 81.17 , "velocidad": 5 , "direccion": 280 , "latitud": -31.8525666666667 , "longitud": -60.5330972222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:36", "temperatura": 22.66 , "humedad": 81.03 , "velocidad": 6 , "direccion": 305 , "latitud": -31.8526527777778 , "longitud": -60.5331472222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:41", "temperatura": 22.65 , "humedad": 80.88 , "velocidad": 8 , "direccion": -315 , "latitud": -31.8527361111111 , "longitud": -60.5331833333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:46", "temperatura": 22.68 , "humedad": 80.78 , "velocidad": 5 , "direccion": 285 , "latitud": -31.8528194444444 , "longitud": -60.5332194444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:51", "temperatura": 22.68 , "humedad": 80.63 , "velocidad": 6 , "direccion": 285 , "latitud": -31.8529055555556 , "longitud": -60.53325 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:16:56", "temperatura": 22.70 , "humedad": 80.52 , "velocidad": 8 , "direccion": 220 , "latitud": -31.8530083333333 , "longitud": -60.5333027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:17:20", "temperatura": 22.64 , "humedad": 80.28 , "velocidad": 12 , "direccion": 350 , "latitud": -31.8529888888889 , "longitud": -60.5333527777778 , "caudal": 0 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:17:25", "temperatura": 22.65 , "humedad": 80.31 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8529722222222 , "longitud": -60.5332333333333 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:17:30", "temperatura": 22.65 , "humedad": 80.23 , "velocidad": 16 , "direccion": 355 , "latitud": -31.85295 , "longitud": -60.5331305555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:17:35", "temperatura": 22.61 , "humedad": 80.16 , "velocidad": 15 , "direccion": 350 , "latitud": -31.852925 , "longitud": -60.5330277777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:17:40", "temperatura": 22.59 , "humedad": 80.11 , "velocidad": 16 , "direccion": 350 , "latitud": -31.8529055555556 , "longitud": -60.5329583333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:17:45", "temperatura": 22.59 , "humedad": 80.05 , "velocidad": 11 , "direccion": 10 , "latitud": -31.8528805555556 , "longitud": -60.5329361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:17:50", "temperatura": 22.59 , "humedad": 80.05 , "velocidad": 13 , "direccion": 355 , "latitud": -31.8528611111111 , "longitud": -60.5327444444445 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:17:55", "temperatura": 22.63 , "humedad": 80.00 , "velocidad": 15 , "direccion": 355 , "latitud": -31.8528333333333 , "longitud": -60.5326527777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:00", "temperatura": 22.62 , "humedad": 79.97 , "velocidad": 10 , "direccion": 15 , "latitud": -31.8528027777778 , "longitud": -60.5325472222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:05", "temperatura": 22.68 , "humedad": 80.01 , "velocidad": 10 , "direccion": 350 , "latitud": -31.8527638888889 , "longitud": -60.5324361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:10", "temperatura": 22.68 , "humedad": 80.04 , "velocidad": 12 , "direccion": 10 , "latitud": -31.852725 , "longitud": -60.5323694444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:15", "temperatura": 22.70 , "humedad": 80.10 , "velocidad": 14 , "direccion": 350 , "latitud": -31.8527027777778 , "longitud": -60.5322944444445 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:20", "temperatura": 22.71 , "humedad": 80.04 , "velocidad": 11 , "direccion": 355 , "latitud": -31.8526777777778 , "longitud": -60.5321944444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:25", "temperatura": 22.73 , "humedad": 80.02 , "velocidad": 15 , "direccion": 5 , "latitud": -31.8526472222222 , "longitud": -60.5321 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:30", "temperatura": 22.68 , "humedad": 79.98 , "velocidad": 15 , "direccion": 355 , "latitud": -31.8526111111111 , "longitud": -60.5319805555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:35", "temperatura": 22.68 , "humedad": 79.98 , "velocidad": 17 , "direccion": 340 , "latitud": -31.8525861111111 , "longitud": -60.5318833333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:40", "temperatura": 22.64 , "humedad": 79.89 , "velocidad": 13 , "direccion": 350 , "latitud": -31.8525527777778 , "longitud": -60.5317666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:45", "temperatura": 22.66 , "humedad": 79.92 , "velocidad": 10 , "direccion": 5 , "latitud": -31.8525194444444 , "longitud": -60.5316166666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:50", "temperatura": 22.70 , "humedad": 79.96 , "velocidad": 10 , "direccion": 0 , "latitud": -31.8524833333333 , "longitud": -60.5315027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:18:55", "temperatura": 22.68 , "humedad": 80.01 , "velocidad": 14 , "direccion": 355 , "latitud": -31.8524527777778 , "longitud": -60.5313916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:00", "temperatura": 22.70 , "humedad": 79.96 , "velocidad": 15 , "direccion": 5 , "latitud": -31.8524277777778 , "longitud": -60.5312888888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:05", "temperatura": 22.65 , "humedad": 79.95 , "velocidad": 17 , "direccion": 355 , "latitud": -31.8523888888889 , "longitud": -60.5311361111111 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:10", "temperatura": 22.61 , "humedad": 79.88 , "velocidad": 16 , "direccion": 350 , "latitud": -31.8523611111111 , "longitud": -60.5310111111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:15", "temperatura": 22.61 , "humedad": 79.91 , "velocidad": 12 , "direccion": 10 , "latitud": -31.8523444444444 , "longitud": -60.5309111111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:20", "temperatura": 22.62 , "humedad": 79.88 , "velocidad": 13 , "direccion": 5 , "latitud": -31.8523277777778 , "longitud": -60.5308166666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:25", "temperatura": 22.58 , "humedad": 79.82 , "velocidad": 15 , "direccion": 355 , "latitud": -31.8523055555556 , "longitud": -60.5307305555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:30", "temperatura": 22.57 , "humedad": 79.81 , "velocidad": 15 , "direccion": 350 , "latitud": -31.8522777777778 , "longitud": -60.5306138888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:35", "temperatura": 22.59 , "humedad": 79.76 , "velocidad": 15 , "direccion": 350 , "latitud": -31.8522583333333 , "longitud": -60.5305166666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:40", "temperatura": 22.56 , "humedad": 79.76 , "velocidad": 23 , "direccion": 350 , "latitud": -31.8522305555556 , "longitud": -60.5304305555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:45", "temperatura": 22.52 , "humedad": 79.75 , "velocidad": 16 , "direccion": 355 , "latitud": -31.8521972222222 , "longitud": -60.5303305555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:50", "temperatura": 22.48 , "humedad": 79.71 , "velocidad": 16 , "direccion": 355 , "latitud": -31.852175 , "longitud": -60.5302277777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:19:55", "temperatura": 22.50 , "humedad": 79.77 , "velocidad": 16 , "direccion": 350 , "latitud": -31.8521416666667 , "longitud": -60.5301138888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:00", "temperatura": 22.50 , "humedad": 79.77 , "velocidad": 13 , "direccion": 355 , "latitud": -31.8521083333333 , "longitud": -60.5300194444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:05", "temperatura": 22.53 , "humedad": 79.81 , "velocidad": 9 , "direccion": 25 , "latitud": -31.8520833333333 , "longitud": -60.5299166666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:10", "temperatura": 22.53 , "humedad": 79.86 , "velocidad": 15 , "direccion": 0 , "latitud": -31.8520527777778 , "longitud": -60.5298083333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:15", "temperatura": 22.54 , "humedad": 79.86 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8520222222222 , "longitud": -60.5297083333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:20", "temperatura": 22.52 , "humedad": 79.86 , "velocidad": 14 , "direccion": 360 , "latitud": -31.8519861111111 , "longitud": -60.5296083333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:25", "temperatura": 22.52 , "humedad": 79.86 , "velocidad": 19 , "direccion": 345 , "latitud": -31.85195 , "longitud": -60.5294944444445 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:30", "temperatura": 22.52 , "humedad": 79.80 , "velocidad": 15 , "direccion": 335 , "latitud": -31.8519222222222 , "longitud": -60.5293805555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:35", "temperatura": 22.50 , "humedad": 79.86 , "velocidad": 15 , "direccion": 355 , "latitud": -31.8518861111111 , "longitud": -60.5292611111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:40", "temperatura": 22.50 , "humedad": 79.89 , "velocidad": 16 , "direccion": 0 , "latitud": -31.8518583333333 , "longitud": -60.5291611111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:45", "temperatura": 22.48 , "humedad": 79.88 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8518277777778 , "longitud": -60.5290444444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:50", "temperatura": 22.52 , "humedad": 79.92 , "velocidad": 10 , "direccion": 360 , "latitud": -31.8518027777778 , "longitud": -60.5289416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:20:55", "temperatura": 22.50 , "humedad": 79.92 , "velocidad": 13 , "direccion": 5 , "latitud": -31.8517805555556 , "longitud": -60.5288527777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:21:00", "temperatura": 22.54 , "humedad": 79.92 , "velocidad": 14 , "direccion": 350 , "latitud": -31.8517527777778 , "longitud": -60.5287472222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:21:05", "temperatura": 22.52 , "humedad": 79.92 , "velocidad": 14 , "direccion": 350 , "latitud": -31.851725 , "longitud": -60.5286416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:21:10", "temperatura": 22.50 , "humedad": 79.92 , "velocidad": 13 , "direccion": 5 , "latitud": -31.8516861111111 , "longitud": -60.5285 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:21:15", "temperatura": 22.52 , "humedad": 79.95 , "velocidad": 13 , "direccion": 355 , "latitud": -31.85165 , "longitud": -60.5283527777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:21:20", "temperatura": 22.54 , "humedad": 79.95 , "velocidad": 21 , "direccion": 345 , "latitud": -31.8516083333333 , "longitud": -60.5282416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:21:25", "temperatura": 22.55 , "humedad": 79.92 , "velocidad": 13 , "direccion": 355 , "latitud": -31.8515777777778 , "longitud": -60.528125 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:21:30", "temperatura": 22.54 , "humedad": 79.95 , "velocidad": 11 , "direccion": 5 , "latitud": -31.8515555555556 , "longitud": -60.5280166666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:21:55", "temperatura": 22.59 , "humedad": 80.05 , "velocidad": 3 , "direccion": 75 , "latitud": -31.851475 , "longitud": -60.5281 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:00", "temperatura": 22.64 , "humedad": 80.06 , "velocidad": 2 , "direccion": 200 , "latitud": -31.8515027777778 , "longitud": -60.5282027777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:05", "temperatura": 22.64 , "humedad": 80.00 , "velocidad": 4 , "direccion": 355 , "latitud": -31.8515277777778 , "longitud": -60.5283055555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:10", "temperatura": 22.66 , "humedad": 80.00 , "velocidad": 2 , "direccion": 30 , "latitud": -31.851575 , "longitud": -60.5284472222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:15", "temperatura": 22.71 , "humedad": 79.93 , "velocidad": 6 , "direccion": 95 , "latitud": -31.8516027777778 , "longitud": -60.5285555555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:20", "temperatura": 22.80 , "humedad": 79.92 , "velocidad": 1 , "direccion": 345 , "latitud": -31.851625 , "longitud": -60.5286555555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:25", "temperatura": 22.84 , "humedad": 79.90 , "velocidad": 2 , "direccion": 205 , "latitud": -31.8516583333333 , "longitud": -60.5287444444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:30", "temperatura": 22.88 , "humedad": 79.77 , "velocidad": 3 , "direccion": 75 , "latitud": -31.8516805555556 , "longitud": -60.5288527777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:35", "temperatura": 22.92 , "humedad": 79.66 , "velocidad": 6 , "direccion": 155 , "latitud": -31.8517111111111 , "longitud": -60.5289583333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:40", "temperatura": 22.96 , "humedad": 79.36 , "velocidad": 2 , "direccion": 200 , "latitud": -31.851775 , "longitud": -60.5291833333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:45", "temperatura": 22.97 , "humedad": 79.27 , "velocidad": 1 , "direccion": 140 , "latitud": -31.8517944444444 , "longitud": -60.5292972222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:50", "temperatura": 23.05 , "humedad": 79.20 , "velocidad": 1 , "direccion": 190 , "latitud": -31.8518333333333 , "longitud": -60.5294 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:22:55", "temperatura": 23.13 , "humedad": 79.16 , "velocidad": 6 , "direccion": 70 , "latitud": -31.8518694444444 , "longitud": -60.5295444444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:00", "temperatura": 23.21 , "humedad": 79.04 , "velocidad": 2 , "direccion": 115 , "latitud": -31.8519111111111 , "longitud": -60.5296694444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:05", "temperatura": 23.25 , "humedad": 78.93 , "velocidad": 3 , "direccion": -310 , "latitud": -31.8519361111111 , "longitud": -60.5297694444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:10", "temperatura": 23.34 , "humedad": 78.81 , "velocidad": 1 , "direccion": 275 , "latitud": -31.8519694444444 , "longitud": -60.5298861111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:15", "temperatura": 23.42 , "humedad": 78.74 , "velocidad": 2 , "direccion": 155 , "latitud": -31.852 , "longitud": -60.5299861111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:20", "temperatura": 23.46 , "humedad": 78.57 , "velocidad": 6 , "direccion": 125 , "latitud": -31.8520416666667 , "longitud": -60.5301027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:25", "temperatura": 23.49 , "humedad": 78.46 , "velocidad": 4 , "direccion": 125 , "latitud": -31.852075 , "longitud": -60.5302055555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:30", "temperatura": 23.54 , "humedad": 78.30 , "velocidad": 3 , "direccion": 210 , "latitud": -31.8521027777778 , "longitud": -60.5303194444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:35", "temperatura": 23.63 , "humedad": 78.15 , "velocidad": 4 , "direccion": 175 , "latitud": -31.8521277777778 , "longitud": -60.5304194444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:40", "temperatura": 23.62 , "humedad": 77.97 , "velocidad": 4 , "direccion": 115 , "latitud": -31.8521583333333 , "longitud": -60.530525 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:45", "temperatura": 23.68 , "humedad": 77.81 , "velocidad": 6 , "direccion": 115 , "latitud": -31.8521916666667 , "longitud": -60.5306444444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:50", "temperatura": 23.64 , "humedad": 77.60 , "velocidad": 7 , "direccion": 115 , "latitud": -31.852225 , "longitud": -60.5307555555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:23:55", "temperatura": 23.65 , "humedad": 77.43 , "velocidad": 6 , "direccion": 120 , "latitud": -31.8522555555556 , "longitud": -60.5308555555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:00", "temperatura": 23.68 , "humedad": 77.29 , "velocidad": 3 , "direccion": 210 , "latitud": -31.8522777777778 , "longitud": -60.5309666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:05", "temperatura": 23.75 , "humedad": 77.19 , "velocidad": 1 , "direccion": 225 , "latitud": -31.8522916666667 , "longitud": -60.5310777777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:10", "temperatura": 23.83 , "humedad": 77.15 , "velocidad": 2 , "direccion": 200 , "latitud": -31.8523166666667 , "longitud": -60.5311694444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:15", "temperatura": 23.88 , "humedad": 77.05 , "velocidad": 1 , "direccion": 80 , "latitud": -31.8523472222222 , "longitud": -60.5312972222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:20", "temperatura": 23.93 , "humedad": 76.94 , "velocidad": 2 , "direccion": 55 , "latitud": -31.8523722222222 , "longitud": -60.5314111111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:25", "temperatura": 23.97 , "humedad": 76.77 , "velocidad": 2 , "direccion": 145 , "latitud": -31.8524 , "longitud": -60.531525 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:30", "temperatura": 24.00 , "humedad": 76.61 , "velocidad": 3 , "direccion": 160 , "latitud": -31.8524194444444 , "longitud": -60.5316416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:35", "temperatura": 24.05 , "humedad": 76.47 , "velocidad": 7 , "direccion": 100 , "latitud": -31.8524694444444 , "longitud": -60.531775 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:40", "temperatura": 24.06 , "humedad": 76.27 , "velocidad": 4 , "direccion": 130 , "latitud": -31.8524972222222 , "longitud": -60.5318888888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:45", "temperatura": 24.03 , "humedad": 76.12 , "velocidad": 6 , "direccion": 130 , "latitud": -31.8525194444444 , "longitud": -60.5320166666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:50", "temperatura": 24.00 , "humedad": 75.91 , "velocidad": 4 , "direccion": 125 , "latitud": -31.8525583333333 , "longitud": -60.5321194444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:24:55", "temperatura": 24.04 , "humedad": 75.80 , "velocidad": 2 , "direccion": 185 , "latitud": -31.8525861111111 , "longitud": -60.5321944444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:00", "temperatura": 24.09 , "humedad": 75.70 , "velocidad": 4 , "direccion": 130 , "latitud": -31.8526138888889 , "longitud": -60.5323027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:05", "temperatura": 24.08 , "humedad": 75.58 , "velocidad": 4 , "direccion": 115 , "latitud": -31.8526444444444 , "longitud": -60.5324166666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:10", "temperatura": 24.07 , "humedad": 75.46 , "velocidad": 1 , "direccion": 110 , "latitud": -31.8526833333333 , "longitud": -60.5325333333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:15", "temperatura": 24.13 , "humedad": 75.36 , "velocidad": 4 , "direccion": 190 , "latitud": -31.8527194444444 , "longitud": -60.532625 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:20", "temperatura": 24.16 , "humedad": 75.31 , "velocidad": 4 , "direccion": 155 , "latitud": -31.8527444444444 , "longitud": -60.5327361111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:25", "temperatura": 24.21 , "humedad": 75.23 , "velocidad": 6 , "direccion": 135 , "latitud": -31.8527861111111 , "longitud": -60.5328805555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:30", "temperatura": 24.24 , "humedad": 75.17 , "velocidad": 5 , "direccion": 110 , "latitud": -31.8528166666667 , "longitud": -60.5329805555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:35", "temperatura": 24.25 , "humedad": 75.12 , "velocidad": 0 , "direccion": 225 , "latitud": -31.8528361111111 , "longitud": -60.5330916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:40", "temperatura": 24.30 , "humedad": 75.07 , "velocidad": 2 , "direccion": 150 , "latitud": -31.8528833333333 , "longitud": -60.5332 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:45", "temperatura": 24.36 , "humedad": 75.05 , "velocidad": 20 , "direccion": 25 , "latitud": -31.8528666666667 , "longitud": -60.5333027777778 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:50", "temperatura": 24.25 , "humedad": 74.91 , "velocidad": 16 , "direccion": 0 , "latitud": -31.8527694444444 , "longitud": -60.5331916666667 , "caudal": 300 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:25:55", "temperatura": 24.15 , "humedad": 74.83 , "velocidad": 16 , "direccion": 10 , "latitud": -31.8527055555556 , "longitud": -60.5330861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:00", "temperatura": 24.02 , "humedad": 74.75 , "velocidad": 11 , "direccion": 360 , "latitud": -31.8526444444444 , "longitud": -60.5329777777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:05", "temperatura": 23.92 , "humedad": 74.73 , "velocidad": 17 , "direccion": 345 , "latitud": -31.8526027777778 , "longitud": -60.5328611111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:10", "temperatura": 23.90 , "humedad": 74.81 , "velocidad": 14 , "direccion": 345 , "latitud": -31.8525833333333 , "longitud": -60.5327694444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:15", "temperatura": 23.90 , "humedad": 74.93 , "velocidad": 12 , "direccion": 5 , "latitud": -31.8525333333333 , "longitud": -60.5326416666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:20", "temperatura": 23.90 , "humedad": 75.05 , "velocidad": 16 , "direccion": 340 , "latitud": -31.8525 , "longitud": -60.5325305555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:25", "temperatura": 23.82 , "humedad": 75.09 , "velocidad": 17 , "direccion": 345 , "latitud": -31.8524666666667 , "longitud": -60.532425 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:30", "temperatura": 23.78 , "humedad": 75.23 , "velocidad": 18 , "direccion": 345 , "latitud": -31.8524277777778 , "longitud": -60.5323194444445 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:35", "temperatura": 23.70 , "humedad": 75.27 , "velocidad": 17 , "direccion": 0 , "latitud": -31.8524 , "longitud": -60.5322111111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:40", "temperatura": 23.70 , "humedad": 75.36 , "velocidad": 20 , "direccion": 355 , "latitud": -31.8523527777778 , "longitud": -60.5320805555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:45", "temperatura": 23.62 , "humedad": 75.43 , "velocidad": 18 , "direccion": 340 , "latitud": -31.8523277777778 , "longitud": -60.531975 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:50", "temperatura": 23.57 , "humedad": 75.51 , "velocidad": 14 , "direccion": 355 , "latitud": -31.8522944444444 , "longitud": -60.5318722222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:26:55", "temperatura": 23.56 , "humedad": 75.62 , "velocidad": 14 , "direccion": 360 , "latitud": -31.8522694444444 , "longitud": -60.5317861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:00", "temperatura": 23.52 , "humedad": 75.73 , "velocidad": 18 , "direccion": 345 , "latitud": -31.8522472222222 , "longitud": -60.5317 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:05", "temperatura": 23.54 , "humedad": 75.82 , "velocidad": 11 , "direccion": 0 , "latitud": -31.8522194444444 , "longitud": -60.5315944444445 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:10", "temperatura": 23.52 , "humedad": 75.90 , "velocidad": 19 , "direccion": 345 , "latitud": -31.8522 , "longitud": -60.5314916666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:15", "temperatura": 23.46 , "humedad": 75.95 , "velocidad": 18 , "direccion": 350 , "latitud": -31.8521777777778 , "longitud": -60.531375 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:20", "temperatura": 23.36 , "humedad": 76.01 , "velocidad": 20 , "direccion": 355 , "latitud": -31.85215 , "longitud": -60.5312694444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:25", "temperatura": 23.25 , "humedad": 76.08 , "velocidad": 19 , "direccion": 350 , "latitud": -31.8521277777778 , "longitud": -60.5311666666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:30", "temperatura": 23.20 , "humedad": 76.21 , "velocidad": 18 , "direccion": 350 , "latitud": -31.8520944444444 , "longitud": -60.5310416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:35", "temperatura": 23.14 , "humedad": 76.32 , "velocidad": 16 , "direccion": 355 , "latitud": -31.852075 , "longitud": -60.5309333333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:40", "temperatura": 23.12 , "humedad": 76.46 , "velocidad": 14 , "direccion": 355 , "latitud": -31.85205 , "longitud": -60.5308222222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:45", "temperatura": 23.12 , "humedad": 76.60 , "velocidad": 17 , "direccion": 345 , "latitud": -31.852025 , "longitud": -60.5307194444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:50", "temperatura": 23.09 , "humedad": 76.74 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8519833333333 , "longitud": -60.5306166666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:27:55", "temperatura": 23.09 , "humedad": 76.89 , "velocidad": 17 , "direccion": 355 , "latitud": -31.8519583333333 , "longitud": -60.5304944444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:00", "temperatura": 23.09 , "humedad": 77.00 , "velocidad": 15 , "direccion": 355 , "latitud": -31.8519305555556 , "longitud": -60.530375 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:05", "temperatura": 23.09 , "humedad": 77.12 , "velocidad": 10 , "direccion": 355 , "latitud": -31.8518972222222 , "longitud": -60.5302666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:10", "temperatura": 23.09 , "humedad": 77.23 , "velocidad": 15 , "direccion": 350 , "latitud": -31.8518666666667 , "longitud": -60.5301666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:15", "temperatura": 23.12 , "humedad": 77.35 , "velocidad": 17 , "direccion": 345 , "latitud": -31.8518333333333 , "longitud": -60.5300555555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:20", "temperatura": 23.11 , "humedad": 77.41 , "velocidad": 15 , "direccion": 350 , "latitud": -31.8517944444444 , "longitud": -60.5299277777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:25", "temperatura": 23.09 , "humedad": 77.46 , "velocidad": 13 , "direccion": 360 , "latitud": -31.8517611111111 , "longitud": -60.5298305555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:30", "temperatura": 23.09 , "humedad": 77.55 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8517277777778 , "longitud": -60.529725 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:35", "temperatura": 23.06 , "humedad": 77.60 , "velocidad": 19 , "direccion": 345 , "latitud": -31.8516972222222 , "longitud": -60.529625 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:40", "temperatura": 23.04 , "humedad": 77.65 , "velocidad": 16 , "direccion": 340 , "latitud": -31.8516666666667 , "longitud": -60.5295027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:45", "temperatura": 23.04 , "humedad": 77.77 , "velocidad": 16 , "direccion": 350 , "latitud": -31.8516416666667 , "longitud": -60.5294111111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:50", "temperatura": 23.00 , "humedad": 77.82 , "velocidad": 15 , "direccion": 355 , "latitud": -31.8516166666667 , "longitud": -60.5292888888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:28:55", "temperatura": 23.06 , "humedad": 77.86 , "velocidad": 12 , "direccion": 350 , "latitud": -31.8515916666667 , "longitud": -60.5291861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:00", "temperatura": 23.06 , "humedad": 77.94 , "velocidad": 12 , "direccion": 355 , "latitud": -31.8515583333333 , "longitud": -60.5290833333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:05", "temperatura": 23.09 , "humedad": 78.07 , "velocidad": 11 , "direccion": 5 , "latitud": -31.8515333333333 , "longitud": -60.5289694444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:10", "temperatura": 23.11 , "humedad": 78.04 , "velocidad": 12 , "direccion": 355 , "latitud": -31.8515027777778 , "longitud": -60.5288472222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:15", "temperatura": 23.09 , "humedad": 78.07 , "velocidad": 12 , "direccion": 355 , "latitud": -31.8514694444444 , "longitud": -60.528725 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:20", "temperatura": 23.15 , "humedad": 78.05 , "velocidad": 12 , "direccion": 350 , "latitud": -31.8514277777778 , "longitud": -60.5285916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:25", "temperatura": 23.13 , "humedad": 77.99 , "velocidad": 13 , "direccion": 355 , "latitud": -31.8513944444444 , "longitud": -60.528475 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:30", "temperatura": 23.13 , "humedad": 78.02 , "velocidad": 15 , "direccion": 345 , "latitud": -31.8513638888889 , "longitud": -60.5283666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:35", "temperatura": 23.14 , "humedad": 78.05 , "velocidad": 10 , "direccion": 35 , "latitud": -31.8513111111111 , "longitud": -60.5283333333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:40", "temperatura": 23.16 , "humedad": 78.05 , "velocidad": 2 , "direccion": 345 , "latitud": -31.8512861111111 , "longitud": -60.5284361111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:45", "temperatura": 23.18 , "humedad": 78.05 , "velocidad": 4 , "direccion": 10 , "latitud": -31.8513222222222 , "longitud": -60.5285416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:50", "temperatura": 23.24 , "humedad": 78.04 , "velocidad": 1 , "direccion": 175 , "latitud": -31.8513583333333 , "longitud": -60.5286361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:29:55", "temperatura": 23.32 , "humedad": 78.06 , "velocidad": 9 , "direccion": 85 , "latitud": -31.8513916666667 , "longitud": -60.5287444444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:00", "temperatura": 23.34 , "humedad": 78.03 , "velocidad": 8 , "direccion": 95 , "latitud": -31.851425 , "longitud": -60.5288638888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:05", "temperatura": 23.29 , "humedad": 77.91 , "velocidad": 8 , "direccion": 105 , "latitud": -31.8514527777778 , "longitud": -60.5289555555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:10", "temperatura": 23.25 , "humedad": 77.90 , "velocidad": 8 , "direccion": 110 , "latitud": -31.8514916666667 , "longitud": -60.5290666666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:15", "temperatura": 23.25 , "humedad": 77.78 , "velocidad": 7 , "direccion": 75 , "latitud": -31.8515222222222 , "longitud": -60.5291833333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:20", "temperatura": 23.25 , "humedad": 77.78 , "velocidad": 5 , "direccion": 105 , "latitud": -31.8515527777778 , "longitud": -60.5293083333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:25", "temperatura": 23.25 , "humedad": 77.78 , "velocidad": 10 , "direccion": 100 , "latitud": -31.8515777777778 , "longitud": -60.5294305555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:30", "temperatura": 23.25 , "humedad": 77.75 , "velocidad": 6 , "direccion": 165 , "latitud": -31.8516083333333 , "longitud": -60.5295361111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:35", "temperatura": 23.27 , "humedad": 77.76 , "velocidad": 8 , "direccion": 105 , "latitud": -31.8516416666667 , "longitud": -60.5296472222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:40", "temperatura": 23.32 , "humedad": 77.74 , "velocidad": 2 , "direccion": 225 , "latitud": -31.851675 , "longitud": -60.5297583333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:45", "temperatura": 23.36 , "humedad": 77.78 , "velocidad": 5 , "direccion": 75 , "latitud": -31.8517111111111 , "longitud": -60.5298666666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:50", "temperatura": 23.43 , "humedad": 77.76 , "velocidad": 5 , "direccion": 115 , "latitud": -31.8517444444444 , "longitud": -60.5299944444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:30:55", "temperatura": 23.61 , "humedad": 77.68 , "velocidad": 6 , "direccion": 95 , "latitud": -31.8518194444444 , "longitud": -60.5302138888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:00", "temperatura": 23.62 , "humedad": 77.51 , "velocidad": 5 , "direccion": 80 , "latitud": -31.8518472222222 , "longitud": -60.530325 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:05", "temperatura": 23.61 , "humedad": 77.39 , "velocidad": 6 , "direccion": 115 , "latitud": -31.851875 , "longitud": -60.5304416666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:10", "temperatura": 23.62 , "humedad": 77.22 , "velocidad": 4 , "direccion": 110 , "latitud": -31.8519083333333 , "longitud": -60.5305472222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:15", "temperatura": 23.70 , "humedad": 77.18 , "velocidad": 1 , "direccion": 5 , "latitud": -31.8519527777778 , "longitud": -60.5306916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:20", "temperatura": 23.80 , "humedad": 77.15 , "velocidad": 2 , "direccion": 150 , "latitud": -31.8519694444444 , "longitud": -60.5308 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:25", "temperatura": 23.82 , "humedad": 77.00 , "velocidad": 5 , "direccion": 120 , "latitud": -31.8519972222222 , "longitud": -60.5308972222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:30", "temperatura": 23.88 , "humedad": 76.87 , "velocidad": 7 , "direccion": 70 , "latitud": -31.8520166666667 , "longitud": -60.5309972222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:35", "temperatura": 23.93 , "humedad": 76.74 , "velocidad": 6 , "direccion": 135 , "latitud": -31.8520444444444 , "longitud": -60.5311277777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:40", "temperatura": 23.99 , "humedad": 76.61 , "velocidad": 4 , "direccion": 320 , "latitud": -31.8520638888889 , "longitud": -60.5312444444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:45", "temperatura": 24.04 , "humedad": 76.47 , "velocidad": 3 , "direccion": 15 , "latitud": -31.8520888888889 , "longitud": -60.5313694444445 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:50", "temperatura": 24.18 , "humedad": 76.44 , "velocidad": 4 , "direccion": 65 , "latitud": -31.8521111111111 , "longitud": -60.5314777777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:31:55", "temperatura": 24.28 , "humedad": 76.34 , "velocidad": 1 , "direccion": 75 , "latitud": -31.8521444444444 , "longitud": -60.5315916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:00", "temperatura": 24.39 , "humedad": 76.16 , "velocidad": 5 , "direccion": 35 , "latitud": -31.8521694444444 , "longitud": -60.5317277777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:05", "temperatura": 24.51 , "humedad": 75.98 , "velocidad": 5 , "direccion": 70 , "latitud": -31.8522 , "longitud": -60.5318333333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:10", "temperatura": 24.58 , "humedad": 75.74 , "velocidad": 8 , "direccion": 70 , "latitud": -31.8522416666667 , "longitud": -60.5319444444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:15", "temperatura": 24.59 , "humedad": 75.54 , "velocidad": 8 , "direccion": -60 , "latitud": -31.852275 , "longitud": -60.5320583333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:20", "temperatura": 24.50 , "humedad": 75.25 , "velocidad": 9 , "direccion": 75 , "latitud": -31.8523111111111 , "longitud": -60.5321777777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:25", "temperatura": 24.48 , "humedad": 75.05 , "velocidad": 7 , "direccion": 65 , "latitud": -31.85235 , "longitud": -60.5322916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:30", "temperatura": 24.51 , "humedad": 74.94 , "velocidad": 9 , "direccion": 80 , "latitud": -31.8523861111111 , "longitud": -60.532425 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:35", "temperatura": 24.50 , "humedad": 74.79 , "velocidad": 7 , "direccion": 155 , "latitud": -31.8524194444444 , "longitud": -60.5325305555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:40", "temperatura": 24.50 , "humedad": 74.64 , "velocidad": 6 , "direccion": 165 , "latitud": -31.8524611111111 , "longitud": -60.5326472222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:45", "temperatura": 24.55 , "humedad": 74.53 , "velocidad": 3 , "direccion": 160 , "latitud": -31.8525027777778 , "longitud": -60.53275 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:50", "temperatura": 24.58 , "humedad": 74.45 , "velocidad": 3 , "direccion": 130 , "latitud": -31.8525305555556 , "longitud": -60.5328527777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:32:55", "temperatura": 24.58 , "humedad": 74.36 , "velocidad": 5 , "direccion": 165 , "latitud": -31.8525583333333 , "longitud": -60.5329833333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:00", "temperatura": 24.66 , "humedad": 74.38 , "velocidad": 11 , "direccion": 65 , "latitud": -31.8525916666667 , "longitud": -60.5330916666667 , "caudal": 0 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:05", "temperatura": 24.57 , "humedad": 74.27 , "velocidad": 15 , "direccion": 360 , "latitud": -31.852525 , "longitud": -60.5331361111111 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:10", "temperatura": 24.44 , "humedad": 74.16 , "velocidad": 17 , "direccion": 350 , "latitud": -31.8524277777778 , "longitud": -60.5330638888889 , "caudal": 0 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:15", "temperatura": 24.33 , "humedad": 74.11 , "velocidad": 16 , "direccion": 330 , "latitud": -31.8523777777778 , "longitud": -60.53295 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:20", "temperatura": 24.25 , "humedad": 74.09 , "velocidad": 14 , "direccion": 350 , "latitud": -31.852325 , "longitud": -60.5327972222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:25", "temperatura": 24.29 , "humedad": 74.16 , "velocidad": 15 , "direccion": 345 , "latitud": -31.8522944444444 , "longitud": -60.5327 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:30", "temperatura": 24.25 , "humedad": 74.21 , "velocidad": 13 , "direccion": 355 , "latitud": -31.8522583333333 , "longitud": -60.5326 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:35", "temperatura": 24.21 , "humedad": 74.26 , "velocidad": 15 , "direccion": 345 , "latitud": -31.8522222222222 , "longitud": -60.5324944444445 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:40", "temperatura": 24.24 , "humedad": 74.33 , "velocidad": 15 , "direccion": 350 , "latitud": -31.8521861111111 , "longitud": -60.5323861111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:45", "temperatura": 24.23 , "humedad": 74.38 , "velocidad": 18 , "direccion": 350 , "latitud": -31.85215 , "longitud": -60.5322472222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:50", "temperatura": 24.16 , "humedad": 74.43 , "velocidad": 17 , "direccion": 345 , "latitud": -31.8521138888889 , "longitud": -60.5321361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:33:55", "temperatura": 24.09 , "humedad": 74.41 , "velocidad": 17 , "direccion": 335 , "latitud": -31.8520833333333 , "longitud": -60.5320305555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:00", "temperatura": 23.98 , "humedad": 74.45 , "velocidad": 23 , "direccion": 345 , "latitud": -31.8520444444444 , "longitud": -60.5319277777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:05", "temperatura": 23.92 , "humedad": 74.53 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8520166666667 , "longitud": -60.5318 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:10", "temperatura": 23.93 , "humedad": 74.67 , "velocidad": 14 , "direccion": 355 , "latitud": -31.8519916666667 , "longitud": -60.5316861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:15", "temperatura": 23.92 , "humedad": 74.85 , "velocidad": 15 , "direccion": 340 , "latitud": -31.8519694444444 , "longitud": -60.5315777777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:20", "temperatura": 23.92 , "humedad": 74.96 , "velocidad": 11 , "direccion": 0 , "latitud": -31.85195 , "longitud": -60.5314666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:25", "temperatura": 23.95 , "humedad": 75.12 , "velocidad": 15 , "direccion": 350 , "latitud": -31.8519277777778 , "longitud": -60.5313666666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:30", "temperatura": 23.91 , "humedad": 75.25 , "velocidad": 16 , "direccion": 340 , "latitud": -31.8518944444444 , "longitud": -60.5312277777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:35", "temperatura": 23.88 , "humedad": 75.31 , "velocidad": 13 , "direccion": 350 , "latitud": -31.8518694444444 , "longitud": -60.5311138888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:40", "temperatura": 23.88 , "humedad": 75.45 , "velocidad": 11 , "direccion": 360 , "latitud": -31.8518416666667 , "longitud": -60.5310055555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:45", "temperatura": 23.90 , "humedad": 75.57 , "velocidad": 16 , "direccion": 355 , "latitud": -31.8518194444444 , "longitud": -60.5308916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:50", "temperatura": 23.90 , "humedad": 75.60 , "velocidad": 14 , "direccion": 350 , "latitud": -31.8517833333333 , "longitud": -60.5307638888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:34:55", "temperatura": 23.86 , "humedad": 75.65 , "velocidad": 12 , "direccion": 355 , "latitud": -31.8517527777778 , "longitud": -60.5306638888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:00", "temperatura": 23.88 , "humedad": 75.71 , "velocidad": 19 , "direccion": 345 , "latitud": -31.8517083333333 , "longitud": -60.5305333333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:05", "temperatura": 23.84 , "humedad": 75.71 , "velocidad": 13 , "direccion": 355 , "latitud": -31.8516694444444 , "longitud": -60.5304111111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:10", "temperatura": 23.88 , "humedad": 75.71 , "velocidad": 13 , "direccion": 360 , "latitud": -31.8516416666667 , "longitud": -60.5303027777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:15", "temperatura": 23.82 , "humedad": 75.76 , "velocidad": 13 , "direccion": 10 , "latitud": -31.8516027777778 , "longitud": -60.5301916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:20", "temperatura": 23.77 , "humedad": 75.78 , "velocidad": 16 , "direccion": 340 , "latitud": -31.8515666666667 , "longitud": -60.5300916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:25", "temperatura": 23.68 , "humedad": 75.79 , "velocidad": 21 , "direccion": 340 , "latitud": -31.8515277777778 , "longitud": -60.5299666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:30", "temperatura": 23.62 , "humedad": 75.86 , "velocidad": 18 , "direccion": 335 , "latitud": -31.8515055555556 , "longitud": -60.529875 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:35", "temperatura": 23.58 , "humedad": 75.91 , "velocidad": 17 , "direccion": 350 , "latitud": -31.8514694444444 , "longitud": -60.5297638888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:40", "temperatura": 23.58 , "humedad": 76.00 , "velocidad": 19 , "direccion": 350 , "latitud": -31.8514527777778 , "longitud": -60.5296611111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:45", "temperatura": 23.56 , "humedad": 76.06 , "velocidad": 18 , "direccion": 355 , "latitud": -31.8514166666667 , "longitud": -60.5295222222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:50", "temperatura": 23.56 , "humedad": 76.11 , "velocidad": 18 , "direccion": 345 , "latitud": -31.8513805555556 , "longitud": -60.5294083333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:35:55", "temperatura": 23.52 , "humedad": 76.22 , "velocidad": 19 , "direccion": 345 , "latitud": -31.85135 , "longitud": -60.5292916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:00", "temperatura": 23.45 , "humedad": 76.21 , "velocidad": 22 , "direccion": 345 , "latitud": -31.851325 , "longitud": -60.5291805555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:05", "temperatura": 23.38 , "humedad": 76.25 , "velocidad": 23 , "direccion": 335 , "latitud": -31.8512944444444 , "longitud": -60.5290666666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:10", "temperatura": 23.28 , "humedad": 76.38 , "velocidad": 20 , "direccion": 340 , "latitud": -31.8512611111111 , "longitud": -60.5289416666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:15", "temperatura": 23.22 , "humedad": 76.51 , "velocidad": 20 , "direccion": 330 , "latitud": -31.8512333333333 , "longitud": -60.5288333333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:20", "temperatura": 23.18 , "humedad": 76.61 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8512 , "longitud": -60.5287333333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:25", "temperatura": 23.23 , "humedad": 76.83 , "velocidad": 13 , "direccion": 345 , "latitud": -31.851175 , "longitud": -60.5286194444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:30", "temperatura": 23.24 , "humedad": 77.00 , "velocidad": 12 , "direccion": 30 , "latitud": -31.8511305555556 , "longitud": -60.5285277777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:35", "temperatura": 23.25 , "humedad": 77.15 , "velocidad": 3 , "direccion": 175 , "latitud": -31.8510583333333 , "longitud": -60.5285861111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:40", "temperatura": 23.29 , "humedad": 77.24 , "velocidad": 7 , "direccion": 110 , "latitud": -31.8510666666667 , "longitud": -60.5286861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:45", "temperatura": 23.25 , "humedad": 77.27 , "velocidad": 6 , "direccion": 105 , "latitud": -31.851125 , "longitud": -60.5287944444445 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:50", "temperatura": 23.32 , "humedad": 77.34 , "velocidad": 4 , "direccion": 125 , "latitud": -31.8511638888889 , "longitud": -60.5289027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:36:55", "temperatura": 23.38 , "humedad": 77.38 , "velocidad": 6 , "direccion": 150 , "latitud": -31.8511944444444 , "longitud": -60.5289944444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:00", "temperatura": 23.41 , "humedad": 77.41 , "velocidad": 5 , "direccion": 145 , "latitud": -31.8512222222222 , "longitud": -60.5290888888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:05", "temperatura": 23.42 , "humedad": 77.44 , "velocidad": 4 , "direccion": 175 , "latitud": -31.8512666666667 , "longitud": -60.5292138888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:10", "temperatura": 23.43 , "humedad": 77.42 , "velocidad": 4 , "direccion": 180 , "latitud": -31.8512916666667 , "longitud": -60.529325 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:15", "temperatura": 23.48 , "humedad": 77.40 , "velocidad": 2 , "direccion": 200 , "latitud": -31.8513138888889 , "longitud": -60.5294416666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:20", "temperatura": 23.50 , "humedad": 77.34 , "velocidad": 1 , "direccion": 215 , "latitud": -31.8513444444444 , "longitud": -60.52955 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:25", "temperatura": 23.57 , "humedad": 77.30 , "velocidad": 4 , "direccion": 150 , "latitud": -31.851375 , "longitud": -60.5296833333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:30", "temperatura": 23.59 , "humedad": 77.28 , "velocidad": 4 , "direccion": 145 , "latitud": -31.8514166666667 , "longitud": -60.5297972222222 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:35", "temperatura": 23.61 , "humedad": 77.14 , "velocidad": 1 , "direccion": 110 , "latitud": -31.85145 , "longitud": -60.5299 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:40", "temperatura": 23.71 , "humedad": 77.07 , "velocidad": 2 , "direccion": 190 , "latitud": -31.8514777777778 , "longitud": -60.5300083333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:45", "temperatura": 23.75 , "humedad": 77.02 , "velocidad": 4 , "direccion": 145 , "latitud": -31.8515222222222 , "longitud": -60.5301194444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:50", "temperatura": 23.75 , "humedad": 76.85 , "velocidad": 4 , "direccion": 160 , "latitud": -31.8515611111111 , "longitud": -60.5302527777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:37:55", "temperatura": 23.82 , "humedad": 76.69 , "velocidad": 3 , "direccion": 160 , "latitud": -31.8515916666667 , "longitud": -60.5303527777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:00", "temperatura": 23.88 , "humedad": 76.58 , "velocidad": 4 , "direccion": 165 , "latitud": -31.8516194444444 , "longitud": -60.5304805555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:05", "temperatura": 23.98 , "humedad": 76.52 , "velocidad": 3 , "direccion": 215 , "latitud": -31.85165 , "longitud": -60.5305861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:10", "temperatura": 24.04 , "humedad": 76.41 , "velocidad": 3 , "direccion": 180 , "latitud": -31.8516777777778 , "longitud": -60.5306861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:15", "temperatura": 24.08 , "humedad": 76.30 , "velocidad": 5 , "direccion": 145 , "latitud": -31.8517111111111 , "longitud": -60.5308055555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:20", "temperatura": 24.13 , "humedad": 76.14 , "velocidad": 1 , "direccion": 235 , "latitud": -31.8517611111111 , "longitud": -60.5309666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:25", "temperatura": 24.23 , "humedad": 76.04 , "velocidad": 3 , "direccion": 205 , "latitud": -31.8517833333333 , "longitud": -60.5310638888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:30", "temperatura": 24.32 , "humedad": 75.95 , "velocidad": 2 , "direccion": 210 , "latitud": -31.8518027777778 , "longitud": -60.5311861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:35", "temperatura": 24.41 , "humedad": 75.82 , "velocidad": 2 , "direccion": 180 , "latitud": -31.851825 , "longitud": -60.5312888888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:40", "temperatura": 24.51 , "humedad": 75.72 , "velocidad": 6 , "direccion": -60 , "latitud": -31.8518555555556 , "longitud": -60.5314277777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:45", "temperatura": 24.62 , "humedad": 75.60 , "velocidad": 5 , "direccion": 30 , "latitud": -31.8518861111111 , "longitud": -60.5315333333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:50", "temperatura": 24.73 , "humedad": 75.51 , "velocidad": 5 , "direccion": 15 , "latitud": -31.8519111111111 , "longitud": -60.5316444444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:38:55", "temperatura": 24.83 , "humedad": 75.32 , "velocidad": 6 , "direccion": 65 , "latitud": -31.8519333333333 , "longitud": -60.5317638888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:39:00", "temperatura": 24.90 , "humedad": 75.07 , "velocidad": 3 , "direccion": 50 , "latitud": -31.8519694444444 , "longitud": -60.5318777777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:39:05", "temperatura": 24.98 , "humedad": 74.85 , "velocidad": 1 , "direccion": 280 , "latitud": -31.8520055555556 , "longitud": -60.5319805555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:39:10", "temperatura": 25.21 , "humedad": 74.37 , "velocidad": 3 , "direccion": 25 , "latitud": -31.852075 , "longitud": -60.5322222222222 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:39:15", "temperatura": 25.23 , "humedad": 74.11 , "velocidad": 6 , "direccion": 110 , "latitud": -31.8521027777778 , "longitud": -60.5323277777778 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:39:20", "temperatura": 25.26 , "humedad": 73.76 , "velocidad": 1 , "direccion": 295 , "latitud": -31.8521333333333 , "longitud": -60.5324361111111 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:39:25", "temperatura": 25.36 , "humedad": 73.52 , "velocidad": 3 , "direccion": 195 , "latitud": -31.8521694444444 , "longitud": -60.5325638888889 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:39:30", "temperatura": 25.43 , "humedad": 73.32 , "velocidad": 2 , "direccion": 165 , "latitud": -31.8522138888889 , "longitud": -60.5326944444444 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:39:35", "temperatura": 25.54 , "humedad": 73.14 , "velocidad": 4 , "direccion": 110 , "latitud": -31.8522583333333 , "longitud": -60.5328194444444 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:39:40", "temperatura": 25.50 , "humedad": 72.81 , "velocidad": 7 , "direccion": 85 , "latitud": -31.8522916666667 , "longitud": -60.5329305555556 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:39:45", "temperatura": 25.37 , "humedad": 72.49 , "velocidad": 17 , "direccion": 35 , "latitud": -31.8522916666667 , "longitud": -60.5330305555556 , "caudal": 240 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:39:50", "temperatura": 25.30 , "humedad": 72.36 , "velocidad": 9 , "direccion": 350 , "latitud": -31.8522 , "longitud": -60.5330194444444 , "caudal": 0 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:41:36", "temperatura": 24.83 , "humedad": 72.00 , "velocidad": 15 , "direccion": 355 , "latitud": -31.8521333333333 , "longitud": -60.5329472222222 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:41:41", "temperatura": 24.80 , "humedad": 72.14 , "velocidad": 20 , "direccion": 350 , "latitud": -31.8520916666667 , "longitud": -60.5328277777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:41:46", "temperatura": 24.78 , "humedad": 72.26 , "velocidad": 17 , "direccion": 350 , "latitud": -31.852025 , "longitud": -60.5326194444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:41:51", "temperatura": 24.73 , "humedad": 72.34 , "velocidad": 15 , "direccion": 350 , "latitud": -31.8519722222222 , "longitud": -60.5324777777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:41:56", "temperatura": 24.75 , "humedad": 72.49 , "velocidad": 18 , "direccion": 350 , "latitud": -31.8519333333333 , "longitud": -60.5323333333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:01", "temperatura": 24.69 , "humedad": 72.53 , "velocidad": 12 , "direccion": 10 , "latitud": -31.8518916666667 , "longitud": -60.5322083333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:06", "temperatura": 24.66 , "humedad": 72.65 , "velocidad": 13 , "direccion": 360 , "latitud": -31.8518444444444 , "longitud": -60.5320611111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:11", "temperatura": 24.66 , "humedad": 72.82 , "velocidad": 14 , "direccion": 355 , "latitud": -31.8517944444444 , "longitud": -60.5319194444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:16", "temperatura": 24.65 , "humedad": 72.94 , "velocidad": 14 , "direccion": 355 , "latitud": -31.8517722222222 , "longitud": -60.5318 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:21", "temperatura": 24.62 , "humedad": 73.02 , "velocidad": 19 , "direccion": 335 , "latitud": -31.8517444444444 , "longitud": -60.5316638888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:26", "temperatura": 24.50 , "humedad": 73.00 , "velocidad": 19 , "direccion": 340 , "latitud": -31.851725 , "longitud": -60.5315361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:31", "temperatura": 24.34 , "humedad": 73.06 , "velocidad": 11 , "direccion": 5 , "latitud": -31.8516944444444 , "longitud": -60.5313888888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:36", "temperatura": 24.36 , "humedad": 73.24 , "velocidad": 19 , "direccion": 340 , "latitud": -31.8516694444444 , "longitud": -60.5312638888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:41", "temperatura": 24.24 , "humedad": 73.33 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8516388888889 , "longitud": -60.5311361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:46", "temperatura": 24.24 , "humedad": 73.51 , "velocidad": 16 , "direccion": 350 , "latitud": -31.8516138888889 , "longitud": -60.5310277777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:51", "temperatura": 24.23 , "humedad": 73.65 , "velocidad": 12 , "direccion": 0 , "latitud": -31.8515861111111 , "longitud": -60.5308916666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:42:56", "temperatura": 24.24 , "humedad": 73.80 , "velocidad": 19 , "direccion": 355 , "latitud": -31.8515361111111 , "longitud": -60.5307361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:01", "temperatura": 24.18 , "humedad": 73.93 , "velocidad": 22 , "direccion": 350 , "latitud": -31.8514916666667 , "longitud": -60.5305944444445 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:06", "temperatura": 24.03 , "humedad": 73.93 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8514527777778 , "longitud": -60.5304833333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:11", "temperatura": 24.04 , "humedad": 74.08 , "velocidad": 14 , "direccion": 5 , "latitud": -31.8514166666667 , "longitud": -60.5303611111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:16", "temperatura": 24.00 , "humedad": 74.25 , "velocidad": 19 , "direccion": 345 , "latitud": -31.8513777777778 , "longitud": -60.5302361111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:21", "temperatura": 24.00 , "humedad": 74.37 , "velocidad": 15 , "direccion": 0 , "latitud": -31.8513333333333 , "longitud": -60.5300777777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:26", "temperatura": 23.90 , "humedad": 74.44 , "velocidad": 19 , "direccion": 340 , "latitud": -31.8513 , "longitud": -60.5299527777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:31", "temperatura": 23.88 , "humedad": 74.55 , "velocidad": 22 , "direccion": 345 , "latitud": -31.8512611111111 , "longitud": -60.5298277777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:36", "temperatura": 23.80 , "humedad": 74.62 , "velocidad": 21 , "direccion": 345 , "latitud": -31.8512277777778 , "longitud": -60.5297083333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:41", "temperatura": 23.74 , "humedad": 74.75 , "velocidad": 16 , "direccion": 355 , "latitud": -31.8511861111111 , "longitud": -60.5295777777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:46", "temperatura": 23.75 , "humedad": 74.93 , "velocidad": 17 , "direccion": 335 , "latitud": -31.8511444444444 , "longitud": -60.5294222222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:51", "temperatura": 23.68 , "humedad": 75.09 , "velocidad": 17 , "direccion": 345 , "latitud": -31.8511083333333 , "longitud": -60.5292972222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:43:56", "temperatura": 23.70 , "humedad": 75.33 , "velocidad": 13 , "direccion": 360 , "latitud": -31.8510777777778 , "longitud": -60.5291833333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:01", "temperatura": 23.70 , "humedad": 75.44 , "velocidad": 22 , "direccion": 345 , "latitud": -31.8510472222222 , "longitud": -60.5290666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:06", "temperatura": 23.65 , "humedad": 75.46 , "velocidad": 22 , "direccion": 345 , "latitud": -31.8510194444444 , "longitud": -60.5289527777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:11", "temperatura": 23.65 , "humedad": 75.49 , "velocidad": 21 , "direccion": 340 , "latitud": -31.8509833333333 , "longitud": -60.5287861111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:32", "temperatura": 23.68 , "humedad": 75.67 , "velocidad": 1 , "direccion": 50 , "latitud": -31.8509027777778 , "longitud": -60.5289388888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:37", "temperatura": 23.80 , "humedad": 75.84 , "velocidad": 2 , "direccion": 200 , "latitud": -31.85095 , "longitud": -60.5290638888889 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:42", "temperatura": 23.92 , "humedad": 75.92 , "velocidad": 2 , "direccion": 200 , "latitud": -31.8510027777778 , "longitud": -60.5292194444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:47", "temperatura": 23.98 , "humedad": 75.94 , "velocidad": 3 , "direccion": 305 , "latitud": -31.8510305555556 , "longitud": -60.5293305555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:52", "temperatura": 24.04 , "humedad": 75.92 , "velocidad": 6 , "direccion": 130 , "latitud": -31.8510694444444 , "longitud": -60.5294666666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:44:57", "temperatura": 24.07 , "humedad": 75.87 , "velocidad": 2 , "direccion": 200 , "latitud": -31.8511027777778 , "longitud": -60.5296027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:02", "temperatura": 24.11 , "humedad": 75.73 , "velocidad": 3 , "direccion": 150 , "latitud": -31.8511444444444 , "longitud": -60.5297277777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:07", "temperatura": 24.20 , "humedad": 75.69 , "velocidad": 3 , "direccion": 175 , "latitud": -31.8511972222222 , "longitud": -60.5298833333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:12", "temperatura": 24.30 , "humedad": 75.62 , "velocidad": 2 , "direccion": 240 , "latitud": -31.851225 , "longitud": -60.5300027777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:17", "temperatura": 24.41 , "humedad": 75.59 , "velocidad": 4 , "direccion": 225 , "latitud": -31.8512694444444 , "longitud": -60.5301388888889 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:22", "temperatura": 24.46 , "humedad": 75.48 , "velocidad": 3 , "direccion": 175 , "latitud": -31.8513222222222 , "longitud": -60.5302694444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:27", "temperatura": 24.50 , "humedad": 75.28 , "velocidad": 3 , "direccion": 100 , "latitud": -31.85135 , "longitud": -60.5303944444445 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:32", "temperatura": 24.59 , "humedad": 75.16 , "velocidad": 2 , "direccion": -310 , "latitud": -31.8513972222222 , "longitud": -60.5305361111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:37", "temperatura": 24.73 , "humedad": 75.07 , "velocidad": 1 , "direccion": 175 , "latitud": -31.8514361111111 , "longitud": -60.530675 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:42", "temperatura": 24.82 , "humedad": 74.88 , "velocidad": 2 , "direccion": 240 , "latitud": -31.8514833333333 , "longitud": -60.5308111111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:47", "temperatura": 24.89 , "humedad": 74.66 , "velocidad": 2 , "direccion": 185 , "latitud": -31.8515194444444 , "longitud": -60.5309333333333 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:52", "temperatura": 24.98 , "humedad": 74.53 , "velocidad": 2 , "direccion": 160 , "latitud": -31.8515555555556 , "longitud": -60.5310611111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:45:57", "temperatura": 25.04 , "humedad": 74.37 , "velocidad": 2 , "direccion": 200 , "latitud": -31.8515777777778 , "longitud": -60.5312027777778 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:02", "temperatura": 25.11 , "humedad": 74.14 , "velocidad": 1 , "direccion": 55 , "latitud": -31.8516027777778 , "longitud": -60.5313694444445 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:07", "temperatura": 25.14 , "humedad": 73.92 , "velocidad": 2 , "direccion": 160 , "latitud": -31.8516361111111 , "longitud": -60.5315083333333 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:12", "temperatura": 25.22 , "humedad": 73.70 , "velocidad": 3 , "direccion": 65 , "latitud": -31.8516527777778 , "longitud": -60.5316277777778 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:17", "temperatura": 25.26 , "humedad": 73.47 , "velocidad": 2 , "direccion": 215 , "latitud": -31.8516777777778 , "longitud": -60.5317527777778 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:22", "temperatura": 25.34 , "humedad": 73.28 , "velocidad": 4 , "direccion": 170 , "latitud": -31.8517138888889 , "longitud": -60.5319166666667 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:27", "temperatura": 25.43 , "humedad": 73.06 , "velocidad": 2 , "direccion": 165 , "latitud": -31.85175 , "longitud": -60.5320388888889 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:32", "temperatura": 25.48 , "humedad": 72.83 , "velocidad": 2 , "direccion": 215 , "latitud": -31.8517777777778 , "longitud": -60.5321527777778 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:37", "temperatura": 25.62 , "humedad": 72.57 , "velocidad": 2 , "direccion": 165 , "latitud": -31.8518277777778 , "longitud": -60.5322861111111 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:42", "temperatura": 25.66 , "humedad": 72.25 , "velocidad": 2 , "direccion": 80 , "latitud": -31.8518666666667 , "longitud": -60.5324027777778 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:47", "temperatura": 25.73 , "humedad": 71.91 , "velocidad": 2 , "direccion": 215 , "latitud": -31.8519166666667 , "longitud": -60.5325444444444 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:52", "temperatura": 25.82 , "humedad": 71.59 , "velocidad": 2 , "direccion": 225 , "latitud": -31.8519527777778 , "longitud": -60.5326611111111 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:46:57", "temperatura": 25.90 , "humedad": 71.34 , "velocidad": 1 , "direccion": 235 , "latitud": -31.8519916666667 , "longitud": -60.5327916666667 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:02", "temperatura": 25.94 , "humedad": 71.05 , "velocidad": 13 , "direccion": 10 , "latitud": -31.8519916666667 , "longitud": -60.5329 , "caudal": 0 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:07", "temperatura": 25.97 , "humedad": 70.88 , "velocidad": 12 , "direccion": 5 , "latitud": -31.8518777777778 , "longitud": -60.5328416666667 , "caudal": 0 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:12", "temperatura": 25.97 , "humedad": 70.73 , "velocidad": 11 , "direccion": 10 , "latitud": -31.8517777777778 , "longitud": -60.532675 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:17", "temperatura": 25.90 , "humedad": 70.60 , "velocidad": 16 , "direccion": 10 , "latitud": -31.8517416666667 , "longitud": -60.5325472222222 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:22", "temperatura": 25.84 , "humedad": 70.44 , "velocidad": 20 , "direccion": 0 , "latitud": -31.8516944444444 , "longitud": -60.5324277777778 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:27", "temperatura": 25.78 , "humedad": 70.28 , "velocidad": 16 , "direccion": 350 , "latitud": -31.8516583333333 , "longitud": -60.5323027777778 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:32", "temperatura": 25.73 , "humedad": 70.18 , "velocidad": 18 , "direccion": 350 , "latitud": -31.8516166666667 , "longitud": -60.532175 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:37", "temperatura": 25.58 , "humedad": 70.15 , "velocidad": 19 , "direccion": 355 , "latitud": -31.851575 , "longitud": -60.532025 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:42", "temperatura": 25.55 , "humedad": 70.18 , "velocidad": 13 , "direccion": 345 , "latitud": -31.8515416666667 , "longitud": -60.5318972222222 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:47", "temperatura": 25.46 , "humedad": 70.25 , "velocidad": 13 , "direccion": 340 , "latitud": -31.8515083333333 , "longitud": -60.531775 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:52", "temperatura": 25.33 , "humedad": 70.31 , "velocidad": 18 , "direccion": 330 , "latitud": -31.8514722222222 , "longitud": -60.531625 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:47:57", "temperatura": 25.25 , "humedad": 70.45 , "velocidad": 20 , "direccion": 340 , "latitud": -31.85145 , "longitud": -60.5314916666667 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:48:02", "temperatura": 25.23 , "humedad": 70.62 , "velocidad": 18 , "direccion": 350 , "latitud": -31.851425 , "longitud": -60.53135 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:48:07", "temperatura": 25.18 , "humedad": 70.73 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8513944444444 , "longitud": -60.531225 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:48:12", "temperatura": 25.12 , "humedad": 70.78 , "velocidad": 16 , "direccion": 340 , "latitud": -31.8513638888889 , "longitud": -60.5311 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:48:17", "temperatura": 25.05 , "humedad": 70.89 , "velocidad": 16 , "direccion": 350 , "latitud": -31.8513333333333 , "longitud": -60.5309694444444 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:48:22", "temperatura": 25.00 , "humedad": 70.94 , "velocidad": 16 , "direccion": 355 , "latitud": -31.8512916666667 , "longitud": -60.5308527777778 , "caudal": 120 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:48:27", "temperatura": 24.86 , "humedad": 71.03 , "velocidad": 9 , "direccion": 345 , "latitud": -31.85125 , "longitud": -60.5307 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:48:32", "temperatura": 24.87 , "humedad": 71.18 , "velocidad": 14 , "direccion": 10 , "latitud": -31.8512083333333 , "longitud": -60.5305527777778 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:48:37", "temperatura": 24.89 , "humedad": 71.36 , "velocidad": 17 , "direccion": 5 , "latitud": -31.8511722222222 , "longitud": -60.530425 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:48:42", "temperatura": 24.83 , "humedad": 71.44 , "velocidad": 11 , "direccion": 10 , "latitud": -31.8511416666667 , "longitud": -60.5303055555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:48:47", "temperatura": 24.78 , "humedad": 71.52 , "velocidad": 17 , "direccion": 350 , "latitud": -31.8511027777778 , "longitud": -60.5301805555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:48:52", "temperatura": 24.76 , "humedad": 71.60 , "velocidad": 14 , "direccion": 350 , "latitud": -31.8510555555556 , "longitud": -60.5300194444444 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:48:57", "temperatura": 24.73 , "humedad": 71.72 , "velocidad": 11 , "direccion": 0 , "latitud": -31.8510194444444 , "longitud": -60.5298916666667 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:02", "temperatura": 24.69 , "humedad": 71.83 , "velocidad": 17 , "direccion": 350 , "latitud": -31.8509833333333 , "longitud": -60.529775 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:07", "temperatura": 24.68 , "humedad": 71.97 , "velocidad": 19 , "direccion": 345 , "latitud": -31.8509527777778 , "longitud": -60.52965 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:12", "temperatura": 24.62 , "humedad": 72.08 , "velocidad": 19 , "direccion": 340 , "latitud": -31.8509222222222 , "longitud": -60.5295222222222 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:17", "temperatura": 24.58 , "humedad": 72.19 , "velocidad": 16 , "direccion": 345 , "latitud": -31.8508833333333 , "longitud": -60.5293861111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:22", "temperatura": 24.53 , "humedad": 72.53 , "velocidad": 12 , "direccion": 30 , "latitud": -31.8507833333333 , "longitud": -60.5291833333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:27", "temperatura": 24.58 , "humedad": 72.75 , "velocidad": 7 , "direccion": 30 , "latitud": -31.8507694444444 , "longitud": -60.5293055555556 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:32", "temperatura": 24.62 , "humedad": 72.88 , "velocidad": 6 , "direccion": 40 , "latitud": -31.850775 , "longitud": -60.5294277777778 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:37", "temperatura": 24.71 , "humedad": 72.98 , "velocidad": 9 , "direccion": 55 , "latitud": -31.8508444444444 , "longitud": -60.5295944444444 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:42", "temperatura": 24.73 , "humedad": 73.02 , "velocidad": 6 , "direccion": 65 , "latitud": -31.8508861111111 , "longitud": -60.5297333333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:47", "temperatura": 24.79 , "humedad": 72.97 , "velocidad": 5 , "direccion": 40 , "latitud": -31.8509333333333 , "longitud": -60.5298611111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:52", "temperatura": 24.86 , "humedad": 72.89 , "velocidad": 2 , "direccion": 125 , "latitud": -31.8509694444444 , "longitud": -60.5299861111111 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:49:57", "temperatura": 24.87 , "humedad": 72.87 , "velocidad": 3 , "direccion": 350 , "latitud": -31.8510027777778 , "longitud": -60.5301111111111 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:50:02", "temperatura": 24.94 , "humedad": 72.79 , "velocidad": 2 , "direccion": 145 , "latitud": -31.8510388888889 , "longitud": -60.5302416666667 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:50:07", "temperatura": 24.97 , "humedad": 72.74 , "velocidad": 3 , "direccion": 20 , "latitud": -31.8510861111111 , "longitud": -60.5304083333333 , "caudal": 150 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "07:50:12", "temperatura": 25.03 , "humedad": 72.75 , "velocidad": 1 , "direccion": 125 , "latitud": -31.8511194444444 , "longitud": -60.5305444444444 , "caudal": 150 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:50:17", "temperatura": 25.15 , "humedad": 72.74 , "velocidad": 8 , "direccion": 20 , "latitud": -31.8511555555556 , "longitud": -60.5306527777778 , "caudal": 90 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:50:22", "temperatura": 25.22 , "humedad": 72.66 , "velocidad": 9 , "direccion": 50 , "latitud": -31.8512 , "longitud": -60.5307888888889 , "caudal": 0 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "07:50:27", "temperatura": 25.23 , "humedad": 72.49 , "velocidad": 7 , "direccion": 65 , "latitud": -31.8512527777778 , "longitud": -60.5309527777778 , "caudal": 0 , "alarma": "S"},
      {"fecha": "2019-10-31", "hora": "08:47:59", "temperatura": 24.62 , "humedad": 73.55 , "velocidad": 6 , "direccion": 320 , "latitud": -31.850375 , "longitud": -60.5345 , "caudal": 210 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:04", "temperatura": 24.59 , "humedad": 73.55 , "velocidad": 4 , "direccion": -310 , "latitud": -31.8504 , "longitud": -60.5343861111111 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:09", "temperatura": 24.58 , "humedad": 73.57 , "velocidad": 7 , "direccion": -310 , "latitud": -31.8504361111111 , "longitud": -60.5342777777778 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:14", "temperatura": 24.54 , "humedad": 73.59 , "velocidad": 7 , "direccion": 290 , "latitud": -31.85045 , "longitud": -60.5341722222222 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:19", "temperatura": 24.51 , "humedad": 73.62 , "velocidad": 5 , "direccion": 290 , "latitud": -31.850475 , "longitud": -60.53405 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:24", "temperatura": 24.44 , "humedad": 73.60 , "velocidad": 7 , "direccion": 290 , "latitud": -31.8505277777778 , "longitud": -60.5339305555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:29", "temperatura": 24.39 , "humedad": 73.68 , "velocidad": 7 , "direccion": 250 , "latitud": -31.8505638888889 , "longitud": -60.5338138888889 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:34", "temperatura": 24.34 , "humedad": 73.73 , "velocidad": 5 , "direccion": 255 , "latitud": -31.8505916666667 , "longitud": -60.5337027777778 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:39", "temperatura": 24.38 , "humedad": 73.83 , "velocidad": 5 , "direccion": 280 , "latitud": -31.8506277777778 , "longitud": -60.5335944444444 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:44", "temperatura": 24.36 , "humedad": 73.85 , "velocidad": 4 , "direccion": 255 , "latitud": -31.8506694444444 , "longitud": -60.5334583333333 , "caudal": 90 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:49", "temperatura": 24.34 , "humedad": 73.91 , "velocidad": 2 , "direccion": 230 , "latitud": -31.8507 , "longitud": -60.5333555555556 , "caudal": 120 , "alarma": "N"},
      {"fecha": "2019-10-31", "hora": "08:48:54", "temperatura": 24.34 , "humedad": 73.94 , "velocidad": 2 , "direccion": 270 , "latitud": -31.8507305555556 , "longitud": -60.53325 , "caudal": 150 , "alarma": "N"}
    ]
  },
  {
    "id": "2",
    "operario": "015",
    "pulverizadora": "001",
    "receta_espendio": "0356",
    "receta_aplicacion": "0317",
    "datos_aplicacion": [
      {"fecha": "2019-12-08", "hora": "14:32:00" , "temperatura":  30.3, "humedad": 33.5, "velocidad":  0.2, "direccion": 175, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:05" , "temperatura":  30.3, "humedad": 33.7, "velocidad":  0.2, "direccion": 175, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:10" , "temperatura":  30.4, "humedad": 33.9, "velocidad":  0.0, "direccion": 270, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:15" , "temperatura":  30.4, "humedad": 33.5, "velocidad":  0.0, "direccion": 155, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:20" , "temperatura":  30.4, "humedad": 33.4, "velocidad":  0.0, "direccion": 200, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:25" , "temperatura":  30.5, "humedad": 33.4, "velocidad":  0.2, "direccion": 175, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:30" , "temperatura":  30.5, "humedad": 33.0, "velocidad":  0.0, "direccion": 115, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:35" , "temperatura":  30.5, "humedad": 32.9, "velocidad":  0.0, "direccion": 110, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:40" , "temperatura":  30.5, "humedad": 32.7, "velocidad":  0.2, "direccion": 180, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:45" , "temperatura":  30.6, "humedad": 32.9, "velocidad":  0.0, "direccion": 135, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:50" , "temperatura":  30.5, "humedad": 32.6, "velocidad":  0.0, "direccion": 175, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:32:55" , "temperatura":  30.6, "humedad": 32.3, "velocidad":  0.0, "direccion": 150, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:00" , "temperatura":  30.6, "humedad": 32.0, "velocidad":  0.0, "direccion": 95, "latitud": -31.8494444444444, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:05" , "temperatura":  30.5, "humedad": 32.0, "velocidad":  0.0, "direccion": 130, "latitud": -31.8494166666667, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:10" , "temperatura":  30.5, "humedad": 32.0, "velocidad":  0.0, "direccion": 270, "latitud": -31.8494166666667, "longitud":  -60.5352777777778, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:15" , "temperatura":  30.5, "humedad": 32.3, "velocidad":  0.1, "direccion": 250, "latitud": -31.8494444444444, "longitud":  -60.5351944444444, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:20" , "temperatura":  30.4, "humedad": 32.5, "velocidad":  0.0, "direccion": 265, "latitud": -31.8494722222222, "longitud":  -60.5351666666667, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:25" , "temperatura":  30.2, "humedad": 33.5, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495555555556, "longitud":  -60.5351388888889, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:30" , "temperatura":  29.8, "humedad": -31.9, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496111111111, "longitud":  -60.5351666666667, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:35" , "temperatura":  29.5, "humedad": 32.2, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496388888889, "longitud":  -60.5352222222222, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:40" , "temperatura":  29.1, "humedad": 33.1, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496388888889, "longitud":  -60.5353055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:45" , "temperatura":  28.8, "humedad": 34.4, "velocidad":  0.1, "direccion": 230, "latitud": -31.8496388888889, "longitud":  -60.5353888888889, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:50" , "temperatura":  28.7, "humedad": 34.3, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496111111111, "longitud":  -60.5354722222222, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:33:55" , "temperatura":  28.7, "humedad": 33.7, "velocidad":  0.0, "direccion": 110, "latitud": -31.8496944444444, "longitud":  -60.5355555555556, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:00" , "temperatura":  28.7, "humedad": 33.6, "velocidad":  0.5, "direccion": 0, "latitud": -31.8498055555556, "longitud":  -60.5356111111111, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:05" , "temperatura":  28.7, "humedad": 33.5, "velocidad":  0.2,  "direccion": 95, "latitud": -31.8499444444444, "longitud":  -60.5356666666667, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:10" , "temperatura":  28.6, "humedad": 33.3, "velocidad":  0.5, "direccion": 0, "latitud": -31.8500833333333, "longitud":  -60.5356944444444, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:15" , "temperatura":  28.6, "humedad": 33.4, "velocidad":  0.5, "direccion": 0, "latitud": -31.8502222222222, "longitud":  -60.53575, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:20" , "temperatura":  28.6, "humedad": 32.8, "velocidad":  0.2, "direccion": 90, "latitud": -31.8503611111111, "longitud":  -60.5358333333333, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:25" , "temperatura":  28.7, "humedad": 32.7, "velocidad":  0.1, "direccion": 240, "latitud": -31.8505, "longitud":  -60.5358888888889, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:30" , "temperatura":  28.4, "humedad": 33.0, "velocidad":  0.5, "direccion": 0, "latitud": -31.8506388888889, "longitud":  -60.5359444444444, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:35" , "temperatura":  28.1, "humedad": 33.7, "velocidad":  0.5, "direccion": 0, "latitud": -31.8505555555556, "longitud":  -60.5360555555556, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:40" , "temperatura":  28.1, "humedad": 33.9, "velocidad":  0.5, "direccion": 0, "latitud": -31.8503888888889, "longitud":  -60.536, "caudal": 90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:45" , "temperatura":  28.2, "humedad": 34.2, "velocidad":  0.6, "direccion": 125, "latitud": -31.8502222222222, "longitud":  -60.5359166666667, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:50" , "temperatura":  28.2, "humedad": 33.8, "velocidad":  0.5, "direccion": 0, "latitud": -31.8500555555556, "longitud":  -60.5358333333333, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:34:55" , "temperatura":  28.2, "humedad": 34.3, "velocidad":  0.5, "direccion": 0, "latitud": -31.8498888888889, "longitud":  -60.5357777777778, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:00" , "temperatura":  28.1, "humedad": 33.6, "velocidad":  0.5, "direccion": 0, "latitud": -31.8497222222222, "longitud":  -60.5356944444444, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:05" , "temperatura":  28.1, "humedad": 34.2, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496388888889, "longitud":  -60.5356388888889, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:10" , "temperatura":  28.2, "humedad": 34.4, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496388888889, "longitud":  -60.5356388888889, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:15" , "temperatura":  28.3, "humedad": 34.2, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496388888889, "longitud":  -60.5356388888889, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:20" , "temperatura":  28.3, "humedad": 33.9, "velocidad":  0.2, "direccion": 95, "latitud": -31.8496388888889, "longitud":  -60.5356388888889, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:25" , "temperatura":  28.4, "humedad": 33.8, "velocidad":  0.2, "direccion": 90, "latitud": -31.8496388888889, "longitud":  -60.5356388888889, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:30" , "temperatura":  28.4, "humedad": 33.8, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496388888889, "longitud":  -60.5356111111111, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:35" , "temperatura":  28.2, "humedad": 33.7, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495833333333, "longitud":  -60.5355, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:40" , "temperatura":  27.9, "humedad": 33.9, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495833333333, "longitud":  -60.5354444444444, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:45" , "temperatura":  27.9, "humedad": 34.2, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495833333333, "longitud":  -60.5354444444444, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:50" , "temperatura":  27.9, "humedad": 35.8, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495833333333, "longitud":  -60.5354444444444, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:35:55" , "temperatura":  27.8, "humedad": 36.1, "velocidad":  0.0, "direccion": 255, "latitud": -31.8495833333333, "longitud":  -60.5354444444444, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:00" , "temperatura":  27.8, "humedad": 35.9, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495833333333, "longitud":  -60.5354444444444, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:05" , "temperatura":  27.5, "humedad": 35.0, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495833333333, "longitud":  -60.5355555555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:10" , "temperatura":  27.4, "humedad": 35.8, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495555555556, "longitud":  -60.5356666666667, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:15" , "temperatura":  27.5, "humedad": 36.1, "velocidad":  0.2, "direccion": 90, "latitud": -31.8495555555556, "longitud":  -60.5357777777778, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:20" , "temperatura":  27.5, "humedad": 36.1, "velocidad":  0.2, "direccion": 95, "latitud": -31.8495555555556, "longitud":  -60.5358055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:25" , "temperatura":  27.7, "humedad": 35.6, "velocidad":  0.2, "direccion": 95, "latitud": -31.8495555555556, "longitud":  -60.5358055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:30" , "temperatura":  27.7, "humedad": 35.2, "velocidad":  0.0, "direccion": 205, "latitud": -31.8495555555556, "longitud":  -60.5358055555556, "caudal":  0, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:35" , "temperatura":  27.7, "humedad": 35.0, "velocidad":  0.5, "direccion": 0, "latitud": -31.8495555555556, "longitud":  -60.5358055555556, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:40" , "temperatura":  27.6, "humedad": 34.9, "velocidad":  0.5, "direccion": 0, "latitud": -31.8496666666667, "longitud":  -60.5358055555556, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:45" , "temperatura":  27.4, "humedad": 35.1, "velocidad":  0.5, "direccion": 0, "latitud": -31.8498333333333, "longitud":  -60.5359166666667, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:50" , "temperatura":  27.4, "humedad": 35.2, "velocidad":  0.5, "direccion": 0, "latitud": -31.8499722222222, "longitud":  -60.5359722222222, "caudal":  90, "alarma": "N"},
      {"fecha": "2019-12-08", "hora": "14:36:55" , "temperatura":  27.4, "humedad": 35.2, "velocidad":  0.5, "direccion": 0, "latitud": -31.8501388888889, "longitud":  -60.5360277777778, "caudal":  90, "alarma": "N"}
  ]
  },
    {
    "id": "3",
    "operario": "015",
    "pulverizadora": "001",
    "receta_espendio": "0241",
    "receta_aplicacion": "0712",
    "datos_aplicacion": [
      {"fecha": "2019-12-19", "hora": "07:12:49", "temperatura": 21.68, "humedad": 83.46, "velocidad": 12, "direccion": 325, "latitud": -31.849775, "longitud": -60.5349083333333, "caudal": 90, "alarma": "N"},
      {"fecha": "2019-12-19", "hora": "07:12:49", "temperatura": 21.68, "humedad": 83.46, "velocidad": 12, "direccion": 325, "latitud": -31.849785, "longitud": -60.5349083333333, "caudal": 90, "alarma": "N"}
    ]
  },
    {
    "id": "4",
    "operario": "009",
    "pulverizadora": "014",
    "receta_espendio": "0362",
    "receta_aplicacion": "0341",
    "datos_aplicacion": [
      {"fecha": "2020-01-04", "hora": "07:12:49", "temperatura": 21.68, "humedad": 83.46, "velocidad": 12, "direccion": 325, "latitud": -31.849775, "longitud": -60.5349083333333, "caudal": 90, "alarma": "S"},
      {"fecha": "2019-01-04", "hora": "07:12:49", "temperatura": 21.68, "humedad": 83.46, "velocidad": 12, "direccion": 325, "latitud": -31.849785, "longitud": -60.5349083333333, "caudal": 90, "alarma": "S"}
    ]
  },
    {
    "id": "5",
    "operario": "015",
    "pulverizadora": "001",
    "receta_espendio": "0141",
    "receta_aplicacion": "1072",
    "datos_aplicacion": [
      {"fecha": "2020-01-07", "hora": "07:12:49", "temperatura": 21.68, "humedad": 83.46, "velocidad": 12, "direccion": 325, "latitud": -31.849775, "longitud": -60.5349083333333, "caudal": 90, "alarma": "N"},
      {"fecha": "2020-01-07", "hora": "07:12:49", "temperatura": 21.68, "humedad": 83.46, "velocidad": 12, "direccion": 325, "latitud": -31.849785, "longitud": -60.5349083333333, "caudal": 90, "alarma": "N"}
    ]
  }
]

var id =20;

app.get("/aplicaciones",function(req,res){
   setTimeout(function(){
    res.send(aplicaciones);    

        return;
    }, 2000);
   
   
    
});

app.get("/aplicaciones/:id",function(req,res){
  console.log(req.params.id);
  setTimeout(function(){
  if(req.params.id>0){
      var aplicacion={};
       aplicaciones.forEach(item=>{
    
        if(item.id==req.params.id){
        
          aplicacion= item;
         
        }
      });
      res.send(aplicacion);
      return; 
     
    }else{
        res.send({'type': 'error'});
        return; 
    }
  }, 1000);
});




app.post("/login",function(req,res){
    setTimeout(function(){
        console.log("Llego al servidor "+JSON.stringify(req.body));
        if(req.body.email!=undefined && req.body.password!=undefined){
            if(req.body.email==="usuario"&&req.body.password==="1234"){
                console.log("Sale del servidor "+"{'type': 'User'}")
                res.send({'type': 'User'});    
            }else if(req.body.email==="admin"&&req.body.password==="1234"){
                console.log("Sale del servidor "+"{'type': 'Admin'}")
                res.send({'type': 'Admin'});    
            }else{
                console.log("Sale del servidor "+"{'type': 'error'}")
                res.send({'type': 'error'});
            }
            return;
        }
        console.log("Sale del servidor "+"{'type': 'error'}")
        res.send({'type': 'error'});
    },2000);
    
});


app.post("/aplicaciones",function(req,res){
  console.log(req.body);
    setTimeout(function(){
        if((req.body.operario!= undefined&&req.body.operario!= "") &&(req.body.pulverizadora!= undefined&&req.body.pulverizadora!= "") 
      &&  (req.body.receta_espendio!= undefined) && (req.body.receta_aplicacion!= undefined)){
     
      id = id +1;
       
      
      var data = {
		"id":id,
		"operario":req.body.operario,
		"pulverizadora":req.body.pulverizadora,
		"receta_espendio":req.body.receta_espendio,
		"receta_aplicacion":req.body.receta_aplicacion,
		"datos_aplicacio":req.body.datos_aplicacion};
        productos.push(data);
                res.send(data);    
     
            return;
        }
        res.send({'type': 'error'});
    },2000);
    
});

app.put("/aplicaciones/:id",function(req,res){
  console.log(req.params.id);
    setTimeout(function(){
        
       console.log(req.body);

        if((req.body.operario!= undefined&&req.body.operario!= "") &&(req.body.pulverizadora!= undefined&&req.body.pulverizadora!= "") 
      &&  (req.body.receta_espendio!= undefined) && (req.body.receta_aplicacion!= undefined)){
  
      
        
        for(var i =0;i<aplicaciones.length;i++){
          if(req.params.id== aplicaciones[i].id){
            console.log("Atualiza")
            aplicaciones[i].operario=req.body.operario;
            aplicaciones[i].pulverizadora=req.body.pulverizadora;
            aplicaciones[i].receta_espendio=req.body.receta_espendio;
            aplicaciones[i].receta_aplicacion=req.body.receta_aplicacion;
			aplicaciones[i].datos_aplicacion=req.body.datos_aplicacion;
              res.send(req.body);    
              return;
          }
        }
    
        }
        res.send({'type': 'error'});
    },2000);
    
});



app.delete("/aplicaciones/:id",function(req,res){
  console.log(req.params.id);
    setTimeout(function(){
        
       console.log(req.params.id);
        if(req.params.id!= undefined){
  
      for(var i =0;i<aplicaciones.length;i++){
          if(req.params.id== aplicaciones[i].id){
            aplicaciones.splice(i,1);
          var data = {"type":"ok"};
              res.send(data);    
              return;
          }
        }
      
      

        }
        res.send({'type': 'error'});
    },2000);
    
});

app.listen(3000,function(){
    console.log("Api en el puerto 3000");
});