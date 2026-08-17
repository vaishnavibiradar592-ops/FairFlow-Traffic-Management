def load_percent(traffic, capacity):
    return round(traffic / capacity * 100, 1)


def simulate(traffic, capacity, moves):
    before = {
        road: load_percent(traffic[road], capacity[road])
        for road in traffic
    }

    after = traffic.copy()

    for move in moves:
        source = move["from"]
        target = move["to"]
        amount = move["vehicles"]

        after[source] = max(
            0,
            after[source] - amount
        )

        after[target] = (
            after.get(target, 0) + amount
        )

    result = []

    for road in traffic:
        result.append({
            "road": road,
            "before": before[road],
            "after": load_percent(
                after[road],
                capacity[road]
            )
        })

    return result


def emergency(route):
    return {
        "mode": "EMERGENCY",
        "priority_route": route,
        "message": "Simulated ambulance priority corridor active."
    }


if __name__ == "__main__":

    traffic = {
        "R103": 2100,
        "R106": 900
    }

    capacity = {
        "R103": 2200,
        "R106": 2300
    }

    moves = [
        {
            "from": "R103",
            "to": "R106",
            "vehicles": 300
        }
    ]

    print("BEFORE / AFTER SIMULATION")

    result = simulate(
        traffic,
        capacity,
        moves
    )

    for road in result:
        print(
            road["road"],
            "Before:",
            road["before"],
            "%",
            "After:",
            road["after"],
            "%"
        )

    print("\nEMERGENCY SIMULATION")

    print(
        emergency(
            ["J1", "J2", "J6", "H1"]
        )
    )