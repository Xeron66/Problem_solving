from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query4:
    # Connecting to DB
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        # SLQ code in Query
        query = (
                "select t.year, sum(f.total_price) " 
                "from ecom_star_schema.fact_table f " 
                "join ecom_star_schema.time_dim t on t.time_key = f.time_key " 
                "where t.year = '2015' " 
                "group by cube (t.year) "
        )

        cur.execute(query)
        result = cur.fetchall()

        # Pandas Pre-processing
        pd_data = pd.DataFrame(list(result), columns=['Year', 'total_sales'])
        pd_data['total_sales'] = pd_data['total_sales'].astype('float64')
        pd_data = pd_data.dropna()

        return pd_data.to_dict(orient='records')


if __name__ == '__main__':
    Q4 = Query4()
    data = Q4.execute1()
    print(data)