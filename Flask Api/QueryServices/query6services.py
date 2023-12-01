from flask import jsonify
from flask.views import MethodView
from QueryController.query6 import Query6


class Query6API(MethodView):
    # Default Const
    def __init__(self):
        self.q6 = Query6()

    def get(self):
        result = self.q6.execute1()  # Data Frame
        return jsonify(result)       # Print Jsonify Result
