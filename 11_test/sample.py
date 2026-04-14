def calculate_score(score):
    if score >= 90:
        grate = "A"
    elif score >= 80:
        grate = "B"
    elif score >= 70:
        grate = "C"
    else:
        grate = "D"
    return grate

score = 85
result = calculate_score(score)
print(f"成績は｛result｝です")