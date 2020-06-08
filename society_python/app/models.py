# models.py
# @author :RATHI

from app import db

# .....................................................user_model.......................................................
class Userdetail(db.Model):
    name = db.Column(db.String(), primary_key=True)
    username = db.Column(db.String(64), unique=True)
    address = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    __tablename__ = 'userdetail'

    def __repr__(self):
        return '< Userdetail {}>'.format(self.username)



# ......................................................society_model..................................................



class Societydetail(db.Model):
    societyname = db.Column(db.String(100),primary_key=True)
    location = db.Column(db.String(64), unique=True)
    society_type = db.Column(db.String(64))
    fencing = db.Column(db.String(64))
    guard = db.Column(db.String(64))
    no_of_wings = db.Column(db.Integer())
    no_of_floors = db.Column(db.Integer())
    no_of_flats = db.Column(db.Integer())
    total_flats = db.Column(db.Integer())
    name = db.Column(db.String(64))
    phone_no = db.Column(db.String(10),unique=True)
    email_id = db.Column(db.String(64), unique=True)
    service_lift = db.Column(db.String(64))
    lift_capacity = db.Column(db.Integer())
    vechile_parking = db.Column(db.String(64))

    tablename__ = 'societydetail'

    def __repr__(self):
        return '<Societydetail {}>'.format(self.societyname)