from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query1:
    # Connecting to DB
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        # SLQ code in Query
        query = "select s.division, sum(t.total_price) " \
                "from ecom_star_schema.fact_table t " \
                "join ecom_star_schema.store_dim s on s.store_key = t.store_key " \
                "group by cube (s.division) " \
                "order by s.division "

        cur.execute(query)
        result = cur.fetchall()

        # Pandas Pre-processing
        pd_data = pd.DataFrame(list(result), columns=['division', 'sales'])
        pd_data['sales'] = pd_data['sales'].astype('float64')
        pd_data = pd_data.dropna()

        return pd_data.to_dict(orient='records')


if __name__ == '__main__':
    Q1 = Query1()
    data = Q1.execute1()
    print(data)