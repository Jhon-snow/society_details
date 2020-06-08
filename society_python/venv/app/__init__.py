# __intit__.py
# @author :RATHI
from flask import Flask
from flask_mail import Mail
from config import Config
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
app.config.from_object(Config)
db=SQLAlchemy(app)
migrate=Migrate(app,db)
mail=Mail(app)
app.config['DEBUG'] = True
app.debug=True


from app import routes, models