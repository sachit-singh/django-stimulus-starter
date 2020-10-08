# Django-Stimulus starter

## Pre-requisites

1. Python >= 3.8
2. PostgreSQL
3. npm/yarn
4. docker && docker-compose (optional)

## Installation

```bash
git clone https://github.com/sbs/this@django-stimulus-starter.git

cp .env.example .env

docker-compose up

npm install && npm start
```

## OR

```bash
python -m venv ~/.virtualenvs/<env_name>

source ~/.virtualenvs/<env_name>/bin/activate

pip install -r requirements.txt

python manage.py runserver

npm install && npm start
```

Visit [localhost:8000](http://localhost:8000)

## Build

`npm run build`
