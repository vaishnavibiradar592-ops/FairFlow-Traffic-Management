import pickle


# ============================================================
# LOAD THE TRAINED AI MODEL
# ============================================================

with open("ai/model/traffic_model.pkl", "rb") as file:
    saved = pickle.load(file)

model = saved["model"]
road_numbers = saved["road_numbers"]
day_numbers = saved["day_numbers"]


# ============================================================
# ROAD CAPACITIES
# ============================================================
# Demo capacities for our traffic simulation.
# Later, Person 1 can replace these with the actual
# capacities from the road dataset.

road_capacities = {
    "R101": 2000,
    "R102": 1800,
    "R103": 2200,
    "R104": 1600,
    "R105": 1900,
    "R106": 2000,
    "R107": 1500,
    "R108": 1400,
    "R109": 1700,
    "R110": 2100,
    "R111": 1600,
    "R112": 2100
}


# ============================================================
# PREDICT TRAFFIC
# ============================================================

def predict_traffic(road_id, day, time):

    # Check road
    if road_id not in road_numbers:
        raise ValueError(
            f"Road {road_id} was not found."
        )

    # Check day
    if day not in day_numbers:
        raise ValueError(
            f"Day {day} was not found."
        )

    # Check time format
    if len(time) != 5 or time[2] != ":":
        raise ValueError(
            "Time must be written like 17:00 or 09:30."
        )

    # Convert time to decimal hour
    #
    # Example:
    # 17:00 → 17.0
    # 17:30 → 17.5

    hour = (
        int(time[:2])
        + int(time[3:5]) / 60
    )

    # Convert road and day to numbers

    road_number = road_numbers[road_id]

    day_number = day_numbers[day]

    # Give information to AI

    prediction = model.predict(
        [[
            hour,
            day_number,
            road_number
        ]]
    )[0]

    return round(float(prediction))


# ============================================================
# CALCULATE CONGESTION
# ============================================================

def calculate_congestion(
    predicted_traffic,
    road_capacity
):

    load = (
        predicted_traffic
        / road_capacity
    ) * 100

    if load > 100:
        status = "CRITICAL"

    elif load > 80:
        status = "HEAVY"

    elif load > 60:
        status = "MODERATE"

    else:
        status = "LOW"

    return round(load, 1), status


# ============================================================
# GET USER INPUT
# ============================================================

def get_user_input():

    print()
    print("======================================")
    print("       FAIRFLOW TRAFFIC AI")
    print("======================================")

    print()
    print("Available roads:")
    print(", ".join(sorted(road_numbers.keys())))

    print()
    road = input(
        "Enter road ID (example R101): "
    ).strip().upper()

    print()
    print("Available days:")
    print(", ".join(day_numbers.keys()))

    print()
    day = input(
        "Enter day (example Monday): "
    ).strip().capitalize()

    print()

    time = input(
        "Enter time (example 17:00): "
    ).strip()

    return road, day, time


# ============================================================
# MAIN PROGRAM
# ============================================================

if __name__ == "__main__":

    try:

        # Get information from user

        road, day, time = get_user_input()

        # Find road capacity

        if road in road_capacities:

            capacity = road_capacities[road]

        else:

            capacity = 2000

        # Ask AI for prediction

        predicted = predict_traffic(
            road,
            day,
            time
        )

        # Calculate congestion

        load, status = calculate_congestion(
            predicted,
            capacity
        )

        # ====================================================
        # DISPLAY RESULT
        # ====================================================

        print()
        print("======================================")
        print("          AI PREDICTION RESULT")
        print("======================================")

        print()
        print("Road:", road)
        print("Day:", day)
        print("Time:", time)

        print()
        print("--------------------------------------")

        print(
            "Predicted vehicles:",
            predicted
        )

        print(
            "Road capacity:",
            capacity
        )

        print(
            "Traffic load:",
            str(load) + "%"
        )

        print(
            "Congestion status:",
            status
        )

        print("--------------------------------------")

        # Show a simple explanation

        print()

        if status == "CRITICAL":

            print(
                "🚨 WARNING: Severe congestion predicted!"
            )

            print(
                "Recommendation: Redirect some traffic."
            )

        elif status == "HEAVY":

            print(
                "⚠️ Heavy traffic predicted."
            )

            print(
                "Recommendation: Consider an alternative route."
            )

        elif status == "MODERATE":

            print(
                "🟡 Moderate traffic predicted."
            )

        else:

            print(
                "🟢 Traffic is within a safe range."
            )

        print()
        print("======================================")

    except ValueError as error:

        print()
        print("ERROR:", error)
        print()
        print(
            "Please check the road, day, and time "
            "and try again."
        )