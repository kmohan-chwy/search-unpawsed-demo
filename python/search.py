import json
from lorem_text import lorem

def search(query):
    # Dummy logic to return search results
    results = [
        {"imageUrl": "https://images.pexels.com/photos/358579/pexels-photo-358579.jpeg", "resultText": lorem.paragraph()},
        {"imageUrl": "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg", "resultText": lorem.paragraph()},
        {"imageUrl": "https://images.pexels.com/photos/2692467/pexels-photo-2692467.jpeg", "resultText": lorem.paragraph()},
        {"imageUrl": "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg", "resultText": lorem.paragraph()},
        {"imageUrl": "https://images.pexels.com/photos/2703481/pexels-photo-2703481.jpeg", "resultText": lorem.paragraph()},
        {"imageUrl": "https://images.pexels.com/photos/262669/pexels-photo-262669.jpeg", "resultText": lorem.paragraph()},
        {"imageUrl": "https://images.pexels.com/photos/206290/pexels-photo-206290.jpeg", "resultText": lorem.paragraph()},
    ]
    return json.dumps(results)
