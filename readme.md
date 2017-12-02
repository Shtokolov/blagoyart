    # Developer guide


Venv create

```bash
sudo apt install virtualenv
virtualenv -p python3.6 venv
```

You can choose this virtual environment at PyCharm as interpreter for this project. DO IT!

Then open command prompt of project. If you did not activate virtual environment then DO IT!

```bash
source venv/bin/activate
```

Install all dependencies needed for this project:

```bash
sudo apt install pip
pip install -r requirements.txt
```

And run migrations:

```bash
python manage.py migrate
```

Templates to work in demo_front/templates.

base - is parent inheritance template

all specifies in template comments
