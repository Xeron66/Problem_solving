from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query8:
    # Connecting to DB
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        # SLQ code in Query
        query = '''
                select t.quarter, i.item_name, SUM(f.quantity)
                from ecom_star_schema.fact_table f
                join ecom_star_schema.time_dim t on t.time_key = f.time_key
                join ecom_star_schema.item_dim i on i.item_key = f.item_key
                group by CUBE(t.quarter, i.item_name, f.quantity)
                order by t.quarter, SUM(f.quantity) ASC
        '''

        cur.execute(query)
        result = cur.fetchall()

        # Pandas Pre-processing
        pd_data = pd.DataFrame(list(result), columns=['Quarter', 'Item', 'Quantity'])
        pd_data['Quantity'] = pd_data['Quantity'].astype('float64')
        pd_data = pd_data.dropna()

        return pd_data.to_dict(orient='records')


if __name__ == '__main__':
    Q7 = Query7()
    data = Q7.execute1()
    print(data)