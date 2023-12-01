from flask import jsonify
from flask.views import MethodView
from QueryController.query2 import Query2


class Query2API(MethodView):
    # Default Const
    def __init__(self):
        self.q2 = Query2()

    def get(self):
        result = self.q2.execute1()  # Data Frame
        return jsonify(result)       # Print Jsonify Result
