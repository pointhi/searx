from json import loads
from urllib import urlencode, quote
from datetime import datetime
from dateutil import parser

categories = ['weather']

base_url = 'http://api.openweathermap.org/data/2.5/'
search_string = base_url + 'forecast?{query}&type=accurate&mode=json&units=metric&cnt=7&{lang}'
paging = False
language_support = True


def request(query, params):
    if params['language'] == 'all':
        language = 'en'
    else:
        language = params['language'].split('_')[0]
        
    params['url'] = search_string.format(query=urlencode({'q': query}), lang=urlencode({'lang': language}))
    print params['url']
    return params


def response(resp):
    raw_search_result = loads(resp.text)
    
    #print raw_search_result
    
    if raw_search_result.get('cod', 404) == 404:
        return []
        
    search_results = raw_search_result.get('list', {})

    results = []

    tmp_result = {}
    tmp_result['title'] = '7-Tage Wettervorschau fuer ' + raw_search_result['city']['name'] + ', ' + raw_search_result['city']['country']
    tmp_result['url'] = 'http://openweathermap.org/city/' + str(raw_search_result['city']['id'])
    tmp_result['content'] = ''
    tmp_result['data'] = []
    tmp_result['template'] = 'weather.html'

    # http://bugs.openweathermap.org/projects/api/wiki/Weather_Data
    
    for result in search_results:
        tmp_data = {}
        tmp_data['datetime'] = parser.parse(result['dt_txt'])
        
        tmp_data['temperature'] = result['main']['temp']
        tmp_data['temperature_min'] = result['main'].get('temp_min', None)
        tmp_data['temperature_max'] = result['main'].get('temp_max', None)

        tmp_data['humidity'] = result['main']['humidity']
        tmp_data['pressure'] = result['main']['pressure']
        
        tmp_data['windspeed'] = result['wind']['speed']
        tmp_data['windangle'] = result['wind']['deg']
        
        tmp_data['clouds'] = result['clouds']['all']
        
        tmp_data['rain'] = result.get('rain', {}).get('3h', None) # 3h, mm
        tmp_data['snow'] = result.get('snow', {}).get('3h', None) # 3h, mm
        
        if tmp_data['rain']:
            tmp_data['rain'] /= 3
            
        if tmp_data['snow']:
            tmp_data['snow'] /= 3
        
        tmp_result['data'].append(tmp_data)
        
    #print tmp_result
    
    results.append(tmp_result)

    return results
