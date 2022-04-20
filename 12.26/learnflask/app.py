from flask import (Flask, request, send_from_directory,
                   render_template, redirect, url_for,flash)
from werkzeug.contrib.securecookie import SecureCookie
import pymysql
import pymysql.cursors
from flask.ext.login import login_user, login_required, logout_user,LoginManager

from config import app
from config import db
from config import login_manager
from models import BlogPost, User
from forms import LoginForm
from config import bcrypt

@login_manager.user_loader
def load_user(user_id):
    return User.query.filter(User.id == int(user_id)).first()

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/hello')
def hello_joshua():
    return 'Hello Joshua!'

@app.route('/hi/feng')
def hello_feng():
    return 'Hello Feng!'

@app.route('/forms/<name>',methods=['GET', 'POST'])
def hello_peng(name=None):
    # get req
    if request.method == 'GET':
        return '<form action="http://127.0.0.1:5000/forms/peng" method="post"><p>First name: <input type="text" name="fname" /></p> \
<p>Last name: <input type="text" name="lname" /></p> \
  <input type="submit" value="Submit" /> \
</form>'
    else:
        searchword = request.args.get('key', '')
        # get data from database
        # generate HTML
        if request.form:
            return request.form['fname'] + request.form['lname']

        return '<p style="margin:auto; color:red;">POST ' + name + searchword\
               + str(request.data) + '</p>'

@app.route('/hello/<name>')
def hello_two(name=None):
    return 'Hello ' + name

@app.route('/post/<string:post_id>')
def show_post(post_id):
    """
     /post/<int:post_id>  post_id  int
     /post/<string:post_id>  post_id
     flask define route string, int, float, path, uuid
    :param post_id:
    :return:
    """
    return 'Post  ' + post_id

@app.route('/blog/<int:blog_id>')
def show_blog_with_para(blog_id):
    keyword = request.args.get('keyword', '')
    enc = request.args.get('enc', '')
    rel = ""
    if keyword:
        rel = rel+"key:"+keyword
    if enc:
        rel = rel+"en:"+enc
    return rel + 'Blog  ' + str(blog_id)

@app.route('/files/<path:filename>')
def send_file(filename):
    return send_from_directory('download', filename)

@app.route('/media/<path:filename>')
def send_media(filename):
    return send_from_directory('download', filename)

@app.route('/html/hello/<name>')
def html_hello(name=None):
    return """
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Hello {user_name}</title>
</head>
<body>
	<h1>Hello World! {user_name}</h1>
</body>
</html>
""".format(user_name=name)

@app.route('/template/<name>')
def template_hello(name=None):
    return render_template("keng.html", user=name)

@app.route('/redirect')
def redirect_test():
    return redirect(url_for("hello_feng"))

@app.errorhandler(404)
def page_not_found(error):
    return error, 404

@app.route("/db/<name>")
def hello_db(name):
    connection = pymysql.connect(
        host='localhost',user='root',password='wanmen123',
        db='hr', charset='utf8', cursorclass=pymysql.cursors.DictCursor)

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM hr.employees limit 10;")
        result = cursor.fetchall()
        return render_template("userlist.html", employee=result)

    return "No Database", 404

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    form = LoginForm(request.form)
    if request.method == 'POST':
        if form.validate_on_submit():
            user = User.query.filter_by(name=request.form['username']).first()
            if user is not None and bcrypt.check_password_hash(
                user.password, request.form['password']
            ):
                login_user(user)
                flash('You were logged in. Go Crazy.')
                return redirect(url_for('list_blog'))

            else:
                error = 'Invalid username or password.'
    return render_template('login.html', form=form, error=error)

@app.route("/logout")
@login_required
def logout():
    logout_user()
    flash('You were logged out.')
    return redirect(url_for('login'))

@app.route("/posts")
@login_required
def list_blog():
    posts = db.session.query(BlogPost).all()
    return render_template("display.html", posts=posts)


OTHER_KEY = '\xfa\xdd\xb8z\xae\xe0}4\x8b\xea'
def client_session(req):
    data = request.cookies.get('joshua')
    if not data:
            return SecureCookie({"foo": 42, "baz": (1, 2, 3)}, secret_key=OTHER_KEY)
    return SecureCookie.unserialize(data, OTHER_KEY)

@app.route('/cookie')
def cookie_insertion():
    redirect_to_index = redirect('/')
    response = app.make_response(redirect_to_index)
    new_value = client_session(request).serialize()
    response.set_cookie('joshua', value=new_value)
    return response


if __name__ == '__main__':
    app.run()
