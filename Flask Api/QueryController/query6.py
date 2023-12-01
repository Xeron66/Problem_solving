from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query6:
    # Connecting to DB
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        # SLQ code in Query
        query = (
                "select s.store_key, i.item_name, SUM(f.quantity) "
                "from ecom_star_schema.fact_table f "
                "join ecom_star_schema.store_dim s on s.store_key = f.store_key "
                "join ecom_star_schema.item_dim i on i.item_key = f.item_key "
                "group by ROLLUP(s.store_key, i.item_name) "
                "order by s.store_key, SUM(f.quantity) DESC "
        )

        cur.execute(query)
        result = cur.fetchall()

        # Pandas Pre-processing
        pd_data = pd.DataFrame(list(result), columns=['Store', 'Item', 'Quantity'])
        pd_data['Quantity'] = pd_data['Quantity'].astype('float64')
        pd_data = pd_data.dropna()
        pd_data = pd_data.groupby('Store').head(3)

        return pd_data.to_dict(orient='records')


if __name__ == '__main__':
    Q6 = Query6()
    data = Q6.execute1()
    print(data)