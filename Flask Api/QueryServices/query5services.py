from flask import jsonify
from flask.views import MethodView
from QueryController.query5 import Query5


class Query5API(MethodView):
    # Default Const
    def __init__(self):
        self.q5 = Query5()

    def get(self):
        result = self.q5.execute1()  # Data Frame
        return jsonify(result)       # Print Jsonify Result
