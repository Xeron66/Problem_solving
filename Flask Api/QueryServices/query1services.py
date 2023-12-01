from flask import jsonify
from flask.views import MethodView
from QueryController.query1 import Query1


class Query1API(MethodView):
    # Default Const
    def __init__(self):
        self.q1 = Query1()

    def get(self):
        result = self.q1.execute1()  # Data Frame
        return jsonify(result)       # Print Jsonify Result
