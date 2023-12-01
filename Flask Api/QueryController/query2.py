from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query2:
    # Connecting to DB
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        # SLQ code in Query
        query = "select t.trans_type, sum(f.total_price) " \
                "from ecom_star_schema.fact_table f " \
                "join ecom_star_schema.trans_dim t on t.payment_key = f.payment_key " \
                "group by cube (t.trans_type) " \
                "order by t.trans_type "

        cur.execute(query)
        result = cur.fetchall()

        # Pandas Pre-processing
        pd_data = pd.DataFrame(list(result), columns=['trans_type', 'total_sales'])
        pd_data['total_sales'] = pd_data['total_sales'].astype('float64')
        pd_data = pd_data.dropna()

        return pd_data.to_dict(orient='records')


if __name__ == '__main__':
    Q2 = Query2()
    data = Q2.execute1()
    print(data)