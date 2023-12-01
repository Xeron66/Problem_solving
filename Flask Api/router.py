from QueryServices.query1services import Query1API
from QueryServices.query2services import Query2API
from QueryServices.query3services import Query3API
from QueryServices.query4services import Query4API
from QueryServices.query5services import Query5API
from QueryServices.query6services import Query6API
from QueryServices.query7services import Query7API
from QueryServices.query8services import Query8API
from QueryServices.query9services import Query9API
from QueryServices.query10services import Query10API





from flask import Blueprint

query_api = Blueprint('query_api', __name__)

query_api.add_url_rule('/q1', view_func=Query1API.as_view("Get Division-wise Sales"))
query_api.add_url_rule('/q2', view_func=Query2API.as_view("Customer wise total_sale_price"))
query_api.add_url_rule('/q3', view_func=Query3API.as_view("Total Sales of Barishal"))
query_api.add_url_rule('/q4', view_func=Query4API.as_view("Total Sales of 2015"))
query_api.add_url_rule('/q5', view_func=Query5API.as_view("Total Sales of Barishal in 2015"))
query_api.add_url_rule('/q6', view_func=Query6API.as_view("Top three most often purchased products of each store"))
query_api.add_url_rule('/q7', view_func=Query7API.as_view("Get the products that have been sold since X days?"))
query_api.add_url_rule('/q8', view_func=Query8API.as_view("Get the season (quarter) that is the worst for each product item"))
query_api.add_url_rule('/q9', view_func=Query9API.as_view("Get the total sales of items geographically (division-wise)"))
query_api.add_url_rule('/q10', view_func=Query10API.as_view("Get the average sales of products sales per store monthly"))









# # ====================================
# query_api.add_url_rule('/q1/division', view_func=Query1DivisionAPI.as_view("all division"))
# query_api.add_url_rule('/q1/district', view_func=Query1DistrictAPI.as_view("all district"))