from flask import Flask, request
from search import search

app = Flask(__name__)

@app.route('/api/search', methods=['GET'])
def api_search():
    text = request.args.get('text')
    result = search(text)
    return result

if __name__ == '__main__':
    app.run()
