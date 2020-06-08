import os
import unittest

# from app import app, db, mail
# import app
if __name__ == '__main__':
    from app import app, db, mail

TEST_DB = 'test.db'
from config import basedir

class BasicTests(unittest.TestCase):

    ############################
    #### setup and teardown ####
    ############################

    # executed prior to each test
    def setUp(self):
        app.config['TESTING'] = True
        app.config['WTF_CSRF_ENABLED'] = False
        app.config['DEBUG'] = False
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
                                                os.path.join(basedir, TEST_DB)
        self.app = app.test_client()

        db.create_all()

        # Disable sending emails during unit testing
        mail.init_app(app)
        self.assertEqual(app.debug, False)

    # executed after each test
    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def register(self, name, username, password, address):
        return self.app.post(
            '/signup',
            data=dict(name=name,username=username, password=password, confirm=address),
            follow_redirects=True
        )

    def login(self, username, password):
        return self.app.post(
            '/signin',
            data=dict( username=username, password=password),
            follow_redirects=True
        )

    def test_invalid_user_registration_different_passwords(self):
        response = self.register('patkennedy79@gmail.com', 'FlaskIsAwesome', 'FlaskIsNotAwesome')
        self.assertIn(b'Field must be equal to password.', response.data)

    def test_valid_user_registration(self):
        response = self.register('patkennedy','patkennedy79@gmail.com', 'FlaskIsAwesome', 'FlaskIsAwesome')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Thanks for registering!', response.data)

    def test_valid_user_signin(self):
        response = self.login( 'patkennedy79@gmail.com', 'FlaskIsAwesome')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Thanks for login!', response.data)


    def test_invalid_user_login_different_passwords(self):
        response = self.login('patkennedy79@gmail.com', 'FlaskIsAweso')
        self.assertIn(b'Field must be equal to password.', response.data)

    def test_main_page(self):
        response = self.app.get('/', follow_redirects=True)
        self.assertEqual(response.status_code, 200)


if __name__ == "__main__":
    unittest.main()