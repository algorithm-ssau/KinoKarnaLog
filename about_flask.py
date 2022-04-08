from flask import Flask, render_template

app = Flask(__name__)

@app.route('/about')
def index():
    return render_template("index.html")


@app.route('/about/<string:namefilm>')
def about_film(namefilm):
    return "Hello, User! U wrote film: " + namefilm


app.run(debug=True)

