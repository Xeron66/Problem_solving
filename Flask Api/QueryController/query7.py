from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query7:
    # Connecting to DB
    def __init__(self, days):
        self.days = days
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        print(self.days)

    def execute1(self):
        con = self.con
        cur = con.cursor()

        # SLQ code in Query
        con = self.con
        cur = con.cursor()
        query = '''SELECT i.item_name 
                   FROM ecom_star_schema.fact_table f
                   JOIN ecom_star_schema.item_dim AS i ON i.item_key=f.item_key 
                   JOIN ecom_star_schema.time_dim t ON t.time_key=f.time_key
                   WHERE t.date>(CURRENT_DATE - integer '{}')'''.format(self.days)

        select_stmt = query
        cur.execute(select_stmt)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns=['Item_Name'])
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')


if __name__ == '__main__':
    Q7 = Query7()
    data = Q7.execute1()
    print(data)
