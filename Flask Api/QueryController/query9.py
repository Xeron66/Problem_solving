from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query9:
    # Connecting to DB
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        # SLQ code in Query
        query = '''
                SELECT i.item_name, c.division,  SUM(f.quantity)
                FROM ecom_star_schema.fact_table f
                JOIN ecom_star_schema.item_dim i on i.item_key = f.item_key
                JOIN ecom_star_schema.store_dim c on c.store_key = f.store_key
                GROUP BY CUBE(c.division, i.item_name, f.quantity)
                order by i.item_name, SUM(f.quantity) ASC
        '''

        cur.execute(query)
        result = cur.fetchall()

        # Pandas Pre-processing
        pd_data = pd.DataFrame(list(result), columns=['Division', 'Item', 'Quantity'])
        pd_data['Quantity'] = pd_data['Quantity'].astype('float64')
        pd_data = pd_data.dropna()

        return pd_data.to_dict(orient='records')


if __name__ == '__main__':
    Q9 = Query9()
    data = Q9.execute1()
    print(data)