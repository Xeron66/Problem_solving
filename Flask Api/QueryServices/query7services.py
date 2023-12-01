from flask import jsonify, request
from flask.views import MethodView
from QueryController.query7 import Query7

class Query7API(MethodView):
    # Default Const
    def __init__(self):
        pass

    def get(self):
        self.q7 = Query7(days=request.args.get('days', 0))  # Default to 0 if not provided
        result = self.q7.execute1()  # Data Frame
        return jsonify(result)       # Print Jsonify Result

    def post(self):
        d = request.json['days']
        self.q7 = Query7(days=d)
        result = self.q7.execute1()  # Corrected method name from execute to execute1
        return jsonify(result)
