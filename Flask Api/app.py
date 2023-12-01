from flask import jsonify, request, Flask
from router import query_api

app = Flask(__name__)

app.register_blueprint(query_api, url_prefix='/api/')

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
