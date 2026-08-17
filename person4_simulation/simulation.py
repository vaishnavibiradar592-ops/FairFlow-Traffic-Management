def load_percent(traffic, capacity):
    return round(traffic / capacity * 100, 1)


def simulate(traffic, capacity, prediction):
    predicted_road = prediction["predictedRoad"]
    recommended_road = prediction["recommendedRoad"]
    vehicles = prediction["vehicles"]

    # Calculate BEFORE congestion
    before = {
        road: load_percent(traffic[road], capacity[road])
        for road in traffic
    }

    # Copy traffic so original data is not changed
    after = traffic.copy()

    # Move vehicles from predicted road
    # to recommended road
    after[predicted_road] = max(
        0,
        after[predicted_road] - vehicles
    )

    after[recommended_road] = (
        after.get(recommended_road, 0) + vehicles
    )

    # Calculate AFTER congestion
    after_percent = {
        road: load_percent(after[road], capacity[road])
        for road in traffic
    }

    return {
        "predictedRoad": predicted_road,
        "recommendedRoad": recommended_road,
        "vehiclesMoved": vehicles,
        "before": before,
        "after": after_percent
    }


def emergency(emergency_result):
    return {
        "mode": "EMERGENCY",
        "vehicle": emergency_result["vehicle"],
        "priority_route": [
            emergency_result["start"],
            emergency_result["recommendedRoad"],
            emergency_result["destination"]
        ],
        "message": emergency_result["message"]
    }


if __name__ == "__main__":

    # Person 3 optimizer test case
    prediction = {
        "predictedRoad": "R104",
        "predictedTraffic": 431,
        "recommendedRoad": "R102",
        "vehicles": 200
    }

    traffic = {
        "R104": 431,
        "R102": 600
    }

    capacity = {
        "R104": 1600,
        "R102": 2000
    }

    print("BEFORE / AFTER SIMULATION")

    result = simulate(
        traffic,
        capacity,
        prediction
    )

    print(result)

    print("\nEMERGENCY SIMULATION")

    emergency_result = {
        "emergency": True,
        "vehicle": "AMBULANCE",
        "start": "R101",
        "destination": "R104",
        "recommendedRoad": "R102",
        "message": "Give ambulance priority on the recommended route."
    }

    print(
        emergency(
            emergency_result
        )
    )