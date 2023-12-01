from flask import jsonify
from flask.views import MethodView
from QueryController.query10 import Query10


class Query10API(MethodView):
    # Default Const
    def __init__(self):
        self.q10 = Query10()

    def get(self):
        result = self.q10.execute1()  # Data Frame
        return jsonify(result)       # Print Jsonify Result
