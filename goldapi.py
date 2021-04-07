import requests
import json
def priceUpdate():
    apiurl = 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD'
    r = requests.get(apiurl)
    data = json.loads(r.text)[0]['spreadProfilePrices']
    return data

def update_price(socketio):
    price_data = priceUpdate()
    # print(price_data)
    socketio.emit('new_data', data=price_data)