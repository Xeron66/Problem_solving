from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query3:
    # Connecting to DB
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        # SLQ code in Query
        query = "select s.division, sum(f.total_price) " \
                "from ecom_star_schema.fact_table f " \
                "join ecom_star_schema.store_dim s on s.store_key = f.store_key " \
                "where s.division = 'Barishal' " \
                "group by cube (s.division) " \
                "order by s.division " \

        cur.execute(query)
        result = cur.fetchall()

        # Pandas Pre-processing
        pd_data = pd.DataFrame(list(result), columns=['Division', 'total_sales'])
        pd_data['total_sales'] = pd_data['total_sales'].astype('float64')
        pd_data = pd_data.dropna()

        return pd_data.to_dict(orient='records')


if __name__ == '__main__':
    Q3 = Query3()
    data = Q3.execute1()
    print(data)