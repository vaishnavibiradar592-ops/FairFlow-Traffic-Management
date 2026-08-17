from flask import Flask, request, jsonify
from flask_cors import CORS

from predict import predict_traffic, calculate_congestion


app = Flask(__name__)

CORS(app)


# ------------------------------------------
# TEST ROUTE
# ------------------------------------------

@app.route("/", methods=["GET"])
def home():

    return jsonify({
        "message": "FairFlow AI is running!"
    })


# ------------------------------------------
# TRAFFIC PREDICTION
# ------------------------------------------

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        road = data.get("road")
        day = data.get("day")
        time = data.get("time")

        capacity = data.get("capacity", 2000)


        predicted = predict_traffic(
            road,
            day,
            time
        )


        load, status = calculate_congestion(
            predicted,
            capacity
        )


        return jsonify({

            "success": True,

            "road": road,

            "day": day,

            "time": time,

            "predicted_vehicles": predicted,

            "capacity": capacity,

            "traffic_load": load,

            "status": status

        })


    except Exception as error:

        return jsonify({

            "success": False,

            "error": str(error)

        }), 400


# ------------------------------------------
# START SERVER
# ------------------------------------------

if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=8000,
        debug=True
    )