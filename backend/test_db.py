import psycopg2

conn = psycopg2.connect(
    host="localhost",
    port=5432,
    database="cashflow_copilot",
    user="cashflow_admin",
    password="cashflow123"
)

cur = conn.cursor()

cur.execute("SELECT version();")

print(cur.fetchone())

conn.close()