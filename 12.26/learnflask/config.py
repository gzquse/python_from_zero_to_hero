from flask.ext.sqlalchemy import SQLAlchemy
from flask import Flask
from flask.ext.login import LoginManager
from flask.ext.bcrypt import Bcrypt
from flask_wtf.csrf import CSRFProtect


app = Flask(__name__)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)

app.config['SECRET_KEY']='you-will-never-guess'
csrf = CSRFProtect(app)
app.config['SQLALCHEMY_DATABASE_URI'] = \
    "mysql+pymysql://root:wanmen123@localhost/dalsearch?charset=utf8"

login_manager.login_view = "login"
db = SQLAlchemy(app)
