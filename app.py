from flask import Flask, render_template
import pafy


app = Flask(__name__)


@app.route('/')
def index():
	return render_template('index.html')

@app.route('/<videoId>')
def video_details(videoId):
	return render_template('details.html', videoId=videoId)

if __name__ == '__main__':
	app.run(debug=True, port='80')
