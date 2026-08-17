import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import pickle
import os

# ==========================================
# 1. LOAD TRAFFIC DATA
# ==========================================

data = pd.read_csv("ai/data/traffic.csv")

print("Traffic data loaded!")
print("Number of records:", len(data))


# ==========================================
# 2. CONVERT TIME INTO USEFUL NUMBERS
# ==========================================

# Example:
# 17:30 becomes 17.5

data["hour"] = (
    data["time"].str[:2].astype(int)
    + data["time"].str[3:5].astype(int) / 60
)


# ==========================================
# 3. CONVERT DAY INTO A NUMBER
# ==========================================

day_numbers = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
    "Saturday": 5,
    "Sunday": 6
}

data["day_number"] = data["day"].map(day_numbers)


# ==========================================
# 4. GIVE EACH ROAD A NUMBER
# ==========================================

road_numbers = {
    road: number
    for number, road in enumerate(
        data["road_id"].unique()
    )
}

data["road_number"] = data["road_id"].map(
    road_numbers
)


# ==========================================
# 5. SELECT WHAT AI SHOULD LEARN
# ==========================================

X = data[
    [
        "hour",
        "day_number",
        "road_number"
    ]
]


# ==========================================
# 6. SELECT WHAT AI SHOULD PREDICT
# ==========================================

y = data["vehicles"]


# ==========================================
# 7. CREATE RANDOM FOREST
# ==========================================

model = RandomForestRegressor(
    n_estimators=50,
    max_depth=10,
    random_state=42,
    n_jobs=-1
)


# ==========================================
# 8. TRAIN THE AI
# ==========================================

print("Training AI...")

model.fit(X, y)


# ==========================================
# 9. CREATE MODEL FOLDER
# ==========================================

os.makedirs("ai/model", exist_ok=True)


# ==========================================
# 10. SAVE EVERYTHING NEEDED FOR PREDICTION
# ==========================================

with open(
    "ai/model/traffic_model.pkl",
    "wb"
) as file:

    pickle.dump(
        {
            "model": model,
            "road_numbers": road_numbers,
            "day_numbers": day_numbers
        },
        file
    )


# ==========================================
# 11. SHOW SUCCESS
# ==========================================

print()
print("==============================")
print("AI TRAINING COMPLETE!")
print("==============================")

print(
    "Records used:",
    len(data)
)

print(
    "Roads learned:",
    list(road_numbers.keys())
)

print(
    "Days learned:",
    list(day_numbers.keys())
)

print(
    "Model saved successfully!"
)

print("==============================")