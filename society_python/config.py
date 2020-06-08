# config.py
# @author :RATHI

import os
basedir=os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL'] or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS= False #signal to the application whenever there is a change in db
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_precious')
