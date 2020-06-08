# routes.py
# @author :RATHI
import datetime
from random import random

import jwt
from flask import request, make_response, jsonify


from app import app, db
from app.models import Userdetail, Societydetail


# .................................................encode_auth_token....................................................


def encode_auth_token(username):
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=5000),
            'iat': datetime.datetime.utcnow(),
            'sub': username
        }
        return jwt.encode(
            payload,
            app.config.get('SECRET_KEY'),
            algorithm='HS256'
        )
    except Exception as e:
        return e

# .....................................................decode_auth_token................................................


def decode_auth_token(auth_token):
    """
    Decodes the auth token
    :param auth_token:
    :return: integer|string
    """
    try:
        payload = jwt.decode(auth_token, app.config.get('SECRET_KEY'))
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'


# ...............................................sign_up method.........................................................



def registeruser():
    name = request.json.get('name')
    username = request.json.get('username')
    address = request.json.get('address')
    password = request.json.get('password')
    print(name)
    user = Userdetail(name=name, username=username, address=address, password=password)
    db.session.add(user)
    db.session.commit()

    auth_token = encode_auth_token(username=username)
    # print(auth_token)
    return make_response(auth_token.decode()), 200


# ..................................................sign_in_method......................................................


def loginuser():
    username = request.json.get("username")
    password = request.json.get("password")
    user = Userdetail.query.filter_by(username=username).first()
    print(user.password)
    if password == user.password:
        auth_token = encode_auth_token(username=username)
        print(auth_token)
        return make_response(auth_token.decode()), 200
    return "your password or username is not correct"


# .............................................society_register_post_method.............................................

def registersociety():
    societyname = request.json.get("societyname")
    location = request.json.get("location")
    societytype = request.json.get("societytype")
    fencing = request.json.get("fencing")
    guard = request.json.get("guard")
    no_of_wings = request.json.get("no_of_wings")
    no_of_floor = request.json.get("no_of_floor")
    no_of_flat = request.json.get("no_of_flats")
    total_flat = request.json.get("total_no_of_flats")
    name = request.json.get("name")
    mobileno = request.json.get("mobileno")
    emailid = request.json.get("emailid")
    securitylift = request.json.get("securitylift")
    liftcapacity = request.json.get("liftcapacity")
    vechileparking = request.json.get("vechileparking")
    society = Societydetail(societyname=societyname, location=location, society_type=societytype,
            fencing=fencing, guard=guard, no_of_wings=no_of_wings,
            no_of_floors=no_of_floor, no_of_flats=no_of_flat,
            total_flats=total_flat, name=name, phone_no=mobileno,
            email_id=emailid, service_lift=securitylift, lift_capacity=liftcapacity,
            vechile_parking=vechileparking )
    db.session.add(society)
    db.session.commit()
    return "society details registered successfully"


# ............................................society_get_method........................................................

def getsocietyinfo():
    cols = ['societyname', 'location', 'society_type', 'fencing', 'guard', 'no_of_wings', 'no_of_floors', 'no_of_flats',
            'total_flats', 'name', 'phone_no', 'email_id', 'service_lift', 'lift_capacity', 'vechile_parking']
    societydetails = Societydetail.query.all()
    result = [{col: getattr(d, col) for col in cols} for d in societydetails]
    print(societydetails)
    return jsonify(result=result)
    # return make_response(societydetails), 200


# ..................................................change_pass_method..................................................

def changepass():
    new_password = request.json.get("new_password")
    old_password = request.json.get("old_password")
    user = Userdetail.query.filter_by(password=old_password).first()
    if user:
        user.password = new_password
        db.session.commit()
        return "password updated successfully"
    return "wrong password"

# .....................................................delete_card_method...............................................

def deletesocietydetails():
    location = request.json.get('location')
    print(location)
    Societydetail.query.filter_by(location=location).delete()
    db.session.commit()
    return "deleted succesfully"


# ................................................forget_password_method................................................

def forgetpass():
    username = request.json.get("username")
    print(str(int(random()*100000)))
    newpass = str(int(random()*100000))
    user = Userdetail.query.filter_by(username=username).first()
    user.password= newpass
    db.session.commit()
    return "your new password is {}".format(newpass)

# .................................................edit_society_details_metthod.........................................

def editdetails():
    societyname = request.json.get("societyname")
    location = request.json.get("location")
    societytype = request.json.get("societytype")
    fencing = request.json.get("fencing")
    guard = request.json.get("guard")
    no_of_wings = request.json.get("no_of_wings")
    no_of_floors = request.json.get("no_of_floor")
    no_of_flats = request.json.get("no_of_flats")
    total_flats = request.json.get("total_no_of_flats")
    name = request.json.get("name")
    phone_no = request.json.get("mobileno")
    email_id = request.json.get("emailid")
    service_lift = request.json.get("securitylift")
    lift_capacity = request.json.get("liftcapacity")
    vechile_parking = request.json.get("vechileparking")
    society = Societydetail.query.filter_by(societyname=societyname).first()
    # ..edit details
    society.societyname = societyname
    society.location = location
    society.society_type = societytype
    society.fencing = fencing
    society.guard = guard
    society.no_of_wings = no_of_wings
    society.no_of_floors = no_of_floors
    society.no_of_flats = no_of_flats
    society.total_flats = total_flats
    society.name = name
    society.phone_no = phone_no
    society.email_id = email_id
    society.service_lift = service_lift
    society.lift_capacity = lift_capacity
    society.vechile_parking = vechile_parking
    db.session.commit()
    return "successfully updated"




# .................................................sign_up_api..........................................................


# auth_token1 = str()
@app.route('/signup', methods=['POST'])
def signup():
    return registeruser()


# ..................................................sign_in_api.........................................................


@app.route('/signin', methods=["POST"])
def login():
    return loginuser()


# ............................................society_register_post_api.................................................

@app.route('/societyregister', methods=["POST"])
def register():
    return registersociety()


# ................................................society_get_api.......................................................

@app.route('/societydetails', methods=["GET"])
def getsocietydetails():
    return getsocietyinfo()

# ..................................................change_password_api.................................................


@app.route('/changepassword', methods=["PUT"])
def changepassword():
    return changepass()


# ...................................................delete_card_api....................................................

@app.route('/deletesociety', methods=["DELETE"])
def deletesociety():
    return deletesocietydetails()


# ..................................................forget_password_api.................................................

@app.route('/forgetpass', methods=["PUT"])
def forgetpassword():
    return  forgetpass()

# ..............................................edit_society_details_api................................................

@app.route('/editsocietydetails', methods=["PUT"])
def editsocietydetails():
    return editdetails()
